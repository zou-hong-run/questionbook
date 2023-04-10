<template>
  <div class="essay">
    <!-- 文章分类 -->
    <div class="essay-left">
      <div class="essay-left-title">
        分类
      </div>
      <div class="essay-left-content">
        <el-button
          v-for="(item, index) in 10" :key="index" 
          @click="clickBtn(index)"  
          :class='[index==chooseBtn?"essay-left-content-button-chooseBg":"essay-left-content-button"]' 
        >
          Plain
      </el-button>
      </div>
    </div>
    <!-- 文章 -->
    <div class="essay-right">
      <el-scrollbar height="calc(100% - $nav-height - $footer-height - 20px)">
        <!-- 热门文章 -->
        <div class="hot">
          <div class="hot-essay">
            <el-row style="margin-bottom:10px;" v-for="(item, index) in 14" :key="index">
              <el-col class="hot-essay-reply" :span="2">
                <div style="font-weight:bold;">{{item}}</div>
                <!-- <div>回答</div> -->
              </el-col>
              <el-col :span="22">
                <!-- 文字描述 -->
                <el-descriptions style="margin:20px;user-select:all;" title="【开机启动】win11开机启动软件，win11开机启动bat脚本（开机启动vbs文件）">
                  <el-descriptions-item label="css修改默认滚动条样式 antd修改滚动条样式"></el-descriptions-item>
                </el-descriptions>
                <!-- 三连 -->
                <div class="hot-essay-likecollectandforward">
                  <el-button text type="default" icon="ChatSquare">评论</el-button>
                  <el-button text type="default" icon="Pointer">点赞</el-button>
                  <el-button text type="default" icon="Star">收藏</el-button>
                  <el-button text type="default" icon="Share">转发</el-button>
                </div>
              </el-col>
              
              <!-- 分割线 -->
              <el-divider></el-divider>
            </el-row>
          </div>
        </div>
      </el-scrollbar>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let chooseBtn = ref(0)
const clickBtn = function(index){
  chooseBtn.value = index;
}
</script>
<style scoped lang='scss'>
@import "@/assets/styles/common.scss";
.essay{
  user-select: none;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  // 分类
  &-left{
    width: 15%;
    height: 100%;
    margin-right: 10px;
    &-title{
      background-color: #fff;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #ccc;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
    &-content{
      display: flex;
      background-color: #fff;
      flex-direction: column;
      &-button{
        height: 40px;
        margin: 0;
        width: 100%;
        color: black;
        border:none;
      }
      &-button-chooseBg{
        height: 40px;
        margin: 0;
        width: 100%;
        color: black;
        border:none;
        background: #D9E7FC;
      }
    }
  }
  // 文章
  &-right{
    width: 80%;
    height: 100%;
    background-color: #fff;
    .hot{
      width: 100%;
      margin-bottom: 10px;
      background-color: #ffffff;
      // 最热文章
      &-essay{
      
        &-reply{
          font-size: 20px;
          display: flex;
          flex-direction: column;
          align-items:end;
          color: black;
          align-items: center;
          justify-content: center;
        }
        &-likecollectandforward{
          width: 90%;
          display: flex;
          flex-direction: row;
          justify-content: end;
        }
      }
    }
  }
}
</style>