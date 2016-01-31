module.exports = function (config) {
    config.set({
        
        basePath: './',

        singleRun: true,

        frameworks: ['jasmine', 'browserify'],

        preprocessors: {
            'src/app.js': ['browserify', 'coverage'],
            'src/app.spec.js': ['browserify']
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
            'src/**/*.spec.js'
        ]
        
    });
};
