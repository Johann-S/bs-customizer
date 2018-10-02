const path = require('path')
const glob = require('glob-all')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

let fileName = 'bs-customizer.min'
const paths = {
  src: `${path.join(__dirname, 'src/js/')}*.js`,
  index: `${path.join(__dirname, 'src/')}*.html`
}

module.exports = (env, args) => {
  const isProd = args.mode === 'production'

  const conf = {
    entry: './src/js/index.js',
    output: {
      filename: `${fileName}.js`,
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CopyWebpackPlugin([
        'src/js/lib/sass.worker.js'
      ]),
      new MiniCssExtractPlugin({
        filename: `${fileName}.css`,
        chunkFilename: '[id].css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: path.resolve(__dirname, 'index.html'),
        minify: isProd ? {
          removeComments: false,
          collapseWhitespace: true,
          conservativeCollapse: true,
          preserveLineBreaks: true
        } : undefined
      }),
      new WriteFilePlugin()
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

  if (isProd) {
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
