//'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

//Sass & Autoprefixer Task
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./build/css/'));
});
// Watch Task
gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});
// Compress Imgs Task
gulp.task('compress', function() {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
});