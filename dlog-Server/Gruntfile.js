var adminPid = '/tmp/pids/admin.pid'
module.exports = function(grunt) {

    grunt.initConfig({
        // 'plugins/**/*.js'
        jshint: {
            files: ['index.js','lib/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        watch: {
            files: ['index.js', 'lib/**/*.js','test/*.js'],
            tasks: ['jshint', 'exec']
        },

        exec: {
            test: {
                command: 'npm test',
                stdout: true,
                stderr: true
            }
        }



    });

    // linting
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // utils
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', [ ]);

};
