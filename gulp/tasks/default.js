var gulp = require('gulp');

//gulp.task('default', ['lint', 'concat', 'yuidoc']);

gulp.task('webpack', ['webpack']);
gulp.task('babel', ['babel']);

gulp.task('dev', ['vendors', 'app']);


//gulp.task('build', ['lint', 'concat', 'yuidoc']);

/*gulp.task('default', ['iconFont'], function () {
    //gulp.start('sass', 'images', 'markup', 'watch');
    gulp.start('browserify');
});*/
