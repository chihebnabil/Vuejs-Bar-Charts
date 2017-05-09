/* Needed gulp config */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {  
gulp.src('scss/style.scss')
    .pipe(sass({
        includePaths: ['scss']
    }))
    .pipe(gulp.dest('css'))
});
