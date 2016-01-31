module.exports = function (config) {
    config.set({
        
        basePath: './',

        singleRun: true,

        frameworks: ['jasmine', 'browserify'],

        preprocessors: {
            'app/**/*.js': ['browserify', 'coverage'],
            'test/angular-mocks.js': ['browserify']
        },

        browsers: ['PhantomJS'],

        reporters: ['progress', 'coverage'],

        autoWatch: false,

        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: [
                ['uglifyify', { global: true }],
                'browserify-istanbul'
            ]
        },

        files: [
            'test/angular-mocks.js',
            'test/**/*.spec.js'
        ]
        
    });
};
