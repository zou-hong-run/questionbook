import router from "./router"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from "./store/index"
import {getToken} from "./utils/auth"

// 是否重新获取信息(登录过期)
import {isRelogin} from "./utils/request"
import useUserStore from "./store/user"
import { ElMessage } from "element-plus"

NProgress.configure({showSpinner:false})
const userStore = useUserStore(pinia)
// let whiteList = ["/login","/index","/question","/essay","/game","/questions","/userinfo","/userinfo/questions","/userinfo/essay","/userinfo/collect","/userinfo/like"]
let whiteList = ["/login"]
router.beforeEach((to,from,next)=>{
  NProgress.start()
  // 从cookie中查看token
  // 有token的情况
  if(getToken()){
    // to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    if(to.path === "/login"){
        next({path:'/'}) // 执行之后会再走else
        NProgress.done()
    }else{
      // console.log(userStore);
      // 如果用户信息不存在
      if(!userStore.name){
        // 用户信息过期
        isRelogin.show = true
        // 去拉取用户信息(这里的token不为空)
        // 请求用户数据(如果token不正确request直接401拦截退出系统)
        userStore.GetInfo().then(()=>{
          // 发送请求,store存储用户信息
          isRelogin.show = false
            /**next({ ...to, replace: true }) // replace不能回退
             * 
             * 正以为如此很多人在使用动态添加路由addRoutes()会遇到下面的情况：
                在addRoutes()之后第一次访问被添加的路由会白屏，这是因为刚刚addRoutes()就立刻访问被添加的路由，然而此时addRoutes()没有执行结束，因而找不到刚刚被添加的路由导致白屏。因此需要从新访问一次路由才行。

                该如何解决这个问题 ?
                此时就要使用next({ ...to, replace: true })来确保addRoutes()时动态添加的路由已经被完全加载上去。

                next({ ...to, replace: true })中的replace: true只是一个设置信息，告诉VUE本次操作后，不能通过浏览器后退按钮，返回前一个路由。

                因此next({ ...to, replace: true })可以写成next({ ...to })，不过你应该不希望用户在addRoutes()还没有完成的时候，可以点击浏览器回退按钮搞事情吧。

                其实next({ ...to })的执行很简单，它会判断：

                如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next)直到其中的next({ ...to})能找到对应的路由为止。

                也就是说此时addRoutes()已经完成啦，找到对应的路由之后，接下来将执行前往对应路由的beforeEach((to, from, next) ，因此需要用代码来判断这一次是否就是前往对应路由的beforeEach((to, from, next)，如果是，就执行next()放行。

                如果守卫中没有正确的放行出口的话，会一直next({ ...to})进入死循环 !!!

                因此你还需要确保在当addRoutes()已经完成时，所执行到的这一次beforeEach((to, from, next)中有一个正确的next()方向出口。

            */
            /*
              store.dispatch('GenerateRoutes').then(accessRoutes => {
                // 根据roles权限生成可访问的路由表
                accessRoutes.forEach(route => {
                  if (!isHttp(route.path)) {
                    router.addRoute(route) // 动态添加可访问路由表
                  }
                })
                next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
              })
            
            */
          next({...to,replace:true})
        }).catch(err=>{
          userStore.LogOut().then(()=>{
            ElMessage.error(err)
            next({path:"/"})
          })
        })
      }else{
        next()
      }
    }
  }else{ 
    // 没有token
    if(whiteList.indexOf(to.path) !== -1){
    // if(true){
      next() // 直接放行
    }else{
      // 去登录
      next(`/login?redirect=${to.fullPath}`)
      NProgress.done()
    }

  }
})
router.afterEach(()=>{
  NProgress.done()
})