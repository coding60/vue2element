<template>
	<div class="top">
		<h3>watch监听和观察组件状态变化的钩子函数，常见的应用场景有监听路由变化，以及父组件传递给子组件的props数据的变化等</h3>
		<h4>{{beforeChange}}</h4>
		<h4>{{message}}</h4>
		
		<button @click="change">点我就变</button>
		<textarea class="textarea">
			<template>
				<div class="top">
					<h3>watch监听和观察组件状态变化的钩子函数，常见的应用场景有监听路由变化，以及父组件传递给子组件的props数据的变化等</h3>
					<h4>{{beforeChange}}</h4>
					<h4>{{message}}</h4>
					
					<button @click="change">点我就变</button>
					
				</div>
			</template>
			
			<script>
				export default {
					data(){
						return{
						beforeChange:'我现在还没有变化',
						message:'还没监测到变化'
						}
					},methods:{
						change(){
							this.beforeChange='我现在变化了'
						}
						
					},watch:{
						beforeChange(newVal,oldVal){
							this.message='监测到变化'
						}
						
					}
					
				}
			</script>
			
			<style>
			</style>
			
		</textarea>
	</div>
</template>

<script>
	export default {
		data(){
			return{
			beforeChange:'我现在还没有变化',
			message:'还没监测到变化'
			}
		},methods:{
			change(){
				this.beforeChange='我现在变化了'
			}
			
		},watch:{
			beforeChange(newVal,oldVal){
				this.message='监测到变化'
			}
			
		}
		
	}
</script>

<style>
</style>
