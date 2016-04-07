'use strict';

import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';
import path from 'path';

const cwd = process.cwd();

export default (config) => {

    let devConfig = {
        devtool: 'source-map',
        debug: true
    };

    let modules = {
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

        module: {
            loaders: [
                {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: 'file-loader?name=[name].[ext]'},
                {
                    test: /\.html$/,
                    loader: 'html'
                },
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

    var webpackPlugins = [
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
    ];

    if (!global.debug) {
        webpackPlugins.push(new webpack.optimize.UglifyJsPlugin(config.uglify));
    }

    return Object.assign(
        {},
        modules,
        {
            plugins: webpackPlugins
        },
        global.debug ? devConfig : {}
    );

};
