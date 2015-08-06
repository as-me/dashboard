 this.d3Chart = {};


 (function () {
     function Scatterplot(config) {
         this.internal = {};
         this.internal.config = config;
         if (config.container) {
             this.internal.container = "#" + config.container;
         } else {
             this.internal.container = "body";
         }

         this.internal.xScale;
         this.internal.yScale;
         this.internal.xAxis;
         this.internal.yAxis;
         this.internal.xAxisLabel;
         this.internal.yAxisLabel;
         this.internal.xColumnType;
         this.internal.yColumnType;

         this.internal.svg;
         this.internal.point;
         this.internal.brush;
         this.internal.kdRect;
         this.internal.quadTreeFactory;
         this.internal.quadTree;

         initializeChart.call(this);
         if (this.internal.config.data)
             this.renderChart(this.internal.config.data);
     }


     // setup x
     // data -> value
     function xValue(d, i) {
         var xCol = this.internal.config.columns.x;
         if (typeof (d[xCol]) === "string") {
             if (isNaN(Number(d[xCol]))) {
                 this.internal.xColumnType = "string";
                 if (d.index === undefined) {
                     d.index = i;
                     return i;
                 } else {
                     if (typeof (d.index) === "string")
                         d.index = Number(d.index);
                     return d.index;
                 }
             } else {
                 this.internal.xColumnType = "number";
                 d[xCol] = Number(d[xCol]);
             }

         }
         return d[xCol];
     }

     // data -> display
     function xMap(d, i) {
         return this.internal.xScale(xValue.call(this, d, i));
     }

     // setup y
     // data -> value
     function yValue(d) {
         var yCol = this.internal.config.columns.y;
         if (typeof (d[yCol]) === "string") {
             if (isNaN(Number(d[yCol]))) {
                 this.internal.yColumnType = "string";
                 if (d.index === undefined) {
                     d.index = i;
                     return i;
                 } else {
                     if (typeof (d.index) === "string")
                         d.index = Number(d.index);
                     return d.index;
                 }
             } else {
                 this.internal.yColumnType = "number";
                 d[yCol] = Number(d[yCol]);
             }
         }
         return d[yCol];
     }


     // data -> display
     function yMap(d, i) {
         return this.internal.yScale(yValue.call(this, d, i));
     }

     // setup fill color
     function cValue(d) {
         return d[this.internal.config.columns.color];
     }

     // Find the nodes within the specified rectangle.
     function search(quadtree, x0, y0, x3, y3) {
         var selectedDataKeys = [];
         var key = this.internal.config.columns.key;
         quadtree.visit(function (node, x1, y1, x2, y2) {
             var p = node.point;
             if (p) {
                 p.scanned = true;
                 var colXVal = this.internal.xScale(xValue.call(this, p), p.index);
                 var colYVal = this.internal.yScale(yValue.call(this, p), p.index);
                 p.selected = (colXVal >= x0) && (colXVal < x3) && (colYVal >= y0) && (colYVal < y3);
                 if (p.selected)
                     selectedDataKeys.push(p[key]);
             }
             return x1 >= x3 || y1 >= y3 || x2 < x0 || y2 < y0;
         }.bind(this));
         return selectedDataKeys;
     }

     function brushListener() {
         var onSelect = this.internal.config.interactions.onSelect;
         var extent = this.internal.brush.extent();
         this.internal.point.each(function (d) {
             d.scanned = d.selected = false;
         });
         var keys = search.call(this, this.internal.quadTree, extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
         this.select();
         if (keys) {
             if (onSelect && onSelect.callback) {
                 onSelect.callback.call(this, keys);
             }
         }

     }

     function nearest(x, y, best, node) {
         var x1 = node.x1,
             y1 = node.y1,
             x2 = node.x2,
             y2 = node.y2;
         node.visited = true;
         // exclude node if point is farther away than best distance in either axis
         if (x < x1 - best.d || x > x2 + best.d || y < y1 - best.d || y > y2 + best.d) {
             return best;
         }
         // test point if there is one, potentially updating best
         var p = node.point;
         if (p) {
             p.scanned = true;
             var dx = this.internal.xScale(xValue.call(this, p), p.index) - x,
                 dy = this.internal.yScale(yValue.call(this, p), p.index) - y,
                 d = Math.sqrt(dx * dx + dy * dy);
             if (d < best.d) {
                 best.d = d;
                 best.p = p;
             }
         }
         // check if kid is on the right or left, and top or bottom
         // and then recurse on most likely kids first, so we quickly find a
         // nearby point and then exclude many larger rectangles later
         var kids = node.nodes;
         var rl = (2 * x > x1 + x2),
             bt = (2 * y > y1 + y2);
         if (kids[bt * 2 + rl]) best = nearest.call(this, x, y, best, kids[bt * 2 + rl]);
         if (kids[bt * 2 + (1 - rl)]) best = nearest.call(this, x, y, best, kids[bt * 2 + (1 - rl)]);
         if (kids[(1 - bt) * 2 + rl]) best = nearest.call(this, x, y, best, kids[(1 - bt) * 2 + rl]);
         if (kids[(1 - bt) * 2 + (1 - rl)]) best = nearest.call(this, x, y, best, kids[(1 - bt) * 2 + (1 - rl)]);

         return best;
     }


     function mousemoveListener() {
         var onProbe = this.internal.config.interactions.onProbe;
         var key = this.internal.config.columns.key;
         pt = d3.selectAll(this.internal.container + 'pt');
         var x = +pt.attr('cx'),
             y = +pt.attr('cy');

         this.internal.point.each(function (d) {
             d.scanned = d.selected = false;
         });
         this.internal.kdRect.each(function (d) {
             d.visited = false;
         });

         var best = nearest.call(this, x, y, {
             d: 8,
             p: null
         }, this.internal.quadTree);
         if (best.p) {
             best.p.selected = true;
         }
         // not sure is this the right way, will check
         this.probe();
         if (onProbe && onProbe.callback) {
             if (best.p) {
                 onProbe.callback.call(this, best.p[key]);
             } else {
                 onProbe.callback.call(this, null);
             }
         }
     }



     function updateXaxis() {
         var data = this.internal.config.data;
         var xCol = this.internal.config.columns.x;
         this.internal.xScale.domain([d3.min(data, xValue.bind(this)), d3.max(data, xValue.bind(this))]);
         this.internal.quadTreeFactory.x(xMap.bind(this));

         this.internal.quadTree = this.internal.quadTreeFactory(data);
         this.internal.kdRect.data(createNodes(this.internal.quadTree));

         var container = d3.select(this.internal.container).transition();

         container.selectAll(".point")
             .duration(750)
             .attr("cx", xMap.bind(this));

         container.selectAll(".node")
             .duration(750)
             .attr("x", function (d) {
                 return d.x1;
             })
             .attr("y", function (d) {
                 return d.y1;
             })
             .attr("width", function (d) {
                 return d.x2 - d.x1;
             })
             .attr("height", function (d) {
                 return d.y2 - d.y1;
             });


         container.select(".x.axis") // change the x axis
             .duration(750)
             .call(this.internal.xAxis);

         this.internal.xAxisLabel.text(xCol);
     }

     function updateYaxis() {

         var data = this.internal.config.data;
         var yCol = this.internal.config.columns.y;

         this.internal.yScale.domain([d3.min(data, yValue.bind(this)), d3.max(data, yValue.bind(this))]);

         this.internal.quadTreeFactory.y(yMap.bind(this));
         this.internal.quadTree = this.internal.quadTreeFactory(data);
         this.internal.kdRect.data(createNodes(this.internal.quadTree));

         var container = d3.select(this.internal.container).transition();

         container.selectAll(".point")
             .duration(750)
             .attr("cy", yMap.bind(this));

         container.selectAll(".node")
             .duration(750)
             .attr("x", function (d) {
                 return d.x1;
             })
             .attr("y", function (d) {
                 return d.y1;
             })
             .attr("width", function (d) {
                 return d.x2 - d.x1;
             })
             .attr("height", function (d) {
                 return d.y2 - d.y1;
             });


         container.select(".y.axis") // change the y axis
             .duration(750)
             .call(this.internal.yAxis);

         this.internal.yAxisLabel.text(yCol);
     }

     // PDS Collect a list of nodes to draw rectangles, adding extent and depth data
     function createNodes(quadtree) {
         var nodes = [];
         quadtree.depth = 0; // root
         quadtree.visit(function (node, x1, y1, x2, y2) {
             node.x1 = x1;
             node.y1 = y1;
             node.x2 = x2;
             node.y2 = y2;
             nodes.push(node);
             for (var i = 0; i < 4; i++) {
                 if (node.nodes[i]) node.nodes[i].depth = node.depth + 1;
             }
         });
         return nodes;
     }


     /*
      * value accessor - returns the value to encode for a given data object.
      * scale - maps value to a visual display encoding, such as a pixel position.
      * map function - maps from data value to display value
      * axis - sets up axis
      */
     function initializeChart() {
         var chart = this;
         var size = this.internal.config.size;
         var margin = this.internal.config.margin;

         this.internal.xScale = d3.scale.linear()
             .range([0, size.width]); // value -> display

         this.internal.xAxis = d3.svg.axis()
             .scale(this.internal.xScale)
             .orient("bottom");

         this.internal.yScale = d3.scale.linear()
             .range([size.height, 0]); // value -> display

         this.internal.yAxis = d3.svg.axis()
             .scale(this.internal.yScale)
             .orient("left");

         // add the graph canvas to the mentioned of the webpage
         this.internal.svg = d3.select(this.internal.container).append("svg")
             .attr("width", size.width + margin.left + margin.right)
             .attr("height", size.height + margin.top + margin.bottom)
             .append("g")
             .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
             .on("mousemove", function (d) {
                 var xy = d3.mouse(d3.select(this)[0][0]);
                 chart.internal.svg.selectAll(chart.internal.container + "pt")
                     .attr("cx", xy[0])
                     .attr("cy", xy[1]);
                 mousemoveListener.call(chart);
             });

         /*kdColor = d3.scale.linear()
             .domain([0, 8]) // max depth of quadtree
             .range(["#efe", "#060"]);*/

         this.internal.brush = d3.svg.brush()
             .x(d3.scale.identity().domain([0 - 5, size.width + 5]))
             .y(d3.scale.identity().domain([0 - 5, size.height + 5]))
             .on("brush", brushListener.bind(chart));
     }

     var p = Scatterplot.prototype;



     p.setXAttribute = function (xColumn) {
         this.internal.config.columns.x = xColumn;
         updateXaxis.call(this);

     }

     p.setYAttribute = function (yColumn) {
         this.internal.config.columns.y = yColumn;
         updateYaxis.call(this);

     }

     p.renderChart = function (records) {

         var size = this.internal.config.size;
         var margin = this.internal.config.margin;
         var columns = this.internal.config.columns;

         if (records)
             this.internal.config.data = records;
         if (!records) {
             console.log('Data not found');
             return;
         }

         var data = this.internal.config.data;

         this.internal.xScale.domain([d3.min(data, xValue.bind(this)), d3.max(data, xValue.bind(this))]);
         this.internal.yScale.domain([d3.min(data, yValue.bind(this)), d3.max(data, yValue.bind(this))]);


         this.internal.quadTreeFactory = d3.geom.quadtree()
             .extent([[0, 0], [size.width, size.height]])
             .x(xMap.bind(this))
             .y(yMap.bind(this));

         this.internal.quadTree = this.internal.quadTreeFactory(data);


         this.internal.xAxis.ticks(data.length);

         if (this.internal.xColumnType === "string") {
             this.internal.xAxis.tickFormat(function (i) {
                 var labels = data.map(function (d, i) {
                     return d[this.internal.config.columns.x];
                 }.bind(this));
                 return labels[i];
             }.bind(this));
         }
         // x-axis
         this.internal.svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + size.height + ")")
             .call(this.internal.xAxis)
             .selectAll("text")
             .style("text-anchor", "end")
             .attr("dx", "-.8em")
             .attr("dy", ".15em")
             .attr("transform", function (d) {
                 return "rotate(-45)"
             });

         this.internal.xAxisLabel = this.internal.svg.append("text")
             .attr("y", size.height + margin.top + margin.bottom / 2)
             .attr("x", size.width / 2)
             .attr("dy", "1em")
             .style("text-anchor", "middle")
             .text(columns.x);

         if (this.internal.yColumnType === "string") {
             this.internal.yAxis.tickFormat(function (i) {
                 var labels = data.map(function (d, i) {
                     return d[this.internal.columns.y];
                 }.bind(this));
                 return labels[i];
             }.bind(this));
         }

         // y-axis
         this.internal.svg.append("g")
             .attr("class", "y axis")
             .call(this.internal.yAxis);

         this.internal.yAxisLabel = this.internal.svg.append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 0 - margin.left)
             .attr("x", 0 - size.height / 2)
             .attr("dy", "1em")
             .style("text-anchor", "middle")
             .text(columns.y);


         this.internal.kdRect = this.internal.svg.selectAll(".node")
             .data(createNodes(this.internal.quadTree))
             .enter().append("rect")
             .attr("class", "node")
             .attr("x", function (d) {
                 return d.x1;
             })
             .attr("y", function (d) {
                 return d.y1;
             })
             .attr("width", function (d) {
                 return d.x2 - d.x1;
             })
             .attr("height", function (d) {
                 return d.y2 - d.y1;
             });

         // draw dots
         this.internal.point = this.internal.svg.selectAll(".point")
             .data(data)
             .enter().append("circle")
             .attr("class", "point")
             .attr("r", 6)
             .attr("cx", xMap.bind(this))
             .attr("cy", yMap.bind(this));

         this.internal.svg.append("circle")
             .attr("id", this.internal.config.container + "pt")
             .attr("r", 6)
             .style("fill", "none");

         this.internal.svg.append("g")
             .attr("class", "brush")
             .call(this.internal.brush);
     }


     // key required for API call
     // Internal calls doesnt require
     p.probe = function (key) {
         var data = this.internal.config.data;
         var keyCol = this.internal.config.columns.key;
         if (key) {
             this.internal.point.each(function (d) {
                 d.scanned = d.selected = false;
             });
             data.map(function (d) {
                 if (d[keyCol] == key) d.selected = true;
             })
         } else if (key === null) {
             this.internal.point.each(function (d) {
                 d.scanned = d.selected = false;
             });
         }
         this.internal.point.classed("scanned", function (d) {
             return d.scanned;
         });
         this.internal.point.classed("selected", function (d) {
             return d.selected;
         });
     }

     // keys required for API call
     // Internal calls doesnt require
     p.select = function (keys) {
         var data = this.internal.config.data;

         if (keys) {
             this.internal.point.each(function (d) {
                 d.scanned = d.selected = false;
             });
             data.filter(function (d) {
                 for (var i = 0; i < keys.length; i++) {
                     if (d[this.internal.config.columns.key] === keys[i])
                         d.selected = true;
                 }
             }.bind(this))

         }
         if (keys && keys.length === 0) {
             this.internal.point.each(function (d) {
                 d.scanned = d.selected = false;
             });
         }

         this.internal.point.classed("scanned", function (d) {
             return d.scanned;
         });
         this.internal.point.classed("selected", function (d) {
             return d.selected;
         });
     }

     d3Chart.Scatterplot = Scatterplot;



 }());
