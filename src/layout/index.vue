<template>
  <div id="layout">
    <topNav />
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <el-text type="primary">
        2023 @ xxxx 版权所有 增值电信业务经营许可证：XXXXX XXXXX 公网安备 XXXXXXXXXXX号
      </el-text>
    </div>
  </div>
</template>

<script setup>
import topNav from "../components/topNav/index.vue"
</script>
<style scoped lang='scss'>
@import "../assets/styles/common.scss";
  #layout{
    width: 100%;
    height: 100%;
    background: #F5F6F8;
    .content{
      width: calc(100% - 200px);
      height: calc(100% - $nav-height - $footer-height - 20px);
      margin: 10px 100px 10px;
      min-width: 1000px;
    }
    .footer{
      width: 100%;
      height: $footer-height;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      background-image: linear-gradient(0deg, #fff5ff 98%, #eee5e5 2%);

    }
  }
</style>