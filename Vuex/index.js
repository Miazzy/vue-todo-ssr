import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'
import createstore from './store/store'

import './assets/styles/global.styl'

Vue.use(Vuex)

const store = createstore()

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  store,
  render: (h) => h(App)
}).$mount(root);

