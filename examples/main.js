// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// reset css
import 'normalize.css'
import './public/styles/index'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
})
Vue.directive('highlight', function(el, { value }) {
  console.log(marked(value))
  el.innerHTML = marked(value)
})

if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
