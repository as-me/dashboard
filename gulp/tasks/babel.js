var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
