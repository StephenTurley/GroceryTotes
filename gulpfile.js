var gulp = require('gulp');
var jasmine =  require('gulp-jasmine');

var srcs = {
	test : 'spec/**/*-spec.js'
};

gulp.task('spec-server', function(){
	return gulp.src(srcs.test)
			.pipe(jasmine());
});