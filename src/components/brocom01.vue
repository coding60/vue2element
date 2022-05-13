<template>
	<div class="top">
		<h3>我是兄弟组件brocom01的内容</h3>
		
		<button @click="sendBro">点这里把我的英文名({{enName}})传给我兄弟</button>
	</div>
</template>

<script>
	import Bus from '@/js/eventBus.js'
	export default{
		data(){
			return{
			chilmsg:'我是子组件的数据',
			enName:"old brother"
			}
		},methods:{
			sendBro(){
				Bus.$emit('sendEnBybus',this.enName)
			}
			
		}
	}
</script>

<style>
</style>
