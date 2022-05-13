<template>
	<div class="top">
		<h3>为了让用户和你的应用进行交互，我们可以用 v-on 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：</h3>
		<h4>现在你看v-on指令反转</h4>
		<p>{{ msgvon }}</p>
		<button v-on:click="revtext()">反转</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msgvon: 'welcome',
			}

		},
		methods: {

			revtext: function(e) {
				console.log(e)
				this.msgvon = this.msgvon.split('').reverse().join('')
			}
		},
	}
</script>

<style>
</style>
