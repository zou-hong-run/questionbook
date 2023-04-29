<template>
  <div class="userCollect">
    <!-- 热门文章 -->
    <el-scrollbar height="600px">
      <div class="hot">
        <div class="hot-essay">
          <el-row @click="goPage(item.solved==='undefined'?'/essay/essayItem/'+item.id:'/question/questionItem/'+item.id)" 
            style="margin-bottom:10px;" 
            v-for="(item, index) in questions" 
            :key="index">
            <!-- <el-link :href="item.solved==='undefined'?'/#/essay/essayItem/'+item.id:'/#/question/questionItem/'+item.id"> -->
              <el-col class="hot-essay-reply" :span="2">
                <div>{{item?.solved===0?"未解决":"已解决"}}</div>
              </el-col>
              <el-col :span="22">
                <!-- 文字描述 -->
                <el-descriptions style="margin:20px;user-select:all;" :title="item?.title">
                  <el-descriptions-item>
                    <template #default>
                      <div>{{parseStr(item?.data)+'...'}}</div>
                    </template>
                  </el-descriptions-item>
                </el-descriptions>
                <!-- 三连 -->
                <!-- <div class="hot-essay-likecollectandforward">
                  <el-button text type="primary" icon="ChatSquare">评论</el-button>
                  <el-button text type="primary" icon="Pointer">点赞</el-button>
                  <el-button text type="primary" icon="Star">收藏</el-button>
                  <el-button text type="primary" icon="Share">转发</el-button>
                </div> -->
              </el-col>
              
              <!-- 分割线 -->
              <el-divider></el-divider>
              
                
            <!-- </el-link> -->
          </el-row>
          <el-row @click="goPage(item.solved==='undefined'?'/essay/essayItem/'+item.id:'/question/questionItem/'+item.id)" 
            style="margin-bottom:10px;" 
            v-for="(item, index) in texts" 
            :key="index">
            <!-- <el-link :href="item.solved==='undefined'?'/#/essay/essayItem/'+item.id:'/#/question/questionItem/'+item.id"> -->
              <el-col class="hot-essay-reply" :span="2">
                <div>{{item?.sort}}</div>
                <div>回答</div>
              </el-col>
              <el-col :span="22">
                <!-- 文字描述 -->
                <el-descriptions style="margin:20px;user-select:all;" :title="item?.title">
                  <el-descriptions-item>
                    <template #default>
                      <div>{{parseStr(item?.data)+'...'}}</div>
                    </template>
                  </el-descriptions-item>
                </el-descriptions>
                <!-- 三连 -->
                <!-- <div class="hot-essay-likecollectandforward">
                  <el-button text type="primary" icon="ChatSquare">评论</el-button>
                  <el-button text type="primary" icon="Pointer">点赞</el-button>
                  <el-button text type="primary" icon="Star">收藏</el-button>
                  <el-button text type="primary" icon="Share">转发</el-button>
                </div> -->
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
import {myCollect} from "../../../api/user"
import {useRoute,useRouter} from "vue-router"
import {parseStr} from '@/utils/qb'
const router = useRouter()
const goPage = (url)=>{
  router.push(url)
}
const questions = ref()
const texts = ref()
myCollect().then(list=>{
  // console.log(list.data);
  questions.value = list.data?.questions
  texts.value = list.data.texts
})

</script>
<style scoped lang='scss'>
.userCollect{
  width: 100%;
  height: calc(100% - 80px - 5px);
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
</style>