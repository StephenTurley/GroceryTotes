var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


var srcs = {
	test : 'spec/**/*-spec.js'
};

gulp.task('test', function(){
	return gulp.src(srcs.test)
			.pipe($.jasmine());
});