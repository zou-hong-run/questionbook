import{e as Q}from"./fill_小火苗-c6ac7ceb.js";import{g as T,a as N}from"./question-2954dd2b.js";import{u as M}from"./question-3d58990e.js";import{_ as V,c as y,d as n,o as c,e as p,n as t,h as i,i as s,l as _,F as q,p as b,q as x,y as d,g as k,A,B as E}from"./index-6c2aad7d.js";const F=l=>(A("data-v-db9e70b8"),l=l(),E(),l),G={class:"question"},$={class:"question-header"},D={class:"question-content"},U={class:"hot-question"},j=["src"],z={class:"hot-question-content"},H=F(()=>t("span",{class:"hot-question-content-inImgText"},"立即进入讨论",-1)),J={class:"hot-question-content-bottom"},K={class:"hot-question-content-bottom-title"},O={class:"hot-question-content-bottom-discuss"},P={style:{margin:"0 20px"}},R={__name:"question",setup(l){const u=M(),r=y();u.list.length===0&&m(),r.value=u.list;let h=y();T().then(e=>{h.value=e.data});function w(e){N(e).then(a=>{r.value=a.data})}function m(){u.getQuestionList().then(e=>{r.value=e})}return window.addEventListener("error",function(e){var a;((a=e.target.tagName)==null?void 0:a.toUpperCase())==="IMG"&&(e.target.src="https://pinia.web3doc.top/logo.svg")},!0),(e,a)=>{const g=n("el-button"),I=n("el-row"),v=n("el-tag"),B=n("el-image"),C=n("el-card"),L=n("router-link"),S=n("el-scrollbar");return c(),p("div",G,[t("div",$,[i(I,{class:"question-header-row"},{default:s(()=>[i(g,{onClick:m,type:"primary"},{default:s(()=>[_("所有")]),_:1}),(c(!0),p(q,null,b(k(h),(o,f)=>(c(),x(g,{onClick:W=>w(o.id),round:"",key:f,type:"primary"},{default:s(()=>[_(d(o.type),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),t("div",D,[i(S,null,{default:s(()=>[t("div",U,[(c(!0),p(q,null,b(r.value,(o,f)=>(c(),x(L,{key:o.id,to:`/question/questionItem/${o.id}`},{default:s(()=>[i(C,{style:{width:"100%",margin:"10px 0 10px"},"body-style":{position:"relative",top:"0px",padding:"10px"}},{default:s(()=>[t("img",{src:o.images?o.images.split(",")[0]:"https://pinia.web3doc.top/logo.svg",class:"hot-question-top-image"},null,8,j),t("div",z,[H,t("div",J,[t("div",K,d(o.title),1),t("div",O,[i(v,null,{default:s(()=>[_(d(o.solved===0?"未解决":"已解决"),1)]),_:2},1024),t("div",P,[i(v,{type:"info"},{default:s(()=>[_(d(Math.floor(Math.random()*20))+"+人在线讨论",1)]),_:1})]),i(B,{style:{width:"20px",height:"20px"},src:k(Q)},null,8,["src"])])])])]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})])])}}},et=V(R,[["__scopeId","data-v-db9e70b8"]]);export{et as default};
