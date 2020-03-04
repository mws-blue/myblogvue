<template>
  <div class="home-middle">
    <div>
      <img :src="homeHuaWei" alt width="100%" height="64px" />
    </div>
    <div class="ad-box">
      <!-- <img :src="lunboList[currentIndex]" class="lunboImg" alt=""/> -->
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
    <!-- <div>
      <div class="page">
        <ul class="lunbo-act">
          <li @click="gotoPage(prevIndex)" class="go-left">&lt;</li>
          <span class="circle-box">
            <li
              v-for="(item,index) in lunboList"
              :key="index"
              @click="gotoPage(index)"
              class="lunbo-circle"
              :class="{'current':currentIndex==index}"
            ></li>
          </span>

          <li @click="gotoPage(nextIndex)" class="go-right">&gt;</li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
import homeHuaWei from "@/assets/homeImg/AirEngine.jpg";
import lunbo1 from "@/assets/homeImg/lunbo1.png";
import lunbo2 from "@/assets/homeImg/lunbo2.png";
import lunbo3 from "@/assets/homeImg/lunbo3.png";
import fucnsia from "@/assets/homeImg/fucnsia.jpg";
import spark from "@/assets/homeImg/spark.jpg";

export default {
  data: function() {
    return {
      homeHuaWei: homeHuaWei,
      fucnsia: fucnsia,
      spark: spark,
      lunboList: [lunbo1, lunbo2, lunbo3],
      currentIndex: 0
    };
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    }
  },
  computed: {
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.lunboList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    nextIndex() {
      if (this.currentIndex == this.lunboList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },
  mounted: function() {
    setInterval(() => {
      this.gotoPage(this.nextIndex);
    }, 4000);
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

.lunbo-block{
   width: 70%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>