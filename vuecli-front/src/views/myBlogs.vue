<template>
    <div>{{article}}</div>
</template>

<script>
export default {
   data(){
      return {
          article:[]
      }
   },
   methods:{
      getArticle(){
          this.$http.get("/getArticle")
          .then(res=>{
              console.log(res)
              this.article = res.data;
          })
          .catch(err=>{
              console.log(err)
          })
      }
   },
   mounted(){
       this.getArticle();
   }
}
</script>

<style>

</style>