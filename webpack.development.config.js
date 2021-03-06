const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateSWPlugin = require('interpolate-sw-plugin');

var env = require('./env.production');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './docs'),

    // Hot Module Replacement complains about using chunkhash, and recommended to use hash instead
    filename: '[name].[hash:8].js',

    // For dynamic imports (Lazy load). Webpack comment on import call
    chunkFilename: '[name].[hash:8].chunk.js',

  },
  module: {
    loaders: [
      // Babel loader, depends on babel-preset-react, to be able to load JSX properly. 
      // Babel preset 'react' must be configured in .babelrc
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // presets: ['react', 'es2015', 'stage-0']
          plugins: ['transform-decorators-legacy']
        }
      },
      // style-loader supports HMR (Hot Module Replacement)
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    // Copy the html template and inject the bundles
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: true,
      }
    }),
    // Activates hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      './public/manifest.json',
      {from: './public/icons/', to: './icons/'},
    ]),
    // Copy the service worker and inject in it the list of assets for pre-cache and cache version
    // Notice runing this plugin after CopyWebpackPlugin will include copied files too
    new InterpolateSWPlugin({
      from: path.resolve(__dirname, './public/sw.js'),
      to: 'sw.js',
      replaceCacheVersion: true,
      replaceAssetFiles: true,
      // That would empty the SW file, to deactivate the service worker in DEV mode
      deactivateSW: true,
    }),

  ]
};