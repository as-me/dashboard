var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
/*
var vendors = [
  'react',
  'bootstrap',
  'weavecore',
    'greg-slider'
];*/

var vendors = [
  'react',
  'material-ui',
  'react-router',
    'react-tap-event-plugin',
    'weavecore'
];

gulp.task('vendors', function () {
    var stream = browserify({
        debug: false,
        require: vendors
    });

    stream.bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('build/js'));

    return stream;
});



gulp.task('app', function () {
    var stream = browserify({
        entries: ['./src/index.js'],
        transform: [babelify],
        debug: true,
        extensions: ['.jsx'],
        fullPaths: false
    });

    vendors.forEach(function (vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'));

});
