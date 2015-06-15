var gulp = require('gulp');
var jasmine =  require('gulp-jasmine');

var srcs = {
	test : 'spec/**/*-spec.js'
};

gulp.task('test', function(){
	return gulp.src(srcs.test)
			.pipe(jasmine());
});