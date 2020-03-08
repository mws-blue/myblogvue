<template>
  <div class="blog-right">
    <div>
      <img :src="JumpServer" width="100%" />
    </div>
    <div class="ad-csdn">
      <img :src="blogdevteam" class="csdn-avatar" />
      <h3>CSDN官方博客</h3>
      <a href="#">点击进入</a>
    </div>
    <div class="blog-expert">
      <h3 class="expert-head">
        <span></span>
        <span>博客专家</span>
        <a href="#">专家申请</a>
      </h3>
      <div v-for="(item,index) in expertList" :key="index" class="expert-selfbox">
        <div class="expert-self">
          <img :src="item.imgUrl" class="expert-avatar" alt />
          <div class="self-descBox">
            <p class="self-desc1">
              <span>{{item.username}}</span>
              <img :src="score" alt="" width="10px" height="10px">
            </p>
            <p class="self-desc2">
              <span>{{item.ujob}}</span>
              <span>{{item.uArticleNum}}篇</span>
            </p>
          </div>
        </div>

        <p class="expert-desc">{{item.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import JumpServer from "@/assets/blogImg/JumpServer.jpg";
import blogdevteam from "@/assets/blogImg/blogdevteam.jpg";
import dyc87112 from "@/assets/blogImg/dyc87112.jpg";
import score from "@/assets/platformImg/score.gif";
export default {
  data: function() {
    return {
      score,
      JumpServer: JumpServer,
      blogdevteam: blogdevteam,
      expertList: [
        {
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
        },
        {
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
        },
        {
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
        },
        {
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
		    },
		{
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
		},
		{
          expertAvatar: dyc87112,
          expertName: "程序员DD",
          job: "架构师",
          article: "240篇",
          desc: "独立博客千万访问"
        }
      ]
    };
  },
  methods:{
     getProfession(){
       this.$http.get("/getProfession")
       .then(res => {
         console.log(res)
         this.expertList = res.data;
       })
       .catch(err => {
         console.error(err); 
       })
     }
  },
  mounted(){
    this.getProfession();
  }
};
</script>

<style>
.blog-right {
  width: 30%;
}
.ad-csdn {
  height: 60px;
  display: flex;
  background-color: #fff;
  margin: 8px 0;
  justify-content: space-around;
  align-items: center;
}
.csdn-avatar {
  width: 40px;
  border-radius: 50%;
}
.ad-csdn h3 {
  font-weight: 500;
}

.ad-csdn a {
  display: inline-block;
  width: 80px;
  height: 25px;
  border: 1px solid red;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  line-height: 25px;
  font-weight: 600;
  color: red;
}

.ad-csdn a:hover {
  background-color: red;
  color: #fff;
}

.blog-expert {
  background-color: #fff;
   padding: 0 10px;
}

.expert-head {
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 400;
  position: relative;
}

.expert-head span:first-child {
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: red;
  margin-right: 8px;
}

.expert-head a {
  text-decoration: none;
  color: #8399ea;
  background-color: #eaf4fc;
  position: absolute;
  right: 10px;
}
.expert-selfbox{
  border: 1px solid #E9E9E9;
	padding:10px;
  margin-bottom: 10px;
}
.expert-self {
  display: flex;
  align-items: center;
}
.expert-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 4px;
}
.self-descBox{
	width: 100%;
}
.self-desc1{
	/* padding: 0 10px; */
	display: flex;
	justify-content: space-between;
  align-items: center;
}
.self-desc2{
	/* padding: 0 10px; */
	display: flex;
	justify-content: space-between;
	color: #8590A6;
}
.expert-desc {
 /* width: 100%; */
  margin: 0;
  padding: 5px 0 5px 10px;
  color: #8590A6;
  /* padding-left: 10px; */
}
</style>