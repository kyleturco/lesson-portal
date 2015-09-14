/**
 * Tasks live in the tasks directory.
 * This file just loads all the gulp tasks.
 */

// require('require-dir')('./gulp/tasks');

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files', 'browser-sync']
    });

gulp.task('clean', function (cb) {
  $.del('build', cb);
});

gulp.task('bower', function () {
  gulp
    .src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('build/lib'));
  gulp
    .src($.mainBowerFiles('**/*.scss'))
    .pipe($.concat('build.css'))
    .pipe(gulp.dest('build/lib'));
});

gulp.task('jade:dev', function () {
  gulp
    .src(['app/**/*.jade', 'app/*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass:dev', function () {
  gulp
    .src('app/**/main.scss')
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(gulp.dest('build'));
});

gulp.task('js:dev', function () {
  gulp
    .src('app/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('build'));
});

gulp.task('browser-sync', function() {
    $.browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('copy', function () {
  gulp.src('app/CNAME')
    .pipe(gulp.dest('build'));
});

// gulp.task('build:prod', ['jade:prod', 'sass:prod', 'js:prod', 'bower', 'copy']);
gulp.task('build:dev', ['jade:dev', 'sass:dev', 'js:dev', 'bower', 'copy']);

gulp.task('serve', ['build:dev'], function () {
  gulp.start('browser-sync');
  gulp.watch(['app/**/*.jade'], ['jade:dev'],['clean']).on('change', $.browserSync.reload);
  gulp.watch(['app/**/*.scss'], ['sass:dev']).on('change', $.browserSync.reload);
  gulp.watch(['app/**/*.js'], ['js:dev']).on('change', $.browserSync.reload);
 // gulp.watch(['app/**/*', '!app/**/*.jade', '!app/**/*.scss', '!app/**/*.js'], ['build:dev']).on('change', $.browserSync.reload);
});

gulp.task('default', ['clean'], function () {
  gulp.start('serve');
});
