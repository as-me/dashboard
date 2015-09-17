

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var Navbar = ReactBootstrap.Navbar;

export default class DataSource extends React.Component {

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
        this.setState({isDesktop: this.mql.matches});
      }

  render() {
  var title = this.state.isDesktop ?"Data Source":< span > < a href = "#home" > < i className = "fa fa-chevron-left" > < /i>

                Data Source < /a >< /span >;

                    return <div className={this.state.isDesktop ?"desktop":""}>
  < Navbar brand = { title
            }
            /></div>;
  }
}
