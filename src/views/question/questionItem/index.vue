<style scoped lang='scss'>
  .questionItem{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .questionItem-title{
      padding: 10px;
      width: calc(100% - 20px);
      height: calc(50% - 20px);
      border: 1px solid #fff;
      background-color: #F4F7FE;
    }
    .questionItem-content{
      width: calc(100% - 20px);
      height: calc(50% - 70px);
      padding: 10px;
      background: #ffffff;
      &-itemcontent{
        background-color: #fff;
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
    .questionItem-bottom{
      border-top: 1px solid #ccc;
      width: 100%;
      height:46px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: end ;
      background-color: #F4F7FE;
    }
}
</style>

<script setup>
import {ref,reactive,onMounted,onUnmounted,nextTick} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {collectQuestion,likeQuestion, getQuestionById,addQuestionComment,getQuestionCommentList} from "../../../api/question"
import { ElMessageBox,ElNotification } from 'element-plus'
import useUserStore from '../../../store/user';
import connWebsocket from "../../../utils/websocket"
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
let name = userStore.name
let userId = userStore.id

const questionData = ref()

let questionId = route.params.id
if(!questionId){
  alert('页面id不存在')
}
getQuestionById(questionId).then(list=>{
  // console.log(list.data);
  questionData.value = list.data
}).catch(err=>{
  ElMessageBox.confirm('该问题不存在,是否返回?')
    .then(() => {
      router.back()
      done()
    })
    .catch(() => {
      router.back()
    })
})
// 渲染评论区数据
const addMessage = (isMy,message,name)=>{
    // 消息容器
    const questionItemContentElement = questionItemContentRef.value
    if(isMy){
      // 左边消息
      const contentItemLeftElement = contentItemLeftRef.value.cloneNode(true)
      // 左边消息 用户,内容
      const leftNameElement = contentItemLeftElement.querySelector(".questionItem-content-left-username")
      const leftContentElement = contentItemLeftElement.querySelector(".questionItem-content-left-content")
      
      leftNameElement.innerHTML = name
      leftContentElement.innerHTML = message
      
      // 向消息容器中插入元素
      questionItemContentElement.appendChild(contentItemLeftElement)
    }else{
      if(contentItemRightRef.value){
        const contentItemRightElement = contentItemRightRef.value.cloneNode(true)
        // 右边 用户,内容
        const rightNameElement = contentItemRightElement.querySelector(".questionItem-content-right-username")
        const rightContentElement = contentItemRightElement.querySelector(".questionItem-content-right-content")
        rightNameElement.innerHTML = name
        rightContentElement.innerHTML = message
        // 向消息容器中插入元素
        questionItemContentElement.appendChild(contentItemRightElement)
      }
    }
    // 滚动条 到底部
    scrollbarRef.value?.setScrollTop(questionItemContentRef.value.scrollHeight)
    
  }
// 获取评论列表
const getCommentList = ()=>{
  getQuestionCommentList(questionId).then(list=>{
    list.data.reverse().forEach(item=>{
      if(item.userId===userId){
        addMessage(true,item.data,item.user.name)
      }else{
        addMessage(false,item.data,item.user.name)
      } 
    })
  })
}
onMounted(()=>{
  getCommentList()
})
// ws
let ws = connWebsocket()
// 发起连接请求数据格式
// 加入聊天室
let data = {
  data:{
    "userId": userId,
    "toUserId":null,
    "message":null,
    "flag":"questionHome",
    "questionId":questionId
  }
}
// 回调函数接受返回的数据
const getSocketData = (res)=>{
  console.log("message",res.data);
  if(res.data){
    const flag = res.data.flag
    if(flag==='questionHomeMessage'){
      let name = res.data.userName
      let message = res.data.message
      nextTick(()=>{
        addMessage(false,message,name)
      })
    }
  }
  
}
// 跳转到视频通话页面
const goVideo = ()=>{
  window.open("https://43.138.10.99")
}

// 发送连接请求
ws.onsend(data,getSocketData)

  // html文本
  // const html = ref('<h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><hr/><p>我是你要输入的文章哦!</p><p>同时我也支持markdown语法哦!</p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul><p style="text-align: left;">开始写作吧!!!!!!</p>')
  // 用户输入框
  const inputVal = ref('')
  // 消息框对象
  const questionItemContentRef = ref()
  // 消息左边元素
  const contentItemLeftRef = ref()
  // 消息右边元素
  const contentItemRightRef = ref()
  // 给用户提示
  const showNotification = (type)=>{
    ElNotification({
      title: type+'成功',
      message: "你的"+type+"是对作者的最大的鼓励",
      position:"bottom-left",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:"bottom-right",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:"top-left",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:'top-right',
      duration:2000
    })
  }
  // 用户收藏
  const addCollectQuestion = ()=>{
    collectQuestion(questionId)
    showNotification("收藏")
  }
  // 用户点赞
  const addLikeQuestion = ()=>{
    likeQuestion(questionId)
    showNotification("点赞")
  }
  // 滚动条
  const scrollbarRef = ref()
  // 发送消息
  const sendMessage = (isMy)=>{
    if(!inputVal.value){alert("不能发送为空的消息");return;}

    const message = inputVal.value
    const name = userStore.name
    // 消息容器
    const questionItemContentElement = questionItemContentRef.value
    if(isMy){
      // 左边消息
      const contentItemLeftElement = contentItemLeftRef.value.cloneNode(true)
      // 左边消息 用户,内容
      const leftNameElement = contentItemLeftElement.querySelector(".questionItem-content-left-username")
      const leftContentElement = contentItemLeftElement.querySelector(".questionItem-content-left-content")
      
      leftNameElement.innerHTML = name
      leftContentElement.innerHTML = message
      
      // 向消息容器中插入元素
      questionItemContentElement.appendChild(contentItemLeftElement)
      addQuestionComment(message,questionId).then(list=>{
        // 添加评论成功
        console.log(list.data,"添加评论成功");
        
        let data = {
          data:{
            "userName":userStore.name,
            "userId":userId,
            "toUserId":null,
            "message":message,
            "flag":"questionHomeMessage",
            "questionId":questionId
          }
        }
        ws.onsend(data,null)
      })

    }else{
      const contentItemRightElement = contentItemRightRef.value.cloneNode(true)
      // 右边 用户,内容
      const rightNameElement = contentItemRightElement.querySelector(".questionItem-content-right-username")
      const rightContentElement = contentItemRightElement.querySelector(".questionItem-content-right-content")
      rightNameElement.innerHTML = name
      rightContentElement.innerHTML = message
      // 向消息容器中插入元素
      questionItemContentElement.appendChild(contentItemRightElement)
    }
    // 滚动条 到底部
    scrollbarRef.value?.setScrollTop(questionItemContentRef.value.scrollHeight)
    
    inputVal.value = ''
    
  }
onUnmounted(()=>{
  let data = {
    data:{
      "userId": userId,
      "toUserId":null,
      "message":null,
      "flag":"questionRemoveHome",
      "questionId":questionId
    }
  }
  ws.onsend(data,getSocketData)
})
</script>
<template>
  <div class="questionItem">
    <el-scrollbar class="questionItem-title">
      <!-- <div v-html="html"></div> -->
      <div v-html="questionData?.data"></div>
    </el-scrollbar>
    <div class="questionItem-content">
      <el-scrollbar height="calc(100%)" ref="scrollbarRef">
        <div class="questionItem-content-itemcontent animate__animated animate__shakeX" ref="questionItemContentRef">
          
         
          <div ref="contentItemLeftRef" class="questionItem-content-left animate__animated animate__backInRight">
            <div class="questionItem-content-left-username">小草</div>
            <div class="questionItem-content-left-content">
              <div v-if="true">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
              <div v-else>
                <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
              </div>
            </div>
          </div>
          <div ref="contentItemRightRef" class="questionItem-content-right animate__animated animate__backInLeft">
            <div class="questionItem-content-right-username">小花</div>
            <div class="questionItem-content-right-content">
              <div v-if="false">我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了</div>
              <div v-else>
                <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
              </div>
            </div>
          </div>
  

        </div>
          
      </el-scrollbar>
    </div>
    <el-scrollbar style="width: 100%;height:50px;">
      <div class="questionItem-bottom">
        <el-button ><el-icon><CirclePlus /></el-icon></el-button>
        <el-button @click="goVideo"><el-icon><Service /></el-icon>音视频通话</el-button>
        <el-input
          v-model="inputVal"
          @change="sendMessage(true)"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="input"
          placeholder="尽情讨论吧!"
        />
        
        <el-button @click="sendMessage(true)">发送</el-button>
        <el-button @click="addCollectQuestion" type="default"><el-icon><Star /></el-icon>收藏</el-button>
        <el-button @click="addLikeQuestion" type="default"><el-icon><Pointer /></el-icon>点赞</el-button>
        <el-button text type="primary" disabled  >问题类型:</el-button>
        <el-button plain type="info"  disabled  v-for="(item, index) in questionData?.types" :key="index">{{item.type}}</el-button>
      </div>
    </el-scrollbar>
    
  </div>
</template>
