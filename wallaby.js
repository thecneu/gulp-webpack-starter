'use strict';

require('babel-register');

const wallabyWebpack = require('wallaby-webpack');
const _gulpConfig = require('./gulp/gulp.config');
const _webpackConfig = require('./webpack.config.babel');
const path = require('path');

const gulpConfig = _gulpConfig.default();
const webpackConfig = _webpackConfig.default(gulpConfig, 'test');

module.exports = (wallaby) => {
    let wallabyWebpackConfig = {};

    Object.assign(wallabyWebpackConfig, {
        module: webpackConfig.module,
        plugins: webpackConfig.plugins,
        resolve: {
            root: [
                path.join(wallaby.projectCacheDir, 'resources')
            ],
            scripts: 'scripts'
        }
    });

    //console.log(JSON.stringify(wallabyWebpackConfig, null, 4));

    let wallabyPostprocessor = wallabyWebpack(wallabyWebpackConfig);

    return {
        testFramework: 'jasmine',
        files: [
            {pattern: 'resources/scripts/**/*.js', load: false}
        ],
        tests: [
            {pattern: 'test/**/*-spec.js', load: false}
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        postprocessor: wallabyPostprocessor,
        bootstrap: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
