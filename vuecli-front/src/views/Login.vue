<template>
  <div class="register-wrapper">
    <div id="register">
      <p class="title">登录</p>
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm1.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleForm1.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="submit">登录</el-button>
          <a class="lefts">忘记密码？</a>
          <a class="rightd" @click="register">注册新用户</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm1: {
        username: "",
        password: "",
        ctof: "menu"
      }
    };
  },
  created() {

  },
  methods: {
    submit() {
      if (this.ruleForm1.username == "" || this.ruleForm1.password == "") {
        this.$alert("用户名或密码不能为空！", "", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      else{
       
      this.$http.get("/Login", {
          params: {
            username: this.ruleForm1.username,
            password: this.ruleForm1.password
          }
        })

        .then(response => {
          console.log(response.data);
          if (response.data.code == 1) {
           const h = this.$createElement;
        this.$notify({
          title: '',
          message: h('i', { style: 'color: teal'}, '登录成功'),
          offset: 200
                 });

            //sessionStrorege 浏览器本地缓存
            localStorage.setItem("loginStatus", "menu");
            
            localStorage.setItem("userId",response.data.data.userId);
            localStorage.setItem("username", this.ruleForm1.username);
            localStorage.setItem("password", this.ruleForm1.password);
            
        
            this.$router.push({
              path: "/"
            });
          } 
          else if (response.data.code == -1) 
          {
            this.$alert("用户不存在！", "", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
          else if(response.data.code == 0) 
          {
            this.$alert("密码错误！", "", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    },
    register() {
      this.$router.push("/Register");
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin-left: 80px;
  text-align: center;
}

.lefts {
  margin-top: 15px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  float: left;
}
.rights {
  margin-top: 15px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  float: right;
  text-indent: 8px;
}

.b_color:hover {
  color: #2c2fd6;
}
.register-wrapper {
  position: fixed;
  top: 63px;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 340px;
  margin: 60px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
</style>