<template>
	<div class="top">
		<h3>下面是子组件的内容</h3>
		<fzcom01 :partext='partext' ref='childAll' v-on:sentPa='sentPa'></fzcom01>
		<h3>下面是父组件的内容</h3>
		<h3>下面是通过ref属性获取子组件的数据</h3>
		<h4>{{chilText}}</h4>
		<h4>下面是子组件传过来的内容</h4>
		<h4>我是子组件的英语名:{{enName}}</h4>
		<textarea style="width: 100%;height: 800px;">
			<template>
				<div class="top">
					<h3>下面是子组件的内容</h3>
					<fzcom01 :partext='partext' ref='childAll' v-on:sentPa='sentPa'></fzcom01>
					<h3>下面是父组件的内容</h3>
					<h3>下面是通过ref属性获取子组件的数据</h3>
					<h4>{{chilText}}</h4>
					<h4>下面是子组件传过来的内容</h4>
					<h4>我是子组件的英语名:{{enName}}</h4>
					
					</template>
					<script>
	import fzcom01 from '@/components/fzcom01'
	export default {
		components: {
			fzcom01,
		},
		data() {
			return {
				partext: '我是父组件的数据',
				chilText: '',
				enName: ''

			}

		},
		computed: {


		},
		mounted() {
			console.log('refs@' + this.$refs.childAll.$data.chilmsg)
			this.chilText = this.$refs.childAll.$data.chilmsg
		},
		methods: {
			sentPa: function(receiveValue) {
				this.enName = receiveValue
			}

		}

	}
	</script>
	</textarea>
	</div>
</template>

<script>
	import fzcom01 from '@/components/fzcom01'
	export default {
		components: {
			fzcom01,
		},
		data() {
			return {
				partext: '我是父组件的数据',
				chilText: '',
				enName: ''

			}

		},
		computed: {


		},
		mounted() {
			console.log('refs@' + this.$refs.childAll.$data.chilmsg)
			this.chilText = this.$refs.childAll.$data.chilmsg
		},
		methods: {
			sentPa: function(receiveValue) {
				this.enName = receiveValue
			}

		}

	}
</script>

<style>
</style>
