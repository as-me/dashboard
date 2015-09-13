'use strict';

var React = require('react');
require('weavecore');
var ContentSection = require('lib/content-section');
var Row = require('lib/row');
var Section = require('lib/section');

var ScatterPlotChart = require('lib/charts/ScatterPlotChart');

//var chart = WeaveAPI.globalHashMap.requestObject('ScatterPlot',React.createElement(ScatterPlotChart,null));

//console.log(chart);

var ScatterPlotPage = React.createClass({
	statics: {
		title: 'ScatterPlot Chart'
	},
	render() {
    /*return (
			React.createElement(ContentSection,{title:ScatterPlotPage.title},
                React.createElement(Row,null,
                    React.createElement(Section,{colSpan:2,class:'react-stockchart'},
                        React.createElement(ScatterPlotChart,null)
                    )
                )
            )
		);*/
        var chart = React.createElement(ScatterPlotChart,null);
        console.log(chart);
		return (
			<ContentSection title={ScatterPlotPage.title}>
				<Row>
					<Section colSpan={2} className="react-stockchart">
                    {chart}
					</Section>
				</Row>

			</ContentSection>
		);
	}
});

module.exports = ScatterPlotPage;
