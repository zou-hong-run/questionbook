import{c as B}from"./user-0013ef0b.js";import{_ as F,a as N,c as k,d as o,o as n,e as p,h as s,i as l,n as t,F as C,p as I,q,y as d,z as V,A as $}from"./index-b7fbc8c6.js";const z=c=>(V("data-v-0e542308"),c=c(),$(),c),A={class:"userCollect"},D={class:"hot"},E={class:"hot-essay"},L=z(()=>t("div",null,"回答",-1)),P={__name:"collect",setup(c){const S=N(),i=a=>{S.push(a)},v=k(),f=k();return B().then(a=>{var r;v.value=(r=a.data)==null?void 0:r.questions,f.value=a.data.texts}),(a,r)=>{const _=o("el-col"),y=o("el-descriptions-item"),h=o("el-descriptions"),g=o("el-divider"),x=o("el-row"),b=o("el-scrollbar");return n(),p("div",A,[s(b,{height:"600px"},{default:l(()=>[t("div",D,[t("div",E,[(n(!0),p(C,null,I(v.value,(e,u)=>(n(),q(x,{onClick:w=>i(e.solved==="undefined"?"/essay/essayItem/"+e.id:"/question/questionItem/"+e.id),style:{"margin-bottom":"10px"},key:u},{default:l(()=>[s(_,{class:"hot-essay-reply",span:2},{default:l(()=>[t("div",null,d((e==null?void 0:e.solved)===0?"未解决":"已解决"),1)]),_:2},1024),s(_,{span:22},{default:l(()=>[s(h,{style:{margin:"20px","user-select":"all"},title:e==null?void 0:e.title},{default:l(()=>[s(y,null,{default:l(()=>[t("div",null,d((e==null?void 0:e.data.match(/[\u4e00-\u9fa5]/g).toString().replace("，"," ").slice(20,120))+"..."),1)]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024),s(g)]),_:2},1032,["onClick"]))),128)),(n(!0),p(C,null,I(f.value,(e,u)=>(n(),q(x,{onClick:w=>i(e.solved==="undefined"?"/essay/essayItem/"+e.id:"/question/questionItem/"+e.id),style:{"margin-bottom":"10px"},key:u},{default:l(()=>[s(_,{class:"hot-essay-reply",span:2},{default:l(()=>[t("div",null,d(e==null?void 0:e.sort),1),L]),_:2},1024),s(_,{span:22},{default:l(()=>[s(h,{style:{margin:"20px","user-select":"all"},title:e==null?void 0:e.title},{default:l(()=>[s(y,null,{default:l(()=>[t("div",null,d((e==null?void 0:e.data.match(/[\u4e00-\u9fa5]/g).toString().replace("，"," ").slice(20,120))+"..."),1)]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024),s(g)]),_:2},1032,["onClick"]))),128))])])]),_:1})])}}},G=F(P,[["__scopeId","data-v-0e542308"]]);export{G as default};