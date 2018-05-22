import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'layout',
    component: resolve => require(['../views/layout'], resolve),
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/v1',
      meta: {
        icon: 'dashboard'
      },
      component: resolve => require(['../views/dashboard/base'], resolve),
      children: [{
        path: '/dashboard/v1',
        name: '分析页',
        component: resolve => require(['../views/dashboard/v1'], resolve),
      }, {
        path: '/dashboard/v2',
        name: '监控页',
        component: resolve => require(['../views/dashboard/v2'], resolve),
      }]
    }, {
      path: '/auth',
      name: 'auth',
      redirect: '/login',
      meta: {
        icon: 'lock',
      },
      component: resolve => require(['../views/auth/base'], resolve),
      children: [{
        path: '/auth/login',
        name: 'login',
        redirect: '/login',
        component: resolve => require(['../views/auth/login'], resolve)
      }, {
        path: '/auth/register',
        name: 'register',
        redirect: '/register',
        component: resolve => require(['../views/auth/register'], resolve)
      }, {
        path: '/auth/forget',
        name: 'forget',
        redirect: '/forget',
        component: resolve => require(['../views/auth/forget'], resolve)
      }]
    },]
  }, {
    path: '/login',
    name: 'login',
    component: resolve => require(['../views/auth/login'], resolve)
  }, {
    path: '/register',
    name: 'register',
    component: resolve => require(['../views/auth/register'], resolve)
  }, {
    path: '/forget',
    name: 'forget',
    component: resolve => require(['../views/auth/forget'], resolve)
  }]
})
