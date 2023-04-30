<template>
  <div class="topNav">
    <!-- logo -->
    <div class="logo">
      <img :src="logo" alt="" srcset="">
    </div>
    <!-- 标签页 -->
    <el-tabs class="tabs" stretch v-model="activeName" @tab-change="tabChange">
      <el-tab-pane v-for="(item, index) in tableItems" :key="item.name+item.key" :name="item.name">
        <template #label>
          <div class="tabs-label">
            {{item.label}}
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <!-- 搜索框 -->
    <div class="searchInput">
      <el-input
        @change="inputChange(searchVal)"
        v-model="searchVal"
        size="large"
        placeholder="搜点什么吧,记得回车"
        suffix-icon="Search"
      />
    </div>
    <!-- 提问 文章 信息  -->
    <div class="addMsgLink">
      <el-link class="msgLink" v-for="(item, index) in addMsgItems" :key="index" @click="toPage(item.href)">
        <template #default>
          {{item.name}}
        </template>
        <template #icon>
          <!-- <el-icon :src="item.icon"></el-icon> -->
          <el-image style="width: 25px; height: 25px;" :src="item.icon" />
        </template>
      </el-link>
      
    </div>
    <!-- 用户头像 -->
    <div>
      <el-dropdown size="large">
          <el-avatar
          :size="55"
          shape="square"
          :src="image?image:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/userinfo">个人主页</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/usersettings">个人设置</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-link @click="logout">退出系统</el-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
  import logo from "../../assets/logo/logo/logo1.svg"
  // import logo from "../../assets/logo/logo1.jpg"
  // import logo from "../../assets/logo/logo2.png"
  // import logo from "../../assets/logo/logo/logo1.png"
  import addQuestionPic from "../../assets/indexIcons/提问.png"
  import addEssayPic from "../../assets/indexIcons/写作.png"
  import addMsgPic from "../../assets/indexIcons/消息.png"
  import { ref,reactive,computed,watch } from 'vue'
  import { useRoute,useRouter } from "vue-router"
  import {ElMessageBox} from "element-plus"
  import useUserStore from "../../store/user"
  
  const userStore = useUserStore()

  let image = userStore.image
  const route = useRoute()
  const router = useRouter()

  const tableItems = reactive([
    {
      label:"首页",name:"index"
    },
    {
      label:"问题",name:"question"
    },
    {
      label:"文章",name:"essay"
    },
    {
      label:"娱乐",name:"game"
    }
  ])
  const toPage = (url)=>{
    router.push(url)
  }
  const addMsgItems = reactive([
    {
      name:"提问",href:"/question/addQuestion",icon:addQuestionPic
    },
    {
      name:"文章",href:"/essay/addEssay",icon:addEssayPic
    },
    {
      name:"消息",href:"/messages",icon:addMsgPic
    },
  ])
  const toUrl = computed(()=>{
    return "/"+activeName.value
  })
  const activeName = ref('index')
  const tabChange = (tab, event) => {
    /*
    tab-click	tab 被选中时触发	(pane: TabsPaneContext, ev: Event)
    tab-change	activeName 改变时触发	(name: TabPaneName)
    tab-remove	点击 tab 移除按钮时触发	(name: TabPaneName)
    tab-add	点击 tab 新增按钮时触发
    */
    router.push(toUrl.value.toLocaleLowerCase())
  }
  // 搜索框文字
  const searchVal = ref("")
  const inputChange = (inputVal)=>{
    if(!inputVal){
      alert("搜索内容为空哦!");
      return;
    }
    router.push("/search?inputval="+inputVal)
  }
  watch(route,(newRoute,oldRoute)=>{
      // console.log(newRoute.fullPath); // /question?a=b&nnn=5#ja=6
      // console.log(newRoute.hash);//  #ja=6
      // console.log(newRoute.matched);// '' '/question'
      // console.log(newRoute.meta);// {"title":"问题",icon:"dashboard"}
      // console.log(newRoute.name);// Question
      // console.log(newRoute.params);// {}
      // console.log(newRoute.path);// /question
      // console.log(newRoute.query);// {a:b,nnn:5}
      // console.log(newRoute.redirectedFrom);// undefined
      activeName.value = newRoute.path.replace("/","")
  },{immediate:true})

  // 退出登录
  function logout() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      userStore.LogOut().then(() => {
        location.href = '/index';
      })
    }).catch(() => { });
  }
</script>
<style scoped lang='scss'>
@import "../../assets/styles/common.scss";
  .topNav{
    min-width: 866px;
    user-select: none;
    width: 100%;
    height: $nav-height;
    background-color: white;
    display: flex;
    // 主轴方向
    justify-content: space-around;
    // 交叉轴方向
    align-items: center;
    // 交叉轴多条线对齐 align-content属性定义了多根轴线（多行）的对齐方式。
    //logo
    .logo{
      width: 8%;
      img{
        width: 100%;
        height: 65px;
      }
    }
    // 标签页
    .tabs{
      display: flex;
      align-items: end;
      justify-content: center;
      width: 25%;
      height: 100%;
      .tabs-label{
        font-weight: bold;
        font-size: 20px;
      }
    }
    // 搜索框
    .searchInput{
      width: 15%;
    }
    .addMsgLink{
      width: 10%;
      display: flex;
      justify-content: space-between;
      .msgLink{
        color: #5F9EFF;
        display: flex;
        flex-direction:column-reverse;
      }
    }
  }
</style>