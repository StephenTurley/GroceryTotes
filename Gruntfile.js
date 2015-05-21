module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-express-server');

    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        }
    });

    //TODO: figure out how to run tests in ci
    grunt.registerTask('test-server', ['express:dev']);
}
