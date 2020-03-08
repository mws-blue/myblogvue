<template>
  <div id="app">
    <div style="display: flex;width: 100%">
      <img style="height: 60px;margin-left: 5%;" src="./assets/csdn-logo_.png"/>
    <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" mode="horizontal" 
    @select="handleSelect"
    :show-overflow-tooltip="true"
    >
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/blog">博客</router-link></el-menu-item>
        <el-menu-item index="3">
          <router-link to="/xueyuan">学院</router-link>
        </el-menu-item>
        <el-menu-item index="4">下载</el-menu-item>
        <el-menu-item index="5">
          <router-link to="/platform">论坛</router-link>
        </el-menu-item>
        <el-menu-item index="6">问答</el-menu-item>
        <el-menu-item index="7">活动</el-menu-item>
        <el-menu-item index="8">专题</el-menu-item>
        <el-menu-item index="9">招聘</el-menu-item>
        <el-menu-item index="10">APP</el-menu-item>
        <el-menu-item index="11">VIP会员</el-menu-item>
        <el-menu-item index="12" v-show="isLogin=='login'">
          <router-link to="/Login">登录/注册</router-link>
        </el-menu-item>
        <el-input style="width: 200px;margin-top: 10px;" v-model="input" placeholder="请输入内容"></el-input>
        <el-menu-item index="12">
          <router-link to="/wangeditor">写博客</router-link>
        </el-menu-item>
        <!-- <span style="font-size: 14px;color: #D92E2E;margin-left: 10px;">写博客</span> -->
        
        <el-menu-item  
        v-show="isLogin=='login'" 
        style="color: #222429;font-size: 14px;margin-left: 20px;" 
        @click="login">
        登录/注册
        </el-menu-item>
        
        <el-dropdown  v-show="isLogin=='menu'">
               <span class="el-dropdown-link" style="margin-bottom:15px;">
                     <span class="title" style="padding-right: 8px;margin-left:15px;" >{{ fit }}</span>
                        <span style="padding-top:15px"><el-avatar shape="circle"  :size="40" :fit="fit" :src="url"></el-avatar></span>
               </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="userinfo">个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="myBlogs">我的博客</el-dropdown-item>
        <el-dropdown-item @click.native="manageBlogs">管理博客</el-dropdown-item>
        <el-dropdown-item>我的收藏</el-dropdown-item>
        <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8888";
export default {
  data() {
    return {
      activeIndex: "1",
      input: "",
      isLogin: "login",
      fit: "",
      url: ""
    };
  },
  methods: {
    login(){
       this.$router.push({path:"/Login"});
    },
    userinfo() {
      this.$router.push({ path: "/userinfo" });
    },
    myBlogs() {
      this.$router.push({ path: "/myBlogs" });
    },
    manageBlogs() {
      this.$router.push({ path: "/manageBlogs" });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      localStorage.setItem("loginStatus", "login");
      this.$router.push({ path: "/Login" });
    }
  },
  created() {
      let vm =this
    if (localStorage.getItem("loginStatus") == "menu") {
      this.isLogin = "menu";
      this.fit = localStorage.getItem("username");
      axios.get("/user", {
          params: {
            username: localStorage.getItem("username")
          }
        })
        .then(function(response) {
          console.log(response);
          localStorage.setItem("userId",response.data.userId);
          vm.url=response.data.imgUrl
        })
        .catch(function(error) {
          console.log(error);
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
