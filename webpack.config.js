const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|ts)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: './',
    // publicPath: './dist',
    port: 4040,
    hot: true,
    overlay: true,
    quiet: true,
    inline: true,
    compress: true
  },
}