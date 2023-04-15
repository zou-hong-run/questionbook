import {createRouter,createWebHashHistory} from 'vue-router';
import Layout from '@/layout'
import UserLayout from "../views/user/layout/index"
// params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
// query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query。
const routes = [
  {
    path:'/redirect',
    hidden:true,
    component:Layout,
    children:[
      {
        path:'/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  // 登录
  {
    path:"/login",
    component:()=>import("@/views/login")
  },
  // 主页相关
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: '/usersettings',
        component: () => import('../views/user/userSettings'),
        name: 'UserSeetings',
        meta: { title: '编辑用户信息界面', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 用户相关
  {
    path:"/userinfo",
    component:Layout,
    redirect:"/userinfo/questions",
    children:[
      {
        path: '/userinfo',
        component: UserLayout,
        name: 'UserInfo',
        redirect:"/userinfo/questions",
        meta: { title: '用户页面'},
        children:[
          {
            path: 'questions',// 加斜杠可以直接被匹配
            component: () => import('../views/user/userInfo/questions'),
            name: 'UserQuestion',
            meta: { title: '用户问题'}
          },
          {
            path: 'essay',
            component: () => import('../views/user/userInfo/essay'),
            name: 'UserEssay',
            meta: { title: '用户文章'}
          },
          {
            path: 'collect',
            component: () => import('../views/user/userInfo/collect'),
            name: 'UserCollect',
            meta: { title: '用户收藏' }
          },
          {
            path: 'like',
            component: () => import('../views/user/userInfo/like'),
            name: 'UserLike',
            meta: { title: '用户点赞' }
          },
        ]
      },
    ]
  },
  // 消息相关
  {
    path:"/messages",
    component:Layout,
    redirect:"/messages/index",
    children: [
      {
        path: 'index',
        component: () => import('../views/messages/index'),
        name: 'Messages',
        meta: { title: '消息页面', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 问题相关
  {
    path:"/question",
    component:Layout,
    redirect:"/question",
    children: [
      
      {
        path: '',
        component: () => import('@/views/question/question'),
        name: 'Question',
        meta: { title: '问题', icon: 'dashboard', affix: true }
      },
      {
        path: 'addQuestion',
        component: () => import('@/views/question/addQuestion/index'),
        name: 'AddQuestion',
        meta: { title: '添加问题', icon: 'dashboard', affix: true }
      },
      {
        path:"questionItem/:id",
        component: () => import('@/views/question/questionItem/index'),
        name: 'QuestionItem',
        meta: { title: '问题详情', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 文章相关
  {
    path:"/essay",
    component:Layout,
    redirect:"/essay",
    children: [
      {
        path: '',
        component: () => import('@/views/essay/essay'),
        name: 'Essay',
        meta: { title: '文章' }
      },
      {
        path: 'addEssay',
        component: () => import('@/views/essay/addEssay/index'),
        name: 'AddEssay',
        meta: { title: '添加文章', icon: 'dashboard', affix: true }
      },
      {
        path:"essayItem/:id",
        component: () => import('@/views/essay/essayItem/index'),
        name: 'EssayItem',
        meta: { title: '文章详情', icon: 'dashboard', affix: true }
      }
    ]
  },
  // 游戏
  {
    path: '/game',
    component: Layout,
    meta: { title: '游戏', icon: 'dashboard', affix: true },
    children:[
      {
        path: '',
        component: () => import('@/views/game/game'),
        name: 'Game',
        meta: { title: '游戏', icon: 'dashboard', affix: true }
      }
    ]
  },
  
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/error/404'),
    hidden: true
  },
  
]
const router = createRouter({
  history:createWebHashHistory(),
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {top:0};
    }
  }
})

export default router;