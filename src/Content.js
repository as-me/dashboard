import * as React from "react";
import Home from './components/homePage/Home';
import Charts from './components/chartsPage/Charts';
import DataSource from './components/dataSourcePage/DataSource';
import NotFoundPage from './components/notFoundPage/NotFoundPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.activePage = window.NavigationHashMap.getObject("activePage");
        this.routes = {
            undefined: < Home / > ,
            '/': < Home / > ,
            'charts': < Charts / > ,
            'dataSources': < DataSource / > ,
            'error': < ErrorPage / >
        };

        this.state = {
            page: this.activePage.value
        };
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        this.activePage.addImmediateCallback(this, this._updateState, true);
    }

    componentDidUpdate(prevProps, prevState) {


    }

    _updateState() {
        //this wil call render function which in turn calls componentDidUpdate
        console.log('updateState called')
        this.setState({
            page: this.activePage.value
        });
    }

    componentWillUnmount() {
        this.activePage.removeCallback(this, this._updateState)
    }

    render() {
        var pageComponent = this.routes[this.state.page];

        return <div > {
            pageComponent
        } < /div>
    }


}

module.exports = Content;
