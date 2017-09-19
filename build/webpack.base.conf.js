var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var vueLoaderConfig = require('./vue-loader.conf')
var renderer = require('./markedRenderer')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: './examples/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? '/beats/' : '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src/'),
      docs: resolve('examples/docs/')
    },
    symlinks: false
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('examples'), resolve('test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.md$/,
      loader: [{
        loader: 'html-loader'
      }, {
        loader: 'markdown-loader',
        options: {
          renderer
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('examples'), resolve('test')]
    }]
  }
}
