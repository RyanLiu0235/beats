import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Component from '../pages/component'
import components from '../components.json'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active-link',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/components',
    name: 'components',
    component: Component,
    children: components.map(({ name, link }) => {
      return {
        path: `/components${link}`,
        name,
        component: resolve => require([`@/components/${name}`], resolve)
      }
    })
  }]
})
