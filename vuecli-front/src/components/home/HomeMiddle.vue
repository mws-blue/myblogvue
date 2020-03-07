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
		<div v-for="(item,index) in mydata" :key="index" class="middlebottom">
			<h5>
				<a style="width: 100%;" href="http://www.baidu.com">{{item.title}}</a>
			</h5>
			<div class="middlebottomxiao">{{item.titletwo}}</div>
			<div class="middlebottomtop">
				<div class="middlebottomtopleft">
					<img class="imgtop" :src="item.wen" alt width="24px" height="24px" />
					<span>{{item.toptitle}}</span>
				</div>
				<div class="middlebottomtopright">
					<img :src="item.zan" alt width="16px" height="16px" />
					<span>{{item.toptwoa}}</span>
					<img :src="item.yanjing" alt width="16px" height="16px" />
					<span>{{item.toptwob}}</span>
					<img :src="item.xiaoxi" alt width="16px" height="16px" />
					<span>{{item.toptwoc}}</span>
				</div>
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
	import wen from "@/assets/middle/wen.jpg";
	import zan from "@/assets/middle/zan.png";
	import yanjing from "@/assets/middle/yanjing.png";
	import xiaoxi from "@/assets/middle/xiaoxi.png";
	import ThinkWon from "@/assets/middle/thinkwon.jpg";
	import jiuzhang from "@/assets/middle/jiuzhang.jpg";
	import m from "@/assets/middle/m.jpg";
	import qing from "@/assets/middle/qing.jpg";

	export default {
		data: function() {
			return {
				homeHuaWei: homeHuaWei,
				fucnsia: fucnsia,
				spark: spark,
				lunboList: [lunbo1, lunbo2, lunbo3],
				currentIndex: 0,
				mydata: [{
						title: `Python logging 较佳实践 `,
						titletwo: `记录日志是程序中尤其是 web 服务中的重要一环，恰到好处的日志记录可以帮助我们了解程序运行情况以及方便排（shuai）错（guo）。logger 和 handler如果使用 logging 不多，可能对 logger 和 handler 这两个概念不熟，大多数还是直接使用 logging.info() 来记录日志。`,
						wen: wen,
						toptitle: "1_li_wen01",
						zan: zan,
						toptwoa: 0,
						yanjing: yanjing,
						toptwob: 242,
						xiaoxi: xiaoxi,
						toptwoc: 6,
					},
					{
						title: "Java知识体系最强总结(2020版)",
						titletwo: `整理的Java知识体系主要包括基础知识，工具，并发编程，数据结构与算法，数据库，JVM，架构设计，应用框架，中间件，微服务架构，分布式架构，程序员的一些思考，项目管理，运维，权限，推荐书籍，云计算，区块链等，包含了作为一个Java工程师在开发工作学习中需要用到或者可能用到的绝大部分知识。千里之行始于足下，希望大家跟进自己的薄弱点，查缺补漏，根据自己感兴趣的方面多学习，学的精通一点，从现在开始行动起来。路漫漫其修远兮，吾将上下而求索，不管编程开发的路有多么难走，多么艰辛，我们都将百折不挠，不遗余力地去追求和探索。`,
						wen: ThinkWon,
						toptitle: "ThinkWon",
						zan: zan,
						toptwoa: 10,
						yanjing: yanjing,
						toptwob: 24,
						xiaoxi: xiaoxi,
						toptwoc: 56,
					},
					{
						title: "大学四年自学走来，这些私藏的实用工具/学习网站我贡献出来了",
						titletwo: `大学四年，看课本是不可能一直看课本的了，对于学习，特别是自学，善于搜索网上的一些资源来辅助，还是非常有必要的，下面我就把这几年私藏的各种资源，网站贡献出来给你们。主要有：电子书搜索、实用工具、在线视频学习网站、非视频学习网站、软件下载、面试/求职必备网站。`,
						wen: jiuzhang,
						toptitle: "九章算法",
						zan: zan,
						toptwoa: 34,
						yanjing: yanjing,
						toptwob: 452,
						xiaoxi: xiaoxi,
						toptwoc: 57,
					},
					{
						title: "推荐10个堪称神器的学习网站",
						titletwo: `每天都会收到很多读者的私信，问我：“二哥，有什么推荐的学习网站吗？最近很浮躁，手头的一些网站都看烦了，想看看二哥这里有什么新鲜货。”今天一早做了个恶梦，梦到被老板辞退了。虽然说在我们公司，只有我辞退老板的份，没有老板辞退我这一说，但是还是被吓得 4 点多都起来了。（主要是因为我掌握着公司所有的核心源码，哈哈哈）`,
						wen: m,
						toptitle: "沉默老二",
						zan: zan,
						toptwoa: 75,
						yanjing: yanjing,
						toptwob: 237,
						xiaoxi: xiaoxi,
						toptwoc: 46,
					},
					{
						title: "大学四年因为知道了这32个网站，我成了别人眼中的大神",
						titletwo: `依稀记得，毕业那天，我们导员发给我毕业证的时候对我说“你可是咱们系的风云人物啊”，哎呀，别提当时多开心啦😂，嗯，我们导员是所有导员中最帅的一个，真的😎不过，导员说的是实话，很多人都叫我大神的，为啥，因为我知道这32个网站啊，你说强不强😎，这次是绝对的干货，看好啦，走起来！`,
						wen: qing,
						toptitle: "帅地",
						zan: zan,
						toptwoa: 55,
						yanjing: yanjing,
						toptwob: 457,
						xiaoxi: xiaoxi,
						toptwoc: 124,
					}
				]
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

	.lunbo-block {
		width: 70%;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.middlebottom {
		width: 100%;
		height: 13%;
		background-color: #fafafa;
		margin-top: 10px;
	}

	.middlebottom img {
		cursor: pointer;
	}

	.middlebottomxiao {
		width: 100%;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 12px;
		margin-top: 5px;
		margin-bottom: 5px;
		/* margin-left: 2%;
		margin-right: 5%; */
	}

	.imgtop {
		border-radius: 50%;
	}

	.middlebottomtop {
		width: 100%;
		height: 30px;
		font-size: 10px;
		line-height: 30px;
	}

	.middlebottomtopleft {
		margin-left: 2%;
		float: left;
	}

	.middlebottomtopright {
		margin-right: 2%;
		float: right;
		width: 100px;
		line-height: 30px;
		display: inline-block;
	}
</style>
