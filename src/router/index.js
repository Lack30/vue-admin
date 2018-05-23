import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '首页',
    component: resolve => require(['../views/layout'], resolve),
    children: [{
      path: '/dashboard',
      name: '仪表盘',
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
        name: '工作台',
        component: resolve => require(['../views/dashboard/v2'], resolve),
      }]
    },{
      path: '/form',
      name: '表单',
      redirect: '/form/basic',
      meta: {
        icon: 'form',
      },
      component: resolve => require(['../views/form/base'], resolve),
      children: [{
        path: '/form/basic',
        name: '基础表单',
        component: resolve => require(['../views/form/basicForm'], resolve)
      },{
        path: '/form/step',
        name: '分步表单',
        component: resolve => require(['../views/form/stepForm'], resolve)
      },{
        path: '/form/advanced',
        name: '高级表单',
        component: resolve => require(['../views/form/advancedForm'], resolve)
      }]
    },{
      path: '/auth',
      name: '验证页',
      redirect: '/login',
      meta: {
        icon: 'lock',
      },
      component: resolve => require(['../views/auth/base'], resolve),
      children: [{
        path: '/auth/login',
        name: '登录',
        redirect: '/login',
        component: resolve => require(['../views/auth/login'], resolve)
      }, {
        path: '/auth/register',
        name: '注册',
        redirect: '/register',
        component: resolve => require(['../views/auth/register'], resolve)
      }, {
        path: '/auth/forget',
        name: '忘记密码',
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
