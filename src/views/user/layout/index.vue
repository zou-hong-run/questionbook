<template>
  <div class="userinfo-content">
    <topNav />
    <div style="background: #F4F7FE;">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import topNav from '../component/topNav.vue'
</script>
<style scoped lang='scss'>
@import "../../../assets/styles/common.scss";
.userinfo-content{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>