import{e as X}from"./fill_小火苗-c6ac7ceb.js";import{_ as j,b as J,u as K,a as O,c as r,t as W,x as B,d as n,o as d,e as u,n as t,h as e,i as s,g as k,l as a,y as h,F as E,p as L,q as C,z as Y,A as Z,B as tt}from"./index-c092429d.js";import{u as et}from"./question-4f8c763a.js";import{u as st}from"./essay-dc5497c9.js";import{c as ot}from"./websocket-aeaf0dda.js";import"./question-d52a4f2b.js";import"./essay-cd7ee5c7.js";const nt="/assets/没有问题-0cb4b2ef.png";const p=m=>(Z("data-v-331b4e37"),m=m(),tt(),m),it={class:"index"},ct={class:"index-left"},at={class:"hot"},lt={class:"hot-title"},dt={class:"hot-question"},_t={style:{width:"100%",height:"100%"}},rt={class:"hot-question-top"},ut=["src"],ht={class:"hot-question-top-content"},pt=p(()=>t("span",{class:"hot-question-top-content-span"},"立即进入讨论",-1)),mt={class:"hot-question-top-content-text"},ft={class:"hot-question-bottom"},gt={class:"hot"},vt={class:"hot-title"},yt={class:"hot-essay"},bt={class:"hot-essay-likecollectandforward"},xt={class:"index-right"},kt={class:"discussion-title"},It=p(()=>t("div",{class:"discussion-title-text"},"问题推送(点击问题一起讨论吧)",-1)),St=["src"],qt={class:"discussion-content"},wt={class:"discussion-content-left"},Rt=p(()=>t("div",{class:"discussion-content-left-username"},"小草",-1)),Bt={class:"discussion-content-left-content"},Et={key:0};const Lt=p(()=>t("div",{class:"discussion-content-right-username"},"小花",-1)),Ct={class:"discussion-content-right-content"};const zt={key:1},Mt=p(()=>t("img",{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",alt:"",srcset:""},null,-1)),Nt=[Mt],Ft={__name:"index",setup(m){const z=J();K(),O();const M=z.id;let N=ot(),F={data:{userId:M,toUserId:null,message:null,flag:"icon",questionId:null}};const T=o=>{if(!o.data)return;const l=o.data.flag;if(l==="icon")B({title:"连接成功",message:"世界聊天窗口连接成功!",duration:2500});else if(l==="question"){let _=o.data.message.title,i=o.data.userId.name;f.value&&x.value&&U(i,_)}};N.onsend(F,T);const D=et(),H=st(),I=r(),S=r();D.getQuestionList().then(o=>{I.value=o}),H.getEssayList().then(o=>{S.value=o});const f=r(),x=r(),q=r(),U=(o,l)=>{var y;const _=f.value,i=x.value.cloneNode(!0);let g=i.querySelector(".discussion-content-right-username"),v=i.querySelector(".discussion-content-right-content");g.innerHTML=o,v.innerHTML=l,_.appendChild(i),(y=q.value)==null||y.setScrollTop(f.value.scrollHeight)},V=o=>{};return W(()=>{B({title:"欢迎欢迎",message:"欢迎来到问书欢迎来到问书",duration:2500})}),window.addEventListener("error",function(o){var l;((l=o.target.tagName)==null?void 0:l.toUpperCase())==="IMG"&&(o.target.src="https://pinia.web3doc.top/logo.svg")},!0),(o,l)=>{const _=n("el-text"),i=n("el-divider"),g=n("el-link"),v=n("el-tag"),y=n("el-image"),Q=n("el-card"),w=n("router-link"),$=n("el-descriptions-item"),A=n("el-descriptions"),b=n("el-button"),G=n("el-row"),R=n("el-scrollbar");return d(),u("div",it,[t("div",ct,[e(R,{height:"calc(100%)"},{default:s(()=>[t("div",at,[t("div",lt,[e(i,{"content-position":"left"},{default:s(()=>[e(_,{style:{"font-weight":"bold","font-size":"24px"},size:"large"},{default:s(()=>[a("最热问题")]),_:1})]),_:1}),e(i,{"content-position":"right"},{default:s(()=>[e(g,{size:"large",type:"primary",disabled:""},{default:s(()=>[a(h("<<更多>>"))]),_:1})]),_:1})]),t("div",dt,[(d(!0),u(E,null,L(I.value,(c,P)=>(d(),C(w,{style:{width:"25%",height:"100%",margin:"30px"},key:c.id,to:`/question/questionItem/${c.id}`},{default:s(()=>[e(Q,{style:{width:"100%",height:"100%"},"body-style":{padding:"0px"}},{default:s(()=>[t("div",_t,[t("div",rt,[t("img",{src:c.images?c.images.split(",")[0]:"https://pinia.web3doc.top/logo.svg",class:"hot-question-top-image"},null,8,ut),t("div",ht,[pt,t("div",mt,h(c.title),1)])]),t("div",ft,[e(v,null,{default:s(()=>[a(h(c.solved===0?"未解决":"已解决"),1)]),_:2},1024),e(v,{type:"info"},{default:s(()=>[a(h(Math.floor(Math.random()*99))+"+人在线讨论",1)]),_:1}),e(y,{style:{width:"20px",height:"20px"},src:k(X)},null,8,["src"])])])]),_:2},1024)]),_:2},1032,["to"]))),128))])]),t("div",gt,[t("div",vt,[e(i,{"content-position":"left"},{default:s(()=>[e(_,{style:{"font-weight":"bold","font-size":"24px"},size:"large"},{default:s(()=>[a("热门文章...")]),_:1})]),_:1}),e(i,{"content-position":"right"},{default:s(()=>[e(g,{size:"large",type:"primary",disabled:""},{default:s(()=>[a(h("<<更多>>"))]),_:1})]),_:1})]),t("div",yt,[(d(!0),u(E,null,L(S.value,(c,P)=>(d(),C(w,{style:{},key:c.id,to:`/essay/essayItem/${c.id}`},{default:s(()=>[e(G,{style:{border:"5px solid #F5F6F8"}},{default:s(()=>[e(A,{style:{margin:"20px"},title:c.title},{default:s(()=>[e($,{label:k(Y)(c.data)+"..."},null,8,["label"])]),_:2},1032,["title"]),t("div",bt,[e(b,{text:"",type:"default",icon:"ChatSquare"},{default:s(()=>[a("评论")]),_:1}),e(b,{text:"",type:"default",icon:"Pointer"},{default:s(()=>[a("点赞")]),_:1}),e(b,{text:"",type:"default",icon:"Star"},{default:s(()=>[a("收藏")]),_:1}),e(b,{text:"",type:"default",icon:"Share"},{default:s(()=>[a("转发")]),_:1})]),e(i)]),_:2},1024)]),_:2},1032,["to"]))),128))])])]),_:1})]),t("div",xt,[t("div",kt,[It,t("img",{class:"discussion-title-img",src:k(nt),alt:""},null,8,St)]),t("div",qt,[e(R,{onScroll:V,height:"calc(100%)",ref_key:"scrollbarRef",ref:q},{default:s(()=>[t("div",{class:"discussion-content-itemcontent animate__animated animate__shakeX",ref_key:"discussionItemContentRef",ref:f},[t("div",wt,[Rt,t("div",Bt,[(d(),u("div",Et,"我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了"))])]),t("div",{class:"discussion-content-right animate__animated animate__backInDown",ref_key:"discussionItemRightRef",ref:x},[Lt,t("div",Ct,[(d(),u("div",zt,Nt))])],512)],512)]),_:1},512)])])])}}},At=j(Ft,[["__scopeId","data-v-331b4e37"]]);export{At as default};
