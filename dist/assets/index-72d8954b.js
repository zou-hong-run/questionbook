import{Z as W,m as J,T as Q,E as X}from"./index-28d24883.js";import{u as Y}from"./common-a62197d4.js";import{a as ee}from"./essay-d8081acb.js";import{u as te}from"./essay-28af868b.js";import{_ as oe,u as le,a as ae,c as i,C as se,t as ne,D as ie,d as h,o as E,e as B,n as f,h as s,i as n,g,l as c,G as re,F as de,p as ue,q as ce,y as I,x as y}from"./index-b7fbc8c6.js";const me={class:"addEssay"},pe={class:"addEssay-title"},he={class:"addEssay-content"},fe={class:"addEssay-bottom"},ge={class:"dialogbutton"},ye={class:"dialog-footer"},ve={__name:"index",setup(_e){le();const U=ae();let F=te(),v=F.category;v.length===0&&F.getEssayType().then(e=>{v=e});const _=i(""),x=i(0),b=i(0),C=i(),S=i(),$=e=>{var t;(t=S.value)==null||t.setScrollTop(e)},O=({scrollTop:e})=>{b.value=e},R=e=>`${e} px`;W.registerModule(J);const T=i("default"),k=se(),m=i("<p>hello</p>");ne(()=>{var e,t;x.value=(t=(e=C.value)==null?void 0:e.box)==null?void 0:t.clientHeight,setTimeout(()=>{m.value='<h1 style="text-align: center;">我是文章标题内容哦</h1><hr/><p>我是你要输入的文章哦!</p><p>同时我也支持markdown语法哦!<img src="https://askbook-1317227518.cos.ap-beijing.myqcloud.com/askbook/images/eda2fefe-0cde-4445-b03a-ef831763f241.png" alt="header.png" data-href="" style="width: 58.00px;height: 58.00px;"/></p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul><p style="text-align: left;">开始写作吧!!!!!!</p>'},1500)});const z={modalAppendToBody:!1},D={maxLength:3333,placeholder:"请输入内容...",MENU_CONF:{insertImage:{onInsertedImage(e){if(e==null)return;const{src:t,alt:o,url:a,href:d}=e;console.log("inserted image",t,o,a,d)}},editImage:{onUpdatedImage(e){if(e==null)return;const{src:t,alt:o,url:a}=e;console.log("updated image",t,o,a)}},uploadImage:{async customUpload(e,t){Y(e).then(o=>{const{errno:a,data:d}=o;if(a!==0){alert("图片上传失败");return}const{alt:u,href:V,url:l}=d;_.value=_.value+l+",",t(l,u,V)}).catch(o=>{console.error(o)})},base64LimitSize:5*1024,server:"images/uploadCos",fieldName:"image",maxFileSize:1*1024*1024*10,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{token:"xxx",otherKey:"yyy"},metaWithUrl:!1,headers:{Accept:"text/x-json",otherKey:"xxx"},withCredentials:!0,timeout:5*1e3,onBeforeUpload(e){return e},onProgress(e){console.log("progress",e)},onSuccess(e,t){console.log(`${e.name} 上传成功`,t)},onFailed(e,t){console.log(`${e.name} 上传失败`,t)},onError(e,t,o){console.log(`${e.name} 上传出错`,t,o)}}}};ie(()=>{const e=k.value;e!=null&&e.destroy()});const M=e=>{k.value=e},N=e=>{var t,o;x.value=(o=(t=C.value)==null?void 0:t.box)==null?void 0:o.clientHeight},L=e=>{console.log("destroyed",e)},A=e=>{},j=e=>{},H=(e,t)=>{alert(`【自定义提示】${t} - ${e}`)},P=(e,t,o)=>{console.log("ClipboardEvent 粘贴事件对象",t);const a=t.clipboardData.getData("text/plain");e.insertText(a),o(!1)},q=e=>{alert("内容过多了哦")},p=i(!1),r=i(null);function K(){if(!r.value){alert("标签没选");return}p.value=!1;let e=m.value.match(/<h1.*?>(.*?)<\/h1>/)[1],t=m.value,o=[];o.push({id:r.value.id}),ee(e,t,_.value,o).then(a=>{y({title:"添加文章成功",position:"bottom-right",message:"ohohohohohohoh!!!!!!!!!",duration:2e3}),y({title:"添加文章成功",position:"top-right",message:"ohohohohohohoh!!!!!!!!!",duration:2e3}),y({title:"添加文章成功",position:"bottom-right",message:"ohohohohohohoh!!!!!!!!!",duration:2e3}),y({title:"添加文章成功",position:"bottom-left",message:"ohohohohohohoh!!!!!!!!!",duration:2e3}),y({title:"添加文章成功",position:"top-left",message:"ohohohohohohoh!!!!!!!!!",duration:2e3});let d=a.data;U.push(`/essay/essayItem/${d}`)})}function Z(e){r.value=e}return(e,t)=>{const o=h("el-text"),a=h("el-divider"),d=h("el-slider"),u=h("el-button"),V=h("el-dialog");return E(),B("div",me,[f("div",pe,[s(a,{"content-position":"center"},{default:n(()=>[s(o,{type:"info",size:"large"},{default:n(()=>[c("发布文章")]),_:1})]),_:1})]),f("div",he,[s(g(re),{style:{height:"calc(100%)","z-index":"100"},ref_key:"scrollbarRef",ref:S,always:"",onScroll:O},{default:n(()=>[s(g(Q),{editor:g(k),defaultConfig:z,mode:T.value,style:{"border-bottom":"5px solid #F5F6F8"}},null,8,["editor","mode"]),s(g(X),{ref_key:"innerRef",ref:C,defaultConfig:D,mode:T.value,modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=l=>m.value=l),onOnCreated:M,onOnChange:N,onOnDestroyed:L,onOnFocus:A,onOnBlur:j,onCustomAlert:H,onCustomPaste:P,onOnMaxLength:q},null,8,["mode","modelValue"])]),_:1},512)]),f("div",fe,[s(d,{modelValue:b.value,"onUpdate:modelValue":t[1]||(t[1]=l=>b.value=l),max:x.value,"format-tooltip":R,onInput:$,size:"large",style:{width:"30%"}},null,8,["modelValue","max"]),s(u,{type:"primary",onClick:t[2]||(t[2]=l=>p.value=!0),size:"large"},{default:n(()=>[c("点击发布新文章!")]),_:1})]),s(V,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=l=>p.value=l),title:"选择文章类别",width:"50%","align-center":""},{footer:n(()=>[f("span",ye,[s(u,{onClick:t[4]||(t[4]=l=>p.value=!1)},{default:n(()=>[c("取消发布")]),_:1}),s(u,{type:"primary",onClick:K},{default:n(()=>[c(" 确定发布 ")]),_:1})])]),default:n(()=>[f("div",ge,[(E(!0),B(de,null,ue(g(v),(l,G)=>(E(),ce(u,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=w=>r.value=w),onClick:w=>Z(l),key:G,size:"small"},{default:n(()=>[c(I(l.type),1)]),_:2},1032,["modelValue","onClick"]))),128))]),s(o,null,{default:n(()=>[c("选中标签:"+I(r.value?r.value.type:"还没有选择标签呢!"),1)]),_:1})]),_:1},8,["modelValue"])])}}},Ee=oe(ve,[["__scopeId","data-v-b3c22064"]]);export{Ee as default};
