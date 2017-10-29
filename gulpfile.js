
var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var opn = require('opn');
var path = require('path');

// Production
var webpackConfigProduction = require('./webpack.production.config');

// Develompent
var webpackConfigDevelopment = require('./webpack.development.config');
var webpackDevServerConfig = require('./webpack.devserver.config');

/**
 * Build the production bundles.
 */
gulp.task('build', function (callback) {

  // Required for react-app babel preset
  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';
  
  var compiler = webpack(webpackConfigProduction, function () {
    callback();
  });

});

/**
 * Task to develop locally, watch + bundeling + hot module replacement
 */
gulp.task('watch', function (callback) {

  // Required for react-app babel preset
  process.env.BABEL_ENV = 'development';
  process.env.NODE_ENV = 'development';

  webpackDevServer.addDevServerEntrypoints(webpackConfigDevelopment, webpackDevServerConfig);
  var compiler = webpack(webpackConfigDevelopment);

    new webpackDevServer(
      compiler,
      webpackDevServerConfig
    ).listen(webpackDevServerConfig.port, webpackDevServerConfig.host, function (err) {

      if (err) {
        console.log('Error running webpack dev server', err);
        return;
      }

      var uri = 'http://' + webpackDevServerConfig.host + ':' + webpackDevServerConfig.port;

      opn(uri).then(function () {
        console.log('Listening on ' + uri);
      });

    })
});