

import React from 'react';

export default class Charts extends React.Component {
  render() {
  return   <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Save</button>
              <button type="button" className="btn btn-default">Open</button>

              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tools
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#">D3 ScatterPlot</a></li>
                    <li><a href="#">C3 ScatterPlot</a></li>
                </ul>
              </div>
            </div> ;
  }
}
