// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
process.env.MOCK && require('@/mock')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
  	config:{
  		serverDomain:'https://m.maizuo.com'
  	}
  },
  components: { App },
  template: '<App/>'
})
