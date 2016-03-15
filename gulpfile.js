var gulp = require('gulp'),
sass = require('gulp-sass'),
minifyCSS = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
watch = require('gulp-watch'),
rename = require('gulp-rename'),
copy = require('gulp-copy'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
nodemon = require('gulp-nodemon'),
buffer = require('vinyl-buffer'),
del = require('del'),
gulpSequence = require('gulp-sequence');

var srcRoot = "app/assets",
distRoot = "public/assets";

gulp.task('sass', function() {
	gulp.src(srcRoot + '/stylesheets/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(distRoot + '/css'));
});

gulp.task('browserify', function () {
	console.log("testing");
	return browserify(srcRoot + '/javascripts/app.js')
		.bundle()
		//Pass desired output filename to vinyl-source-stream
		.pipe(source('bundle.js'))
		// Start piping stream to tasks!
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(distRoot + '/javascripts'));
});

gulp.task('compress', function() {
	return gulp.src(distRoot + '/javascripts/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest( distRoot +'/javascripts'));
});

gulp.task('demon', function () {
  nodemon({
    script: 'start.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('clean', function (cb) {
	del([distRoot], cb);
});

gulp.task('copyImg', function() { 
	return gulp.src(srcRoot + '/images/**').pipe(gulp.dest(distRoot + '/images'));
})

gulp.task('copyHTML', function() { 
	return gulp.src(srcRoot + '/javascripts/**/*.html').pipe(gulp.dest(distRoot + '/views'));
})

gulp.task('watch', function () {
	gulp.watch(srcRoot + '/javascripts/**/*.js', ['browserify']);
	gulp.watch(srcRoot + '/stylesheets/**/*.scss', ['sass']);
});

gulp.task('default', function (cb) {
	gulpSequence(['sass', 'copyImg', 'copyHTML', 'browserify','demon', 'watch'], function(){
		console.log("Running");
		cb();
	})
});