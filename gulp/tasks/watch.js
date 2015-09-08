var gulp = require("gulp"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    browserSync = require("browser-sync");

gulp.task("watch", ["clean", "serve"], function (callback) {
    var WebpackDevServer = require("webpack-dev-server");
    var webpackConfig = require("../../webpack.config.watch.js");
    var watchConfig = Object.create(webpackConfig);

    var watchCompiler = webpack(watchConfig);
    // Start a webpack-dev-server
    var server = new WebpackDevServer(watchCompiler, {
        publicPath: watchConfig.output.publicPath,
        // hot: true,
        quiet: false,
        noInfo: false,
        stats: {
            colors: true
        }
    });

    server.listen(8090, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8090/webpack-dev-server/index.html");
    });
    gulp.watch(["./docs/images/**/*", "./docs/md/**/*", "./docs/*.html", "./docs/data/*.tsv"], browserSync.reload);
    callback();
});
