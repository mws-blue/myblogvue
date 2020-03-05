<template>
  <div>
    <div>
      <input type="text" v-model="searchFile" class="mysearch" />
    </div>
    <div class="search-menu">
      <li>
        <span class="iconfont icon-wenzhang"></span>
        <span>论坛首页</span>
      </li>
      <el-row class="tac" v-for="(item,index) in interestList" :key="index">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <strong class="status-log">+</strong>
                <span class="iconfont icon-wenjianjia"></span>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group v-for="(item2,index2) in item.interests" :key="index2" class="intrestList">
                <span class="iconfont icon-wenzhang"></span>
                <span>{{item2.interestName}}</span>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import "@/assets/iconfont/platform/iconfont.css";

export default {
  data: function() {
    return {
      searchFile: "寻找我感兴趣的论坛",
      interestList: [
        {
          title: "我的论坛",
          interests: [
            {
              interestName: "个人资料设置",
              url: ""
            },
            {
              interestName: "论坛积分",
              url: ""
            },
            {
              interestName: "可用分变更",
              url: ""
            },
            {
              interestName: "我发布的贴子",
              url: ""
            }
          ]
        },
        {
          title: "移动开发",
          interests: [
            {
              interestName: "IOS",
              url: ""
            },
            {
              interestName: "Andriod",
              url: ""
            },
            {
              interestName: "Swift",
              url: ""
            },
            {
              interestName: "Symbian",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        },
        {
          title: "云计算",
          interests: [
            {
              interestName: "PaaS/SaaS",
              url: ""
            },
            {
              interestName: "AWS",
              url: ""
            },
            {
              interestName: "华为云计算",
              url: ""
            },
            {
              interestName: "云安全",
              url: ""
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickFile(e) {
      if (this.tag == 1) {
      } else if (this.tag == 2) {
        this.isopen = true;
      }
    }
  }
};
</script>

<style>
.mysearch {
  width: 190px;
  height: 30px;
  margin: 10px 0 10px 0;
}
.search-menu{
  height: 600px;
  box-sizing:border-box;
}
.search-menu li {
  align-items: center;
  margin-bottom: 5px;
}

.search-menu li span {
  margin-right: 2px;
}
.tac{
	/* margin-bottom: 10px; */
}
.search-menu .el-row {
  font-size: 12px !important;
}
.status-log {
  display: inline-block;
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 10px;
  margin-right: 6px !important;
  border: 1px solid black;
}
.search-menu .el-menu-vertical-demo {
  width: 200px;
  /* height: 16px; */
}

/* .search-menu .el-submenu__title {
  width: 180px;
  height: 16px;
  font-size: 12px;
}

.search-menu .el-submenu__title {
  line-height: 16px;
} */

.search-menu .el-submenu__title {
  padding: 0 !important;
}

.intrestList {
  padding-left: 18px;
}
</style>