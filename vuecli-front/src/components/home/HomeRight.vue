<template>
	<div class="home-right">
		<img :src="fuwuqi" width="100%" height="64px" />
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in adImgList" :key="item">
				<img :src="item" width="100%" height="180px" alt />
			</el-carousel-item>
		</el-carousel>
		<div class="today-ad">
			<div class="today-title">
				<span class="today-logo"></span>
				<h3>今日推荐</h3>
			</div>
			<div v-for="(item,index) in todayInfo" :key="index" class="today-info">
				<img :src="item.adImg" width="60px" height="50px" alt="">
				<a href="#" class="title-desc">{{item.title}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import fuwuqi from "@/assets/homeImg/fuwuqi.jpg";
	import python from "@/assets/homeImg/python.png";
	import AI from "@/assets/homeImg/AI.png";
	import zhuji from "@/assets/homeImg/zhuji.jpg";

	export default {
		data: function() {
			return {
				fuwuqi: fuwuqi,
				adImgList: [python, AI, zhuji],
				todayInfo: [{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					},
					{
						"adImg": fuwuqi,
						"title": "福利直投！CSDN技术公开课评选进行中"
					}
				]
			};
		}
	};
</script>

<style>
	.home-right {
		height: 830px;
		width: 30%;
		background-color: white;
	}

	.home-right .el-carousel__container {
		height: 180px;
		padding-top: 4px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.today-ad {
		padding: 0 10px 10px 10px;
	}

	.today-title {
		display: flex;
		align-items: center;
	}

	.today-logo {
		display: inline-block;
		width: 3px;
		height: 20px;
		background-color: red;
	}

	.today-title h3 {
		padding-left: 8px;
	}

	.today-info {
		display: flex;
		padding-top: 10px;
	}

	.title-desc {
		text-decoration: none;
		color: black;
		margin-left: 8px;
	}
</style>
