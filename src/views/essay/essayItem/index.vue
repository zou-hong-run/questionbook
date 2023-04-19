<template>
  <div class="essayItem">
    <div class="essayItem-left">
      <div class="essayItem-left-title">
        <div style="display:flex;flex-direction:row;align-items:center;">
          <el-avatar
            style="margin:0 10px;"
            :src="image?image:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
          />
          <div>{{name}}</div>
        </div>
        <div>{{essayData?.createTime}}</div>
        <div>
          文章标签:
          <el-button plain type="primary" v-for="(item, index) in essayData?.types" :key="index" disabled>{{item.type}}</el-button>
        </div>
      </div>
      <el-scrollbar class="essayItem-left-content">
        <div class="essayItem-left-content" v-html="essayData?.data"></div>
      </el-scrollbar>

      <div class="essayItem-left-bottom">
        <!-- 三连 -->
        <!-- <el-button @click="addCommment" text type="primary" icon="ChatSquare">评论</el-button> -->
        <el-popover
          placement="left"
          title="请输入你要说的话"
          :width="800"
          trigger="hover"
        >
          <el-input placeholder="来畅所欲言吧" v-model="inputCommentVal"></el-input>
          <template #reference>
            <el-button text type="primary" icon="ChatSquare">评论</el-button>
          </template>
          <el-button @click="addCommment">发布评论</el-button>
        </el-popover>
        <el-button @click="addLike" text type="primary" icon="Pointer">点赞</el-button>
        <el-button @click="addCollect" text type="primary" icon="Star">收藏</el-button>
        <el-button @click="addforward" text type="primary" icon="Share">转发</el-button>
      </div>
      
      <el-scrollbar class="essayItem-left-comment">
        <div v-for="(item, index) in contentData" :key="index" style="background:#F5F6F8;margin:40px;border-bottom:1px solid #ccc;">
          <el-form
            status-icon
            label-width="100px"
          >
            <el-form-item label="头像">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </el-form-item>
            <el-form-item label="用户名">
              <el-input style="width:200px;" disabled :value="item.name?item.name:'猪猪'" type="text"/>
            </el-form-item>
            <el-form-item label="评论时间">
              <el-input style="width:200px;" disabled :value="item.createTime?item.createTime:'**:**'" type="text"/>
            </el-form-item>
            <el-form-item label="评论内容">
              <el-input style="width:700px;" disabled :value="item.data?item.data:'好牛哇,学到了很多'" type="textarea"/>
            </el-form-item>
          </el-form>
          
        </div>
      </el-scrollbar>
    </div>
    <div class="essayItem-right">
      <div class="essayItem-right-title">
        相关文章推荐
      </div>
      <div class="essayItem-right-content">
        <el-link class="essayItem-right-content-item" href="/">手把手教你如何让网页跳转到首页</el-link>
        <el-link class="essayItem-right-content-item" href="/#/question">手把手教你如何让网页跳转到问题页面</el-link>
        <el-link class="essayItem-right-content-item" href="/#/essay">手把手教你如何让网页跳转到文章页面</el-link>
        <el-link class="essayItem-right-content-item" href="/#/game">手把手教你如何让网页跳转到游戏页面</el-link>
        <el-link class="essayItem-right-content-item" href="/#/question/addQuestion">手把手教你如何让网页跳转到提问页面</el-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref,reactive} from 'vue'
  import {useRoute,useRouter} from 'vue-router'
  import {getEssayContent,likeEssay,collectEssay,addEssayComment}  from "../../../api/essay"
  import { ElMessageBox,ElNotification } from 'element-plus'
  import useUserStore from '../../../store/user'
  import { getEssayCommentList } from '../../../api/essay'
  const userStore = useUserStore()
  const name = userStore.name
  const image = userStore.image
  // 评论语句
  const inputCommentVal = ref("")
  // html
    const html = ref('<h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><h1 style="text-align: center;">我是文章标题内容哦</h1><hr/><p>我是你要输入的文章哦!</p><p>同时我也支持markdown语法哦!</p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul><p style="text-align: left;">开始写作吧!!!!!!</p>')
  // =================================
  const route = useRoute()
  const router = useRouter()
  const essayData = ref()
  const contentData = ref()

  let essayDataId = route.params.id
  if(!essayDataId){
    alert('页面id不存在')
  }
  // 
  getEssayContent(essayDataId).then(list=>{
    console.log(list.data);
    essayData.value = list.data
  }).catch(err=>{
    ElMessageBox.confirm('该文章不存在,是否返回?')
      .then(() => {
        router.back()
        done()
      })
      .catch(() => {
        router.back()
      })
  })
  getEssayCommentList(essayDataId).then(list=>{
    contentData.value = list.data
    
  })


  // 给用户提示
  const showNotification = (type)=>{
    ElNotification({
      title: type+'成功',
      message: "你的"+type+"是对作者的最大的鼓励",
      position:"bottom-left",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:"bottom-right",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:"top-left",
      duration:2000
    })
    ElNotification({
      title: type+'成功',
      message: "你的收藏是对作者的最大的鼓励",
      position:'top-right',
      duration:2000
    })
  }
  // 用户收藏
  const addCollect = ()=>{
    collectEssay(essayDataId)
    showNotification("收藏")
  }
  // 用户点赞
  const addLike = ()=>{
    likeEssay(essayDataId)
    showNotification("点赞")
  }
  // 添加评论
  const addCommment = ()=>{
    addEssayComment(inputCommentVal.value,essayDataId).then(res=>{
      console.log(res);
    })
    
    showNotification("评论")
  }
  // 转发
  const addforward = ()=>{
    showNotification("转发")
  }

</script>
<style scoped lang='scss'>
.essayItem{
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  &-left{
    width: calc(80% - 10px);
    margin-right: 10px;
    height: inherit;
    background-color: #fff;
    border-top-left-radius:5px;
    &-title{
      
      color: #ccc;
      width: 100%;
      height: 49px;
      border-bottom: #ccc 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-content{
      width: calc(100% - 20px);
      height: calc(100% - 300px);
      padding: 10px;
      :deep(ul){ 
        list-style-type: disc; 
        list-style-position: inside;
      }
    }
    &-bottom{
      width: 100%;
      height: 30px;
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
    }
    &-comment{
      border-top: 1px solid #ccc;
      padding-left: 20px;
      text-align: left;
      height: 200px;
    }
  }
  &-right{
    width: 20%;
    height:fit-content;
    background-color: #fff;
    border-top-right-radius: 5px;
    &-title{
      height: 30px;
      text-align: center;
      font-weight: bold;
      line-height: 30px;
      font-size: 24px;
      margin-bottom: 5px;
    }
    &-content{
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &-item{
        width: 200px;
        margin-bottom: 20px;
        text-decoration: underline;
      }
    }
  }
}
</style>