 if (this.d3Helper === undefined) {
     this.d3Helper = {};
 }


 (function () {
     function Scatterplot(config) {
         container = config.container;
         if (config.container) {
             container = config.container;
         } else {
             container = "body";
         }
         interactions = config.interactions;
         _columns = config.columns;
         margin = config.margin;
         _data = config.data;
         size = config.size;
         this._initializeChart();
         if (_data)
             this.renderChart(_data);

         /*this._quadTree;
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
         this._point;*/
     }

     var size, margin;
     var container, interactions;

     var _quadTree;
     var _brush;
     var _svg;
     var _kdRect;
     var _xValue;
     var _xScale;
     var _xMap;
     var _xAxis;
     var _yValue;
     var _yScale;
     var _yMap;
     var _yAxis;
     var _cValue;
     var _point;
     var _data, _columns;

     var p = Scatterplot.prototype;

     /*
      * value accessor - returns the value to encode for a given data object.
      * scale - maps value to a visual display encoding, such as a pixel position.
      * map function - maps from data value to display value
      * axis - sets up axis
      */
     p._initializeChart = function () {
         //var chart = this;
         // setup x
         _xValue = function (d) {
             return d[_columns.x];
         }; // data -> value
         _xScale = d3.scale.linear().range([0, size.width]); // value -> display
         _xMap = function (d) {
             return _xScale(_xValue(d));
         }; // data -> display
         _xAxis = d3.svg.axis().scale(_xScale).orient("bottom");

         // setup y
         _yValue = function (d) {
             return d[_columns.y];
         }; // data -> value
         _yScale = d3.scale.linear().range([size.height, 0]); // value -> display
         _yMap = function (d) {
             return _yScale(_yValue(d));
         }; // data -> display
         _yAxis = d3.svg.axis().scale(_yScale).orient("left");

         // setup fill color
         _cValue = function (d) {
             return d[_columns.color];
         };

         // add the graph canvas to the mentioned of the webpage
         _svg = d3.select(container).append("svg")
             .attr("width", size.width + margin.left + margin.right)
             .attr("height", size.height + margin.top + margin.bottom)
             .append("g")
             .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
             //.on("mousemove", mouseMoveUi);

         /*kdColor = d3.scale.linear()
             .domain([0, 8]) // max depth of quadtree
             .range(["#efe", "#060"]);*/


     }

     // render Chart



     p.renderChart = function (data) {
         _data = data;
         // don't want dots overlapping axis, so add in buffer to data domain
         _xScale.domain([d3.min(_data, _xValue.bind(this)) - 1, d3.max(_data, _xValue.bind(this)) + 1]);
         _yScale.domain([d3.min(_data, _yValue.bind(this)) - 1, d3.max(_data, _yValue.bind(this)) + 1]);

         _quadTree = d3.geom.quadtree()
             .extent([[0, 0], [size.width, size.height]])
             .x(_xMap.bind(this))
             .y(_yMap.bind(this))
             (_data);

         // x-axis
         _svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + size.height + ")")
             .call(_xAxis)
             .append("text")
             .attr("x", size.width)
             .attr("y", -6)
             .style("text-anchor", "end");

         // y-axis
         _svg.append("g")
             .attr("class", "y axis")
             .call(_yAxis)
             .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 6)
             .attr("dy", ".71em")
             .style("text-anchor", "end");


         _kdRect = _svg.selectAll(".node")
             .data(nodes(_quadTree))
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
         _point = _svg.selectAll(".point")
             .data(data)
             .enter().append("circle")
             .attr("class", "point")
             .attr("r", 6)
             .attr("cx", _xMap.bind(this))
             .attr("cy", _yMap.bind(this));

         /*_svg.append("circle")
             .attr("id", "pt")
             .attr("r", 2)
             .attr("cx", size.width / 2)
             .attr("cy", size.height / 2)
             .style("fill", "none");*/
         _brush = d3.svg.brush()
             .x(d3.scale.identity().domain([0, size.width]))
             .y(d3.scale.identity().domain([0, size.height]))
             .on("brush", _brushed.bind(this));

         _svg.append("g")
             .attr("class", "brush")
             .call(_brush);
     }




     // PDS Collect a list of nodes to draw rectangles, adding extent and depth data
     function nodes(quadtree) {
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

     /* function nearest(x, y, best, node) {
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
              var dx = this._xScale(p[this._columns.x]) - x,
                  dy = this._yScale(p[this._columns.y]) - y,
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
          if (kids[bt * 2 + rl]) best = nearest(x, y, best, kids[bt * 2 + rl]);
          if (kids[bt * 2 + (1 - rl)]) best = nearest(x, y, best, kids[bt * 2 + (1 - rl)]);
          if (kids[(1 - bt) * 2 + rl]) best = nearest(x, y, best, kids[(1 - bt) * 2 + rl]);
          if (kids[(1 - bt) * 2 + (1 - rl)]) best = nearest(x, y, best, kids[(1 - bt) * 2 + (1 - rl)]);

          return best;
      }*/


     // Find the nodes within the specified rectangle.
     function search(quadtree, x0, y0, x3, y3) {
         quadtree.visit.call(this, function (node, x1, y1, x2, y2) {
             var p = node.point;
             if (p) {
                 p.scanned = true;
                 var colXVal = _xScale(p[_columns.x]);
                 var colYVal = _yScale(p[_columns.y]);
                 p.selected = (colXVal >= x0) && (colXVal < x3) && (colYVal >= y0) && (colYVal < y3);
             }
             return x1 >= x3 || y1 >= y3 || x2 < x0 || y2 < y0;
         }.bind(this));
     }

     function _brushed() {
         var extent = _brush.extent();
         _point.each(function (d) {
             d.scanned = d.selected = false;
         });
         search.call(this, _quadTree, extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
         this.select();
     }


     /*function mousemove() {
         pt = d3.selectAll('#pt');
         var x = +pt.attr('cx'),
             y = +pt.attr('cy');

         this._point.each(function (d) {
             d.scanned = d.selected = false;
         });
         this._kdRect.each(function (d) {
             d.visited = false;
         });

         var best = nearest.call(this, x, y, {
             d: 8,
             p: null
         }, this._quadTree);
         if (best.p) {
             best.p.selected = true;
             //this.probe(best.p);
         }
         // not sure is this the right way, will check
         this.probe();
         this._kdRect.style('fill', function (d) {
             return d.visited ? kdColor(d.depth) : 'none';
         });



     }*/

     // key required for API call
     // Internal calls doesnt require
     /*p.probe = function (key) {
         if (key) {
             this._data.map(function (d) {
                 if (d.key == key) d.selected = true;
             })
         }
         p.selected = true;
         this._point.classed("scanned", function (d) {
             return d.scanned;
         });
         this._point.classed("selected", function (d) {
             return d.selected;
         });
     }*/

     // keys required for API call
     // Internal calls doesnt require
     p.select = function (keys) {
         if (keys) {
             _data.filter(function (d) {
                 for (var i = 0; i < keys.length; i++) {
                     if (d.key === keys[i])
                         d.selected = true;
                 }
             })
         }
         _point.classed("scanned", function (d) {
             return d.scanned;
         });
         _point.classed("selected", function (d) {
             return d.selected;
         });
     }

     d3Helper.Scatterplot = Scatterplot;



 }());
