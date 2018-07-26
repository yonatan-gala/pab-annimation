'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');


gulp.task('sass', function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('sassLint', function () {
    return gulp.src('styles/**/*.s+(a|c)ss')
        .pipe(sassLint(
            {
                configFile: '.sass-lint.yml',
            }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});