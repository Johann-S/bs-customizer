const path = require('path')
const glob = require('glob-all')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CleanCSS = require('clean-css')
const { bootstrapVersion } = require('./src/js/config')

let fileName = 'bs-customizer.min'
const paths = {
  src: `${path.join(__dirname, 'src/js/')}*.js`,
  index: `${path.join(__dirname, 'src/')}*.html`
}

const cleanCssConfig = {
  level: {
    1: {
      specialComments: 'all'
    }
  },
  format: {
    breakWith: 'lf'
  },
  returnPromise: true
}

const uglifyJsConfig = {
  compress: {
    typeofs: false
  },
  mangle: true,
  output: {
    comments: /^!|@preserve|@license|@cc_on/i
  }
}

const htmlminifierOpts = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: false,
  decodeEntities: true,
  minifyCSS: {
    level: {
      1: {
        specialComments: 0
      }
    }
  },
  minifyJS: uglifyJsConfig,
  minifyURLs: false,
  processConditionalComments: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: false, // this leads to invalid HTML
  sortAttributes: true,
  sortClassName: true
}

module.exports = (env, args) => {
  const isProd = args.mode === 'production'

  const conf = {
    entry: './src/js/index.js',
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    plugins: [
      new CleanWebpackPlugin([
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'index.html')
      ]),
      new CopyWebpackPlugin([
        'src/js/lib/sass.worker.js'
      ]),
      new MiniCssExtractPlugin({
        chunkFilename: `${fileName}.css`
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: path.resolve(__dirname, 'index.html'),
        minify: isProd ? htmlminifierOpts : false,
        bsVersion: bootstrapVersion
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
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
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-dynamic-import']
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
        }
      ]
    },
    resolve: {
      alias: {
        jquery$: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.slim.js')
      }
    }
  }

  if (isProd) {
    conf.output.publicPath = 'dist/'
    conf.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: uglifyJsConfig
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: {
            process: (input, opts) => {
              delete opts.to

              const cleanCss = new CleanCSS(Object.assign(cleanCssConfig, opts))
              return cleanCss.minify(input)
                .then(output => ({ css: output.styles }))
            }
          }
        })
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
