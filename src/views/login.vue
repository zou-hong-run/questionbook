<template>
  <div class="login">
    <el-form status-icon v-show="isLoginOrRegister" ref="ruleLoginFormRef" :model="loginFormItem" :rules="loginRules" class="login-form">
      <el-row>
        <el-col class="chooseCol" :span="12" align="middle">
          <el-button class="chooseBtn" @click="isLoginOrRegister=true" text :type="`${isLoginOrRegister?'success':'default'}`">登录</el-button>
        </el-col>
        <el-col class="chooseCol" :span="12" align="middle">
          <el-button class="chooseBtn" @click="isLoginOrRegister=false" text :type="`${isLoginOrRegister?'default':'success'}`">注册</el-button>
        </el-col>
      </el-row>
      <!-- 用户名 -->
      <el-form-item class="formItem" prop="username">
        <el-input clearable  v-model="loginFormItem.username" placeholder="请输入用户名" name="username">
          <template #prepend>
            <el-button icon="User" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="formItem" prop="password">
        <el-input clearable  v-model="loginFormItem.password" placeholder="请输入密码">
          <template #prepend>
            <el-button icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item class="formItem" prop="code">
        <el-input @keyup.enter="loginSubmitForm(ruleLoginFormRef)" clearable  style="width: 63%" v-model="loginFormItem.code" placeholder="验证码" class="input-with-select">
          <template #prepend>
            <el-button icon="Message" />
          </template>
        </el-input>
        <div @click="getCode" class="login-code">
          <el-image :src="codeUrl" fit="cover" class="login-code-img" />
        </div>

      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item class="formItem">
        <el-button @click="loginSubmitForm(ruleLoginFormRef)" :loading="loginLoading" size="large" type="primary" style="width:100%;">
          <span v-if="!loginLoading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
      <!-- // 分割线 -->
      <el-divider class="formItem">
        <el-text size="small">其他方式登录</el-text>
      </el-divider>
      <!-- 其他登录方式 -->
      <el-row class="formItem">
        <el-col v-for="(item, index) in pics" :key="index" :span="8" style="display:flex;justify-content: center;align-items: center;">
          <el-image style="width: 30px; height: 30px" :src="item" fit="cover" />
        </el-col>
      </el-row>
      <!-- 注册跳转 -->
      <el-row class="formItem">
        <el-text @click="isLoginOrRegister=false" type="primary">立即注册</el-text>
      </el-row>
      <el-text class="formItem" size="small">登录即代表同意 服务条款 和 隐私协议</el-text>
    </el-form>

    <el-form  status-icon v-show="!isLoginOrRegister" ref="ruleRegisterFormRef" :model="registerFormItem" :rules="registerRules" class="register-form">
      <el-row>
        <el-col class="chooseCol" :span="12" align="middle">
          <el-button class="chooseBtn" @click="isLoginOrRegister=true" text :type="`${isLoginOrRegister?'success':'default'}`">登录</el-button>
        </el-col>
        <el-col class="chooseCol" :span="12" align="middle">
          <el-button class="chooseBtn" @click="isLoginOrRegister=false" text :type="`${isLoginOrRegister?'default':'success'}`">注册</el-button>
        </el-col>
      </el-row>
      <!-- 用户名 -->
      <el-form-item class="formItem" prop="username">
        <el-input clearable  v-model="registerFormItem.username" placeholder="请输入用户名" name="username">
          <template #prepend>
            <el-button icon="User" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="formItem" prop="password">
        <el-input clearable  v-model="registerFormItem.password" placeholder="请输入密码">
          <template #prepend>
            <el-button icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item class="formItem" prop="rePassword">
        <el-input clearable  v-model="registerFormItem.rePassword" placeholder="确认密码">
          <template #prepend>
            <el-button icon="Lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="formItem" prop="type">
        <el-form-item prop="type">
          <el-switch v-model="registerFormItem.type" />
          <el-text style="margin-left:7px;" type="primary">注册即同意用户协议</el-text>
        </el-form-item>
      </el-form-item>
      <el-form-item class="formItem" style="width:100%;">
        <el-button @click="registerSubmitForm(ruleRegisterFormRef)" :loading="registerLoading" size="large" type="primary" style="width:100%;">
          <span v-if="!registerLoading">注 册</span>
          <span v-else>注 册 中...</span>
        </el-button>
      </el-form-item>
      <!-- 登录跳转 -->
      <el-row class="formItem">
        <el-text @click="isLoginOrRegister=true" type="primary">立即登录</el-text>
      </el-row>
    </el-form>
  </div>
</template>
<style scoped lang='scss'>
  .login {
    width: 100%;
    height: 100%;
    user-select:none;
    position: relative;
    background: url("../assets/images/login_bg.jpg") no-repeat;
    background-size: 100% 100%;
    min-width: 333px;
    min-height: 450px;
    .login-form,.register-form {
      
      min-width: 333px;
      min-height: 450px;
      position: absolute;
      width: 20%;
      height: 75%;
      right: 10%;
      top: 15%;
      background-color: #fffefe;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-around;
      border-radius: 5px;
      padding:0 30px 0;
      // 登录注册按钮文字 行样式
      .chooseCol {
        height: 100px;
        display: flex;
        // 水平
        justify-content: center;
        align-items: center;
        .chooseBtn {
          font-size: 25px;
          font-weight: bold;
        }
      }
      .login-code {
        width: 33%;
        height: 30px;
        float: right;
        background: #fad6d6;
        border-radius: 5px;
        &-img {
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }
      }
      
      // formItem
      .formItem{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

<script  setup>
import { reactive, ref,watch } from 'vue'
import { useRoute,useRouter} from 'vue-router'
import { ElMessageBox } from "element-plus";
// 图片
import qq from "../assets/images/login_icon/qq.png"
import weixin from "../assets/images/login_icon/weixin.png"
import weibo from "../assets/images/login_icon/weibo.png"
import useUserStore from "../store/user"
import {getCodeImg,register} from "../api/login"
let userStore = useUserStore()
let route = useRoute()
let router = useRouter()
let pics = reactive({qq,weixin,weibo})
// 登录注册表单实例
const ruleLoginFormRef = ref();
const ruleRegisterFormRef = ref();
// 是登录还是注册
let isLoginOrRegister = ref(true);

// 是否登录中
let loginLoading = ref(false)
let registerLoading = ref(false)

// 登录数据
let loginFormItem = reactive({
  username:"admin",
  password:"admin",
  code:""
})
// 注册数据
let registerFormItem = reactive({
  username:"zouhongrun",
  password:"zouhongrun",
  rePassword:"zouhongrun",
  // 协议
  type:true
})

  // 登录 ======================================
  // 验证用户名方法
  const loginValidateUsername = (rule,value,callback)=>{
    if (value === '') {
      callback(new Error('请输入用户名!'))
    } else {
      callback()
    }
  }
  // 验证密码方法
  const loginValidatePassword = (rule,value,callback)=>{
    if (value === '') {
      callback(new Error('请输入密码!'))
    } else {
      callback()
    }
  }
  // 提交表单
  const loginSubmitForm = async (formEl) => {
    if (!formEl) return
    // 开始登录
    loginLoading.value = true;
    await formEl.validate((valid, fields) => {
      if (valid) {
        // 验证通过 发送登录请求
        handleLogin()
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  // 注册 ======================================
  const registerValidateUsername = (rule,value,callback)=>{
    if (value === '') {
      callback(new Error('请输入用户名!'))
    } else {
      callback()
    }
  }
  const registerValidatePassword = (rule,value,callback)=>{
    if (value === '') {
      callback(new Error('请输入密码!'))
    } else {
      if (registerFormItem.password !== '') {
        if (!ruleRegisterFormRef.value) return
        ruleRegisterFormRef.value.validateField('rePassword', () => null)
      }
      callback()
    }
  }
  const registerValidateRePassword = (rule,value,callback)=>{
    if (value === '') {
      callback(new Error('请输入确认密码'))
    } else if (value !== registerFormItem.password) {
      callback(new Error("两次输入密码不匹配"))
    } else {
      callback()
    }
  }
  const registerValidateType = (rule,value,callback)=>{
    if (value === false) {
      callback(new Error('请点击接受协议'))
    } else {
      callback()
    }
  }
  // 提交表单
  const registerSubmitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        registerLoading.value = true;
        register(registerFormItem).then(res=>{
          const username = registerFormItem.username;
          ElMessageBox.alert("<font color='red'>恭喜你，您的账号 " + username + " 注册成功！</font>","系统提示",{
            dangerouslyUseHTMLString:true,
            type:"success"
          }).then(()=>{
            isLoginOrRegister.value = true;
          }).catch(()=>{})
        }).catch(()=>{
          registerLoading.value = false
          console.log("似乎注册失败了");
        })
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  // 登录规则
  const loginRules = reactive({
    username:[
      {validator:loginValidateUsername,trigger:"blur"},
    ],
    password:[{validator:loginValidatePassword,trigger:"blur"}],
    code:[
      { required: true, message: '请输入验证码!!!', trigger: 'blur' },
      { min: 4, max: 8, message: '验证码长度为4-8位', trigger: 'blur' },
    ],
    
  })
  // 注册规则
  const registerRules = reactive({
    username:[
      {validator:registerValidateUsername,trigger:"blur"},
      { min: 6, max: 15, message: '用户名长度6-15位', trigger: 'blur' },
    ],
    password:[
      {validator:registerValidatePassword,trigger:"blur"},
      { min: 6, max: 15, message: '密码长度为6-15位', trigger: 'blur' },
    ],
    rePassword:[
      {validator:registerValidateRePassword,trigger:"blur"},
      { min: 6, max: 15, message: '确认密码长度6-15位', trigger: 'blur' },
    ],
    type:[{validator:registerValidateType,trigger:"change"}],
  });
// =============================================================
// 验证码
const codeUrl = ref("data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7")
// 验证码开关
const captchaOnOff = ref(true)
const redirect = ref(undefined)
// 监听路由变化,当用户保存页面过期时候,用户重新登录实现,路由重定向
watch(route,(newRoute,oldRoute)=>{
  redirect.value = newRoute.query?.redirect
},{immediate:true})

function handleLogin(){
  // 将用户信息传给store
  userStore.Login(loginFormItem).then(()=>{
    // console.log(redirect.value); // /index
    router.push({ path: redirect.value || "/" });
  }).catch(()=>{
    loginLoading.value = false
    // 重新获取验证码
    if(captchaOnOff.value){
      getCode()
    }
  })
}
function getCode(){
  loginLoading.value = false
  getCodeImg().then(res=>{
    captchaOnOff.value = res.data === undefined?true:res.data;
    if(captchaOnOff.value){
      // codeUrl.value = "data:image/gif;base64," + res.img;
      codeUrl.value = res.data
      // loginForm.value.uuid = res.uuid;
    }
  })
}
getCode()
</script>