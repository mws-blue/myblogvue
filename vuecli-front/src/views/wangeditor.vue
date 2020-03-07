<template>
  <div>
    <div class="edit-head">
      <div class="article-bar">
        <span>&lt;</span>
        <span>文章管理</span>
      </div>
      <div class="title-input">
        <input type="text" v-model="article.arTitle" v-on:input="watchIn"/>
        <span>{{article.num}}/100</span>
      </div>
      <div class="act-but">
        <button type="button" @click="pushArticle">发布文章</button>
      </div>
    </div>
    <div id="wangeditor">
      <div ref="editorElem" style="text-align:left;"></div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import avatar from "@/assets/platformImg/userAvatar.jpg";
export default {
  name: "Editor",
  data() {
    return {
	  article:{
		 arTitle: "输入文章标题",//标题
		 num:0, //标题字数
		 arContent:``//文章内容
	  },
      editor: null
      //editorContent: ''
    };
  },
  methods:{
      watchIn(){
		  this.article.num = this.article.arTitle.length;
	  },
	  pushArticle(){
          this.$router.push("/myBlogs");
	  }
  },
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
//   props: ["catchData"], // 接收父组件的方法
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
    //   this.editorContent = html;
      this.arTitle.arContent = html;
      //this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create(); // 创建富文本实例
  }
};
</script>

<style>
.edit-head{
	width: 100%;
	height: 56px;
	background-color: #F3F3F3;
	display: flex;
	align-items: center;
	font-size: 16px;
	color: #7F7F7F;
}
.article-bar{
	width: 80px;
    display: flex;
}
.title-input{
	width: 85%;
	margin: 8px 16px 8px 8px;
	display: flex;
	font-size: 20px;
}
.title-input input{
	width: 100%;
	height: 30px;
	font-size: 18px;
	color: #A4A4A4;
	padding-left: 6px;
}
.title-input span{
	display: inline-block;
	height: 36px;
	line-height: 36px;
}
.act-but{
	display: flex;
}
.act-but button{
    font-size: 16px;
	width: 90px;
	height: 40px;
	border-radius: 5px;
	background-color: #CA0C16;
	color: #fff;
}
.act-but img{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-left: 10px;
}
</style>