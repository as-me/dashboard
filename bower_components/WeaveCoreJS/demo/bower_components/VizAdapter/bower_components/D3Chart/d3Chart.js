 this.d3Chart = {};


 (function () {
     function Scatterplot(config) {
         this.config = config;
         if (config.container) {
             this._container = "#" + config.container;
         } else {
             this._container = "body";
         }
         this.interactions = config.interactions;
         this._columns = config.columns;
         margin = config.margin;
         this._data = config.data;
         size = config.size;


         this._quadTree;
         this._brush;
         this._svg;
         this._kdRect;
         this._xValue;
         this._xScale;
         this._xMap;
         this._xAxis;
         this._yValue;
         this._yScale;
         this._yMap;
         this._yAxis;
         this._cValue;
         this._point;
         this._xColumnType;
         this._yColumnType;

         this._initializeChart();
         if (this._data)
             this.renderChart(this._data);
     }

     var size, margin;


     var p = Scatterplot.prototype;

     /*
      * value accessor - returns the value to encode for a given data object.
      * scale - maps value to a visual display encoding, such as a pixel position.
      * map function - maps from data value to display value
      * axis - sets up axis
      */
     p._initializeChart = function () {
         var chart = this;
         // setup x
         this._xValue = function (d, i) {
             if (typeof (d[this._columns.x]) === "string") {
                 if (isNaN(Number(d[this._columns.x]))) {
                     this._xColumnType = "string";
                     if (d.index === undefined) {
                         d.index = i;
                         return i;
                     } else {
                         if (typeof (d.index) === "string")
                             d.index = Number(d.index);
                         return d.index;
                     }
                 } else {
                     this._xColumnType = "number";
                     d[this._columns.x] = Number(d[this._columns.x]);
                 }

             }
             return d[this._columns.x];
         }; // data -> value
         this._xScale = d3.scale.linear()
             .range([0, size.width]); // value -> display

         this._xMap = function (d, i) {
             return this._xScale(this._xValue(d, i));
         }; // data -> display

         this._xAxis = d3.svg.axis()
             .scale(this._xScale)
             .orient("bottom");



         // setup y
         this._yValue = function (d) {
             if (typeof (d[this._columns.y]) === "string") {
                 if (isNaN(Number(d[this._columns.y]))) {
                     this._yColumnType = "string";
                     if (d.index === undefined) {
                         d.index = i;
                         return i;
                     } else {
                         if (typeof (d.index) === "string")
                             d.index = Number(d.index);
                         return d.index;
                     }
                 } else {
                     this._yColumnType = "number";
                     d[this._columns.y] = Number(d[this._columns.y]);
                 }
             }
             return d[this._columns.y];
         }; // data -> value
         this._yScale = d3.scale.linear()
             .range([size.height, 0]); // value -> display
         this._yMap = function (d, i) {
             return this._yScale(this._yValue(d, i));
         }; // data -> display
         this._yAxis = d3.svg.axis()
             .scale(this._yScale)
             .orient("left");



         // setup fill color
         this._cValue = function (d) {
             return d[this._columns.color];
         };

         // add the graph canvas to the mentioned of the webpage
         this._svg = d3.select(this._container).append("svg")
             .attr("width", size.width + margin.left + margin.right)
             .attr("height", size.height + margin.top + margin.bottom)
             .append("g")
             .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
             .on("mousemove", function (d) {
                 var xy = d3.mouse(d3.select(this)[0][0]);
                 chart._svg.selectAll(chart._container + "pt")
                     .attr("cx", xy[0])
                     .attr("cy", xy[1]);
                 chart._mousemove.call(chart);
             });

         /*kdColor = d3.scale.linear()
             .domain([0, 8]) // max depth of quadtree
             .range(["#efe", "#060"]);*/

         this._brush = d3.svg.brush()
             .x(d3.scale.identity().domain([0 - 5, size.width + 5]))
             .y(d3.scale.identity().domain([0 - 5, size.height + 5]))
             .on("brush", this._brushed.bind(this));
     }

     // render Chart

     function domainFn() {

     }

     // [d3.min(this._data, this._xValue.bind(this)) - 1, d3.max(this._data, this._xValue.bind(this)) + 1]
     p.renderChart = function (data) {
         this._data = data;
         this._xScale.domain([d3.min(this._data, this._xValue.bind(this)), d3.max(this._data, this._xValue.bind(this))]);
         this._yScale.domain([d3.min(this._data, this._yValue.bind(this)), d3.max(this._data, this._yValue.bind(this))]);

         this._quadTree = d3.geom.quadtree()
             .extent([[0, 0], [size.width, size.height]])
             .x(this._xMap.bind(this))
             .y(this._yMap.bind(this))
             (this._data);

         this._xAxis.ticks(data.length);

         if (this._xColumnType === "string") {
             this._xAxis.tickFormat(function (i) {
                 var labels = data.map(function (d, i) {
                     return d[this._columns.x];
                 }.bind(this));
                 return labels[i];
             }.bind(this));
         }
         // x-axis
         this._svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + size.height + ")")
             .call(this._xAxis)
             .selectAll("text")
             .style("text-anchor", "end")
             .attr("dx", "-.8em")
             .attr("dy", ".15em")
             .attr("transform", function (d) {
                 return "rotate(-45)"
             });

         if (this._yColumnType === "string") {
             this._yAxis.tickFormat(function (i) {
                 var labels = data.map(function (d, i) {
                     return d[this._columns.y];
                 }.bind(this));
                 return labels[i];
             }.bind(this));
         }

         // y-axis
         this._svg.append("g")
             .attr("class", "y axis")
             .call(this._yAxis)
             .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 0 - margin.left)
             .attr("x", 0 - size.height / 2)
             .attr("dy", "1em")
             .style("text-anchor", "middle")
             .text(this._columns.y);


         this._kdRect = this._svg.selectAll(".node")
             .data(this.nodes(this._quadTree))
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
         this._point = this._svg.selectAll(".point")
             .data(data)
             .enter().append("circle")
             .attr("class", "point")
             .attr("r", 6)
             .attr("cx", this._xMap.bind(this))
             .attr("cy", this._yMap.bind(this));

         this._svg.append("circle")
             .attr("id", this.config.container + "pt")
             .attr("r", 6)
             .style("fill", "none");

         this._svg.append("g")
             .attr("class", "brush")
             .call(this._brush);
     }




     // PDS Collect a list of nodes to draw rectangles, adding extent and depth data
     p.nodes = function (quadtree) {
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




     // Find the nodes within the specified rectangle.
     p.search = function (quadtree, x0, y0, x3, y3) {
         var selectedDataKeys = [];
         quadtree.visit.call(this, function (node, x1, y1, x2, y2) {
             var p = node.point;
             if (p) {
                 p.scanned = true;
                 var colXVal = this._xScale(this._xValue(p), p.index);
                 var colYVal = this._yScale(this._yValue(p), p.index);
                 p.selected = (colXVal >= x0) && (colXVal < x3) && (colYVal >= y0) && (colYVal < y3);
                 if (p.selected)
                     selectedDataKeys.push(p[this._columns.key]);
             }
             return x1 >= x3 || y1 >= y3 || x2 < x0 || y2 < y0;
         }.bind(this));
         return selectedDataKeys;
     }

     p._brushed = function () {
         var extent = this._brush.extent();
         this._point.each(function (d) {
             d.scanned = d.selected = false;
         });
         var keys = this.search.call(this, this._quadTree, extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
         this.select();
         if (keys) {
             if (this.interactions.onSelect.callback) {
                 this.interactions.onSelect.callback.call(this, keys);
             }
         }

     }
     p.nearest = function (x, y, best, node) {
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
             var dx = this._xScale(this._xValue(p), p.index) - x,
                 dy = this._yScale(this._yValue(p), p.index) - y,
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
         if (kids[bt * 2 + rl]) best = this.nearest.call(this, x, y, best, kids[bt * 2 + rl]);
         if (kids[bt * 2 + (1 - rl)]) best = this.nearest.call(this, x, y, best, kids[bt * 2 + (1 - rl)]);
         if (kids[(1 - bt) * 2 + rl]) best = this.nearest.call(this, x, y, best, kids[(1 - bt) * 2 + rl]);
         if (kids[(1 - bt) * 2 + (1 - rl)]) best = this.nearest.call(this, x, y, best, kids[(1 - bt) * 2 + (1 - rl)]);

         return best;
     }


     p._mousemove = function () {
         pt = d3.selectAll(this._container + 'pt');
         var x = +pt.attr('cx'),
             y = +pt.attr('cy');

         this._point.each(function (d) {
             d.scanned = d.selected = false;
         });
         this._kdRect.each(function (d) {
             d.visited = false;
         });

         var best = this.nearest.call(this, x, y, {
             d: 8,
             p: null
         }, this._quadTree);
         if (best.p) {
             best.p.selected = true;
             //this.probe(best.p);
         }
         // not sure is this the right way, will check
         this.probe();
         if (this.interactions.onProbe.callback) {
             if (best.p) {
                 this.interactions.onProbe.callback.call(this, best.p[this._columns.key]);
             } else {
                 this.interactions.onProbe.callback.call(this, null);
             }
         }
         /*this._kdRect.style('fill', function (d) {
    return d.visited ? kdColor(d.depth) : 'none';
});*/



     }

     // key required for API call
     // Internal calls doesnt require
     p.probe = function (key) {
         if (key) {
             this._point.each(function (d) {
                 d.scanned = d.selected = false;
             });
             this._data.map(function (d) {
                 if (d[this._columns.key] == key) d.selected = true;
             }.bind(this))
         } else if (key === null) {
             this._point.each(function (d) {
                 d.scanned = d.selected = false;
             });
         }
         this._point.classed("scanned", function (d) {
             return d.scanned;
         });
         this._point.classed("selected", function (d) {
             return d.selected;
         });
     }

     // keys required for API call
     // Internal calls doesnt require
     p.select = function (keys) {
         if (keys) {
             this._point.each(function (d) {
                 d.scanned = d.selected = false;
             });
             this._data.filter(function (d) {
                 for (var i = 0; i < keys.length; i++) {
                     if (d[this._columns.key] === keys[i])
                         d.selected = true;
                 }
             }.bind(this))

         }
         if (keys && keys.length === 0) {
             this._point.each(function (d) {
                 d.scanned = d.selected = false;
             });
         }

         this._point.classed("scanned", function (d) {
             return d.scanned;
         });
         this._point.classed("selected", function (d) {
             return d.selected;
         });
     }

     d3Chart.Scatterplot = Scatterplot;



 }());
