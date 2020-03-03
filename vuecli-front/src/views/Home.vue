<template>
    <div class="home-container">
    <home-left></home-left>  
    <home-middle></home-middle>
    <home-right></home-right>
  </div>
</template>

<script>
import HomeLeft from "@/components/home/HomeLeft.vue";
import HomeMiddle from "@/components/home/HomeMiddle.vue";
import HomeRight from "@/components/home/HomeRight.vue";
export default{
  components:{
    "home-left":HomeLeft,
     "home-middle":HomeMiddle,
"home-right":HomeRight
  }
}
</script>

<style>
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
.home-container{
  height: 100vh;
  display: flex;
  background-color: #F5F6F7;
}
</style>