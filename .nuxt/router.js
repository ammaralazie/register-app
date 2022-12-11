import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _700fbc44 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4ac3fb7c = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages/orders/index" */))
const _591897e4 = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _03c29e6f = () => interopDefault(import('..\\pages\\students\\index.vue' /* webpackChunkName: "pages/students/index" */))
const _0a4e54e5 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _7c9ecec4 = () => interopDefault(import('..\\pages\\students\\add\\index.vue' /* webpackChunkName: "pages/students/add/index" */))
const _737ce4a4 = () => interopDefault(import('..\\pages\\students\\profile\\_id.vue' /* webpackChunkName: "pages/students/profile/_id" */))
const _035f0272 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _700fbc44,
    name: "login"
  }, {
    path: "/orders",
    component: _4ac3fb7c,
    name: "orders"
  }, {
    path: "/reports",
    component: _591897e4,
    name: "reports"
  }, {
    path: "/students",
    component: _03c29e6f,
    name: "students"
  }, {
    path: "/users",
    component: _0a4e54e5,
    name: "users"
  }, {
    path: "/students/add",
    component: _7c9ecec4,
    name: "students-add"
  }, {
    path: "/students/profile/:id?",
    component: _737ce4a4,
    name: "students-profile-id"
  }, {
    path: "/",
    component: _035f0272,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
