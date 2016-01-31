module.exports = function(grunt) {
    grunt.initConfig({

        browserify: {
            default: {
                options: {
                    watch: true,
                    transform: [
                        ['uglifyify', { global: true }]
                    ]
                },
                src: 'app/index.js',
                dest: 'dist/index.js'
            }
        },

        cssmin: {
            default: {
                files: {
                    'dist/index.css': [
                        'node_modules/angular-material/angular-material.min.css'
                    ]
                }
            }
        },

        copy: {
            default: {
                expand: true,
                cwd: 'app/',
                src: '**/*.html',
                dest: 'dist/'
            }
        },

        connect: {
            default: {
                options: {
                    keepalive: true,
                    port: 8080,
                    base: 'dist'
                }
            }
        },
        
        karma: {
            default: {
                configFile: 'karma.conf.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'browserify:default',
        'cssmin:default',
        'copy:default',
        'connect:default'
    ]);
};
