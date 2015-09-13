var gulp = require("gulp");

gulp.task("styles", ["clean"], function () {
    var sass = require("gulp-sass"),
        autoprefixer = require("gulp-autoprefixer"),
        concatCss = require("gulp-concat-css");

    var webpackConfig = require("../../webpack.config.js");
    return gulp.src("src/styles/*.scss")
        .pipe(sass({
            style: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 6 versions"],
            cascade: false
        }))
        .pipe(concatCss("asme-adapter.css"))
        .pipe(gulp.dest("build/styles"));
});
