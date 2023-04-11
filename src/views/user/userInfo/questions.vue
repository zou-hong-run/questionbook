<template>
  <div class="userQuestions">
    <!-- 热门文章 -->
    <el-scrollbar height="calc(300px)">
      <div class="hot">
        <div class="hot-essay">
          <el-row style="margin-bottom:10px;" v-for="(item, index) in 14" :key="index">
            <el-col class="hot-essay-reply" :span="2">
              <el-button size="large" text type="default" icon="ChatSquare">已解决</el-button>
            </el-col>
            <el-col :span="22">
              <!-- 文字描述 -->
              <el-descriptions style="margin:20px;user-select:all;" title="【开机启动】win11开机启动软件，win11开机启动bat脚本（开机启动vbs文件）">
                <el-descriptions-item label="css修改默认滚动条样式 antd修改滚动条样式"></el-descriptions-item>
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
        </div>
      </div>
    </el-scrollbar>
    
  </div>
</template>
<script setup>
import {ref} from "vue"
import {myQuestion} from "../../../api/user"
const myQuestionList = ref()
myQuestion().then(list=>{
  console.log(list.data);
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