var gulp = require("gulp");

gulp.task("test", function (cb) {
    var karma = require("karma").server;
    var path = require("path");
    var webpackConfig = require("../../webpack.config.js");
    var config = Object.create(webpackConfig);
    karma.start({
        configFile: path.join(config.context, "karma.conf.js"),
        singleRun: true
    }, cb);
});
