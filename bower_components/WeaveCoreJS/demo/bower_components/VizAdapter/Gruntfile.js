module.exports = function (grunt) {
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 2. Configuration for files concatenation.
            dist: {
                src: [
          'src/*.js', // All JS in the src folder
            'src/hook/*.js',
            'src/peer/*.js' // All JS in the src folder
          ],
                dest: 'VizAdapter.js',
            }
        },
        uglify: {
            // 2. Configuration for files minify.
            build: {
                src: 'VizAdapter.js',
                dest: 'VizAdapter.min.js',
            }
        }
    });

    // 3. Load the plugins for Grunt's Task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. register the tasks to grunt that needs to be run
    grunt.registerTask('default', ['concat', 'uglify']);
};
