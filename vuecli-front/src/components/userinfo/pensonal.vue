<template>
  <div class="content">
    <div>
      <h3 class="title">个人博客</h3>
      <div class="user_info">
        <div class="header">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8888/upload/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :data={upuser:this.username}
          >
            <img v-if="imageUrl" :src="imageUrl" class="head" />
            <p class="modify">修改头像</p>
          </el-upload>
        </div>
        <div class="right">
          <div class="right_info">
            <div class="id_card">
              <span class="id_name">ID：{{username}}</span>
              <a href class="user_home">
                个人主页
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="csdn_info">
            <span style="margin-right: 16px; color: rgb(77, 77, 77); font-size: 14px;">关注 0</span>
            <span style="margin-right: 16px; color: rgb(77, 77, 77); font-size: 14px;">粉丝 2</span>
          </div>
          <div class="line" style="height: 1px;background:#e0e0e0;"></div>
        <div class="nick">  
            
          <span
            style="float: right;font-size: 14px;color:#3399ea;cursor: pointer;margin-top:20px"
            @click="changeSta"
          >修改资料</span></div>
          <div style="margin-top:20px">
            <userinfoshow v-show="status==0"></userinfoshow>

            <alertinfo v-show="status==1"></alertinfo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8888";
import Userinfoshow from "../../components/pensonal/userinfoshow.vue";
import Alertinfo from "../../components/pensonal/alertinfo.vue";
export default {
  components: {
    userinfoshow: Userinfoshow,
    alertinfo: Alertinfo
  },
  data() {
    return {
      imageUrl: "",
      username: "",
      status: 0
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    this.imageUrl = localStorage.getItem("imgUrl");
      let vm= this;
      axios.get("/user", {
          params: {
            username: localStorage.getItem("username")
          }
        })
        .then(function(response) {
          console.log(response);
          vm.imageUrl=response.data.imgUrl
        })
        .catch(function(error) {
          console.log(error);
        });
  },
  methods: {
    changeSta() {
      this.status = 1;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
   if(res.code==1){
       axios
      .get("/insertimg", {
        params: {
          username: this.username
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
   }
      localStorage.setItem("imgUrl", res.src);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style  scoped>
a {
  text-decoration: none;
}
.title {
  font-size: 20px;
  color: #3d3d3d;
  height: 90px;
  line-height: 90px;
  border-bottom: 1px solid #e0e0e0;
}
.content {
  background-color: #fff;
  padding: 0 32px 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  min-height: 520px;
}
.user_info {
  overflow: hidden;
}
.header {
  float: left;
  text-align: center;
  margin-right: 16px;
  cursor: pointer;
}
.modify {
  font-size: 14px;
  color: #3399ea;
  margin-top: 8px;
  cursor: pointer;
}
.head {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 16px auto 0;
}
.right {
  float: left;
  width: 820px;
}
.right_info {
  margin-top: 16px;
}
.id_card {
  height: 20px;
  line-height: 20px;
}
.id_name {
  float: left;
  font-size: 18px;
  color: #999;
  margin-right: 16px;
  margin-top: 3px;
}
.user_home {
  float: right;
  font-size: 14px;
  color: #3399ea;
  margin-top: 3px;
}
.csdn_info {
  margin-top: 8px;
  margin-bottom: 16px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.nick {
  box-sizing: border-box;
  line-height: 36px;
  overflow: hidden;
}
</style>