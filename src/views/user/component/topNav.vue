<template>
  <div class="topNav">
    <div class="topNav-left">
      <div class="topNav-left-img">
        <el-avatar :size="100" :src="circleUrl" />
      </div>
      <div class="topNav-left-content">
        <h1 style="font-size:18px;margin-bottom:10px;">小草</h1>
        <p>123456789</p>
      </div>
    </div>
    <div class="topNav-right">
      <el-link type="primary" size="large" href="/#/usersettings">编辑资料</el-link>
    </div>
  </div>
  
  <!-- 标签页 -->
  <el-tabs  type="card" stretch v-model="activeName" @tab-change="tabChange">
    <el-tab-pane v-for="(item, index) in tableItems" :key="item.name+item.key" :name="item.name">
      <template #label>
        <div class="tabs-label">
          {{item.label}}
        </div>
      </template>
    </el-tab-pane>
  </el-tabs>
  
</template>
<script setup>
  import {ref,reactive,computed} from "vue"
  import {useRoute,useRouter} from "vue-router"
  const route = useRoute()
  const router = useRouter()
  const circleUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');

  const tableItems = reactive([
      {
        label:"我的问题",name:"userinfo/questions"
      },
      {
        label:"我的文章",name:"userinfo/essay"
      },
      {
        label:"我的收藏",name:"userinfo/collect"
      },
      {
        label:"我的点赞",name:"userinfo/like"
      }
  ])
  const activeName = ref('quetions')
  const tabChange = (tab, event) => {
    /*
    tab-click	tab 被选中时触发	(pane: TabsPaneContext, ev: Event)
    tab-change	activeName 改变时触发	(name: TabPaneName)
    tab-remove	点击 tab 移除按钮时触发	(name: TabPaneName)
    tab-add	点击 tab 新增按钮时触发
    */
    router.push(toUrl.value.toLocaleLowerCase())
  }
  const toUrl = computed(()=>{
    return "/"+activeName.value
  })
</script>
<style scoped lang='scss'>
.topNav{
  width: calc(100% - 150px);
  background: #ffffff;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 0 75px 0;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;
  &-left{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    &-content{
      height: 100%;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .tabs{
    background: #fff;
  }
}
</style>