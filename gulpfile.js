var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-csso');

gulp.task('build-css', function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['build-css']);
});

gulp.task('default', ['build-css']);
