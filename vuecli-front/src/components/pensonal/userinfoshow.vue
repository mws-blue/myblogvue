<template>
  <div>
    <div style="box-sizing: border-box;background: #fff;margin-top:20px">
      <div class="nick">
        <ul class="self">
        <li class="comon">姓名: {{truename}}</li>
        <li class="comon">性别: {{gender}}</li>
        <li class="comon">生日: {{birth}}</li>
        <li class="comon">邮箱: {{email}}</li>
        <li class="comon">学校: {{school}}</li>
        <li class="comon">公司: {{company}}</li>
        <li class="comon">简介: {{info}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:"",
      truename:"",
      gender:"",
      birth:"",
      school:"",
      info:"",
      company:"",
      email:""
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    let vm=this
    vm.$http.get('/user', {
    params: {
      username:this.username
    }
  })
  .then(function (response) {
      let data=response.data
    vm.truename=data.truename
    vm.gender=data.gender
    vm.birth=data.birth
    vm.school=data.school
    vm.tel=data.tel
    vm.info=data.info
    vm.company=data.company
    vm.email=data.email
    
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>
<style scoped>
.nick {
  box-sizing: border-box;
  line-height: 36px;
  overflow: hidden;
}
.self {
  padding: 0;
  margin: 0;
  list-style: none;
}
.comon{
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  color:#4d4d4d;
}
</style>