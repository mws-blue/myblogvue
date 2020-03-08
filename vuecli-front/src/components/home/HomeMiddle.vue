<template>
  <div class="home-middle">
    <div>
      <img :src="homeHuaWei" alt width="100%" height="64px" />
    </div>
    <div class="ad-box">
      <div class="lunbo-block">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in lunboList" :key="item">
            <img :src="item" class="lunboImg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="product-img">
        <img :src="fucnsia" class="adImg-top" alt />
        <img :src="spark" class="adImg-next" alt />
      </div>
    </div>
    <div v-for="(item,index) in mydata" :key="index" class="middlebottom">
      <h3>
        <a style="width: 100%;" href="http://www.baidu.com">{{item.aName}}</a>
      </h3>
      <div class="middlebottomxiao">{{item.aContent}}</div>
      <div class="middlebottomtop">
        <div class="middlebottomtopleft">
          <img class="imgtop" :src="item.imgUrl" alt />
          <span>{{item.username}}</span>
        </div>
        <div class="middlebottomtopright">
          <div>
            <span class="iconfont icon-dianzan"></span>
            <span>{{item.aLike}}</span>
          </div>
          <div>
            <span class="iconfont icon-ico_yueduliang"></span>
            <span>{{item.aRead}}</span>
          </div>

          <div>
            <span class="iconfont icon-pinglun"></span>
            <span>{{item.aComment}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/iconfont/blogMain/iconfont.css";

import homeHuaWei from "@/assets/homeImg/AirEngine.jpg";
import lunbo1 from "@/assets/homeImg/lunbo1.png";
import lunbo2 from "@/assets/homeImg/lunbo2.png";
import lunbo3 from "@/assets/homeImg/lunbo3.png";
import fucnsia from "@/assets/homeImg/fucnsia.jpg";
import spark from "@/assets/homeImg/spark.jpg";
import wen from "@/assets/middle/wen.jpg";

export default {
  data: function() {
    return {
      homeHuaWei: homeHuaWei,
      fucnsia: fucnsia,
      spark: spark,
      lunboList: [lunbo1, lunbo2, lunbo3],
      currentIndex: 0,
      mydata: []
    };
  },
  methods:{
    getHomeArticle(){
      this.$http.get("/getHomeArticle")
      .then(res=>{
        console.log(res);
        this.mydata = res.data;
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
     this.getHomeArticle();
  }
};
</script>

<style>
.home-middle {
  width: 58%;
  position: relative;
  margin: 0, 10px;
  background-color: white;
}

.lunboImg {
  width: 100%;
  height: 200px;
}

.ad-box {
  display: flex;
  margin-top: 4px;
}

.adImg-top {
  width: 100%;
  height: 98px;
}

.adImg-next {
  width: 100%;
  height: 98px;
}

.product-img {
  width: 30%;
  display: inline-block;
  margin-left: 2px;
}

.lunbo-block {
  width: 70%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.middlebottom {
  width: 100%;
  height: 130px;
  background-color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
}

.middlebottom:hover {
  background-color: #fafafa;
}

.middlebottom h3 {
  margin: 0;
  padding: 0 0 5px 0;
}
.middlebottom h3 a {
  text-decoration: none;
  color: #3d3d3d;
}

.middlebottom img {
  cursor: pointer;
}

.middlebottomxiao {
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #8a8a8a;
  padding-bottom: 2px;
}

.imgtop {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.middlebottomtop {
  width: 100%;
  height: 30px;
  font-size: 10px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middlebottomtopleft {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middlebottomtopright {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
}
.middlebottomtopright div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.middlebottomtopright div span {
  display: inline-block;
  width: 16px;
  height: 18px;
  text-align: center;
  line-height: 18px;
}
</style>
