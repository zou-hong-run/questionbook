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
        <el-link v-for="(item, index) in gameList" :key="index" target="_blank" :href="item.href" >
          <div class="game-content-div">
            <el-image style="width: 200px; height: 200px" :src="item.image"/>
            <h1>{{item.name}}</h1>
            <p>{{item.content}}</p>
          </div>
        </el-link>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted} from "vue"
import livestyle from "@/assets/game/livestyle.png"
import mota from "@/assets/game/mota.png"
import pintu from "@/assets/game/pintu.png"
import tiaoyitiao from "@/assets/game/跳一跳.png"
import bgm from "@/assets/game/bg.mp3"
let mp3 = new Audio(bgm)
onMounted(()=>{
  document.querySelector(".game").addEventListener("click",()=>{
    mp3.play()
  })
})
onUnmounted(() => {
  mp3.pause()
})

let gameList = [
  {
    name:"魔塔",
    content:"自制经典魔塔小游戏",
    href:"/mota/index.html",
    image:mota
  },
  {
    name:"拖拖拼图",
    content:"无与伦比的拖拽拼图,难度超乎你的想象",
    href:"/pintu/index.html",
    image:pintu
  },
  {
    name:"跳一跳",
    content:"魔幻走位,考验你的大脑",
    href:"/跳一跳.html",
    image:tiaoyitiao
  }
  
]
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