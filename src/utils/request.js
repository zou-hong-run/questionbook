import axios from 'axios';
import {getToken} from "@/utils/auth"

// 解析url
import {transParams} from "@/utils/qb"
import cache from "../plugins/cache"
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import errorCode from "./errorCode"
import useUserStore from '../store/user';
let downloadLoadingInstance;

// const BASE_URL = "/dev-api"
// 开发上线
// const BASE_URL = "http://43.143.237.123:6060"
const BASE_URL = "http://43.138.10.99:6060"

// 是否重新登录
export let isRelogin = {show:false};
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8"
// 创建axios实例
const service = axios.create({
  baseURL:BASE_URL,
  timeout:10000
})
service.interceptors.request.use(config=>{
  // 是否需要设置token 一开始是undefined === false =>false
  const isToken = (config.headers||{}).isToken === false // false
  // 是否需要防止数据重复提交 一开始是undefined === false =>false
  const isRepeatSumbit = (config.headers || {}).repeatSumbit === false// false
  if(getToken()&&!isToken){
    // config.headers["Authorization"] = "Bearer " + getToken() 
    config.headers["Authorization"] = getToken() 
  }
  // get请求映射parmas参数
  if(config.method === "get" && config.params){
    let url = config.url + "?" + transParams(config.params);
    url = url.slice(0,-1);
    config.params = {}
    config.url = url
    console.log(config.url,"???");
  }
  // 不需要重复提交才进入
  if(!isRepeatSumbit && (config.method === 'post' || config.method === 'put')){
    const requestObj = {
      url:config.url,
      data:typeof config.data === 'object' ? JSON.stringify(config.data):config.data,
      time: new Date().getTime() // 时间戳
    }
    const sessionObj = cache.session.getJSON("sessionObj")
    if(sessionObj === undefined||sessionObj===null||sessionObj===''){
      cache.session.setJSON("sessionObj",requestObj)
    }else{
      const s_url = sessionObj.url;// 请求地址
      const s_data = sessionObj.data;// 请求数据
      const s_time = sessionObj.time;// 请求时间
      const interval = 1000;// 间隔时间(ms),小于该时间视为重复提交
      // 重复提交
      if(s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url){
        const message = "数据正在处理,请勿重复提交"
        console.warn(`[${s_url}]`+message);
        return Promise.reject(new Error(message))
      }else{
        cache.session.setJSON('sessionObj',requestObj);
      }
    }
  }
  return config;
},error=>{
  console.log(error);
  Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(res=>{
  console.log("testing",res.data);
  const userStore = useUserStore()
  // 未设置状态码默认为成功
  const code = res.data.code || 200;
  // 获取错误信息
  const msg = errorCode[code]||res.data.msg||errorCode['default']
  // 二进制数据则直接返回
  if(res.request.responseType === "bolb"||res.request.responseType === "arraybuffer"){
    return res.data;
  }
  if(code === 401){
    if(!isRelogin.show){
      isRelogin.show = true;
      ElMessageBox.confirm("登录状态已过期/或者该用户不存在,您可以继续留在该页面,或者重新登录","系统提示",{
        confirmButtonText:"重新登录",
        cancelButtonText:"取消",
        type:"warning"
      }).then(()=>{
        isRelogin.show = false;
        userStore.LogOut().then(()=>{
          Location.href = '/'
        })
      }).catch(()=>{
        userStore.LogOut().then(()=>{
          Location.href = '/'
        })
        isRelogin.show = false
      })
    }
    return Promise.reject("无效的会话,或者会话已经过期了,请重新登录.")
  }else if(code === 500){
    ElMessage({
      title:msg,
      type:"error"
    })
    return Promise.reject(new Error(msg))
  }else if(code !== 200){
    ElNotification.error({
      title:msg
    })
    return Promise.reject("error")
  }
  else{
    return Promise.resolve(res.data)
  }
},error=>{
  console.log(`err`+error);
  let {message} = error;
  if(message == "Network Error"){
    message = "后端连接异常"
  }else if(message.includes("timeout")){
    message = "系统接口请求超时"
  }else if(message.includes("Request failed with status code")){
    message = "系统接口" + message.substr(message.length - 3)+"异常";
  }
  ElMessage({
    message,
    type:"error",
    duration:5*1000
  })
  return Promise.reject(error)
})


export default service;