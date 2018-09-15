import Vue from 'vue'
import App from './App.vue'
import "./assets/js/adapterRem.js"
import "./assets/css/globalStyle.css"

//router
import router from "./router/index.js"
//vux
import store from "./vuex/index.js"
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
