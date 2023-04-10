import request from "../utils/request"
// 登录方法
export function login(username,password,code,uuid){
  const data = {
    username,
    password,
    code
  }
  return request({
    url:"/user/login",
    headers:{
      isToken:false
    },
    method:"post",
    data
  })
}
export function register(data){
  return request({
    url:"/user/register",
    headers:{
      isToken:false
    },
    method:"post",
    data
  })
}
// 获取用户详情
export function getInfo(){
    return request({
      url:"/user",
      method:"get"
    })
}
// 退出登录
export function logout(){
  return request({
    url:"/logout",
    method:"post"
  })
}
// 获取验证码
export function getCodeImg(){
    return request({
      // url:"/captchaImage",
      url:"/user/verifyCode",
      headers:{
        isToken:false
      },
      method:"post",
      timeout:20000
    })
}