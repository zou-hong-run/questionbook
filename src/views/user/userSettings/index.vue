<template>
  <div class="userSettings">
    <div class="userSettings-title">
      编辑资料
    </div>
    <div class="userSettings-content">
      <div class="userSettings-content-collapse">
        <el-scrollbar height="100%">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="9">
              <template #title>
                <div style="font-size:20px;">
                  更换头像:
                </div>
              </template>
              <el-link>
                <el-avatar
                  :src="image?image:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
                />
              </el-link>
              <input ref="uploadRef" type="file" @change="clickUploadImage" />
            </el-collapse-item>
            <el-collapse-item name="1">
              <template #title>
                <div style="font-size:20px;">
                  昵称:
                </div>
              </template>
              <el-input  placeholder="小草" v-model="name" />
            </el-collapse-item>
            <el-collapse-item name="2">
              <template #title>
                <div style="font-size:20px;">
                  账号:
                </div>
              </template>
              <el-input width="50%" placeholder="231461564146" v-model="username" />
            </el-collapse-item>
            <el-collapse-item name="3">
              <template #title>
                <div style="font-size:20px;">
                  修改密码:
                </div>
              </template>
              <el-input v-model="password" type="password" placeholder="******" />
            </el-collapse-item>
            <el-collapse-item name="4">
              <template #title>
                <div style="font-size:20px;">
                  绑定手机号:
                </div>
              </template>
              <el-input placeholder="231461564146" v-model="phone" />
            </el-collapse-item>
            <el-collapse-item name="5">
              <template #title>
                <div style="font-size:20px;">
                  绑定qq账号:
                </div>
              </template>
              <el-input placeholder="未绑定" />
            </el-collapse-item>
            <el-collapse-item name="6">
              <template #title>
                <div style="font-size:20px;">
                  绑定微信账号:
                </div>
              </template>
              <el-input placeholder="未绑定" />
            </el-collapse-item>
            <el-collapse-item name="7">
              <template #title>
                <div style="font-size:20px;">
                  绑定新浪微博:
                </div>
              </template>
              <el-input placeholder="未绑定" />
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>
      </div>
      <div class="userSettings-content-button">
        <el-popover
          placement="top-start"
          title="哈哈"
          :width="200"
          trigger="hover"
          content="点击这个按钮会提交你修改的信息哦"
        >
          <template #reference>
            <el-button type="primary" @click="sumbitNewMessage">点击修改个人信息</el-button>
          </template>
        </el-popover>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
import useUserStore from '../../../store/user';
import {uploadImage} from "../../../api/common"
import {updatePwd,updateUser} from "../../../api/user"
import {ElNotification} from "element-plus"
const uploadRef = ref()
const userStore = useUserStore()

let image = ref(userStore.image)
let name = ref(userStore.name)
let sex = userStore.sex
let phone = userStore.phone
let password = ref("****")
let username = userStore.username
const activeNames = ref(['9'])
const handleChange = (val) => {
  console.log(activeNames.value);
  console.log(val)
}
const sumbitNewMessage = ()=>{
  if(password.value!=="****"){
    updatePwd(password.value).then(list=>{
      console.log(list);
    })
  }
  // console.log(name,image.value,password.value);
  updateUser(name.value,image.value).then(list=>{
    // console.log(list.data);
    ElNotification({
      title:"成功",
      message:"修改用户信息成功!!!",
      duration:2500
    })
    window.location.reload();
  })

}
// 上传图片事件
const clickUploadImage = ()=>{
  let file = uploadRef.value.files[0]
  uploadImage(file).then(list=>{
    ElNotification({
      title:"上传图片成功",
      message:"ohohoohohohoho!!!",
      duration:2000
    })
    image.value = list.data.url
  })

}
</script>
<style scoped lang='scss'>
.userSettings{
  border-radius: 5px;;
  background-color: #fff;
  width: 100%;
  height: 100%;
  &-title{
    user-select: none;
    color: #2683FE;
    width: 100%;
    border-left: 5px solid #2683FE;
    border-radius: 5px;
    padding: 15px;
    height: 30px;
    line-height: 30px;
  }
  &-content{
    height: calc(100% - 60px);
    width: calc(100% - 200px);
    margin: 0 100px;
    &-collapse{
      height: calc(100% - 50px);
      width: 100%;
    }
    &-button{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
  }
}

</style>