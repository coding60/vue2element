<template>    
<div class="top">        
<h3>Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：</h3>    
<h4> {{ msg }}</h4>  
<div>除了文本插值，我们还可以用v-bind绑定元素attribute：
<h4 v-bind:title="msgBind">
    鼠标悬停几秒钟查看此处v-bind动态绑定的提示信息！
  </h4>
</div>  
	
	

</div>
</template>
<script>  
export default {    
data() {      
return {
	msg:'此处为字符串模板{{msg}}渲染的数据',
	msgBind: '页面加载于 ' + new Date().toLocaleString()

	
}      
}    
}
</script>
<style>    
.top{        
text-align:center;    
}
h4{
	color:darkred;
}
</style>
