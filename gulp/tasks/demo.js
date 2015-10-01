var gulp = require("gulp"),
    gutil = require("gulp-util"),
    webpack = require("webpack");

function build(myConfig, cb) {
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    var compiler = webpack(myConfig);

    compiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        cb();
    });
}

gulp.task("demo", ["build"], function (cb) {

    var replace = require("gulp-replace");

    gulp.src("./demo/*.html")
        .pipe(replace(/<!-- *custom:jsinclude *([^ ]*) *-->/g,
            '<script type="text/javascript" src="$1"></script>'))
        .pipe(replace(/<!-- *custom:cssinclude *([^ ]*) *-->/g,
            '<link href="$1" rel="stylesheet">'))
        .pipe(replace(/<!-- *custom:remove(.|\n)*?endcustom -->/g,
            ""))
        .pipe(gulp.dest("./build"));

    gulp.src(["./docs/images/*"])
        .pipe(gulp.dest("build/images"));

    gulp.src(["./docs/data/*"])
        .pipe(gulp.dest("build/data"));

    gulp.src(["./bower_components/**/build/dist/*.js", "./bower_components/**/dist/*.js", "./bower_components/**/*.js", "./bower_components/**/build/dist/*.js.map"])
        .pipe(gulp.dest("build/libs"));


    // run webpack
    var webpackConfig = require("../../webpack.config.demo.js");
    var myConfig = Object.create(webpackConfig);



    build(myConfig, cb);
});
