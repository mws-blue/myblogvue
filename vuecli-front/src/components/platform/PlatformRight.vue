<template>
  <div>
    <div class="userInfo-box">
      <div class="userInfo-top">
        <a href="#">
          <img :src="userAvatar" class="user-avatar" alt="">
        </a>
        <div class="top-right">
            <a href="#"><strong>mwsblue</strong></a>
          <div>
            <img :src="bbs1" alt="">
          </div>
        </div>
      </div>
      <div class="userInfo-next">
          <ul>
            <li>
              <span>剩余可用分</span>
              <em>200</em>
              <img :src="score" alt="">
            </li>
            <li>
              <span>总技术积分</span>
              <em>200</em>
              <img :src="score" alt="">
            </li>
            <li>
              <span>总非技术分</span>
              <em>200</em>
              <img :src="score" alt="">
            </li>
            <li>
              <span>现在排名</span>
              <strong>254060</strong>
              <!-- <img :src="score" alt=""> -->
            </li>
            <li>
              <span>上次排名</span>
              <strong>145200</strong>
              <!-- <img :src="score" alt=""> -->
            </li>
            <li></li>
          </ul>
      </div>
    </div>
    <div class="honor-box">
       <div class="honor-head">
         <span>荣誉榜</span>
         <div>
           <span>周榜</span>
           <span>月榜</span>
           <span>总榜</span>
         </div>
       </div>
       <div v-for="(item,index) in 30" :key="index" class="honor-container">
         <ul>
           <li class="honor-cols">
             <span class="num-tag">{{index+1}}</span>
             <label>
               <a href="#">
                 <img :src="userAvatar" alt="">
                 <strong>天际的海浪</strong>
               </a>
             </label>
             <span class="hot-num">12444</span>
           </li>
         </ul>
       </div>
    </div>
    <div class="annoucement">
        <h3>论坛公告</h3>
        <ul>
          <li><a href="#">有奖征集：令你最难忘的敲代码环境</a></li>
          <li><a href="#">CSDN Blog系统升级通知</a></li>
          <li><a href="#">CSDN博主排名更新公告</a></li>
          <li><a href="#">为了不被老阿姨们鄙视，程序员们快来拯救大家吧~~~~</a></li>
          <li><a href="#">参与讨论赢取豪礼，Intel至强七重助力！</a></li>
          <li><a href="#">Command Line Heroes中文名由你定！赢精美礼品！</a></li>
          <li><a href="#">免费注册融云，多重好礼等你来拿！</a></li>
          <li><a href="#">【有奖调研】深度学习平台邀您来参与</a></li>
        </ul>
    </div>
    <div class="suggest">
        <div class="welcom-sug">
          <a href="#">欢迎建议意见</a>
        </div>
        <div class="sel-item">
          <a href="#">论坛规则</a>
          <a href="#">提问的智慧</a>
          <a href="#">常见问题</a>
        </div>
    </div>
  </div>
</template>

<script>
import userAvatar from "@/assets/platformImg/userAvatar.jpg";
import bbs1 from "@/assets/platformImg/bbs1.png";
import score from "@/assets/platformImg/score.gif";
export default {
   data:function(){
     return {
       userAvatar,
       bbs1,
       score
     }
   }
}
</script>

<style>
.userInfo-box{
  background-color: white;
  margin-bottom: 10px;
}
.userInfo-top{
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #F2F2F2;
}
.user-avatar{
  width: 62px;
  height: 62px;
  border-radius: 50%;
}
.top-right{
  padding-left: 20px;
}
.top-right a{
  text-decoration: none;
}
.userInfo-next{
  padding-top: 10px;
  color: #999999;
}
.userInfo-next ul{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.userInfo-next li{
  /* display: inline-block; */
  width: 80px;
  /* height: 60px; */
  padding-bottom: 10px;
}
.userInfo-next em{
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
  padding-right: 4px;
  color: #D7A206;
}
.honor-box{
  padding: 10px;
  background-color: #fff;
}
.honor-head{
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.honor-head div span{
  padding-left: 10px;
  color: #999999;
}
.num-tag{
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 5px;
}
.honor-cols{
  height: 30px;
  border: 1px solid #F2F2F2;
  display: flex;
  align-items: center;
  position: relative;
}

.honor-cols a{
  text-decoration: none;
  color: #4F4F4F;
  display: inline-block;
  width: 150px;
  display: flex;
}
.honor-cols img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
}
.hot-num{
  position: absolute;
  right: 4px;
  color: #999999;
}
.annoucement{
  background-color: #fff;
  margin-top: 10px;
  padding-left: 30px;
}
.annoucement h3{
  margin: 0;
  padding: 0;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #E3E3E3;
}
.annoucement li{
  list-style:disc;
}
.annoucement a{
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: black;
  display: inline-block;
  height: 25px;
  line-height: 25px;
}
.suggest{
  margin-top: 20px;
  height: 120px;
  background-color: #fff;
}
.suggest a{
  text-decoration: none;
}
.welcom-sug{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.welcom-sug>a{
  display: inline-block;
  width: 268px;
  height: 44px;
  background-color: red;
  text-align: center;
  line-height: 44px;
  border-radius: 5px;
  color: #fff;
}
.sel-item{
  display: flex;
  justify-content: space-around;
}
.sel-item a{
  color: #8F8F8F;
  font-weight: 600;
}
</style>