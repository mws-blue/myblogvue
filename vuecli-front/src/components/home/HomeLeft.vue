<template>
	<div class="home-left">
		<ul>
			<li><router-link to="">推荐</router-link>
			</li>
			<li><router-link to="">动态</router-link>
			</li>
			<li><router-link to="">程序人生</router-link></li>
			<li><router-link to="">Python</router-link></li>
			<li><router-link to="">Java</router-link></li>
			<li><router-link to="">前端</router-link></li>
			<li><router-link to="">架构</router-link></li>
			<li><router-link to="">区块链</router-link></li>
			<li><router-link to="">数据链</router-link></li>
			<li><router-link to="">5G</router-link></li>
			<li><router-link to="">游戏开发</router-link></li>
			<li><router-link to="">移动开发</router-link></li>
			<li><router-link to="">运维</router-link></li>
			<li><router-link to="">人工智能</router-link></li>
			<li><router-link to="">安全</router-link></li>
			<li><router-link to="">云计算/大数据</router-link></li>
			<li><router-link to="">研发管理</router-link></li>
			<li><router-link to="">物联网</router-link></li>
			<li><router-link to="">计算机基础</router-link></li>
			<li><router-link to="">音视频开发</router-link></li>
			<li><router-link to="">其他</router-link></li>
			<router-view></router-view>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.home-left {
		width: 10%;
		background-color: white;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	a {
		display: block;
		color: #767676;
		width: 80px;
		text-align: center;
		padding: 4px;
		text-decoration: none;
		cursor: pointer;
	}

	a:hover,
	a:active {
		background-color: #F44444;

	}
</style>


