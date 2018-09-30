const path = require('path')
const glob = require('glob-all')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let fileName = 'bs-customizer.min'
const paths = {
  src: `${path.join(__dirname, 'src/')}*.js`,
  index: `${path.join(__dirname, './')}*.html`
}

module.exports = (env, args) => {
  const conf = {
    entry: './src/index.js',
    output: {
      filename: `${fileName}.js`,
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CopyWebpackPlugin([
        'src/lib/sass.worker.js'
      ]),
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
              options: {}
            },
            'css-loader'
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.svg/,
          loader: 'file-loader',
          options: {
            name: 'svg/[name].[ext]'
          }
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

    conf.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync([
          paths.src,
          paths.index
        ]),
        whitelistPatterns: [
          /^modal/
        ]
      })
    )
  } else {
    conf.devtool = 'source-map'
    conf.devServer = {
      publicPath: '/dist/'
    }
  }

  return conf
}
