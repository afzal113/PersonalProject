/* File: gulpfile.js */
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat-util');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var Server = require('karma').Server;

// create a default task and just log a message
gulp.task('default', ['jshint', 'watch']);
gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('watch', function () {
  gulp.watch(['app/**/*.js'], ['jshint']);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('copy', function () {
  gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
gulp.task('dev', ['jshint', 'test']);
