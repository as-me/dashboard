
import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = require('./Nav.js');
var Archive = require('./services/Archive.js');


class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {docked: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);

        this.triggerInput = this.triggerInput.bind(this);
        this.saveAsmeLocal = this.saveAsmeLocal.bind(this);
        this.openAsmeLocal = this.openAsmeLocal.bind(this);
    }

    componentDidMount() {
        this.mql.addListener(this.mediaQueryChanged);
        this.setState({ docked: this.mql.matches});
    }

    componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({docked: this.mql.matches});
    }

    saveAsmeLocal(){
        window.saveAs( Archive.createFileContent(), "example.zip");
    }

    triggerInput(e) {
        React.findDOMNode(this.refs.fileButton).click();
    }

    openAsmeLocal(evt){
       Archive.openFile(evt);
    }


    render() {

        var NavigationLayout ;
        if(!this.state.docked){
            NavigationLayout = <div/>;
        }
        else{
            //toggleNavKey={0}
            NavigationLayout = <Navbar brand='As ~ Me' inverse={ true } fixedTop={true}  >
                        <Nav right={ true } eventKey={0}>
                            <NavItem href={ '#charts' }>
                                <span>< i className = "fa fa-fw fa-bar-chart-o" > < /i>Charts</span>
                            </NavItem>
                            <NavItem href={ '#dataSources' }>
                                <span>< i className = "fa fa-fw fa-database" > < /i >DataSources</span>
                            </NavItem>


                        </Nav>

                    </Navbar>;
        }
        return NavigationLayout;
    }
}

module.exports = Navigation;
