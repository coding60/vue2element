<template>

	<div class="top">
		<h3>v-if控制切换一个元素是否</h3>
		<h4 v-if="seen">现在你看v-if控制的显示</h4>
		<input type="button" value="显示切换开关" @click="seen=!seen" />
		<h3>v-for 指令绑定数组的数据来渲染一个项目列表</h3>
		<h4>以下为v-for渲染的数组</h4>
		 <ol>
		    <li v-for="todo in todos">
		      {{ todo.text }}
		    </li>
		  </ol>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				seen: true,
				todos: [
				      { text: '学习 JavaScript' },
				      { text: '学习 Vue' },
				      { text: '整个牛项目' }
				    ]
			}
		}
	}
</script>
<style>
	.top {
		text-align: center;
	}
</style>
