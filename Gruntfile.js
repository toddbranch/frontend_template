module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            options: {
                specs: 'tests/**/*.spec.js',
                vendor: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
                ],
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfigFile: 'main.js'
                },
                summary: true
            }
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'main.js',
                    out: 'dist.js',
                    name: 'main',
                    paths: {
                        jquery: 'empty:',
                        backbone: 'empty:',
                        underscore: 'empty:',
                        bootstrap: 'empty:',
                        handlebars: 'empty:',
                        text: 'bower_components/requirejs-text/text'
                    },
                    optimize: 'uglify2'
                }
            }
        },
        shell: {
            copyMain: {
                command: 'cp main.js dist.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('build', ['jasmine', 'requirejs']);
    grunt.registerTask('dev', ['shell:copyMain']);
};
