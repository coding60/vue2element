<template>
	<div id="wel">
		此项目基于vue2.6.10,vue-router3.5.3,element2.15.6,示例项目,包括基本组件用法,实际生产代码,基础语法等
		整体用Container布局容器进行页面布局,方便快速搭建页面的基本结构.
		此为欢迎页面，实现此功能需要设为子路由，及路由别名！
		<h4>入口文件源码</h4>
		<textarea style="width: 100%;height: 800px;">
			<template>
				<el-container style="height: 500px; border: 1px solid #eee">
					
					<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
						<a href="/"><img src="http://shiti.coding60.com/static/ytklogo.png"></a>
						<el-menu :unique-opened="true" :default-active="$route.path" @select="handleSelect">
							<el-submenu index="1">
								<template slot="title"><i class="el-icon-menu"></i>vue2</template>
								<el-menu-item-group>
									<template slot="title">基础</template>
									<el-menu-item index="/page1">声明式渲染</el-menu-item>
									<el-menu-item index="/page2">条件与循环</el-menu-item>
									<el-menu-item index="/userin">处理用户输入</el-menu-item>
									<el-menu-item index="/fzcom">父子组件</el-menu-item>
									<el-menu-item index="/brocom">兄弟组件</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title"><i class="el-icon-menu"></i>导航二</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="2-1">选项1</el-menu-item>
									<el-menu-item index="2-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="2-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="2-4">
									<template slot="title">选项4</template>
									<el-menu-item index="2-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title"><i class="el-icon-menu"></i>导航三</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="3-1">选项1</el-menu-item>
									<el-menu-item index="3-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="3-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="3-4">
									<template slot="title">选项4</template>
									<el-menu-item index="3-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
						</el-menu>
					</el-aside>
			
					<el-container>
						<el-header style="text-align: center; font-size: 12px">
							<span>整个项目架构是按照标准项目构建，目录结构等，每一个示例在项目源码中均一一对应，下载整个项目进行查看！</span>
							<el-dropdown>
								<i class="el-icon-setting" style="margin-right: 15px"></i>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>查看</el-dropdown-item>
									<el-dropdown-item>新增</el-dropdown-item>
									<el-dropdown-item>删除</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							<span>60编程网</span>
						</el-header>
						<el-main style="background-color: rgb(238, 241, 246)">
							
							<router-view></router-view>
							
						</el-main>
			
			
					</el-container>
				</el-container>
			
			</template>
			
			<style>
				.el-header {
					background-color: #B3C0D1;
					color: #333;
					line-height: 60px;
				}
			
				.el-aside {
					color: #333;
				}
			</style>
			
			<script>
				export default {
					data() {
						const item = {
							date: '2016-05-02',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1518 弄'
						};
						return {
							tableData: Array(20).fill(item)
						}
					},
					methods: {
						handleSelect(path) {
							this.$router.push(path)
						},
					}
				};
			</script>
			
		</textarea>
	</div>
	
	
</template>

<script>
</script>

<style>
</style>
