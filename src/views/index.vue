<template>
  <div class="index">
    <!-- 内容区域 -->
    <div class="index-left">
      <el-scrollbar height="calc(100%)" >
        <!-- 热门问题 -->
        <div class="hot">
          <div class="hot-title">
            <el-divider content-position="left">
              <el-text style="font-weight: bold;font-size:24px;" size="large">最热问题</el-text>
            </el-divider>
            <el-divider content-position="right">
              <el-link size="large" type="primary" disabled>{{`<<更多>>`}}</el-link>
            </el-divider>
          </div>
          
          <div class="hot-question">
            <router-link style="width:25%;height:100%;margin:30px;" v-for="(item, index) in 10" :key="index" :to="`/question/questionItem/${item}`">
              <el-card style="width:100%;height:100%;"  :body-style="{ padding: '0px' }">
                <!-- <div style="width:100%;display:flex;flex-direction:column;align-items: center;"> -->
                <div style="width:100%;height:100%;">
                  <div class="hot-question-top">
                    <img
                      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                      class="hot-question-top-image"
                    />
                    <div class="hot-question-top-content">
                      <span class="hot-question-top-content-span">立即进入讨论</span>
                      <div class="hot-question-top-content-text">
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
                    我们不需要设置，内容溢出会自动出现
                      </div>
                    </div>
                  </div>
                  
                  <div class="hot-question-bottom">
                    <el-tag>未解决</el-tag>
                    <el-tag type="info">999+人在线讨论</el-tag>
                    <el-image style="width: 20px; height: 20px" :src="embers" />
                  </div>
                </div>
              </el-card> 
            </router-link>
          </div>
        </div>
        <!-- 热门文章 -->
        <div class="hot">
          <div class="hot-title">
            <el-divider content-position="left">
              <el-text style="font-weight: bold;font-size:24px;" size="large">热门文章...</el-text>
            </el-divider>
            <el-divider content-position="right">
              <el-link size="large" type="primary" disabled>{{`<<更多>>`}}</el-link>
            </el-divider>
          </div>
          <div class="hot-essay">
            <router-link style="" v-for="(item, index) in 10" :key="index" :to="`/essay/essayItem/${item}`">
              <el-row style="border:5px solid #F5F6F8;">
                <!-- 文字描述 -->
                <el-descriptions style="margin:20px;" title="【开机启动】win11开机启动软件，win11开机启动bat脚本（开机启动vbs文件）">
                  <el-descriptions-item label="css修改默认滚动条样式 antd修改滚动条样式"></el-descriptions-item>
                </el-descriptions>
                <!-- 三连 -->
                <div class="hot-essay-likecollectandforward">
                  <el-button text type="default" icon="ChatSquare">评论</el-button>
                  <el-button text type="default" icon="Pointer">点赞</el-button>
                  <el-button text type="default" icon="Star">收藏</el-button>
                  <el-button text type="default" icon="Share">转发</el-button>
                </div>
                <!-- 分割线 -->
                <el-divider></el-divider>
              </el-row>
            </router-link>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 世界讨论区 -->
    <div class="index-right">
      
      <div class="discussion-title">
        <div class="discussion-title-text">问题推送</div>
        <img class="discussion-title-img" :src="discussionLogo" alt="">
      </div>
      
      <div class="discussion-content">
        <el-scrollbar height="calc(100%)" >
          <div class="discussion-content-itemcontent">
            <div class="discussion-content-left">
              <div class="discussion-content-left-username">小草</div>
              <div class="discussion-content-left-content">
                <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
            <div class="discussion-content-right">
              <div class="discussion-content-right-username">小花</div>
              <div class="discussion-content-right-content">
                <div v-if="false">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
    
            <div class="discussion-content-right">
              <div class="discussion-content-right-username">小花</div>
              <div class="discussion-content-right-content">
                <div v-if="false">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
            <div class="discussion-content-right">
              <div class="discussion-content-right-username">小花</div>
              <div class="discussion-content-right-content">
                <div v-if="false">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
            <div class="discussion-content-left">
              <div class="discussion-content-left-username">小草</div>
              <div class="discussion-content-left-content">
                <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <img v-else src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
              </div>
            </div>
            <div class="discussion-content-right">
              <div class="discussion-content-right-username">小叶</div>
              <div class="discussion-content-right-content">
                <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <img v-else src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
              </div>
            </div>
          </div>
            
        </el-scrollbar>
      </div>
      
    </div>
    <!-- <el-button plain @click="open1"> Closes automatically </el-button> -->
  </div>
</template>
<script setup>
import {onMounted} from "vue"
import discussionLogo from "../assets/indexIcons/没有问题.png"
import embers from '../assets/indexIcons/fill_小火苗.png'
import { ElNotification } from 'element-plus'
onMounted(()=>{
  // 消息提示框
  ElNotification({
    title: '欢迎欢迎',
    message: '欢迎来到问书欢迎来到问书'
  })
})

</script>
<style scoped lang='scss'>
@import "../../src/assets/styles/common.scss";
  .index{
    user-select: none;
    width: 100%;
    height: 100%;
    display: flex;
    
    // 左边部分
    &-left{
      width: 75%;
      height: 100%;
      //background-color: #eb0f0f;
      border-radius: 5px;
      .hot{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #ffffff;
        &-title{
          z-index: 10;
          background-color: #ffffff;
          position: sticky;
          top:0;
          width:100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        // 最热问题
        &-question{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          &-top{
            width: 100%;
            height:200px;
            position: relative;
            &-image{
              width: 100%;
              height: 100%;
              opacity: 1;
            }
           
            &-content{
              position: absolute;
              top: 0px;
              left: 0px;

              
              width: 100%;
              height:100%;
              &-span{
                width: 100%;
                color: silver;
                text-align: center;
                position: absolute;
                background-color: #fff;
                top: 0%;
                left: 0%;
              }
              &-text{
                height: 55px;
                position: absolute;
                bottom: 0px;
                color: rgb(17, 63, 82);
                background-color: #ffffff;
                font-weight: bold;
                font-size: 15px;
                padding: 4px;

                word-break: break-all;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }
            }
          }
          &-bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 30px;
          }
        }
        // 最热文章
        &-essay{
          width: 100%;
          &-likecollectandforward{
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: end;
          }
        }
      }
    }
    // 右边讨论区
    &-right{
      border-radius: 5px;
      width: calc(25% - 10px);
      padding-left: 10px;;
      height: 100%;
      //background-color: #000;
      // 讨论区标题
      .discussion-title{
        border-radius: 5px;
        user-select: none;
        height: 100px;
        width: 100%;
        background: linear-gradient(to bottom,#B1CDF8,#ffffff);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &-text::before{
          content: "";
          padding-left: 5px;
          border-left: 4px solid white;
        }
        &-text{
          margin-left: 20px;
          color: white;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 50px;
        }
        &-img{
          width:150px;
          height: 95px;
        }
      }
      // 讨论区 聊天部分
      .discussion-content{
        width: calc(100% - 20px);
        padding: 0 10px 0;
        height: calc(100% - 100px);
        background: #ffffff;
        &-itemcontent{
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        // 左右聊天项共有属性
        &-left,&-right{
          user-select: all;
          margin-bottom: 10px ;
          height: auto;
          // 聊天框宽度 占据70%
          width: auto;
          max-width:300px;
          background-color: #f5f6f8;
          padding: 15px;
          // 用户姓名
          &-username{
            width: auto;
            color: black;
            //background-color: #532f2f;
            font-size: 5px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          // 用户发的消息
          &-content{
            max-width:300px;
            color: skyblue;
            //background-color: #052046;
            font-size: 10px;
            img{
              width: 150px;
              height: 150px;
            }
          }
        }
        // 右边特有属性
        &-right{
          align-self: end;
          text-align: right;
          width: fit-content;
          &-content{
            text-align: left;
            display: flex;
            flex-direction: row-reverse;
            img{
              width: 150px;
              height: 150px;
            }
          }
        }

      }
    }
  }
</style>