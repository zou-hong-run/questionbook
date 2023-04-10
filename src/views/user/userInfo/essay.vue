<template>
  <div class="userEssay">
    <!-- 热门文章 -->
    <el-scrollbar height="400px">
      <div class="hot">
        <div class="hot-essay">
          <el-row style="margin-bottom:10px;" v-for="(item, index) in 14" :key="index">
            <el-col class="hot-essay-reply" :span="2">
              <div>20</div>
              <div>回答</div>
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


</script>
<style scoped lang='scss'>
.userEssay{
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