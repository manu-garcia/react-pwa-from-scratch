var path = require('path');

var config = {
  
  contentBase: path.join(__dirname, "docs"),
  watchContentBase: true,
  
  host: 'localhost',
  port: 80,

  // Recommended for hot module replacement
  hot: true,
  inline: true,

  // Open the browser does not work when webpack dev server called from node.
  // open: true,

  // Showing errors
  overlay: {
    errors: true,
    warnings: true,
  },

  // Proxy API requests
  // proxy: {
  //   'api': "http://localhost:3000"
  // },
  
  // Show only error information
  stats: "errors-only",

  // Using HTML 5 History API Webpack Dev Server will redirect routes to index.html, so SPA can handle it
  historyApiFallback: true,

};

module.exports = config;