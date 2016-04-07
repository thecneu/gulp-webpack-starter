'use strict';

require('babel-register');

const _gulpConfig = require('./gulp/gulp.config');
const _webpackConfig = require('./webpack.config.babel');

const gulpConfig = _gulpConfig.default();
const webpackConfig = _webpackConfig.default(gulpConfig);

module.exports = (config) => {

    let karmaWebpackConfig = {};

    Object.assign(karmaWebpackConfig, {
        module: webpackConfig.module,
        resolve: webpackConfig.resolve
    });

    //console.log(karmaWebpackConfig);

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
            'resources/scripts/*.js',
            'spec/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'spec/*.js': ['webpack'],
            'resources/scripts/**/*.js': ['webpack']
        },
        webpack: karmaWebpackConfig,
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
