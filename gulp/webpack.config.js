'use strict';

import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';
import path from 'path';
import _ from 'lodash';

module.exports = function(config) {
    let devConfig = {
        devtool: 'source-map',
        debug: true
    };

    let modules = {
        resolve: {
            root: config.src,
            alias: {
                bower: config.bowerRoot,
                templates: path.join(config.src, 'views')
            }
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
                path.join(config.nodeRoot, 'jquery')
            ]
        }
    };

    let webpackPlugins = [
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

    return _.extend(
        {},
        modules,
        {
            plugins: webpackPlugins
        },
        global.debug ? devConfig : {}
    );

};
