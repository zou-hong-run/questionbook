<template>
  <div class="essay">
    <!-- 文章分类 -->
    <div class="essay-left">
      <div class="essay-left-title">
        分类
      </div>
      <div class="essay-left-content">
        <el-button
          v-for="(item, index) in essayTypes" :key="index" 
          @click="clickBtn(index,item.id)"  
          :class='[index==chooseBtn?"essay-left-content-button-chooseBg":"essay-left-content-button"]' 
        >
          {{item.type}}
      </el-button>
      </div>
    </div>
    <!-- 文章 -->
    <div class="essay-right">
      <el-scrollbar height="calc(100% - $nav-height - $footer-height - 20px)">
        <!-- 热门文章 -->
        <div class="hot">
          <div class="hot-essay">
            <router-link v-for="(item, index) in essayList" :key="item.id" :to="`/essay/essayItem/${item.id}`">
              <el-row>
                <el-col  class="hot-essay-reply" :span="2">
                  <div style="font-weight:bold;">{{index+1}}</div>
                  <!-- <div>回答</div> -->
                </el-col>
                <el-col :span="22"  >
                  <!-- 文字描述 -->
                  <el-descriptions style="margin:20px;user-select:all;" :title="item.title">
                    <el-descriptions-item label-class-name="hot-essay-descriptions" :label="parseStr(item.data)+'...'"></el-descriptions-item>
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
            </router-link>
          </div>
        </div>
      </el-scrollbar>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
// 获取文章列表,获取文章分类,根据类型查找文章
import {getEssayType,getEssayListByType} from "../../api/essay"
import useEssayStore from '../../store/essay';
import {parseStr} from '@/utils/qb'
const essayStore = useEssayStore()

// 所有文章列表
const essayList = ref()
if(essayStore.list.length===0){
  getAllEssays()
}
essayList.value = essayStore.list
function getAllEssays(){
  essayStore.getEssayList().then(list=>{
    essayList.value = list
  })
}
// 所有文章分类
const essayTypes = ref()
if(essayStore.category.length===0){
  essayStore.getEssayType().then(list=>{
    essayTypes.value = list
  })
}
essayTypes.value = essayStore.category

// 根据分类获取文章
function EssayListByType(id){
  getEssayListByType(id).then(list=>{
    essayList.value = list.data
  })
}
// 保存按钮当前索引
let chooseBtn = ref(0)
// 点击分类按钮,
const clickBtn = function(index,id){
  chooseBtn.value = index;
  EssayListByType(id)
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