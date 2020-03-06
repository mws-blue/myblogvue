<template>
  <div class="page-platform">
    <div class="new-nav">
		<PlatformHead></PlatformHead>
    </div>
    <div class="csdn-platform-main">
      <PlatformLeft class="platform-left"></PlatformLeft>
	    <PlatformMiddle class="platform-middle act-show"></PlatformMiddle>
	    <PlatformRight class="platform-right"></PlatformRight>
    </div>
    <RightPosition class="right-position"></RightPosition>
  </div>
</template>

<script>
import PlatformHead from "@/components/platform/PlatformHead.vue";
import PlatformLeft from "@/components/platform/PlatformLeft.vue";
import PlatformMiddle from "@/components/platform/PlatformMiddle.vue";
import PlatformRight from "@/components/platform/PlatformRight.vue";
import RightPosition from "@/components/platform/RightPosition.vue";
export default {
   
  components:{
	"PlatformHead":PlatformHead,
	"PlatformLeft":PlatformLeft,
	"PlatformMiddle":PlatformMiddle,
  "PlatformRight":PlatformRight,
  "RightPosition":RightPosition
  },
}
</script>

<style>
.page-platform {
  width: 100%;
  background-color: #F5F6F7;
  position: relative;
}

.new-nav {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-top: 1px solid #f5f6f7;
}
.csdn-platform-main{
	width: 100%;
  display: flex;
  /* margin-left: 200px; */
}

.platform-left {
  width: 200px;
  height: 600px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-right: 10px;
}
.platform-middle{
  width: 890px;
  margin-right: 10px;
}
.platform-right{
	width: 310px;
}
.right-position{
  width: 44px;
  height: 132px;
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 300px;
}
</style>