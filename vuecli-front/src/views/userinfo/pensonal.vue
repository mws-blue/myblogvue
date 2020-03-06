<template>
<div class="content">
     <div>
        <h3 class="title">个人博客</h3>
        <div class="user_info">
            <div class="header">
                <img class="head" :src=Img alt="">
            </div>
            <div class="right"> 
                <div class="right_info">
                    <div class="id_card">
                        <span class="id_name">ID：SunLRJ</span>
                        <a href="" class="user_home">个人主页 <i class="el-icon-arrow-right"></i></a>
                    </div>
                </div>
                <div class="csdn_info">
                    <span style="margin-right: 16px; color: rgb(77, 77, 77); font-size: 14px;">关注0</span>
                    <span style="margin-right: 16px; color: rgb(77, 77, 77); font-size: 14px;">粉丝2</span>
                </div>
                <div class="line" style="height: 1px;background:#e0e0e0;"></div>
            </div>
        </div>
    </div> 
</div>
   
</template>
<script>
import img from "../../../public/img/userImg.jpg"
export default {
    data(){
        return{
            Img:img
        }
    }




}
</script>
<style  scoped>
a{
    text-decoration: none;
}
.title{
font-size: 20px;
color:#3d3d3d;
height: 90px;
line-height: 90px;
border-bottom: 1px solid #e0e0e0;
}
.content{
background-color:
#fff;
padding: 0 32px 30px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
min-height: 520px;
}
.user_info{
overflow: hidden;
}
.header{
float: left;
text-align: center;
margin-right: 16px;
cursor: pointer;
}
.head{
width: 100px;
height: 100px;
border-radius: 50%;
margin: 16px auto 0;
}
.right{
    float: left;
width: 820px;
}
.right_info{
    margin-top: 16px;
   
}
.id_card{
    height: 20px;
line-height: 20px;
}
.id_name{
    float: left;
font-size: 18px;
color:
#999;
margin-right: 16px;
margin-top: 3px;
}
.user_home{
    float: right;
font-size: 14px;
color:
#3399ea;
padding-right: 9.3px;
margin-top: 3px;
}
.csdn_info{
    margin-top: 8px;
margin-bottom: 16px;
}
</style>