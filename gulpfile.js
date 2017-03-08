'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
    gulp.src('src/css/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/css/less/*.less', ['less']);
    gulp.watch("src/page/*.html", function () {
        gulp.src("src/page/*.html").pipe(livereload());
    });
});

gulp.task('default',['less', 'watch']);