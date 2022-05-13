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
router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
		let logins = 1
		//console.log('beforeEach获取当前的token是否存在  '+store.state.loginModule.token)
		//if (store.state.loginModule.token) {  // 通过vuex state获取当前的token是否存在
		if (confirm('确实要登录吗?')) {
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
		// alert('需要权限')
	} else {
		next();
	}
});
