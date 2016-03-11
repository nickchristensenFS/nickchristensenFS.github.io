var gulp         = require('gulp'),
		util         = require('gulp-util'),
		browserSync  = require('browser-sync'),
		jshint       = require('gulp-jshint'),
		rename       = require('gulp-rename'),
		sass         = require('gulp-ruby-sass'),
		uglify       = require('gulp-uglify'),
		fileinclude  = require('gulp-file-include'),
		notify       = require('gulp-notify'),
		autoprefixer = require('gulp-autoprefixer'),
		include      = require('gulp-include');

//subcompile
var fs     = require('fs'),
		path   = require('path'),
    concat = require('gulp-concat'),
    es     = require('event-stream');


////////////////////////////////////////////////////////////////////////////////
// sass
////////////////////////////////////////////////////////////////////////////////
gulp.task('sass', function() {
	return sass('./scss/stylesheet.scss', { style: 'compact' })
		.on('error', function (err) { console.log(err.message); })
		.pipe(autoprefixer('> 5%, last 2 versions', 'Firefox >= 30', 'Opera >= 12', 'Safari >= 5', 'Explorer >= 9'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream({}))
		.pipe(notify({ message: "sass file: <%= file.relative %>"}));
});


////////////////////////////////////////////////////////////////////////////////
// html
////////////////////////////////////////////////////////////////////////////////
gulp.task('html', function() {
  return gulp.src(['./html/**/*.html', '!./html/**/_*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './html/'
    }))
		.on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./'))
	  .pipe(browserSync.stream({}))
		.pipe(notify({ message: "html file: <%= file.relative %>"}));
});


////////////////////////////////////////////////////////////////////////////////
// js
////////////////////////////////////////////////////////////////////////////////
gulp.task('js', function(){

	var lint = gulp.src(['./js/site.js', './js/components/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

	var js = gulp.src(['./js/site.js'])
		.on('error', function (err) { console.log(err.message); })
		.pipe(include())
		.pipe(rename({suffix: '.inc'}))
		.pipe(gulp.dest('./js'))
		.pipe(uglify())
		.pipe(rename({basename: 'site.min'},{suffix: ''}))
		.pipe(gulp.dest('./js'))
		.pipe(notify({ message: "js file: <%= file.relative %>"}));

	return lint,js;

});


////////////////////////////////////////////////////////////////////////////////
// subcompile
////////////////////////////////////////////////////////////////////////////////
var scriptsPath = './subdesigns';

function getFolders(dir) {
	return fs.readdirSync(dir)
	.filter(function(file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

gulp.task('subcompile', function() {
	var folders = getFolders(scriptsPath);

	var tasks = folders.map(function(folder) {
		return sass(path.join(scriptsPath, folder, '/scss/stylesheet.scss'), { style: 'compact' })
		.pipe(autoprefixer('> 5%, last 2 versions', 'Firefox >= 30', 'Opera >= 12', 'Safari >= 5', 'Explorer >= 9'))
		.pipe(gulp.dest(path.join(scriptsPath, folder, '/css')));
		});

	return es.concat.apply(null, tasks);

});


////////////////////////////////////////////////////////////////////////////////
// production task
////////////////////////////////////////////////////////////////////////////////
gulp.task('prod', ['sass','html','js'],function(){});


////////////////////////////////////////////////////////////////////////////////
// browser sync
////////////////////////////////////////////////////////////////////////////////
gulp.task('browser-sync', function() {
	browserSync.init({
		open: false,
		notify: false,
		server: {
			baseDir: "./",
			index: "html/index.html",
			directory: true
		}
	});
});


////////////////////////////////////////////////////////////////////////////////
// default gulp
////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['browser-sync'], function() {
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('html/**/*.html', ['html']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('js/**/*.js', ['js'], browserSync.reload);
});
