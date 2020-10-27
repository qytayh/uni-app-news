import Vue from 'vue'
import App from './App'
import $http from './common/api/http.js'

Vue.config.productionTip = false
Vue.prototype.$http=$http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
