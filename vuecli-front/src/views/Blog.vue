<template>
  <div class="blog-container">
    <div class="container-info">
      <home-left></home-left>
      <home-middle></home-middle>
      <blog-right></blog-right>
    </div>
  </div>
</template>

<script>
import HomeLeft from "@/components/home/HomeLeft.vue";
import HomeMiddle from "@/components/home/HomeMiddle.vue";
import BlogRight from "@/components/blog/BlogRight.vue";
export default {
    components:{
		"home-left":HomeLeft,
		"home-middle":HomeMiddle,
		"blog-right":BlogRight
	}
}
</script>

<style>
ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.blog-container {
  padding-top: 10px;
  background-color: #ededee;
}
.container-info{
  width: 80%;
  height: 100%;
  margin: 0 auto ;
  display: flex;
  justify-content: space-between;
}
</style>