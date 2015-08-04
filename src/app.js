import React from 'react';
import Layout from './components/Layout.jsx';
import HomePage from './components/homePage/Home.jsx';
import ChartsPage from './components/chartsPage/Charts.jsx';
import DataSourcePage from './components/dataSourcePage/DataSource.jsx';
import NotFoundPage from './components/notFoundPage/NotFoundPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';

const routes = {
    '/': < HomePage / > ,
    'Charts': < ChartsPage / > ,
    'Data-Source': < DataSourcePage / >
};

const container = document.getElementById('app');

function render() {
    try {

        const path = window.location.hash.substr(1) || '/';
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

window.addEventListener('hashchange', () => render());
render();
