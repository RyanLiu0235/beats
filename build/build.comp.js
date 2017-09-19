var webpackConfig = require('./webpack.comp.conf.js')
var builder = require('./build.base.js')

builder(webpackConfig, './dist')
