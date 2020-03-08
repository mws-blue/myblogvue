<template>
	<div class="home-container">
		<div class="container-info">
			<home-left :class="{'fixed-top':isArrive}"></home-left>
			<home-middle :class="{'notOffset':isArrive}"></home-middle>
			<home-right></home-right>
		</div>
	</div>
</template>

<script>
	import HomeLeft from "@/components/home/HomeLeft.vue";
	import HomeMiddle from "@/components/home/HomeMiddle.vue";
	import HomeRight from "@/components/home/HomeRight.vue";
	export default {
		components: {
			"home-left": HomeLeft,
			"home-middle": HomeMiddle,
			"home-right": HomeRight
		},
		data(){
			return {
				isArrive:false
			}
		},
		methods:{
			getArrive(){
				console.log("进入methods")
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop>60){
					this.isArrive = true;
				}else{
					this.isArrive = false;
				}
			}
		},
		mounted(){
			console.log("挂载完毕")
			window.addEventListener("scroll",this.getArrive);
		}
	};
</script>

<style>
	.home-container {
		/* height: 1050px; */
		padding-top: 10px;
		background-color: #ededee;
		position: relative;
	}

	.container-info {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.fiex-top{
        position: fixed;
		top: 0;	
	}

	.noOffset{
		position: fixed;
		margin-left: 40px;
	}

</style>
