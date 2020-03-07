<template>
	<div class="bigbox">
		<div class="box" style="display: block;">
			<div class="hc_lnav jslist">
				<div class="allbtn">
					<h2><a href="#"><strong>&nbsp;</strong>点我 查看全部学习课程分类<i>&nbsp;</i></a></h2>
					<ul style="width:190px" class="jspop box">
						<li class=a1>
							<div class=tx><a href="#"><i>&nbsp;</i>人工智能</a> </div>
							<dl>
								<dd>
									<a href="#">机器学习</a>
									<a href="#">深度学习</a>
									<a href="#">计算机视觉</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">人工智能</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">机器学习</a>
										<a class="ui-link" href="#">深度学习</a>
										<a class="ui-link" href="#">语音识别</a>
										<a class="ui-link" href="#">计算机视觉</a>
										<a class="ui-link" href="#">NLP</a>
										<a class="ui-link" href="#">强化学习</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
						<li class=a2>
							<div class=tx><a href="#"><i>&nbsp;</i>编程学习</a> </div>
							<dl>
								<dd>
									<a href="#">C/C++</a>
									<a href="#">Java</a>
									<a href="#">Python</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">编程语言</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">C/C++</a>
										<a class="ui-link" href="#">Java</a>
										<a class="ui-link" href="#">C#</a>
										<a class="ui-link" href="#">Objective-C</a>
										<a class="ui-link" href="#">Python</a>
										<a class="ui-link" href="#">NET</a>
										<a class="ui-link" href="#">Go语言</a>
										<a class="ui-link" href="#">PHP</a>
										<a class="ui-link" href="#">Rudy/Rails</a>
										<a class="ui-link" href="#">Matlab</a>
										<a class="ui-link" href="#">其他</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
						<li class=a3>
							<div class=tx><a href="#"><i>&nbsp;</i>考试认证</a> </div>
							<dl>
								<dd>
									<a href="#">华为认证</a>
									<a href="#">思科认证</a>
									<a href="#">软考</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">考试认证</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">软考</a>
										<a class="ui-link" href="#">Linux认证</a>
										<a class="ui-link" href="#">华为认证</a>
										<a class="ui-link" href="#">思科认证</a>
										<a class="ui-link" href="#">微软认证</a>
										<a class="ui-link" href="#">项目管理</a>
										<a class="ui-link" href="#">H3C认证</a>
										<a class="ui-link" href="#">计算机等级考试</a>
										<a class="ui-link" href="#">其他</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
						<li class=a4>
							<div class=tx><a href="#"><i>&nbsp;</i>移动开发</a> </div>
							<dl>
								<dd>
									<a href="#">iOS</a>
									<a href="#">微信开发</a>
									<a href="#">Swift</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">移动开发</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">手游开发</a>
										<a class="ui-link" href="#">iOS</a>
										<a class="ui-link" href="#">微信开发</a>
										<a class="ui-link" href="#">Swift</a>
										<a class="ui-link" href="#">Android</a>
										<a class="ui-link" href="#">Webapp</a>
										<a class="ui-link" href="#">ReactNative</a>
										<a class="ui-link" href="#">Cordova</a>
										<a class="ui-link" href="#">其他</a>
										<a class="ui-link" href="#">flutter</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
						<li class=a5>
							<div class=tx><a href="#"><i>&nbsp;</i>云计算/大数据</a> </div>
							<dl>
								<dd>
									<a href="#">Hadoop</a>
									<a href="#">Docker/K8S</a>
									<a href="#">Spark</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">云计算/大数据</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">Spark</a>
										<a class="ui-link" href="#">Docker/K8S</a>
										<a class="ui-link" href="#">Hadoop</a>
										<a class="ui-link" href="#">OpenStack</a>
										<a class="ui-link" href="#">云计算基础架构</a>
										<a class="ui-link" href="#">虚拟化技术</a>
										<a class="ui-link" href="#">云平台</a>
										<a class="ui-link" href="#">大数据</a>
										<a class="ui-link" href="#">ELK</a>
										<a class="ui-link" href="#">其他</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
						<li class=a6>
							<div class=tx><a href="#"><i>&nbsp;</i>其他课程</a> </div>
							<dl>
								<dd>
									<a href="#">系统/网络/运维</a>
									<a href="#">数据库</a>
									<a href="#">区块链</a>
								</dd>
							</dl>
							<div class=pop>
								<h3><a href="#">其他课程</a></h3>
								<dl>
									<dd>
										<a class="ui-link" href="#">研发管理</a>
										<a class="ui-link" href="#">系统/网络/运维</a>
										<a class="ui-link" href="#">数据库</a>
										<a class="ui-link" href="#">游戏研发</a>
										<a class="ui-link" href="#">设计制作</a>
										<a class="ui-link" href="#">智能硬件/物联网</a>
										<a class="ui-link" href="#">大学课程</a>
										<a class="ui-link" href="#">产品经理</a>
										<a class="ui-link" href="#">学习安全</a>
										<a class="ui-link" href="#">区块链</a>
									</dd>
									<img class="beijing" :src="beijing" alt />
								</dl>
								</dl>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="lunbo">
				<el-carousel height="500px">
					<el-carousel-item v-for="item in lunbo" :key="item">
						<img :src="item" class="lbImg" alt />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="tutop">
				<h3 style="margin-left: 2%;">实战特训营</h3>
				<div class="shizhan">
					<img :src="tu1" class="tuimg" alt />
				</div>
				<div class="shizhan">
					<img :src="tu2" class="tuimg" alt />
				</div>
				<div class="shizhan">
					<img :src="tu3" class="tuimg" alt />
				</div>
			</div>
			<div class="jingxuan">
				<h3 style="margin-bottom: 15px;margin-left: 2%;">精选专题</h3>
				<div v-for="item in jingxuan" :key="item" class="jingxuanup">
					<img :src="item" class="jingxuanimg" alt />
				</div>
			</div>
			<div class="hezuotop">
				<h3 style="margin-bottom: 15px;margin-left: 2%;">合作机构</h3>
				<div v-for="item in wdata" :key="item" class="hezuo">
					<img :src="item" class="hezuoimg" alt />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import lb1 from "@/assets/xueyuan/lb1.jpg";
	import lb2 from "@/assets/xueyuan/lb2.jpg";
	import lb3 from "@/assets/xueyuan/lb3.jpg";
	import lb4 from "@/assets/xueyuan/lb4.jpg";
	import beijing from "@/assets/xueyuan/beijing.jpg";
	import tu1 from "@/assets/xueyuan/tu1.png";
	import tu2 from "@/assets/xueyuan/tu2.png";
	import tu3 from "@/assets/xueyuan/tu3.png";
	import hezuo1 from "@/assets/xueyuan/hezuo1.png";
	import hezuo2 from "@/assets/xueyuan/hezuo2.png";
	import hezuo3 from "@/assets/xueyuan/hezuo3.png";
	import hezuo4 from "@/assets/xueyuan/hezuo4.jpg";
	import hezuo5 from "@/assets/xueyuan/hezuo5.jpg";
	import jingxuan1 from "@/assets/xueyuan/jingxuan1.png";
	import jingxuan2 from "@/assets/xueyuan/jingxuan2.png";
	import jingxuan3 from "@/assets/xueyuan/jingxuan3.png";
	import jingxuan4 from "@/assets/xueyuan/jingxuan4.png";
	export default {
		data: function() {
			return {
				jingxuan: [jingxuan1, jingxuan2, jingxuan3, jingxuan4],
				wdata: [hezuo1, hezuo2, hezuo3, hezuo4, hezuo5],
				tu1: tu1,
				tu2: tu2,
				tu3: tu3,
				lunbo: [lb1, lb2, lb3, lb4],
				beijing: beijing,
			}
		}
	};
</script>

<style scoped="scoped">
	.tutop {
		width: 100%;
		height: 200px;
		padding-top: 40px;
	}

	.tuimg {
		width: 100%;
		height: 145px;
		border-radius: 10px;
	}

	.jingxuan {
		height: 200px;
		padding-top: 20px;
		width: 100%;
	}

	.hezuotop {
		height: 200px;
		padding-top: 20px;
		width: 100%;
	}

	.jingxuanup {
		width: 24%;
		height: 140px;
		margin-left: 1%;
		display: inline-block;
		text-align: center;
	}

	.jingxuanup img {
		cursor: pointer;
		transition: all 0.6s;
	}

	.jingxuanup img:hover {
		transform: scale(1.1);
	}

	.hezuo {
		padding-top: 15px;
		width: 19%;
		height: 88px;
		margin-left: 0.8%;
		display: inline-block;
		text-align: center;
		line-height: 88px;
		border: 0.5px solid #000000;
		border-radius: 10px;
	}

	.jingxuanimg {
		width: 100%;
		height: 100%;
	}

	.hezuoimg {
		width: 80%;
		height: 76px;
	}

	.shizhan {
		padding-top: 15px;
		width: 31%;
		height: 145px;
		/* background-color: blue; */
		margin-left: 2%;
		display: inline-block;
	}

	.beijing {
		width: 640px;
		height: 364px;
	}

	.lbImg {
		width: 100%;
		height: 600px;
	}

	.lunbo {
		width: 100%;
		height: 500px;
		margin-top: 5px;
	}

	.bigbox {
		height: 1230px;
		padding-top: 10px;
		background-color: #ededee;
	}

	.box {
		width: 80%;
		height: 1180px;
		margin: 0 auto;
		display: flex;
		background-color: #FFFFFF;
		justify-content: space-between;
	}

	* {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	a,
	img {
		border: 0;
	}

	a {
		color: #666666;
		text-decoration: none;
		-webkit-transition-property: color;
		-moz-transition-property: color;
		-o-transition-property: color;
		transition-property: color;
		-webkit-transition-duration: .2s;
		-webkit-transition-timing-function: ease-in;
		-moz-transition-duration: .2s;
		-moz-transition-timing-function: ease-in;
		-o-transition-duration: .2s;
		-o-transition-timing-function: ease-in;
		transition-duration: .2s;
		transition-timing-function: ease-in
	}

	a:hover {
		color: #CA0C16;
		text-decoration: underline
	}

	/* hc_lnav */
	.hc_lnav {
		z-index: 9999;
		position: relative;
		width: 190px;
		margin: 40px 0 0 120px;
	}

	.hc_lnav .allbtn {
		z-index: 99999;
		position: relative
	}

	.hc_lnav .allbtn h2 {
		font-size: 14px;
		box-shadow: 2px 0px 6px -3px #428000;
		-webkit-box-shadow: 2px 0px 6px -3px #428000;
		-moz-box-shadow: 2px 0px 6px -3px #428000
	}

	.hc_lnav .allbtn h2 a {
		line-height: 36px;
		background-color: #F3CCCC;
		padding-left: 10px;
		width: 180px;
		display: block;
		font-family: 微软雅黑, 黑体;
		height: 36px;
		color: #000000;
		font-size: 14px;
		font-weight: normal;
		border-radius: 15px;
		text-align: center;
	}

	.hc_lnav .allbtn h2 a:hover {
		background-color: #FFFFFF;
		text-decoration: none
	}

	.hc_lnav .allbtn h2 i {}

	.hc_lnav .allbtn h2 strong {}

	/*一级导航隐藏*/
	.hc_lnav .allbtn ul {
		z-index: 99999;
		position: absolute;
		background-color: #F0BE41;
		width: 220px;
		display: none;
		height: 586px;
		top: 36px;
		left: 0px
	}

	body.hc_home .hc_lnav .allbtn ul {
		display: block
	}

	body.hc_list .hc_lnav .allbtn ul {
		display: block
	}

	.hc_lnav .allbtn ul li {
		padding-bottom: 7px;
		zoom: 1;
		clear: both;
		cursor: default
	}

	.hc_lnav .allbtn ul li .tx {
		line-height: 35px;
		background-color: #E49600;
		padding-left: 10px;
		background-repeat: no-repeat;
		background-position: right center;
		height: 35px;
		_background-image: none
	}

	.hc_lnav .allbtn ul li .tx a {
		font-family: 微软雅黑, 黑体;
		color: #ffffff;
		font-size: 14px;
		-webkit-transition: color 0.1s ease-out 0s;
		-moz-transition: color 0.1s ease-out 0s;
		-ms-transition: color 0.1s ease-out 0s;
		-o-transition: color 0.1s ease-out 0s;
		transition: color 0.1s ease-out 0s
	}

	.hc_lnav .allbtn ul li .tx a i {
		line-height: 25px;
		margin-top: 5px;
		width: 25px;
		background-position: 0px 0px;
		float: left;
		height: 25px;
		margin-right: 10px;
		text-decoration: none
	}

	.hc_lnav .allbtn ul li dl {
		zoom: 1;
		color: #ffffff;
		clear: both;
		overflow: auto;
		padding-top: 4px
	}

	.hc_lnav .allbtn ul li dl a {
		line-height: 22px;
		white-space: nowrap;
		float: left;
		color: #d9e7ce;
		margin-left: 6px;
		margin-right: 6px;
		-webkit-transition: color 0.1s ease-out 0s;
		-moz-transition: color 0.1s ease-out 0s;
		-ms-transition: color 0.1s ease-out 0s;
		-o-transition: color 0.1s ease-out 0s;
		transition: color 0.1s ease-out 0s
	}

	.hc_lnav .allbtn ul li dt {
		padding-left: 10px;
		width: 30px;
		float: left;
		padding-top: 1px
	}

	.hc_lnav .allbtn ul li dd {
		line-height: 22px;
		width: 150px;
		float: left;
		padding-top: 2px
	}

	/*二级导航隐藏*/
	.hc_lnav .allbtn ul li .pop {
		border-bottom: #599900 2px solid;
		position: absolute;
		border-left: medium none;
		padding-bottom: 10px;
		background-color: #fcfcfc;
		min-height: 466px;
		padding-left: 30px;
		width: 640px;
		padding-right: 30px;
		display: none;
		height: 464px;
		border-top: medium none;
		top: 0px;
		border-right: #599900 2px solid;
		padding-top: 10px;
		left: 190px;
		box-shadow: 4px 4px 5px -1px #999999;
		-webkit-box-shadow: 4px 4px 5px -1px #999999;
		-moz-box-shadow: 4px 4px 5px -1px #999999
	}

	.hc_lnav .allbtn ul li .pop h3 {
		display: none;
		font-size: 14px
	}

	.hc_lnav .allbtn ul li .pop dl {
		padding-bottom: 6px;
		color: #666666;
		padding-top: 6px
	}

	.hc_lnav .allbtn ul li .pop dl:hover {
		background-color: #f3f3f3
	}

	.hc_lnav .allbtn ul li .pop dl a {
		color: #666666;
		margin-left: 12px;
		margin-right: 12px
	}

	.hc_lnav .allbtn ul li .pop dl a.un {
		color: #a5a5a5
	}

	.hc_lnav .allbtn ul li .pop dt {
		padding-left: 0px;
		width: 72px;
	}

	.hc_lnav .allbtn ul li .pop dd {
		width: 565px;
		margin-left: -12px;
	}

	.hc_lnav .allbtn ul li .pop .act {
		width: 640px;
		height: 80px;
		overflow: hidden;
		padding-top: 10px
	}

	.hc_lnav .allbtn:hover ul {
		display: block
	}

	/*控制一级菜单显示隐藏*/
	.hc_lnav .allbtn ul li:hover {
		background-color: #fcfcfc
	}

	.hc_lnav .allbtn ul li:hover .tx {
		background-color: #f5f5f5
	}

	.hc_lnav .allbtn ul li:hover .tx a {
		color: #333333
	}

	.hc_lnav .allbtn ul li:hover .tx a i {
		background-position: 0px -25px
	}

	.hc_lnav .allbtn ul li:hover .pop {
		display: block;
		top: 0px;
		left: 190px
	}

	/*控制二级菜单显示隐藏*/
	.hc_lnav .allbtn ul li:hover .pop dl a.un {
		color: #a5a5a5;
		text-decoration: none
	}

	.hc_lnav .allbtn ul li:hover dl {
		color: #6e6e6e
	}

	.hc_lnav .allbtn ul li:hover a {
		color: #666666
	}

	.hc_lnav .allbtn ul li:hover a:hover {
		color: #cd0606
	}
</style>
