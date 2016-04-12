'use strict';

require('babel-register');

const _gulpConfig = require('./gulp/gulp.config');
const _webpackConfig = require('./webpack.config.babel');

const gulpConfig = _gulpConfig.default();
const webpackConfig = _webpackConfig.default(gulpConfig, 'test');

module.exports = (config) => {

    console.log(JSON.stringify(webpackConfig, null, 4));

    config.set({
        basePath: '',
        port: 9876,
        captureTimeout: 6000,
        colors: true,
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity,
        browsers: ['PhantomJS'/*, 'Chrome'*/],
        frameworks: ['jasmine'],
        files: [
            './test/index.js'
        ],
        exclude: [],
        preprocessors: {
            './test/index.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['spec'],
        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true,
            showSpecTiming: false
        }
    });
};
