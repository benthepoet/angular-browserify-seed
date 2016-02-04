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
            extensions: ['.js'],
            transform: [
                'browserify-istanbul'
            ]
        },

        files: [
            'app/index.spec.js',
            'app/**/*.spec.js'
        ]
        
    });
};
