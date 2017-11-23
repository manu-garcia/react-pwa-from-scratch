const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateSWPlugin = require('interpolate-sw-plugin');

const env = require('./env.production');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './docs'),

    // Main bundle names
    filename: '[name].[chunkhash:8].js',
    // For dynamic imports (Lazy load). Webpack comment on import call
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    
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
      // Build a separated css bundle
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    // Copy the html template and inject the bundles
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: true,
      }
    }),
    // Clean build directory before each new build
    new CleanWebpackPlugin(['docs']),
    // Extract CSS to a separated bundle
    new ExtractTextPlugin({
      filename: '[name].[chunkhash:8].css'
    }),
    // Copy the service worker as it is to the build folder
    new CopyWebpackPlugin([
      './public/manifest.json',
      './public/CNAME',
      {from: './public/icons/', to: './icons/'},
    ]),
    // Copy the service worker and inject in it the list of assets for pre-cache and cache version
    // Notice runing this plugin after CopyWebpackPlugin will include copied files too
    new InterpolateSWPlugin({
      from: './public/sw.js',
      to: 'sw.js',
      replaceCacheVersion: true,
      replaceAssetFiles: true,
    }),
    
  ]
};