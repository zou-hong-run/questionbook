<template>
  <div class="question">
    <div class="question-header">
      <el-row class="question-header-row">
        <el-button   round v-for="(item, index) in 10" :key="index" type="primary">Plain</el-button>
      </el-row>
    </div>
    <div class="question-content">
      <el-scrollbar>
        <div class="hot-question">
          <el-card style="width:30%;margin:10px 0 10px;" v-for="(item,index) in 20" :body-style="{position:'relative',top:'0px', padding: '10px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="hot-question-image"
            />
            <div class="hot-question-content">
              <span class="hot-question-content-inImgText">立即进入讨论</span>
              <div class="hot-question-content-bottom">
                <div class="hot-question-content-bottom-title">
                  需要设置元素宽度与高度,
                      根据高度看下最多能放几行,再设置-webkit-line-clamp的值为最大行数元素宽度与高度,
                      根据高度看下最多能放几行,再设置-webkit-line-cl元素宽度与高度,
                      根据高度看下最多能放几行,再设置-webkit-line-cl元素宽度与高度,
                      根据高度看下最多能放几行,再设置-webkit-line-cl元素宽度与高度,
                      根据高度看下最多能放几行,再设置-webkit-line-cl
                      我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                  我们不需要设置，内容溢出会自动出现
                </div>
                <div class="hot-question-content-bottom-discuss">
                  <el-tag>未解决</el-tag>
                  <div style="margin:0 20px;"><el-tag type="info">999+人在线讨论</el-tag></div>
                  <el-image style="width: 20px; height: 20px" :src="embers" />
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import embers from "@/assets/indexIcons/fill_小火苗.png"
</script>
<style scoped lang='scss'>
.question{
  user-select: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &-header{
    border-radius: 15px;
    height: 15%;
    width: 100%;
    background-color: #fff;
    &-row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10% 0;
      height: 100%;
      width: 100%;
    }
    
  }
  &-content{
    height: 85%;
    width: 100%;
    .hot-question{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      position: relative;
      &-image{
        width: 100%;
        height: 80%;
      }
      // 卡片文字
      &-content{
        width: 100%;
        position:absolute;
        bottom: 10px;
        background-color: #fff;
        // 图片中的文字
        &-inImgText{
          position:absolute;
          top:-30px;
          left:10px;
          width: 100%;
          color: white;
        }
        &-bottom{
          width: calc(100% - 30px);
          display:flex;
          flex-direction:column;
          margin:0 10px;
          &-title{
            width: 100%;
            height: 54px;
            font-weight: bold;
            font-size: 14px;
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          &-discuss{
            display: flex;
            flex-direction: row;
            justify-content:stretch;
          }
        }
      }
    }
  }
}
</style>