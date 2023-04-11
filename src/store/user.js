import {defineStore} from 'pinia'
import {login,logout,getInfo} from "../api/login"
import {getToken,setToken,removeToken} from "../utils/auth"

const useUserStore = defineStore("user",{
  state:()=>({
    token:getToken(),
    name:"",
    avatar:"",
    roles:[],
    permissions:[]
  }),
  getters:{
    
  },
  actions:{
    // 登录存储
    async Login(userInfo){
      const username = userInfo.username.trim();
      const password = userInfo.password.trim();
      const code = userInfo.code.trim()
      try {
        let res = await login(username,password,code)
        if(res){
          let token = res.data.token
          if(token){
            // 持久化存储
            setToken(token)
            // 内存存储
            this.token = token
          }
        }
      } catch (error) {
        return new Error(error)
      }
    },
    // 获取用户信息存储
    async GetInfo(){
      try {
        let res = await getInfo()
        if(res){
          // console.log(res);
          // 存储用户信息
          const username = res.data.username
          const avatar = res.avatar// 
          this.name = username
          this.avatar = avatar
        }
      } catch (error) {
        return new Error(error)
      }
    },
    // 退出系统
    async LogOut(){
      try {
        // let res = await logout()
        // if(res){
        //   this.token = ""
        //   removeToken()
        // }
        this.token = ""
        removeToken()
      } catch (error) {
        return new Error(error)
      }
    },
    // 前端 登出
    async FadLogOut(){
      this.token = "" 
      removeToken()
    }
  }
})

export default useUserStore