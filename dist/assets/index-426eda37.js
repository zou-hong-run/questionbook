import{_ as I,u as C,a as S,c as u,w as q,d as w,o as a,e as o,h as N,i as V,Q as B,F as g,p as m,n as s,y as l,z as E,A as R,x as b}from"./index-b7fbc8c6.js";import{s as F}from"./common-a62197d4.js";const c=n=>(E("data-v-23526a2c"),n=n(),R(),n),Q={class:"search"},$={key:0,class:"search-item"},z=c(()=>s("div",{class:"search-item-title"},"什么也没有搜索出来",-1)),A=c(()=>s("div",{class:"search-item-content"},"你搜索的东西,好像不存在哦",-1)),D=c(()=>s("div",{class:"search-item-type"},"类别:无",-1)),L=[z,A,D],P=["onClick"],j={class:"search-item-title"},G={class:"search-item-content"},H=c(()=>s("div",{class:"search-item-type"},"类别:问题",-1)),J=["onClick"],K={class:"search-item-title"},M={class:"search-item-content"},O=c(()=>s("div",{class:"search-item-type"},"类别:文章",-1)),T={__name:"index",setup(n){const y=C(),f=S(),r=u(""),i=u([]),v=u([]),x=()=>{r.value||b({title:"你没有输入任何数据",message:"nothing!",duration:2500}),F(r.value).then(t=>{console.log(t);const{questions:_,texts:d}=t.data;i.value=_,v.value=d})},p=t=>{f.push(t)};return q(y,(t,_)=>{r.value=t.query.inputval,x()},{immediate:!0}),(t,_)=>{const d=w("el-scrollbar");return a(),o("div",Q,[N(d,{height:"100%"},{default:V(()=>[i.value.length===0||!i.value.length===0?(a(),o("div",$,L)):B("",!0),(a(!0),o(g,null,m(i.value,(e,h)=>(a(),o("div",{class:"search-item",key:h,onClick:k=>p("/question/questionItem/"+(e==null?void 0:e.id))},[s("div",j,l(e.title),1),s("div",G,l((e==null?void 0:e.data.match(/[\u4e00-\u9fa5]/g).toString().replace("，"," ").slice(20,120))+"..."),1),H],8,P))),128)),(a(!0),o(g,null,m(v.value,(e,h)=>(a(),o("div",{class:"search-item",key:h,onClick:k=>p("/essay/essayItem/"+(e==null?void 0:e.id))},[s("div",K,l(e.title),1),s("div",M,l((e==null?void 0:e.data.match(/[\u4e00-\u9fa5]/g).toString().replace("，"," ").slice(20,120))+"..."),1),O],8,J))),128))]),_:1})])}}},X=I(T,[["__scopeId","data-v-23526a2c"]]);export{X as default};
