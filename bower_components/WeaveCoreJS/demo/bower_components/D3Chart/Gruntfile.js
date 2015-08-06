module.exports = function (grunt) {
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 2. Configuration for files concatenation.
            dist: {
                src: [
          'src/*.js' // All JS in the src folder
          ],
                dest: 'd3Chart.js',
            }
        },
        uglify: {
            // 2. Configuration for files minify.
            build: {
                src: 'd3Chart.js',
                dest: 'd3Chart.min.js',
            }
        },
        cssmin: {
            minify: {
                src: 'src/main.css',
                dest: 'd3Chart.min.css'
            }
        }
    });

    // 3. Load the plugins for Grunt's Task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');

    // 4. register the tasks to grunt that needs to be run
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
