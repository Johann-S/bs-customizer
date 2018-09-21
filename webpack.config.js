const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

let fileName = 'bs-customizer'

module.exports = (env, args) => {
  if (args.mode === 'production') {
    fileName = `${fileName}.min`
  }

  const conf = {
    entry: './src/index.js',
    output: {
      filename: `${fileName}.js`,
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${fileName}.css`,
        chunkFilename: '[id].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            'css-loader'
          ]
        }
      ]
    }
  }

  if (args.mode === 'production') {
    conf.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  } else {
    conf.devtool = 'source-map'
  }

  return conf
}
