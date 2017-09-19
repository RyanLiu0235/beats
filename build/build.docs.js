var webpackConfig = require('./webpack.docs.conf.js')
var builder = require('./build.base.js')

builder(webpackConfig, './docs')
