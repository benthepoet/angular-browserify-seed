module.exports = function (config) {
    config.set({
        
        basePath: './',

        singleRun: true,

        frameworks: ['jasmine', 'browserify'],

        preprocessors: {
            'app/index.js': ['browserify', 'coverage'],
            'app/index.spec.js': ['browserify']
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

        logLevel: config.LOG_DEBUG,

        files: [
            'app/index.spec.js',
            'app/**/*.spec.js'
        ]
        
    });
};
