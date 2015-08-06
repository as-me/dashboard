var gulp = require('gulp');
/*
 * instead of calling in each plug-in individually
 * we can load them dynamically by using just the gulp-load-plugins library.
 * This will read the dependencies in the package.json file and inject each of them for us.
 */
var gulpLoadPlugins = require('gulp-load-plugins');

/* This plug-in has a number of configuration options which you can pass into the gulpLoadPlugins() method.
 * These include which file to read,
 * which keys in the selected file are read to obtain the plug-in name,
 * and whether or not the plug-ins are lazy loaded.
 * For more information,  at github.com/ jackfranklin/gulp-load-plugins.
 */
var plugins = gulpLoadPlugins({
    pattern: ['gulp-*', 'browserify*', 'vinyl-source-stream'],
    config: './package.json',
    scope: ['devDependencies'],
    replaceString: 'gulp-',
    camelize: true,
    lazy: true,
});


var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var header = require('gulp-header');
var order = require('gulp-order');




var path = {
    JS: ['src/*.js', 'src/**/*.js', 'src/**/**/*.js'],
    COMBINED_OUT: 'weavecore.js',
    MINIFIED_OUT: 'weavecore.min.js',
    ENTRY_POINT: '',
    ORDER: [
                    'src/createjs/events/*.js', // All JS in the libs folder
                    'src/createjs/Ticker.js',
                    'src/compiler/*.js', // This specific file
                    'src/core/DynamicState.js',
                    'src/core/ILinkableObject.js',
                    'src/core/ILinkableCompositeObject.js',
                    'src/core/CallbackCollection.js',
                    'src/core/SessionManager.js',
                    'src/primitive/WeaveTreeItem.js',
                    'src/primitive/Dictionary2D.js',

                    'src/core/LinkableVariable.js',
                    'src/core/LinkableNumber.js',
                    'src/core/LinkableBoolean.js',
                    'src/core/LinkableString.js',
                    'src/core/ChildListCallbackInterface.js',
                    'src/core/LinkableWatcher.js',
                    'src/core/LinkableHashMap.js',

                    'src/WeaveAPI.js',

                    'src/core/LinkableDynamicObject.js',
                    'src/core/StageUtils.js',
                    'src/core/ExternalSessionStateInterface',
                    'src/core/SessionStateLog.js'
               ],
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'

};


/*
 * The first task will check any JavaScript code for errors by passing it through the default linting engine.
 * Simply register the task by providing a name and the associating function.
 * Here the source directory is set and all files within it will be piped to the jshint() method for parsing and validation.
 */
gulp.task('lint', function () {
    return gulp.src(path.ORDER)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
 * To streamline network resources
 * let’s also make sure any JavaScript files are combined into one file and
 * then a minified version of each created.
 * Once more, set the source directory from which to pull the files,
 * which are then concatenated and injected with a header value before being placed into the destination directory.
 */

gulp.task('concat', function () {
    var headerValue = 'Evaluated by gulp.\n';
    console.log(order);
    return gulp.src(path.ORDER)
        //.pipe(order(path.ORDER))
        .pipe(concat(path.COMBINED_OUT))
        //.pipe(header(headerValue))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('minify', function () {
    var headerValue = 'Evaluated by gulp.\n';
    return gulp.src(path.COMBINED_OUT)
        .pipe(plugins.rename(path.MINIFIED_OUT))
        .pipe(plugins.uglify())
        .pipe(plugins.header(headerValue))
        .pipe(gulp.dest(path.DEST));
});




gulp.task('browserify', function () {
    return browserify(path.ENTRY_POINT)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest(path.DEST_BUILD));
});

/*
 * One major benefit of any task runner
 * is having the ability to watch a directory of files
 * and to be able to react to any changes that are made to them.
 * Once a change is detected, Gulp will pass those files through to the lint,concat and minify methods for processing.
 */


gulp.task('watch', function () {
    gulp.watch(path.JS, ['lint', 'concat', 'minify']);
});

/*
 * When starting Gulp from the command line
 * you can optionally pass in the name of the task to run. If this is omitted,
 * Gulp will run a default task if one is available.
 * You can easily ask Gulp to run a series of tasks in order as part of the default task.
 */
gulp.task('default', ['lint', 'concat']);
