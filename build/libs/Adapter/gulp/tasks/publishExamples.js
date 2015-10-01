var gulp = require("gulp");

var getFunctionFor = function (componentName) {
    /*eslint-disable */
    var r = 'd3.csv("//http://as-me.github.io/Adapter/data/testCereal.csv", function(d, i){' + "\n" +
        "	    d.index = i" + "\n" +
        "		return d;" + "\n" +
        "	},function(error,rows){" + "\n" +
        '	    React.render(<' + componentName + '/>, document.body);' + "\n" +
        '       adapter.sessionData.GlobalData.dataSource.setSessionState(rows);' + "\n" +
        '       adapter.sessionData.scatterPlotData.xAxis.value = "name";' + "\n" +
        '       adapter.sessionData.scatterPlotData.yAxis.value = "sodium";' + "\n " +
        "});"
        /*eslint-enable */
    return r;
};

gulp.task("publishexamples", function (cb) {
    var examplesToPublish = ["ScatterPlotChart"];

    var replace = require("gulp-replace");
    var path = require("path");

    var webpackConfig = require("../../webpack.config.js");
    var config = Object.create(webpackConfig);

    examplesToPublish.forEach(function (eachEx) {
        console.log(eachEx);
        gulp.src(path.join(config.context, "docs/lib/charts", eachEx + ".jsx"))
            .pipe(replace(/var React = .*/, ""))
            .pipe(replace(/var d3 = .*/, ""))
            .pipe(replace(/var adapter = .*/, ""))
            .pipe(replace(/module.exports = .*/, getFunctionFor(eachEx)))
            .pipe(gulp.dest(path.join(config.context, "docs/examples", eachEx)));

        gulp.src(path.join(config.context, "docs/examples/index.html"))
            .pipe(replace(/CHART_NAME_HERE/g, eachEx))
            .pipe(gulp.dest(path.join(config.context, "docs/examples", eachEx)));
    });

    cb();
});
