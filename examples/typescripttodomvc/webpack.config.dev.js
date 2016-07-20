var path = require('path');
var webpack = require('webpack');
const istypescript = true;
var settings = {
  port: 4445,
  jsSrcPath: 'src',
  file: '/index'
}
if (istypescript) {
  settings.jsSrcPath = 'build';
  settings.file = '/index'
}
module.exports = {
  devtool: 'eval',
  port: settings.port,
  entry: [
    'webpack-dev-server/client?http://localhost:' + settings.port,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve('./' + settings.jsSrcPath + settings.file)
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    contentBase: path.resolve('./src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: path.resolve(settings.jsSrcPath),
    extensions: ["", ".webpack.js", ".web.js", '.js', '.jsx'],

    alias: {
    //'redux-devtools': path.join(__dirname, '..', '..', 'src'),
    //'react': path.join(__dirname, 'node_modules', 'react'),

    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, settings.jsSrcPath)
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

