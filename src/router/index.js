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
        component: resolve => require(['../views/auth/login'], resolve)
      }, {
        path: '/auth/register',
        name: '注册',
        component: resolve => require(['../views/auth/register'], resolve)
      }, {
        path: '/auth/forget',
        name: '忘记密码',
        component: resolve => require(['../views/auth/forget'], resolve)
      }, {
        path: '/auth/403',
        name: '403错误',
        component: resolve => require(['../views/auth/403'], resolve)
      }, {
        path: '/auth/404',
        name: '404错误',
        component: resolve => require(['../views/auth/404'], resolve)
      }, {
        path: '/auth/500',
        name: '500错误',
        component: resolve => require(['../views/auth/500'], resolve)
      }]
    },{
      path: '/list',
      name: '列表页',
      component: resolve => require(['../views/list/base'], resolve),
      meta: {
        icon: 'table',
      },
      children: [{
        path: '/list/table',
        name: '查询表格',
        component: resolve => require(['../views/list/table-list'], resolve),
      },{
        path: '/list/basic',
        name: '标准列表',
        component: resolve => require(['../views/list/basic-list'], resolve),
      },{
        path: '/list/card',
        name: '卡片列表',
        component: resolve => require(['../views/list/card-list'], resolve),
      },{
        path: '/list/article',
        name: '文章列表',
        component: resolve => require(['../views/list/article-list'], resolve),
      }]
    }]
  }, {
    path: '/login',
    name: 'login',
    component: resolve => require(['../views/login'], resolve)
  }, {
    path: '/register',
    name: 'register',
    component: resolve => require(['../views/register'], resolve)
  }, {
    path: '/forget',
    name: 'forget',
    component: resolve => require(['../views/forget'], resolve)
  }]
})
