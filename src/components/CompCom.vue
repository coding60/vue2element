<template>
	<div id="top">
		<h3>前端展示的数据需要一定的逻辑处理时，最好用computed计算属性</h3>
		<h4>我的英文名小写:{{sname}}</h4>
		<h4>我的英文名大写:{{bname}}</h4>
		<textarea class="textarea">
			<template>
				<div id="top">
					<h3>前端展示的数据需要一定的逻辑处理时，最好用computed计算属性</h3>
					<h4>我的英文名小写:{{sname}}</h4>
					<h4>我的英文名大写:{{bname}}</h4>
				
				</div>
			</template>
			
			<script>
				export default {
					data(){
						return {
							sname:'mike',
							//bname:''
						}
					},computed: {
						bname(){
							// get:function(){
								return this.sname.toUpperCase()
							// },
							// set:function(){
							// 	this.$alert=this.sname.toUpperCase()
							// }
							
							
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
			return {
				sname:'mike',
				//bname:''
			}
		},computed: {
			bname(){
				// get:function(){
					return this.sname.toUpperCase()
				// },
				// set:function(){
				// 	this.$alert=this.sname.toUpperCase()
				// }
				
				
			}
			
		}
	}
</script>

<style>
	.textarea {
	   fontFamily: Times New Roman;
	   width: 100%;
	   height: 600px;
	   fontSize: 48;
	   color: #6600cc;
	   fontWeight: bold;
	   fontStyle: italic;
	   textDecoration: underline;
	   textAlign: left;
	   paddingLeft: 9;
	   paddingRight: 9;
	   leading: 6;
	   textIndent: 30;
	   letterSpacing: 0;
	   backgroundAlpha: 0.77;
	   backgroundColor: #ffcc99;
	   borderStyle: solid;
	   borderColor: #cc0000;
	   borderThickness: 1;
	   cornerRadius: 10;
	   dropShadowColor: #99ffff;
	   dropShadowEnabled: true;
	   shadowDirection: center;
	   shadowDistance: 7;
	   
	}
</style>
