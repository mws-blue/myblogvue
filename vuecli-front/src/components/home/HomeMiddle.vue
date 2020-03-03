<template>
  <div class="home-middle">
    <div>
      <img :src="lunboList[currentIndex]" class="lunboImg" />
    </div>
    <div>
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
    </div>
  </div>
</template>

<script>
import lunbo1 from "@/assets/lunbo1.png";
import lunbo2 from "@/assets/lunbo2.png";
import lunbo3 from "@/assets/lunbo3.png";

export default {
  data: function() {
    return {
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
  width: 40%;
  position: relative;
}

.lunboImg {
  width: 100%;
  height: 200px;
}

.lunbo-act {
  display: flex;
  align-items: center;
  color: rgb(231, 230, 230);
}

.circle-box {
  width: 100%;
  position: absolute;
  top: 185px;
  display: flex;
  justify-content: center;
}
.go-left {
  position: absolute;
  left: 0;
  top: 85px;
  font-size: 30px;
}

.go-right {
  position: absolute;
  right: 0;
  top: 85px;
  font-size: 30px;
}

.lunbo-circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: white;
}
.current {
  background-color: bisque;
}
</style>