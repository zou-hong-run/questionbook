<template>
  <div class="userQuestions">
    <!-- 热门文章 -->
    <el-scrollbar height="calc(600px)">
      <div class="hot">
        <div class="hot-essay">
          <el-row @click="goPage('/question/questionItem/'+item.id)" style="margin-bottom:10px;width:100%;" v-for="(item, index) in myQuestionList" :key="index">
            <!-- <el-link :href="'/#/question/questionItem/'+item.id"> -->
              <el-col class="hot-essay-reply" :span="2">
                <el-button size="large" text type="default" icon="ChatSquare">{{item.solved==0?"未解决":"已解决"}}</el-button>
              </el-col>
              <el-col :span="22">
                <!-- 文字描述 -->
                <el-descriptions style="margin:20px;user-select:all;" :title="item.title">
                  <el-descriptions-item>
                    <template #default>
                      <div>{{parseStr(item?.data)+'...'}}</div>
                    </template>
                  </el-descriptions-item>
                </el-descriptions>
                <!-- 三连 -->
                <div class="hot-essay-likecollectandforward">
                  <el-button text type="primary" icon="ChatSquare">评论</el-button>
                  <el-button text type="primary" icon="Pointer">点赞</el-button>
                  <el-button text type="primary" icon="Star">收藏</el-button>
                  <el-button text type="primary" icon="Share">转发</el-button>
                </div>
              </el-col>
              
              <!-- 分割线 -->
              <el-divider></el-divider>
            <!-- </el-link> -->
          </el-row>
        </div>
      </div>
    </el-scrollbar>
    
  </div>
</template>
<script setup>
import {ref} from "vue"
import {myQuestion} from "../../../api/user"
import {useRoute,useRouter} from "vue-router"
import {parseStr} from '@/utils/qb'
const router = useRouter()
const goPage = (url)=>{
  router.push(url)
}
const myQuestionList = ref()
myQuestion().then(list=>{
  // console.log(list.data);
  myQuestionList.value = list.data
})


</script>
<style scoped lang='scss'>
.userQuestions{
  width: 100%;
  height: calc(100% - 80px - 5px);
  .hot{
    width: 100%;
    margin-bottom: 10px;
    background-color: #ffffff;
    // 最热文章
    &-essay{
      width: 100%;
      &-reply{
        width: 100%;
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
</style>