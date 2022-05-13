<template>
	<div class="top">
		<h3>需要配置登录权限的路由和利用全局前置守卫</h3>
		<h4>两个文件router/index.js和main.js</h4>
		
		<textarea class="textarea">
			index.js此功能源码
			{
				path: '/routerHook',
				meta: {
					requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
				},
				name: 'RouterHook',
				component: RouterHook,
			}
			main.js此功能源码
			router.beforeEach((to, from, next) => {
			  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
			   if(confirm('确实要登录吗?')){
				 next();
			   }
			    else {
			      next({
			        path: '/login',
			        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
			      })
			   }
			  // alert('需要权限')
			  }
			  else {
			    next();
			  }
			 });
		</textarea>
	
		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
</style>
