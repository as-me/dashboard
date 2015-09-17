import * as React from 'react';

var Navbar = ReactBootstrap.Navbar;

class PageHeader extends React.Component {

    constructor(props) {
        super(props)

    }




    render() {
        return ( < header >

            < Navbar brand = { < span > < a href = "#home" > < i className = "fa fa-chevron-left" > < /i>

                {
                    this.props.text
                } < /a >< /span >
            }
            />

            < /header >


        );
    }
}

module.exports = PageHeader;
