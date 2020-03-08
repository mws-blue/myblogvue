<template>
  <div class="mainBox">
    <div class="aside-box">
      <div class="profile-intro" @click="topersion">
        <div style="position: relative;width: 48px;height: 48px;">
          <img
            :src="imgUrl"
            style="display: block;width: 48px;height: 48px;border-radius: 50%; cursor: pointer;"
            alt
          />
        </div>
        <div style="margin-left: 8px;width: 156px;position: relative;">
          <div>
            <span>{{username}}</span>
          </div>
          <div style="display: flex;padding-top: 10px;justify-content: space-between;">
            <span
              style="width: 90px;line-height: 20px;font-size: 12px;color:#3399ea;line-height: 17px;cursor: pointer;"
            >TA的个人主页</span>
          </div>
        </div>
      </div>
      <div class="flexBox">
        <dl class="text-center">
          <dt style="margin:0px">原创</dt>
          <dd>
            <span class="count">0</span>
          </dd>
        </dl>
        <dl class="text-center">
          <dt>粉丝</dt>
          <dd>
            <span class="count">0</span>
          </dd>
        </dl>
        <dl class="text-center">
          <dt>获赞</dt>
          <dd>
            <span class="count">0</span>
          </dd>
        </dl>
        <dl class="text-center">
          <dt>评论</dt>
          <dd>
            <span class="count">0</span>
          </dd>
        </dl>
        <dl class="text-center">
          <dt>访问</dt>
          <dd>
            <span class="count">0</span>
          </dd>
        </dl>
      </div>

      <div>
        <span style="margin-left:20px">个人简言</span>
        <div class="line" style="height: 1px;background:#e0e0e0; margin:10px 0px;"></div>
        <div style="margin-left:20px;height:150px">{{info}}</div>
      </div>
    </div>
    <div class="rights">
      <div class="filter-box">
        <el-checkbox>只看原创</el-checkbox>
        <dl class="d-flex">
          <dt>排序:</dt>
        </dl>
        <dl class="lefts">
          <dt>默认</dt>
        </dl>
        <dl class="lefts">
          <dt>按时间更新</dt>
        </dl>
        <dl class="lefts rh">
          <dt>按访问量</dt>
        </dl>
      </div>

      <div class="show-none" v-show="status==0">
        <div class="autop">
          <span style="width:120px;height:120px">
            <i class="el-icon-s-promotion con"></i>
          </span>
          <h6>空空如也</h6>
          <p style="margin:10px 0px;text-align:center;">去创作属于自己的第一篇文章</p>
          <p>
            <a class="red" href>写博客</a>
          </p>
        </div>
      </div>

      <div class="show-up" v-show="status==1" v-for="(item,index) in form" :key="index">
        <div style="justify-content: flex-start;flex-direction: row;display: flex;margin-left:24px">
          <span class="titlestype">私密</span>
          <p style="font-size: 18px;color:#4d4d4d;margin-bottom: 0;display: flex;flex-grow: 1;">
            <a class="title" href>{{item.aName}}</a>
          </p>
        </div>
        <div class="article-info">
          <div class="item-left">
            <span>原创</span>
            <span>{{item.aDate}}</span>
            <span>
              <i class="el-icon-view"></i>
              {{item.aRead}}
            </span>
            <span>
              <i class="el-icon-chat-line-square"></i>
              {{item.aComment}}
            </span>
          </div>
          <div class="btn">
            <a class="ap">
              <span style="padding: 0 8px;border-right: 1px solid#e9e9e9;" @click="view(index)">查看</span>
            </a>
            <div class="item-inline">
              <a class="ap">
                <span
                  style="border-right: none;color: #ca0c16;padding: 0 8px;cursor: pointer;"
                  @click="del(index)"
                >删除</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>你确定要删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="no">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      userId: "",
      aId: "",
      status: 0,
      imgUrl: "",
      info: "",
      username: "",
      form: [],
      dialogVisible: false,
      // article: []
    };
  },
  methods: {
    topersion() {
      this.$router.push({
        path: "/userinfo"
      });
    },
    ok() {
      this.dialogVisible = false;
    },
    no() {
      this.dialogVisible = false;
    },
    handleClose(done) {
      console.log(done);
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    view(index) {
      console.log(this.form[index].aId);
    },
    del(index) {
      this.dialogVisible = true;
      this.$http
        .post("/delarticle", {
          aId: this.form[index].aId
        })

        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.userId = localStorage.getItem("userId");
    let vm = this;
    vm.$http
      .get("/user", {
        params: {
          username: localStorage.getItem("username")
        }
      })
      .then(function(response) {
        console.log(response);
        vm.username = response.data.username;
        vm.imgUrl = response.data.imgUrl;
        vm.info = response.data.info;
      })
      .catch(function(error) {
        console.log(error);
      });
    vm.$http
      .get("/getarticle", {
        params: {
          userId: this.userId
        }
      })
      .then(function(response) {
        vm.form = response.data;
        if (response.data.length == 0) {
          vm.status = 0;
        } else {
          vm.status = 1;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.ap {
  color: #349edf;
  text-decoration: none;
  cursor: pointer;
}
.item-inline {
  display: inline-block;
}
.item-left span {
  margin-right: 25px;
}
.item-left span:first-child {
  margin-left: 24px;
}
.article-info {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.title {
  font-size: 18px;
  color: #4d4d4d;
  text-decoration: none;
}
.titlestype {
  font-size: 12px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  margin-right: 12px;
  white-space: nowrap;
  border: 1px solid#e9e9e9;
  flex-shrink: 0;
  box-sizing: border-box;
  cursor: pointer;
}
.filter-box {
  align-items: center;
  display: flex;
  padding: 0 24px;
  height: 48px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.red {
  width: 300px;
  height: 40px;
  background: #ca0c16;
  border-radius: 4px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  margin: 0;
  padding: 0 8px;
  display: inline-block;
  text-align: center;
  border: none;
  min-width: 72px;
  cursor: pointer;
  text-decoration: none;
}
.d-flex {
  margin-left: auto;
  align-items: center;
  display: flex;
}
h6 {
  margin-bottom: 4px;
  font-size: 16px;
  color: #6b6b6b;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
}
.mainBox {
  width: 1202px;
  padding: 0 24px 0;
  margin: 0 auto;
  box-sizing: content-box;
}
.con {
  font-size: 250px;
}
.left {
  margin-left: 24px;
}
.show-up {
  display: flex;
  flex-direction: column;
  border-bottom: 1px dotted#ddd;
  padding: 1rem 0 1rem 0;
  color: #999;
  font-size: 12px;
  text-align: start;
}
.show-none {
  margin-top: 1px;
  padding: 80px 0;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}
.rh {
  margin-right: 150px;
}
.aside-box {
  width: 300px;
  display: block;
  float: left;
  margin-bottom: 8px;
  margin-top: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.profile-intro {
  width: 268px;
  height: 52px;
  display: flex;
  padding: 16px 16px 8px 16px;
  padding-bottom: 12px;
}
.text-center {
  text-align: center;
  width: 100%;
}
.flexBox {
  padding: 6px 10px;
  display: flex;
}
.count {
  font-weight: 700;
  white-space: nowrap;
}
.text {
  font-size: 14px;
}

.el-icon-chat-line-square p{
  width: 100px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 300px;
}
.right {
  width: 900px;
  display: block;
  float: right;
}
</style>