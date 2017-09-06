var hljs = require('highlight.js')
var marked = require('marked')
var pinyin = require('node-pinyin')
var stripTags = require('./strip-tags.js')
var renderer = new marked.Renderer()
var comp = ''

renderer.heading = function(text, level) {
  var headerClass = ''
  var py = pinyin(text, {
    style: 'normal'
  }).join('-')

  if (level === 2) {
    comp = text
    headerClass = 'comp-title'
  } else if (level === 3) {
    headerClass = 'comp-block-title'
  }

  return '<h' + level + ' name="' + py + '" id="' + py + '" class="' + headerClass + '">' +
    text +
    '<a class="comp-block-anchor" href="' +
    '/#/components/' + comp + '/#' + py +
    '">#</a>' +
    '</h' + level + '>'
}

renderer.paragraph = function(text) {
  return '<p class="comp-block-desc">' + text + '</p>'
}

renderer.code = function(code, lang) {
  return '<div class="comp-demo">' +
    '<div class="demo">' +
    stripTags(code, ['script', 'style']) +
    '</div>' +
    '<div class="source">' +
    hljs.highlight('html', code).value +
    '</div>' +
    '</div>'
}

module.exports = renderer
