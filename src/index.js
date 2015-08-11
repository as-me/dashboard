import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import Home from './components/homePage/Home';
import Charts from './components/chartsPage/Charts';
import DataSource from './components/dataSourcePage/DataSource';
import NotFoundPage from './components/notFoundPage/NotFoundPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import LeftNavBar from './components/navigation/LeftNavBar.jsx';
import SessionSlider from './components/sessionSlider/Slider.jsx';

//import SessionedHashLocation from './components/SessionedLocation.js';


import WeaveCore from 'weavecore';



injectTapEventPlugin();

const routes = {
    undefined: < Home / > ,
    '/': < Home / > ,
    'charts': < Charts / > ,
    'dataSources': < DataSource / >
};


const container = document.getElementById('view');
const menuContainer = document.getElementById('menu');
const logContainer = document.getElementById('logUI');


React.render( < LeftNavBar / > , menuContainer);


//namesapce
if (typeof window === 'undefined') {
    this.asme = this.asme || {};
} else {
    window.asme = window.asme || {};
}

/*Object.defineProperty(asme, 'page', {
    value: WeaveAPI.globalHashMap.requestObject("page", weavecore.LinkableString)
});*/

asme.navBarData.page.addImmediateCallback(WeaveAPI.globalHashMap, changePage);
asme.navBarData.page.value = window.location.hash.substr(1) || '/';


function changePage() {


    //console.log(Router.HashLocation);
    //React.render( < Root / > , document.body);

    //React.render( < NavBar / > , menuContainer);
    //React.render( < Root / > , document.body);
    try {
        const path = asme.navBarData.page.value;
        console.log('Content Callback:', path);
        const component = routes[path] || < NotFoundPage / > ;
        React.render(component, container);
    } catch (err) {
        console.log(err);
        React.render( < ErrorPage / > , container);
    }
}

React.render( < SessionSlider / > , logContainer);

/*const AppRoutes = ( < Route path = "/"
    handler = {
        App
    } >
    < DefaultRoute handler = {
        Home
    }
    /> < Route name = "charts"
    handler = {
        Charts
    }
    /> < Route name = "dataSources"
    handler = {
        DataSource
    }
    /> < /Route >
);

Router.run(AppRoutes, Router.HashLocation, (Root, nextState) => {
    React.render( < Root / > , document.body);
    console.log( < Root / > , nextState);
});*/
