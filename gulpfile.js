var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch')
	rename = require('gulp-rename');

gulp.task('sass', function() {
	gulp.src('./src/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./dest/css'));
  // place code for your default task here
});

gulp.task('compress', function() {
	gulp.src('./src/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dest/js'));
})

gulp.task('sass:watch', function () {
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
	gulp.watch('./src/js/**/*.js', ['compress']);
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'compress', 'watch']);