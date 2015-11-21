var istanbul = require('browserify-istanbul');
var isparta = require('isparta');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
          debug: true,
          transform: [
            'babelify',
            'browserify-istanbul'
          ],
        },

        // coverage reporter generates the coverage
        reporters: ['spec', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'coverage/',
          instrumenterOptions: {
            istanbul: { noCompact: true }
          }
        }
    });
};
