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
                width: 100%;
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
        height: 150px;
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
          font-size: 17px;
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
        height: calc(100% - 100px - 50px);
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
        &-left:hover,&-right:hover{
          color: black;
          text-decoration: underline;
          background-color: #eff1f5;
        }

      }
    }
  }
</style>
<script setup>
  import {onMounted,ref,reactive,nextTick,getCurrentInstance} from "vue"
  import discussionLogo from "../assets/indexIcons/没有问题.png"
  import embers from '../assets/indexIcons/fill_小火苗.png'
  import { ElNotification } from 'element-plus'
  import useUserStore from "../store/user";
  import useQuestionStore from "../store/question"
  import useEssayStore from "../store/essay"
  import {useRoute,useRouter} from "vue-router"
  const userStore = useUserStore()
  const route = useRoute()
  const router = useRouter()
  // const { proxy } = getCurrentInstance();
  // const io = proxy.$io
  // console.log(io);

  let token = 'Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzEzMjU2Mjk3fQ.gpzCbbiRNGHRlspIZ6hgssDpgTdiOUmkVSM5OZfMWLUU'
  var ws = new WebSocket("ws://43.143.237.123:6060/websocket",[token]);
  let userId = userStore.id
  ws.onopen = function() {
      // Web Socket 已连接上，使用 send() 方法发送数据
      /*
      {
        data:{
          "userId":1,
          "toUserId":1,
          "message":"dddd",
          flag:"icon",
          "quetionId":123
        }
      }
      */
     let data = {
        "userId": userId,
        "toUserId":null,
        "message":null,
        "flag":"icon",
        "questionId":null
        }
      ws.send(data);
      console.log('open');
  };
  ws.onmessage = function (e) { 
    console.log('message', e.data);
  };
  ws.onclose = function() { 
    console.log('close');
  };

  const questionStore = useQuestionStore()
  const essayStore = useEssayStore()

  const questionList = ref()
  const essayList = ref()
  questionStore.getQuestionList().then(list=>{
    questionList.value = list
  });
  essayStore.getEssayList().then(list=>{
    essayList.value = list
  });
  const goPage = (id)=>{
    router.push("question/questionItem/"+id)
  }

  // 评论容器元素
  const discussionItemContentRef = ref()
  // 评论右边元素
  const discussionItemRightRef = ref()
  // 滚动条
  const scrollbarRef = ref()
  const addMessageItem = ()=>{
    
    // 评论容器元素
    const discussionItemContentElement = discussionItemContentRef.value
    // 评论右边元素
    const discussionItemRightElement = discussionItemRightRef.value.cloneNode(true)
    let name = discussionItemRightElement.querySelector(".discussion-content-right-username")
    let content = discussionItemRightElement.querySelector(".discussion-content-right-content")
    // console.log(name,content);
    name.innerHTML = userStore.name;
    content.innerHTML = "嘎highOA黑暗hi庵后丢底牌;都会爱过后挂动环监控矮冬瓜"
    discussionItemContentElement.appendChild(discussionItemRightElement)

    // 滚动条 到底部
    // console.log(scrollbarRef.value)
    scrollbarRef.value?.setScrollTop(discussionItemContentRef.value.scrollHeight)
  }
  // 滚动条滚动事件
  const scroll = (e)=>{
    // console.log(e);
  }
  onMounted(()=>{

    // 消息提示框
    ElNotification({
      title: '欢迎欢迎',
      message: '欢迎来到问书欢迎来到问书',
      duration:2500
    })

    
  })

  
  


  window.addEventListener('error',function(e){
      //当前异常是由图片加载异常引起的
      if( e.target.tagName?.toUpperCase() === 'IMG' ){
          e.target.src = "https://pinia.web3doc.top/logo.svg";
      }
  },true)

  
</script>
<template>
  <div class="index">
    <!-- <button @click="addMessageItem">测试</button> -->
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
            <router-link style="width:25%;height:100%;margin:30px;" v-for="(item, index) in questionList" :key="item.id" :to="`/question/questionItem/${item.id}`">
              <el-card style="width:100%;height:100%;"  :body-style="{ padding: '0px' }">
                <!-- <div style="width:100%;display:flex;flex-direction:column;align-items: center;"> -->
                <div style="width:100%;height:100%;">
                  <!-- class="hot-question-top-image" -->
                  <div class="hot-question-top">
                    <img
                      :src="item.images?item.images.split(',')[0]:'https://pinia.web3doc.top/logo.svg'"
                      class="hot-question-top-image"
                    />
                    <div class="hot-question-top-content">
                      <span class="hot-question-top-content-span">立即进入讨论</span>
                      <div class="hot-question-top-content-text">{{item.title}}</div>
                    </div>
                  </div>
                  
                  <div class="hot-question-bottom">
                    <el-tag>{{item.solved===0?"未解决":"已解决"}}</el-tag>
                    <el-tag type="info">{{999}}+人在线讨论</el-tag>
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
            <router-link style="" v-for="(item, index) in essayList" :key="item.id" :to="`/essay/essayItem/${item.id}`">
              <el-row style="border:5px solid #F5F6F8;">
                <!-- 文字描述 -->
                <!-- <el-descriptions style="margin:20px;" title="【开机启动】win11开机启动软件，win11开机启动bat脚本（开机启动vbs文件）">
                  <el-descriptions-item label="css修改默认滚动条样式 antd修改滚动条样式"></el-descriptions-item>
                </el-descriptions> -->
                <el-descriptions style="margin:20px;" :title="item.title">
                  <el-descriptions-item :label="item?.data.match(/[\u4e00-\u9fa5]/g).toString().replace('，',' ').slice(20,200)+'...'"></el-descriptions-item>
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
        <div class="discussion-title-text">问题推送(点击问题一起讨论吧)</div>
        <img class="discussion-title-img" :src="discussionLogo" alt="">
      </div>
      
      <div class="discussion-content">
        <el-scrollbar @scroll="scroll" height="calc(100%)" ref="scrollbarRef">
          <div class="discussion-content-itemcontent animate__animated animate__shakeX" ref="discussionItemContentRef">
            <div class="discussion-content-left">
              <div class="discussion-content-left-username">小草</div>
              <div class="discussion-content-left-content">
                <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
            <div class="discussion-content-right animate__animated animate__backInDown" ref="discussionItemRightRef">
              <div class="discussion-content-right-username">小花</div>
              <div class="discussion-content-right-content">
                <div v-if="false">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <div v-else>
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
                </div>
              </div>
            </div>
<!--     
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
            <div class="discussion-content-right" @click="goPage('id')">
              <div class="discussion-content-right-username">小叶</div>
              <div class="discussion-content-right-content">
                <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
                <img v-else src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
              </div>
            </div> -->

          </div>
            
        </el-scrollbar>
      </div>
      
    </div>
    <!-- <el-button plain @click="open1"> Closes automatically </el-button> -->
  </div>
</template>
