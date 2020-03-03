<template>
  <div class="about">
    <h1>{{Hello}}</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data:function(){
        return {
        Hello:""
        }
    },
    created(){
        axios
        .get("http://localhost:8888/about", {
        })
        .then(res => {
            console.log(res.data)
          this.Hello = res.data;
        });
    }
}
</script>