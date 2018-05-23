// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'vue-antd-ui'
import NProcess from 'nprogress'
import 'vue-antd-ui/dist/antd.min.css'
import './assets/css/style.css'
import axios from 'axios'
require('./mock')

Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  NProcess.start()
  next()
})

router.afterEach(transition => {
  NProcess.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
