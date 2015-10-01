var gulp = require("gulp");

gulp.task("release", ["build"], function (cb) {

    // del(["build/styles/unmodified"], cb);
    // replacement for jsx --harmony -x jsx src build/cjs && jsx --harmony src build/cjs
    // var react = require("gulp-react");
    var babel = require("gulp-babel");
    gulp.src(["src/**/*.js", "src/**/*.jsx", "src/**/**/*.js", "src/**/**/*.jsx"])
        // .pipe(react({harmony: true}))
        .pipe(babel())
        .pipe(gulp.dest("build"));

    // replacement for cp *.md build/cjs && cp .npmignore build/cjs
    gulp.src(["*.md", ".npmignore"])
        .pipe(gulp.dest("build"));

    var fs = require("fs");
    var path = require("path");

    var webpackConfig = require("../../webpack.config.js");
    var config = Object.create(webpackConfig);
    var origPackage = fs.readFileSync(path.join(config.context, "package.json")).toString(),
        buildPackage;

    try {
        var pkg = JSON.parse(origPackage);
        var jsonFormat = require("json-format");
        delete pkg.devDependencies;
        delete pkg.scripts;
        delete pkg.browserify;
        pkg.main = "index.js";
        buildPackage = jsonFormat(pkg).replace(/\t/g, "  ");
    } catch (er) {
        console.error("package.json parse error: ", er);
        // process.exit(1);
    }

    fs.writeFile(path.join(config.context, "build", "package.json"), buildPackage, function () {
        console.log("CJS package.json file rendered");
        cb();
    });
});
