<template>
	<div id="app">
		<div style="display: flex;width: 100%;">
			<img style="height: 60px;margin-left: 5%;" src="./assets/csdn-logo_.png">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 :show-overflow-tooltip="true">
				<el-menu-item index="1">
					<router-link to="/">首页</router-link>
				</el-menu-item>
				<el-menu-item index="2">博客</el-menu-item>
				<el-menu-item index="3"><router-link to="/xueyuan">学院</router-link></el-menu-item>
				<el-menu-item index="4">下载</el-menu-item>
				<el-menu-item index="5">论坛</el-menu-item>
				<el-menu-item index="6">问答</el-menu-item>
				<el-menu-item index="7">活动</el-menu-item>
				<el-menu-item index="8">专题</el-menu-item>
				<el-menu-item index="9">招聘</el-menu-item>
				<el-menu-item index="10">APP</el-menu-item>
				<el-menu-item index="11">VIP会员</el-menu-item>
				<el-input style="width: 200px;margin-top: 10px;" v-model="input" placeholder="请输入内容"></el-input>
				<span style="font-size: 14px;color: #D92E2E;margin-left: 10px;">写博客</span>
				<el-menu-item to="/login" style="color: #222429;font-size: 14px;margin-left: 20px;">登录/注册</el-menu-item>
			</el-menu>
		</div>
		<router-view />
		<!-- <div class="top">
		<div class="topleft"></div>
		<div class="topright"></div>
	</div> -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
login(){
       this.$router.push({
              path: "/Login"
            });
}
  }
};
</script>

<style lang="scss" scoped="scoped">
	* {
		padding: 0;
		margin: 0;
	}

	// .top {
	// 	display: flex;
	// 	width: 100%;
	// 	height: 50px;
	// }

	// .topleft {
	// 	margin-left: 10%;
	// 	background-color: red;
	// 	width: 50%;
	// }

	// .topright {
	// 	margin-right: 10%;
	// 	background-color: blue;
	// 	width: 30%;
	// }
</style>
