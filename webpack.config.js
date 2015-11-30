var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  context: __dirname + "/app",
  //entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/react/main.js')],
  entry: {
    main: "./react/main.js",
    b: './js/b'
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].entry.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query:
      {
        presets: ['react','es2015'],
        cacheDirectory: true
      }
    }],
    noParse: [pathToReact]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': pathToReact
    }
  }
};

module.exports = config;