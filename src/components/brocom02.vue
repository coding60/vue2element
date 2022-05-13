<template>
	<div class="top">
		<h3>我是兄弟组件brocom02的内容</h3>
		
		<p>以下是brocom01兄弟传我他的英文名字</p>
		<h4>{{receiveName}}</h4>
	</div>
</template>

<script>
	import Bus from '@/js/eventBus.js'
	export default{
		data(){
			return{
			chilmsg:'我是子组件的数据',
			receiveName:''
			}
		},mounted() {
			Bus.$on('sendEnBybus',data=>{
				this.receiveName=data
			})
		}
	}
</script>

<style>
</style>
