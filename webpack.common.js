const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js', './src/scss/style.scss']
  },

  performance: {
    hints: false,
    maxEntrypointSize: 5200000,
    maxAssetSize: 5200000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
              esModule: false
            }
          },
          'img-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
