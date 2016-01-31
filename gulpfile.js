var gulp = require('gulp');
var changed = require('gulp-changed');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

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

gulp.task('javascripts', function() {
  gulp.src('src/javascripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'))
})

gulp.task('templates', function() {
  gulp.src('src/templates/**/*.html')
    .pipe(rename({dirname: ''}))
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'))
  ;
});

gulp.task('custom_pages', function() {
  gulp.src('src/custom_pages/**/*.html')
    .pipe(rename({dirname: '', prefix: '_custom_'}))
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'))
  ;
});

gulp.task('fonts', function() {
  gulp.src('src/fonts/**')
    .pipe(rename({dirname: ''}))
    .pipe(changed('dist/theme', {hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest('dist/theme'));
});


gulp.task('default', ['styles', 'javascripts', 'templates', 'custom_pages', 'fonts']);

gulp.task('watch', ['default'], function() {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/javascripts/*.js', ['javascripts']);
  gulp.watch('src/templates/**/*.html', ['templates']);
  gulp.watch('src/custom_pages/**/*.html', ['custom_pages']);
  gulp.watch('src/fonts/**', ['fonts']);
});
