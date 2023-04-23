<style scoped lang='scss'>
.search{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    width: calc(100% - 40px);
    height:100px;
    padding:20px;
    border-top: 2px solid #ccc;
    &-title{
      font-weight: bold;
      font-size: 24px;
    }
    &-content{
      color: skyblue;
    }
    &-type{
      text-align: center;
      line-height: 30px;
      font-size: 10px;
      height: 30px;
      width: 80px;
      border-radius: 15px;
      background-color: burlywood;
    }
  }
}
</style>
<script setup>
import {ref,watch} from 'vue'
import {useRoute,useRouter} from "vue-router"
import { ElNotification } from 'element-plus'
import {search} from '@/api/common'
const route = useRoute()
const router = useRouter() 
const inputVal = ref("")
const searchQuestionsItem = ref([])
const searchEssaysItem = ref([])
const getSearchItem = ()=>{
  if(!inputVal.value){
    ElNotification({
      title:"你没有输入任何数据",
      message: 'nothing!',
      duration:2500
    })
  }

  // console.log(inputVal.value);
  search(inputVal.value).then(list=>{
    console.log(list);
    const {questions,texts} = list.data
    searchQuestionsItem.value = questions
    searchEssaysItem.value = texts
  })
}

const goPage = (url)=>{
  router.push(url)
}
// 监听路由变化,当用户保存页面过期时候,用户重新登录实现,路由重定向
watch(route,(newRoute,oldRoute)=>{
  // console.log(newRoute.query.inputval);
  inputVal.value = newRoute.query.inputval
  getSearchItem()
},{immediate:true})
</script>
<template>
  <div class="search">
    
    <el-scrollbar height="100%">
      <div v-if="searchQuestionsItem.length===0||!searchQuestionsItem.length===0" class="search-item">
        <div class="search-item-title">什么也没有搜索出来</div>
        <div class="search-item-content">你搜索的东西,好像不存在哦</div>
        <div class="search-item-type">类别:无</div>
      </div>
      <div class="search-item" v-for="(item, index) in searchQuestionsItem" :key="index" @click="goPage('/question/questionItem/'+item?.id)">
        <div class="search-item-title">{{item.title}}</div>
        <!-- {{item?.data.match(/[\u4e00-\u9fa5]/g).toString().replace('，',' ').slice(20,120)+'...'}} -->
        <div class="search-item-content">{{item?.data.match(/[\u4e00-\u9fa5]/g).toString().replace('，',' ').slice(20,120)+'...'}}</div>
        <div class="search-item-type">类别:问题</div>
      </div>
      <div class="search-item" v-for="(item, index) in searchEssaysItem" :key="index" @click="goPage('/essay/essayItem/'+item?.id)">
        <div class="search-item-title">{{item.title}}</div>
        <!-- {{item?.data.match(/[\u4e00-\u9fa5]/g).toString().replace('，',' ').slice(20,120)+'...'}} -->
        <div class="search-item-content">{{item?.data.match(/[\u4e00-\u9fa5]/g).toString().replace('，',' ').slice(20,120)+'...'}}</div>
        <div class="search-item-type">类别:文章</div>
      </div>
    </el-scrollbar>
  </div>
 
</template>

