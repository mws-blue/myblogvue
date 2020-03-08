<template>
<div style="margin-top:20px">
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
  <el-form-item label="昵称">
    <el-input v-model="form.truename"></el-input>
  </el-form-item>
    <el-form-item label="性别">
    <el-radio-group v-model="form.gender">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="出生日期">
    <el-col :span="11">
     <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="公司">
    <el-input v-model="form.company"></el-input>
  </el-form-item>
  <el-form-item label="简介">
    <el-input type="textarea" v-model="form.info"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</div> 
</template>
<script>
  export default {
    data() {
      return {
        form: {
          username:"",
          truename: '',
          date: '',
          gender: '',
          company: '',
          info: '',
          userId:"",
        }
      }
    },
    methods: {
      onSubmit() {
   
   this.$http.post('/changeinfo',this.form)
  .then(function (response) {
      console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
      }
    },
    created(){
        console.log(localStorage.getItem("username"))
        this.form.username = localStorage.getItem("username");
 let vm=this
   vm.$http.get('/user', {

    params: {
      username:this.form.username
    }
  })
  .then(function (response) {
      let data=response.data
      
    vm.form.truename=data.truename
    vm.form.gender=data.gender
    vm.form.school=data.school
    vm.form.info=data.info
    vm.form.company=data.company
    vm.form.userId=data.userId
    console.log(vm.form.userId)
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
</script>