<template>
  <div class="userCollect">
    <!-- 热门文章 -->
    <el-scrollbar height="400px">
      <div class="hot">
        <div class="hot-essay">
          <el-row style="margin-bottom:10px;" v-for="(item, index) in myCollectList" :key="index">
            <el-col class="hot-essay-reply" :span="2">
              <div>{{item.sort}}</div>
              <div>回答</div>
            </el-col>
            <el-col :span="22">
              <!-- 文字描述 -->
              <el-descriptions style="margin:20px;user-select:all;" :title="item.title">
                <el-descriptions-item>
                  <template #default>
                    <div>{{item.data.slice(0,150)+"..."}}</div>
                  </template>
                </el-descriptions-item>
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
import {myCollect} from "../../../api/user"
const myCollectList = ref()
myCollect().then(list=>{
  // console.log(list.data);
  myCollectList.value = list.data
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