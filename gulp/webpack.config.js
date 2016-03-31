var
  webpack = require('webpack'),
  path = require('path'),
  BowerWebpackPlugin = require('bower-webpack-plugin'),
  UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
  _ = require('lodash')
;

module.exports = function (config) {

  var devConfig = {
    devtool: 'source-map',
    watch: global.isWatch === true,
    debug: true
  };

  var modules = {
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
        }
      ],

      noParse: [
        path.join(config.nodeRoot, 'jquery')
      ]
    }
  };

  var plugins = [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    }),
    new BowerWebpackPlugin({
      excludes: /.*\.less/
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ];

  if (!global.debug) {
    plugins.push(new UglifyJsPlugin(config.uglify));
  }

  return _.extend(
    {},
    modules,
    {
      plugins: plugins
    },
    global.debug ? devConfig : {}
  );

};
