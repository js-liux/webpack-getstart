var path = require("path");
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.js');

module.exports = {
  context: __dirname + "/app",
  resolve: {
    alias: {
      'react': pathToReact,
      'react-dom': pathToReactDom,
      'marked':  path.resolve(node_modules, 'marked/marked.min.js')
    }
  },
  entry: {
    pageA: "./pageA",
    statefulComponent: "./statefulComponent.jsx",
    TodoApp: "./TodoApp.jsx",
    Mark: ['webpack/hot/dev-server',"./mark.js"]
  },
  output: {
    path: path.join(__dirname, "build/app/"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      include: [
        path.resolve(__dirname, "app/"),
      ],
      noParse: [pathToReact],
      query: {
        presets: ['react', 'es2015']
      },
      loader: "babel"
    }],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("commons.js")
  ],
  resolveLoader: {
    extensions: ['.jsx', '.js', ]
  },
}
