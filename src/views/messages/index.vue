

<script setup>
import {ref} from 'vue';
// import { storeToRefs } from 'pinia'
import {likeMe,collectMe,commentMe} from "../../api/message"
import {parseStr} from '@/utils/qb'
import useUserStore from '../../store/user';
const userStore = useUserStore()
const name = userStore.name
const image = userStore.image
const phone = userStore.phone
const imgUrl = userStore.image

const likeMeList = ref()
const collectMeList = ref()
const commentMeList = ref()
likeMe().then(list=>{
  likeMeList.value = list.data

})
function tableClick(data){
  let label = data.props.label
  const tabChoose = {
    "收藏":()=>{
      collectMe().then(list=>{
        collectMeList.value = list.data
      })
    },
    "评论":()=>{
      commentMe().then(list=>{
        console.log(list.data);
        commentMeList.value = list.data
      })
    },
    "点赞":()=>{
      likeMe().then(list=>{
        likeMeList.value = list.data
      })
    }
  }
  tabChoose[label]()
}

</script>
<template>
  <div class="messages">
    <div class="messages-left">
      <el-avatar :size="80" :src="imgUrl?imgUrl:'https://img1.baidu.com/it/u=2101536329,949644418&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625'" />
      <h1>{{name}}</h1>
      <p>{{phone}}</p>
      <el-link type="success" href="#/userinfo/questions">个人主页</el-link>
    </div>
    <div class="messages-right">
      <el-tabs type="border-card"  @tab-click="tableClick" >
        <!-- <el-tab-pane label="全部">
          <el-scrollbar height="70vh">
            <el-link href="https://element-plus.org" target="_blank" class="messages-right-item" v-for="(item, index) in 20" :key="index">
              <el-avatar style="margin-right:20px;" :size="80" :src="circleUrl" />
              <el-descriptions :column="1">
                <el-descriptions-item label="用户名:">夏草</el-descriptions-item>
                <el-descriptions-item label="时间:">2023年4月5日19:17:10</el-descriptions-item>
                <el-descriptions-item label="文章标题:">干红干好噶化工爱过哈 嘎嘎</el-descriptions-item>
                <el-descriptions-item label="评论了:">
                  你小子找茬啊
                </el-descriptions-item>
              </el-descriptions>
            </el-link>
          </el-scrollbar>
        </el-tab-pane> -->

        <el-tab-pane label="点赞">
          <el-scrollbar height="70vh">
            <el-link :href="item.questionId?'/#/question/questionItem/'+item.question.id:'/#/essay/essayItem/'+item.text.id" class="messages-right-item" v-for="(item, index) in likeMeList" :key="item.id">
              <el-avatar style="width:250px;margin-right:20px;" :size="80" :src="item.user.image?image:circleUrl" />
              <el-descriptions :column="1">
                <el-descriptions-item label="用户名:">{{item.user.name}}</el-descriptions-item>
                <el-descriptions-item label="时间:">{{item.createTime}}</el-descriptions-item>
                <el-descriptions-item :label="item.question?'问题标题':'文章标题'">{{item.question?item.question.title:item.text.title}}</el-descriptions-item>
                <el-descriptions-item label="评论了:">{{item.question?item.question.data:item.text.data}}</el-descriptions-item>
              </el-descriptions>
            </el-link>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="收藏">
          <el-scrollbar height="70vh">
            <el-link :href="item.questionId?'/#/question/questionItem/'+item.question.id:'/#/essay/essayItem/'+item.text.id" class="messages-right-item" v-for="(item, index) in collectMeList" :key="item.id">
              <el-avatar style="width:250px;margin-right:20px;" :size="80" :src="item.user.image?image:circleUrl" />
              <el-descriptions :column="1">
                <el-descriptions-item label="用户名:">{{item.user.name}}</el-descriptions-item>
                <el-descriptions-item label="时间:">{{item.createTime}}</el-descriptions-item>
                <el-descriptions-item :label="item.question?'问题标题':'文章标题'">{{item.question?item.question.title:item.text.title}}</el-descriptions-item>
                <el-descriptions-item label="评论了:">{{item.question?item.question.data:item.text.data}}</el-descriptions-item>
              </el-descriptions>
            </el-link>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="评论">
          <el-scrollbar height="70vh">
            <el-link :href="item.questionId?'/#/question/questionItem/'+item.question.id:'/#/essay/essayItem/'+item.text.id" class="messages-right-item" v-for="(item, index) in commentMeList" :key="item.id">
              <el-avatar style="width:250px;margin-right:20px;" :size="80" :src="item.user.image?image:circleUrl" />
              <el-descriptions :column="1">
                <el-descriptions-item label="用户名:">{{item.user.name}}</el-descriptions-item>
                <el-descriptions-item label="时间:">{{item.createTime}}</el-descriptions-item>
                <el-descriptions-item :label="item.question?'问题标题':'文章标题'">{{item.question?item.question.title:item.text.title}}</el-descriptions-item>
                <el-descriptions-item label="评论了:">{{item.question?item.question.data:item.text.data}}</el-descriptions-item>
              </el-descriptions>
            </el-link>
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.messages{
  width: 100%;
  height: 100%;
  display: flex;
  &-left{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    width: 20%;
    height:35%;
    background-color: white;
  }
  &-right{
    border-radius: 5px;
    height: calc(100% - 10px);
    margin-left: 10px;
    width: 80%;
    &-item{
      user-select: none;
      width: 100%;
      display: flex;
      justify-content: start;
      flex-direction: row;
      border-radius: 5px;
      border-top: 10px solid #F4F7FE;
      border-bottom: 10px solid #F4F7FE;
      align-items: center;
    }
  }
}
</style>