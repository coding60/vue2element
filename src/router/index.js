import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi.vue'
import Guide from '@/components/Guide';
import page1 from '@/components/page1';
import page2 from '@/components/page2';
import Wel from '@/components/Wel'
import userin from '@/components/userin.vue'
import fzcom from '@/components/fzcom.vue'
import brocom from '@/components/brocom.vue'
import CompCom from '@/components/CompCom.vue'
import Watchcom from '@/components/Watchcom.vue'
import RouterHook from '@/components/RouterHook.vue'
import DynamicMatching from '@/components/DynamicMatching.vue'
import ProDetail from '@/components/ProDetail.vue'
import echarts from '@/components/echarts.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		 {
			path: '/ProDetail/:id',
		//	redirect:'/Guide'
		    name: 'ProDetail',
		    component: ProDetail
		},
		{
			path: '/hi',
			name: 'Hi',
			component: Hi
		},
		{
			path: '/Guide',
			name: 'Guide',
			component: Guide,
			alias: '/',
			redirect: '/Wel',
			children: [{
					path: '/page1',
					name: 'page1',
					component: page1
				}, {
					path: '/page2',
					name: 'page2',
					component: page2
				}, {
					path: '/wel',
					name: 'Wel',
					component: Wel
				}, {
					path: '/userin',
					name: 'userin',
					component: userin
				}, {
					path: '/fzcom',
					name: 'fzcom',
					component: fzcom,
				}, {
					path: '/brocom',
					name: 'brocom',
					component: brocom,
				}, {
					path: '/compcom',
					name: 'compcom',
					component: CompCom,
				}, {
					path: '/watchcom',
					name: 'watchcom',
					component: Watchcom,
				}, {
					path: '/routerHook',
					meta: {
						requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
					},
					name: 'RouterHook',
					component: RouterHook,
				}, {
					path: '/dynamicMatching',
					name: 'dynamicMatching',
					component: DynamicMatching,
				},
				{
					path: '/echarts',
					name: 'echarts',
					component: echarts,
				},

			]
		}

	]
})
