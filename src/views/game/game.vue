<template>
  <div class="game">
    <el-scrollbar height="calc(100% - $nav-height - $footer-height - 20px)">
      <div class="game-title">
        <div style="font-size:60px;color:black;">学习疲惫了,<br>玩游戏休息一下</div>
        <div>
          <el-image style="width: 300px; height: 300px" :src="livestyle"/>
        </div>
      </div>
      <div class="game-content"> 
        <div class="game-content-div" v-for="(item, index) in 10" :key="index">
          <el-image style="width: 200px; height: 200px" :src="livestyle"/>
          <h1>拼图游戏</h1>
          <p>啊哈胡共和国i</p>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import livestyle from "@/assets/game/livestyle.png"

</script>
<style scoped lang='scss'>
@import "@/assets/styles/common.scss";
.game{
  width: 100%;
  height: 100%;
  background-color: #fff;
  &-title{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>