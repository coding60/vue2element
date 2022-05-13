<template>
	<div class="top">
		<h3>需要带参数的路由配置</h3>
		<h4>比如一个商品详情页，肯定要带一个商品id</h4>
		<h4>新建一个商品详情页组件proDetail,参数id,那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：</h4>
		<h4><a href="/ProDetail/2022034566" target="_blank">进入商品详情页</a></h4>
		<textarea class="textarea">
			功能部分源码:
			//路由文件index.js
			{
				path: '/ProDetail/:id',
			    name: 'ProDetail',
			    component: ProDetail
			}
			
			</textarea>

	</div>
</template>

<script>
	export default {}
</script>

<style>
</style>
