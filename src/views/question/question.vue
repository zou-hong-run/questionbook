<template>
  <div class="question">
    <div class="question-header">
      <el-row class="question-header-row">
        <el-button @click="getAllQuestions" type="primary">所有</el-button>
        <el-button @click="clickGetList(item.id)"  round v-for="(item, index) in questionTypes" :key="index" type="primary">{{item.type}}</el-button>
      </el-row>
    </div>
    <div class="question-content">
      <el-scrollbar>
        <div class="hot-question">
          <router-link v-for="(item, index) in questionList" :key="item.id" :to="`/question/questionItem/${item.id}`">
            <el-card style="width:100%;margin:10px 0 10px;" :body-style="{position:'relative',top:'0px', padding: '10px' }">
              <img
                :src="item.images?item.images.split(',')[0]:'https://pinia.web3doc.top/logo.svg'"
                class="hot-question-top-image"
              />
              <div class="hot-question-content">
                <span class="hot-question-content-inImgText">立即进入讨论</span>
                <div class="hot-question-content-bottom">
                  <div class="hot-question-content-bottom-title">{{item.title}}</div>
                  <div class="hot-question-content-bottom-discuss">
                    <el-tag>{{item.solved===0?"未解决":"已解决"}}</el-tag>
                    <div style="margin:0 20px;"><el-tag type="info">{{999}}+人在线讨论</el-tag></div>
                    <el-image style="width: 20px; height: 20px" :src="embers" />
                  </div>
                </div>
              </div>
            </el-card>
          </router-link>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from "vue"
import embers from "@/assets/indexIcons/fill_小火苗.png";
import {getQuestionType,getQuestionListByType} from "../../api/question"

import useQuestionStore from "../../store/question";
const questionStore = useQuestionStore()
const questionList = ref()
// 如果store中没有列表,就重新发送请求
if(questionStore.list.length===0){
  getAllQuestions()
}
questionList.value = questionStore.list
// 问题类型
let questionTypes = ref()
getQuestionType().then(list=>{
  questionTypes.value = list.data
})
// 按钮点击 查询新数据
function clickGetList(id){
  getQuestionListByType(id).then(data=>{
    questionList.value = data.data
  })
}
// 获取所有问题列表
function getAllQuestions(){
  questionStore.getQuestionList().then(list=>{
    questionList.value = list
  })
}

// 图片加载异常处理
window.addEventListener('error',function(e){
    //当前异常是由图片加载异常引起的
    if( e.target.tagName?.toUpperCase() === 'IMG' ){
        e.target.src = "https://pinia.web3doc.top/logo.svg";
    }
},true)
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
      &-top-image{
        width: 350px;
        height: 400px;
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