var gulp = require('gulp');
var changed = require('gulp-changed');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  gulp.src('src/styles/theme.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('.'))
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'))
  ;
});

gulp.task('templates', function() {
  gulp.src('src/templates/**/*.html')
    .pipe(rename({dirname: ''}))
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'))
  ;
});

gulp.task('default', ['styles', 'templates']);

gulp.task('watch', ['default'], function() {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/templates/**/*.html', ['templates']);
});
