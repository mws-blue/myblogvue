<template>
  <div>
    <div class="edit-head">
      <div class="article-bar">
        <span>&lt;</span>
        <span>文章管理</span>
      </div>
      <div class="title-input">
        <input type="text" v-model="article.aName" v-on:input="watchIn" />
        <span>{{num}}/100</span>
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
      num: 0, //标题字数
      article: {
        userId:"",
        aName: "输入文章标题", //标题
        aContent: `` //文章内容
      },
      editor: null
    };
  },
  methods: {
    watchIn() {
      this.num = this.article.aName.length;
    },
    pushArticle() {
      this.$http
        .post("/pushArticle", this.article)
        .then(res => {
          console.log(res);
          if(res.data.affectedRows===1){
            alert("发表成功！")
            this.$router.push("/myBlogs");
          }
        })
        .catch(err => {
          console.log(err);
        });
      
    }
  },
  mounted() {
    
    this.article.userId = localStorage.getItem("userId");
    
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.article.aContent = html;
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
.edit-head {
  width: 100%;
  height: 56px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #7f7f7f;
}
.article-bar {
  width: 80px;
  display: flex;
}
.title-input {
  width: 85%;
  margin: 8px 16px 8px 8px;
  display: flex;
  font-size: 20px;
}
.title-input input {
  width: 100%;
  height: 30px;
  font-size: 18px;
  color: #a4a4a4;
  padding-left: 6px;
}
.title-input span {
  display: inline-block;
  height: 36px;
  line-height: 36px;
}
.act-but {
  display: flex;
}
.act-but button {
  font-size: 16px;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  background-color: #ca0c16;
  color: #fff;
}
.act-but img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>