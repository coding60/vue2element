// import Vue from 'vue'
// import App from './App.vue'
// import './plugins/element.js'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'



// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')