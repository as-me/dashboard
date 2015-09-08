import React from 'react';
import WeaveCore from 'weavecore';
import HomePage from './components/homePage/Home.jsx';
import ChartsPage from './components/chartsPage/Charts.jsx';
import DataSourcePage from './components/dataSourcePage/DataSource.jsx';
import NotFoundPage from './components/notFoundPage/NotFoundPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import NavBar from './components/navigation/NavBar.jsx';



const container = document.getElementById('content');
const menuContainer = document.getElementById('menu');

const routes = {
    undefined: < HomePage / > ,
    '/': < HomePage / > ,
    'Charts': < ChartsPage / > ,
    'Data-Sources': < DataSourcePage / >
};


React.render( < NavBar / > , menuContainer);
asme.navBarData.page.addImmediateCallback(WeaveAPI.globalHashMap, changePage);
asme.navBarData.page.value = window.location.hash.substr(1) || '/';

function changePage() {
    //React.render( < NavBar / > , menuContainer);
    try {
        const path = asme.navBarData.page.value;
        console.log('Content Callback:', path);
        const component = routes[path] || < NotFoundPage / > ;
        React.render(component, container);
    } catch (err) {
        console.log(err);
        React.render( < ErrorPage {...err
            }
            />, container
        );
    }
}

//changePage();

/*const routes = {
    '/': < HomePage / > ,
    'Charts': < ChartsPage / > ,
    'Data-Sources': < DataSourcePage / >
};

const linkableHash = WeaveAPI.globalHashMap.requestObject("linkableHash", weavecore.LinkableString);
linkableHash.addImmediateCallback(WeaveAPI.globalHashMap, changePage);




function changePage() {
    React.render( < NavBar / > , menuContainer);
    try {

        const path = linkableHash.value;
        console.log(path);
        const component = routes[path] || < NotFoundPage / > ;
        React.render(component, container);
    } catch (err) {
        console.log(err);
        React.render( < ErrorPage {...err
            }
            />, container
        );
    }
}


function render() {
    try {
        const path = window.location.hash.substr(1) || '/';
        linkableHash.value = path;
    } catch (err) {
        console.log(err);

    }
}

window.addEventListener('hashchange', () => render());
render();*/
