import * as React from "react";


class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.activePage = window.NavigationHashMap.getObject("activePage");
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
        var activeList;
        if (this.state.page === 'charts') {
            activeList = < ul className = "nav navbar-nav " >
                           < li className = "active" >< a href = "#charts" > < i className = "fa fa-fw fa-bar-chart-o" > < /i> Charts</a >< /li>
                           < li > < a href = "#dataSources" > < i className = "fa fa-fw fa-database" > < /i > Data - Sources < /a > < /li >
                        < /ul > ;
        } else if (this.state.page === 'dataSources') {
            activeList = < ul className = "nav navbar-nav " >
                < li >< a href = "#charts" > < i className = "fa fa-fw fa-bar-chart-o" > < /i> Charts</a >< /li>
                < li className = "active" > < a href = "#dataSources" > < i className = "fa fa-fw fa-database" > < /i > Data - Sources < /a > < /li >
                < /ul > ;

        } else if (this.state.page === '/' || this.state.page === undefined) {
            activeList = < ul className = "nav navbar-nav " >
                < li >< a href = "#charts" > < i className = "fa fa-fw fa-bar-chart-o" > < /i> Charts</a >< /li>
                < li  > < a href = "#dataSources" > < i className = "fa fa-fw fa-database" > < /i > Data - Sources < /a > < /li >
                < /ul > ;

        }
        return <nav className = "navbar navbar-inverse navbar-fixed-top" role = "navigation" >
                <div className="container-fluid">
                    < div className = "navbar-header" >
                        < button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#asme-navbar-collapse" >
                            < span className = "sr-only" > Toggle navigation < /span>
                            < span className = "icon-bar" > < /span >
                            < span className = "icon-bar" > < /span>
                            < span className = "icon-bar" > < /span >
                        < /button>
                        < a className = "navbar-brand" href = "#/" > As~Me < /a>
                    < /div >
                    < div className = "collapse navbar-collapse navbar-right" id = "asme-navbar-collapse" > {activeList} < /div>
                < /div>
            < /nav > ;
    }


}

module.exports = Navigation;
