import{_ as $,b as A,a as J,u as X,c as f,E as j,t as G,I as K,d as _,o as I,e as b,h as o,i as s,n as l,J as O,l as v,F as W,p as Y,q as Z,y as ee,z as te,A as ne,x as E}from"./index-b7fbc8c6.js";import{d as oe,e as se,f as ae,l as le,h as ie}from"./question-a46792aa.js";import{c as ce}from"./websocket-cbf202c8.js";const N=q=>(te("data-v-aa8f245c"),q=q(),ne(),q),ue={class:"questionItem"},de=["innerHTML"],re={class:"questionItem-content"},me=N(()=>l("div",{class:"questionItem-content-left-username"},"小草",-1)),_e={class:"questionItem-content-left-content"},fe={key:0};const pe=N(()=>l("div",{class:"questionItem-content-right-username"},"小花",-1)),he={class:"questionItem-content-right-content"};const ge={key:1},Ie=N(()=>l("img",{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",alt:"",srcset:""},null,-1)),ve=[Ie],qe={class:"questionItem-bottom"},ke={__name:"index",setup(q){const k=A(),T=J(),V=X();k.name;let y=k.id;const S=f();let i=V.params.id;i||alert("页面id不存在"),oe(i).then(e=>{S.value=e.data}).catch(e=>{j.confirm("该问题不存在,是否返回?").then(()=>{T.back(),done()}).catch(()=>{T.back()})});const L=(e,n,a)=>{var u;const c=h.value;if(e){const t=H.value.cloneNode(!0),d=t.querySelector(".questionItem-content-left-username"),r=t.querySelector(".questionItem-content-left-content");d.innerHTML=a,r.innerHTML=n,c.appendChild(t)}else if(C.value){const t=C.value.cloneNode(!0),d=t.querySelector(".questionItem-content-right-username"),r=t.querySelector(".questionItem-content-right-content");d.innerHTML=a,r.innerHTML=n,c.appendChild(t)}(u=M.value)==null||u.setScrollTop(h.value.scrollHeight)},U=()=>{se(i).then(e=>{e.data.reverse().forEach(n=>{n.userId===y?L(!0,n.data,n.user.name):L(!1,n.data,n.user.name)})})};G(()=>{U()});let R=ce(),P={data:{userId:y,toUserId:null,message:null,flag:"questionHome",questionId:i}};const B=e=>{if(console.log("message",e.data),e.data&&e.data.flag==="questionHomeMessage"){let a=e.data.userName,c=e.data.message;O(()=>{L(!1,c,a)})}};R.onsend(P,B);const p=f(""),h=f(),H=f(),C=f(),w=e=>{E({title:e+"成功",message:"你的"+e+"是对作者的最大的鼓励",position:"bottom-left",duration:2e3}),E({title:e+"成功",message:"你的收藏是对作者的最大的鼓励",position:"bottom-right",duration:2e3}),E({title:e+"成功",message:"你的收藏是对作者的最大的鼓励",position:"top-left",duration:2e3}),E({title:e+"成功",message:"你的收藏是对作者的最大的鼓励",position:"top-right",duration:2e3})},D=()=>{ae(i),w("收藏")},z=()=>{le(i),w("点赞")},M=f(),Q=e=>{var u;if(!p.value){alert("不能发送为空的消息");return}const n=p.value,a=k.name,c=h.value;if(e){const t=H.value.cloneNode(!0),d=t.querySelector(".questionItem-content-left-username"),r=t.querySelector(".questionItem-content-left-content");d.innerHTML=a,r.innerHTML=n,c.appendChild(t),ie(n,i).then(x=>{console.log(x.data,"添加评论成功");let m={data:{userName:k.name,userId:y,toUserId:null,message:n,flag:"questionHomeMessage",questionId:i}};R.onsend(m,null)})}else{const t=C.value.cloneNode(!0),d=t.querySelector(".questionItem-content-right-username"),r=t.querySelector(".questionItem-content-right-content");d.innerHTML=a,r.innerHTML=n,c.appendChild(t)}(u=M.value)==null||u.setScrollTop(h.value.scrollHeight),p.value=""};return K(()=>{let e={data:{userId:y,toUserId:null,message:null,flag:"questionRemoveHome",questionId:i}};R.onsend(e,B)}),(e,n)=>{const a=_("el-scrollbar"),c=_("CirclePlus"),u=_("el-icon"),t=_("el-button"),d=_("el-input"),r=_("Star"),x=_("Pointer");return I(),b("div",ue,[o(a,{class:"questionItem-title"},{default:s(()=>{var m;return[l("div",{innerHTML:(m=S.value)==null?void 0:m.data},null,8,de)]}),_:1}),l("div",re,[o(a,{height:"calc(100%)",ref_key:"scrollbarRef",ref:M},{default:s(()=>[l("div",{class:"questionItem-content-itemcontent animate__animated animate__shakeX",ref_key:"questionItemContentRef",ref:h},[l("div",{ref_key:"contentItemLeftRef",ref:H,class:"questionItem-content-left animate__animated animate__backInRight"},[me,l("div",_e,[(I(),b("div",fe,"我想问一下这分割函数都会给速度还是是任何上是如果是是如何二人输入和是问题怎么解决啊,我快要哭了"))])],512),l("div",{ref_key:"contentItemRightRef",ref:C,class:"questionItem-content-right animate__animated animate__backInLeft"},[pe,l("div",he,[(I(),b("div",ge,ve))])],512)],512)]),_:1},512)]),o(a,{style:{width:"100%",height:"50px"}},{default:s(()=>{var m;return[l("div",qe,[o(t,null,{default:s(()=>[o(u,null,{default:s(()=>[o(c)]),_:1})]),_:1}),o(d,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=g=>p.value=g),onChange:n[1]||(n[1]=g=>Q(!0)),autosize:{minRows:2,maxRows:4},type:"input",placeholder:"尽情讨论吧!"},null,8,["modelValue"]),o(t,{onClick:n[2]||(n[2]=g=>Q(!0))},{default:s(()=>[v("发送")]),_:1}),o(t,{onClick:D,type:"default"},{default:s(()=>[o(u,null,{default:s(()=>[o(r)]),_:1}),v("收藏")]),_:1}),o(t,{onClick:z,type:"default"},{default:s(()=>[o(u,null,{default:s(()=>[o(x)]),_:1}),v("点赞")]),_:1}),o(t,{text:"",type:"primary",disabled:""},{default:s(()=>[v("问题类型:")]),_:1}),(I(!0),b(W,null,Y((m=S.value)==null?void 0:m.types,(g,F)=>(I(),Z(t,{plain:"",type:"info",disabled:"",key:F},{default:s(()=>[v(ee(g.type),1)]),_:2},1024))),128))])]}),_:1})])}}},Ee=$(ke,[["__scopeId","data-v-aa8f245c"]]);export{Ee as default};
