const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import ('webpack').Configuration}
 */
const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    regenerator: true,
                  },
                ],
                [
                  '@babel/plugin-proposal-class-properties',
                  {
                    loose: true
                  }
                ]
              ]
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

module.exports = config