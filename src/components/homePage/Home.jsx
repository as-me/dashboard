

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var Navbar = ReactBootstrap.Navbar;

export default class Home extends React.Component {
constructor(props) {
        super(props)
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {isDesktop: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }

        componentDidMount() {


        this.mql.addListener(this.mediaQueryChanged);
        this.setState({ isDesktop: this.mql.matches});
      }

      componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
      }

      mediaQueryChanged() {
      console.log('Home ');
        this.setState({isDesktop: this.mql.matches});
      }

       render() {
       var intro = <div className="intro"><div>Few Seconds of <b><span className="big">&nbsp;Connection , Integration </span></b></div><div>&</div> <div><span className="big"><b>Visualization</b></span> </div><div>is worth a days of </div><div><span className="big"><b>Cure</b></span>.......</div></div>
       var content = this.state.isDesktop ?<div className="desktop">{intro }</div>:<div >
                 < Navbar brand = 'As ~ Me' inverse={ true }
            />
                <div className="content">
                    <ul  className="table-view">
                        <li className="table-view-cell media"><a href="#charts"><span>< i className = "fa fa-fw fa-bar-chart-o" > < /i>Charts</span></a></li>
                        <li className="table-view-cell media"><a href="#dataSources"><span>< i className = "fa fa-fw fa-database" > < /i >DataSources</span></a></li>
                    </ul>
                    {intro}
                </div>
            </div>;

  return content;
  }


}
