var hljs = require('highlight.js')
var marked = require('marked')
var pinyin = require('node-pinyin')
var fetch = require('./strip-tags.js').fetch
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
    '/beats/components/' + comp + '#' + py +
    '">#</a>' +
    '</h' + level + '>'
}

renderer.paragraph = function(text) {
  return '<p class="comp-block-desc">' + text + '</p>'
}

renderer.code = function(code, lang) {
  return '<div class="comp-demo">' +
    '<div class="demo">' +
    fetch(code, 'template') +
    '</div>' +
    '<div class="source">' +
    '<pre><code class="html">' +
    hljs.highlight('html', code).value +
    '</code></pre>' +
    '</div>' +
    '</div>'
}

module.exports = renderer
