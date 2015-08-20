/**
 *  Karma configuration
 *  More details: http://karma-runner.github.io/0.13/config/configuration-file.html
 */
module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      '../bower_components/jquery/dist/jquery.js',
      '../src/*.js',
      'unit/*.js'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      '../src/*.js': ['coverage']
    },

    coverageReporter: {
      reporters:[
        {
          type: 'html',
          subdir: 'report-html'
        },
        {
          type: 'lcov',
          subdir: 'report-lcov'
        },
        {
          type: 'text'
        }
      ]
    },

    exclude: [],

    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
