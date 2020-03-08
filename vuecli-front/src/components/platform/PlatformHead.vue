<template>
  <div>
	  <div class="container">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">论坛首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">精选版块</template>
            <el-menu-item index="2-1">移动开发</el-menu-item>
            <el-menu-item index="2-2">云计算</el-menu-item>
            <el-menu-item index="2-3">java技术</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">web开发</template>
              <el-menu-item index="2-4-1">HTML(CSS)</el-menu-item>
              <el-menu-item index="2-4-2">Javascript</el-menu-item>
              <el-menu-item index="2-4-3">PHP</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">论坛牛人</el-menu-item>
		  <el-menu-item index="4">排行榜</el-menu-item>
		  <el-menu-item index="5">论坛地图</el-menu-item>
		  <el-menu-item index="6">论坛任务</el-menu-item>
		  <el-menu-item index="7">论坛帮助</el-menu-item>
          <el-menu-item index="8">
            <a href="https://www.ele.me" target="_blank">我要发贴</a>
          </el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.container {
  padding-left: 210px;
  width: 1200px;
}

.container .el-menu-demo {
  height: 44px;
}

.container .el-menu--horizontal>.el-menu-item{
	height: 44px;
	line-height: 44px;
}
.container .el-menu--horizontal>.el-submenu .el-submenu__title{
	height: 44px;
	line-height: 44px;
}
</style>