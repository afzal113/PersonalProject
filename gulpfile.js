/* File: gulpfile.js */
var gulp = require('gulp');
var sass = require('gulp-sass');

// grab our gulp packages
var gulp = require('gulp'),
  gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function () {
  return gutil.log('Gulp is running!');
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
