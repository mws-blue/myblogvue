<template>
  <div class="page-plarform">
    <div class="new-nav">
		<PlatformHead></PlatformHead>
    </div>
    <div class="csdn-platform-main">
	  <PlatformLeft class="platform-left"></PlatformLeft>
	  <PlatformMiddle class="platform-middle"></PlatformMiddle>
	  <PlatformRight class="platform-right"></PlatformRight>
    </div>
  </div>
</template>

<script>
import PlatformHead from "@/components/platform/PlatformHead.vue";
import PlatformLeft from "@/components/platform/PlatformLeft.vue";
import PlatformMiddle from "@/components/platform/PlatformMiddle.vue";
import PlatformRight from "@/components/platform/PlatformRight.vue";
export default {
   
  components:{
	"PlatformHead":PlatformHead,
	"PlatformLeft":PlatformLeft,
	"PlatformMiddle":PlatformMiddle,
	"PlatformRight":PlatformRight
  },
}
</script>

<style>
.page-parform {
  width: 100%;
}
.new-nav {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-top: 1px solid #f5f6f7;
}

.platform-left {
  width: 210px;
  height: 600px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: aqua;
}
.platform-middle{
	width: 890px;
	height: 600px;
	background-color: rgb(235, 189, 130);
}
.platform-right{
	width: 310px;
	height: 600px;
	background-color: blueviolet;
}
</style>