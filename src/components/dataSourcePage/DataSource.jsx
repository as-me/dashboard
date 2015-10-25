

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var HumanAPIDataSource = require('../../Sessions/HumanAPIDataSource.js');
var FlipCard = require('../Flipper/FlipCard.jsx');
var Navbar = ReactBootstrap.Navbar;

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
import 'weavecore';

export default class DataSource extends React.Component {

    constructor(props) {
        super(props)
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {isDesktop: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.hc = AdapterAPI.peer.requestDataSource("HumanConnect", HumanAPIDataSource);

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
        var dataSourceList =AdapterAPI.peer.dataSources.getObjects().map(function(dataSource, index){
        if(dataSource.isAPIDataSource){
            var name = dataSource['name'];
            var companyUrl = dataSource['companyUrl'];
            var logoUrl = dataSource['logoUrl'];
            var bgColor = dataSource['backgroundColor'];
            var apiCalls = dataSource['apiCalls'];

            var connectFn;
            var viewDataFn;
            //if(dataSource.isConnected()){
                 viewDataFn = dataSource['getRecords'].bind(dataSource);
                 //}else{
                 connectFn = dataSource['connect'].bind(dataSource);

//}


            return < Col key={index} xs = {
                        12
                    }
                    md = {
                        3
                    } >
                    <FlipCard key={index} title={name} companyURL={companyUrl} logoURL={logoUrl} viewData={viewDataFn} connector={connectFn} bgColor={bgColor} apiCalls={apiCalls}/>

                    </Col>;
        }
        else{
            var getRecordsFn = dataSource['getRecords'].bind(dataSource);
            var name = AdapterAPI.peer.dataSources.getName(dataSource);
            var bgColor = '#ad0202';
            return < Col key={index} xs = {
                            12
                        }
                        md = {
                            3
                        } >
                        <FlipCard key={index} title={name} companyURL={null} logoURL={null} viewData={getRecordsFn} connector={null} bgColor={bgColor} apiCalls={[]}/>

                        </Col>;
            }


        }.bind(this));
        var title = this.state.isDesktop ?"Data Source":< span > < a href = "#home" > < i className = "fa fa-chevron-left" > < /i>

            Data Source < /a >< /span >;


    return <div>
            < Navbar brand = { title
        }
        />< Grid > < Row >
        {dataSourceList}

       </Row></Grid></div>;
    }
}
