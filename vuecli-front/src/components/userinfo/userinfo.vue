<template>
  <div class="container">
    <div>
      <el-col :span="12" class="broadside">
        <el-menu
         :default-active="activeIndex"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="#96B1AD"
          active-text-color="#3A8881"
           @select="handleOpen"
           
        >
         <router-link  to="/userinfo/pensonal">
          <el-menu-item index="1">
            <i class="el-icon-user-solid"></i>
            <span class="title">个人中心</span>
          </el-menu-item> 
        </router-link>
          <router-link to="/userinfo/attention">
          <el-menu-item index="2">
            <i class="el-icon-tickets"></i>
         <span class="title">我的关注</span>
          </el-menu-item>
            </router-link>

            <router-link to="/userinfo/collect">
          <el-menu-item index="3">
            <i class="el-icon-s-flag"></i>
                   <span class="title">我的收藏</span>
          </el-menu-item>
           </router-link>
        </el-menu>
      </el-col> 
    </div>
    <div id="content">
    <pensonal v-if="ul==0"></pensonal>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Pensonal from "./pensonal.vue"
export default {
   components:{
"pensonal":Pensonal
   },
      data(){
        return{
        activeIndex:"1",
        staus:'',
        ul:0

        }
    },
    methods:{
    handleOpen(key, keyPath) {
        this.ul=1;
        console.log(key, keyPath);
      }
    },created(){
  this.ul=0
    }

}
</script>
<style  scoped>
.container {
  width: 1200px;
  height: 90%;
  margin: 16px auto 0;
}
.broadside {
  width: 200px;
}
#content {
  margin-left: 199px;
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>">

