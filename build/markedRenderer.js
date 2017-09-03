var marked = require('marked')
var renderer = new marked.Renderer()
var comp = ''

renderer.heading = function(text, level) {
  var headerClass = ''
  if (level === 2) {
    comp = text
    headerClass = 'comp-title'
  } else if (level === 3) {
    headerClass = 'comp-block-title'
  }

  return '<h' + level + ' id="' + text + '" class="' + headerClass + '">' +
    text +
    '<a class="comp-block-anchor" href="' +
    '/#/components/' + comp + '/#' + text +
    '">#</a>' + '</h' + level + '>'
}

module.exports = renderer
