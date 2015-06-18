var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var srcs = {
	test : 'spec/**/*-spec.js',
	e2e : 'e2e/**/*-spec.js'
};

gulp.task('test', function(){
	return gulp.src(srcs.test)
			.pipe($.jasmine());
});

gulp.task('e2e', function(){
	return gulp.src(srcs.e2e)
		.pipe($.jasmine());
});
