import Vue from 'vue'
import App from './App.vue'
import router from 'router/router'
import store from 'store/store'
import tool from 'utils/tool'
import MintUI from 'mint-ui'
import 'styles/reset.css'
import 'styles/base.css'
import 'mint-ui/lib/style.css'

import headerBar from 'components/widgets/headerBar'

Vue.config.productionTip = false

Vue.use(MintUI)

Object.assign(Vue.prototype,tool)

Vue.component(headerBar.name, headerBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
