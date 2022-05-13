<template>
	<div class="top">
		<brocom01 ></brocom01>
		<brocom02 ></brocom02>
		
	</div>
</template>

<script>
	import brocom01 from '@/components/brocom01'
	import brocom02 from '@/components/brocom02'
	
	export default {
		components: {
			brocom01,
			brocom02
		},
		data() {
			return {
				partext: '我是父组件的数据',
				chilText: ''

			}

		},
		computed: {


		},
		mounted() {
			//console.log('refs@' + this.$refs.childAll.$data.chilmsg)
			//this.chilText = this.$refs.childAll.$data.chilmsg
		}

	}
</script>

<style>
</style>
