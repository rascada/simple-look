const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/register',
  output: { filename: 'lib/webpack.js' },
  resolve: {
    extensions: ['', '.js', '.styl'],
  },

  module: {
    loaders: [
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', ['css', 'stylus']) }
    ],
  },

  plugins: [
      new ExtractTextPlugin("lib/simple-look.css"),
  ],
};
