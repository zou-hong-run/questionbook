import{u as Q,e as T}from"./question-93891cdd.js";import{g as N,a as V}from"./question-6fb1a9cc.js";import{_ as A,c as y,d as n,o as c,e as p,n as t,h as i,i as s,l as r,F as q,p as x,q as b,y as d,g as k,z as E,A as F}from"./index-8a7cc118.js";const G=l=>(E("data-v-fd08bc28"),l=l(),F(),l),$={class:"question"},z={class:"question-header"},D={class:"question-content"},M={class:"hot-question"},U=["src"],j={class:"hot-question-content"},H=G(()=>t("span",{class:"hot-question-content-inImgText"},"立即进入讨论",-1)),J={class:"hot-question-content-bottom"},K={class:"hot-question-content-bottom-title"},O={class:"hot-question-content-bottom-discuss"},P={style:{margin:"0 20px"}},R={__name:"question",setup(l){const u=Q(),_=y();u.list.length===0&&m(),_.value=u.list;let h=y();N().then(e=>{h.value=e.data});function w(e){V(e).then(a=>{_.value=a.data})}function m(){u.getQuestionList().then(e=>{_.value=e})}return window.addEventListener("error",function(e){var a;((a=e.target.tagName)==null?void 0:a.toUpperCase())==="IMG"&&(e.target.src="https://pinia.web3doc.top/logo.svg")},!0),(e,a)=>{const g=n("el-button"),I=n("el-row"),f=n("el-tag"),C=n("el-image"),L=n("el-card"),S=n("router-link"),B=n("el-scrollbar");return c(),p("div",$,[t("div",z,[i(I,{class:"question-header-row"},{default:s(()=>[i(g,{onClick:m,type:"primary"},{default:s(()=>[r("所有")]),_:1}),(c(!0),p(q,null,x(k(h),(o,v)=>(c(),b(g,{onClick:W=>w(o.id),round:"",key:v,type:"primary"},{default:s(()=>[r(d(o.type),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),t("div",D,[i(B,null,{default:s(()=>[t("div",M,[(c(!0),p(q,null,x(_.value,(o,v)=>(c(),b(S,{key:o.id,to:`/question/questionItem/${o.id}`},{default:s(()=>[i(L,{style:{width:"100%",margin:"10px 0 10px"},"body-style":{position:"relative",top:"0px",padding:"10px"}},{default:s(()=>[t("img",{src:o.images,class:"hot-question-top-image"},null,8,U),t("div",j,[H,t("div",J,[t("div",K,d(o.title),1),t("div",O,[i(f,null,{default:s(()=>[r(d(o.solved===0?"未解决":"已解决"),1)]),_:2},1024),t("div",P,[i(f,{type:"info"},{default:s(()=>[r(d(999)+"+人在线讨论")]),_:1})]),i(C,{style:{width:"20px",height:"20px"},src:k(T)},null,8,["src"])])])])]),_:2},1024)]),_:2},1032,["to"]))),128))])]),_:1})])])}}},tt=A(R,[["__scopeId","data-v-fd08bc28"]]);export{tt as default};