<style scoped lang='scss'>
.search{
  width: 100%;
  height: 100%;
  display: flex;
  &-item{
    display: flex;
    flex-direction: column;
    align-items: space-around;
    background-color: #fff;
    width: 100%;
    height:150px;
    padding:20px;
    &-title{
      font-weight: bold;
      font-size: 24px;
    }
    &-content{
      color: skyblue;
    }
    &-type{
      text-align: center;
      line-height: 40px;
      height: 40px;
      width: 80px;
      border-radius: 15px;
      background-color: burlywood;
    }
  }
}
</style>
<script setup>
import {useRoute,useRouter} from "vue-router"
const route = useRoute()
const router = useRouter() 
const {inputVal} = route.query
</script>
<template>
  <div class="search">
    <div class="search-item">
      <div class="search-item-title">我是标题</div>
      <div class="search-item-content">我是内容</div>
      <div class="search-item-type">我是类别</div>
    </div>
  </div>
 
</template>

