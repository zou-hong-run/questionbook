import{C as w,_ as V,b as E,c as x,d as r,o as c,e as f,n as h,h as t,g as i,y as a,i as s,l,F as v,p as y,q as k}from"./index-c092429d.js";function F(){return w({url:"/news/whoCollectMe",method:"get"})}function U(){return w({url:"/news/whoLikeMe",method:"get"})}function D(){return w({url:"/news/whoCommentMe",method:"get"})}const G={class:"messages"},J={class:"messages-left"},P={class:"messages-right"},j={__name:"index",setup(A){const _=E(),z=_.name,p=_.image,B=_.phone,I=_.image,b=x(),C=x(),M=x();U().then(u=>{b.value=u.data});function N(u){let L=u.props.label;({收藏:()=>{F().then(o=>{C.value=o.data})},评论:()=>{D().then(o=>{console.log(o.data),M.value=o.data})},点赞:()=>{U().then(o=>{b.value=o.data})}})[L]()}return(u,L)=>{const d=r("el-avatar"),o=r("el-link"),n=r("el-descriptions-item"),g=r("el-descriptions"),q=r("el-scrollbar"),m=r("el-tab-pane"),S=r("el-tabs");return c(),f("div",G,[h("div",J,[t(d,{size:80,src:i(I)?i(I):"https://img1.baidu.com/it/u=2101536329,949644418&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625"},null,8,["src"]),h("h1",null,a(i(z)),1),h("p",null,a(i(B)),1),t(o,{type:"success",href:"#/userinfo/questions"},{default:s(()=>[l("个人主页")]),_:1})]),h("div",P,[t(S,{type:"border-card",onTabClick:N},{default:s(()=>[t(m,{label:"点赞"},{default:s(()=>[t(q,{height:"70vh"},{default:s(()=>[(c(!0),f(v,null,y(b.value,(e,T)=>(c(),k(o,{href:e.questionId?"/#/question/questionItem/"+e.question.id:"/#/essay/essayItem/"+e.text.id,class:"messages-right-item",key:e.id},{default:s(()=>[t(d,{style:{width:"250px","margin-right":"20px"},size:80,src:e.user.image?i(p):u.circleUrl},null,8,["src"]),t(g,{column:1},{default:s(()=>[t(n,{label:"用户名:"},{default:s(()=>[l(a(e.user.name),1)]),_:2},1024),t(n,{label:"时间:"},{default:s(()=>[l(a(e.createTime),1)]),_:2},1024),t(n,{label:e.question?"问题标题":"文章标题"},{default:s(()=>[l(a(e.question?e.question.title:e.text.title),1)]),_:2},1032,["label"]),t(n,{label:"评论了:"},{default:s(()=>[l(a(e.question?e.question.data:e.text.data),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]))),128))]),_:1})]),_:1}),t(m,{label:"收藏"},{default:s(()=>[t(q,{height:"70vh"},{default:s(()=>[(c(!0),f(v,null,y(C.value,(e,T)=>(c(),k(o,{href:e.questionId?"/#/question/questionItem/"+e.question.id:"/#/essay/essayItem/"+e.text.id,class:"messages-right-item",key:e.id},{default:s(()=>[t(d,{style:{width:"250px","margin-right":"20px"},size:80,src:e.user.image?i(p):u.circleUrl},null,8,["src"]),t(g,{column:1},{default:s(()=>[t(n,{label:"用户名:"},{default:s(()=>[l(a(e.user.name),1)]),_:2},1024),t(n,{label:"时间:"},{default:s(()=>[l(a(e.createTime),1)]),_:2},1024),t(n,{label:e.question?"问题标题":"文章标题"},{default:s(()=>[l(a(e.question?e.question.title:e.text.title),1)]),_:2},1032,["label"]),t(n,{label:"评论了:"},{default:s(()=>[l(a(e.question?e.question.data:e.text.data),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]))),128))]),_:1})]),_:1}),t(m,{label:"评论"},{default:s(()=>[t(q,{height:"70vh"},{default:s(()=>[(c(!0),f(v,null,y(M.value,(e,T)=>(c(),k(o,{href:e.questionId?"/#/question/questionItem/"+e.question.id:"/#/essay/essayItem/"+e.text.id,class:"messages-right-item",key:e.id},{default:s(()=>[t(d,{style:{width:"250px","margin-right":"20px"},size:80,src:e.user.image?i(p):u.circleUrl},null,8,["src"]),t(g,{column:1},{default:s(()=>[t(n,{label:"用户名:"},{default:s(()=>[l(a(e.user.name),1)]),_:2},1024),t(n,{label:"时间:"},{default:s(()=>[l(a(e.createTime),1)]),_:2},1024),t(n,{label:e.question?"问题标题":"文章标题"},{default:s(()=>[l(a(e.question?e.question.title:e.text.title),1)]),_:2},1032,["label"]),t(n,{label:"评论了:"},{default:s(()=>[l(a(e.question?e.question.data:e.text.data),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]))),128))]),_:1})]),_:1})]),_:1})])])}}},K=V(j,[["__scopeId","data-v-6bfe0716"]]);export{K as default};