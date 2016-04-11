'use strict';

import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';
import path from 'path';

const cwd = process.cwd();

export default (config) => {

    let base = {
        resolve: {
            root: 'resources',
            alias: {
                bower: path.join(cwd, 'bower_components'),
                scripts: 'scripts',
                templates: 'views'
            },
            extensions: ['', '.js'],
            modulesDirectories: [
                'bower_components',
                'node_modules'
            ]
        },

        stats: {
            children: false
        }
    };

    let devConfig = {
        devtool: 'source-map',
        debug: true
    };

    let loaders = {
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                }
            ],

            noParse: [
                path.join(path.join(cwd, 'node_modules'), 'jquery')
            ]
        }
    };

    let webpackPlugins = {
        plugins: [
            new webpack.ProvidePlugin({
            '$': 'jquery'
            }),
            new BowerWebpackPlugin({
                excludes: /.*\.less/
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js'
            })
        ]
    };

    if (!global.debug) {
        webpackPlugins.push(new webpack.optimize.UglifyJsPlugin(config.uglify));
    }

    return Object.assign(
        {},
        base,
        loaders,
        webpackPlugins,
        global.debug ? devConfig : {}
    );

};
