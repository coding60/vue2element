<template>
	<div class="top">
		<h3>我是子组件fzcom01的内容</h3>
		<h4>{{partext}}</h4>
		<p></p>
		<button @click="sentPa">点我把的我的英文名:{{enName}}传给父组件</button>
	</div>
</template>

<script>
	export default {
		props: ['partext'],
		data() {
			return {
				chilmsg: '我是子组件的数据',
				enName: 'little child'
			}
		},
		methods:{
			sentPa() {
				this.$emit('sentPa', this.enName)

			}
		}
	}
</script>

<style>
</style>
