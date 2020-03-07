<template>
  <div class="platform-nav" :class="{'arriveTop':isArriveTop}">
    <div>
      <img :src="meidi" />
    </div>
    <div class="toweek-head">
      <h3 class="toweek">
        <span>本周牛人</span>
        <a href="#">更多</a>
      </h3>
      <div class="greatInfo-box">
        <div v-for="(item,index) in introList" :key="index" class="greatInfo">
          <div>
            <a href="#">
              <img :src="item.avatar" alt width="68px" height="68px" />
              <!-- <img src="" alt="" width="30px" height="30px"> -->
            </a>
          </div>
          <div class="intro-info">
            <h4>{{item.name}}</h4>
            <div>
              <img :src="item.grade" alt />
            </div>
            <a href="#">关注</a>
            <a href="#">私信</a>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in question" :key="index" class="platform-middleCon">
      <h3 class="toweek">
        <span>{{item.classify}}</span>
        <a href="#">更多</a>
      </h3>
      <div class="current-title">
        <span class="title-name">标题</span>
        <span>提问人</span>
        <span>回复数</span>
        <span>人气</span>
      </div>
      <ul v-for="(item,index) in item.questions" :key="index" class="current-hot">
        <li>
          <span class="hot-type">
            <a href="#">
              <i>{{item.qType}}</i>
              <strong>{{item.qName}}</strong>
            </a>
          </span>
          <span>{{item.username}}</span>
          <span class="write-back">{{item.qReplyNum}}</span>
          <span>{{item.qHot}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import meidi from "@/assets/platformImg/meidi.jpg";
import bbs10 from "@/assets/platformImg/bbs10.png";
import bdmh from "@/assets/platformImg/bdmh.jpg";
import starfd from "@/assets/platformImg/starfd.jpg";
import steptodream from "@/assets/platformImg/steptodream.jpg";
import zgl7903 from "@/assets/platformImg/zgl7903.jpg";

export default {
  data: function() {
    return {
      isArriveTop: false,
      meidi: meidi,
      question: [
        {
          classify:"技术区",
          questions:[]
        },
        {
          classify:"生活区",
          questions:[]
        }
      ],
        
      introList: [
        {
          avatar: bdmh,
          name: "娃都会打酱油了",
          grade: bbs10
        },
        {
          avatar: starfd,
          name: "icuc88",
          grade: bbs10
        },
        {
          avatar: steptodream,
          name: "fdfd",
          grade: bbs10
        },
        {
          avatar: zgl7903,
          name: "古典风格",
          grade: bbs10
        }
      ]
    };
  },
  methods: {
    getTeQuestion() {
      this.$http
        .get("/getTeQuestion")
        .then(res => {
          console.log(res);
          this.question[0].questions = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getNoTeQuestion() {
      this.$http
        .get("/getNoTeQuestion")
        .then(res => {
          console.log(res);
          this.question[1].questions = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    arriveTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.isArriveTop = true;
      } else {
        this.isArriveTop = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.arriveTop);
    this.getTeQuestion();
    this.getNoTeQuestion();
  }
};
</script>

<style>
.platform-nav a {
  text-decoration: none;
  color: #000;
}

.arriveTop {
  margin-left: 210px;
}

.toweek {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 14px;
  background-color: #e3e6e8;
  padding: 0 2%;
}
.toweek span {
  color: #4f4f4f;
}
.toweek a {
  color: #707070;
  text-decoration: none;
}
.greatInfo-box {
  width: 100%;
  display: flex;
  background-color: #fff;
}
.greatInfo {
  width: 190px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-left: 18px;
}
.greatInfo h4 {
  margin: 0;
  padding: 0;
  font-weight: 400;
}
.intro-info {
  padding-left: 10px;
}
.intro-info a {
  display: inline-block;
  width: 30px;
  text-align: center;
  border: 1px solid red;
  border-radius: 4px;
  font-size: 12px;
  color: red;
  margin-right: 4px;
  padding: 1px;
}

.platform-middleCon {
  background-color: #fff;
}

.current-title {
  background-color: #fafafa;
  color: #99a5c0;
}
.current-title span {
  display: inline-block;
}
.title-name {
  width: 600px;
  padding-left: 18px;
}
.current-title span:not(.title-name) {
  width: 90px;
}

.current-hot {
  padding-left: 18px;
  border: 1px solid #f2f2f2;
}
.current-hot li {
  height: 56px;
  line-height: 56px;
}
.current-hot li span {
  display: inline-block;
}
.hot-type {
  display: inline-block;
  width: 600px;
}

.hot-type a{
  display: flex;
  align-items: center;
}
.current-hot li span:not(.hot-type) {
  width: 90px;
  color: #707070;
}
.write-back {
  text-align: center;
}
.hot-type i {
  display: inline-block;
  /* width: 100px; */
  font-style: normal;
  padding-right: 10px;
  color: #87a9df;
}
.hot-type strong {
  display: inline-block;
  width: 450px;
  color: #4f4f4f;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>