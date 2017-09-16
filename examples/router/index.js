import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Component from '../pages/component'
import components from '../components.json'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: [{
    path: '/beats',
    name: 'index',
    component: Index
  }, {
    path: '/beats/components',
    name: 'components',
    component: Component,
    children: components.map(({ name }) => {
      return {
        path: `/beats/components/${name}`,
        name,
        component: resolve => require([`../components/${name}`], resolve)
      }
    })
  }]
})
