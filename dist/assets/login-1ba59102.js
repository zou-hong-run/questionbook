import{_ as X,b as Y,u as ee,a as se,r as b,c as f,w as te,d as i,o as g,e as w,f as $,v as F,g as o,h as s,i as t,j as le,k as y,l as m,m as oe,n as re,F as ae,p as ne,q as de,s as ue,E as ie}from"./index-7bc7197a.js";const me="/assets/qq-fb49af2f.png",pe="/assets/weixin-7e8276db.png",fe="/assets/weibo-8fd7d3ab.png";const ce={class:"login"},ge={key:0},_e={key:1},ve={key:0},we={key:1},ye={__name:"login",setup(Ve){let B=Y(),q=ee(),j=se(),S=b({qq:me,weixin:pe,weibo:fe});const I=f(),A=f();let r=f(!0),V=f(!1),C=f(!1),p=b({username:"",password:"",code:""}),d=b({username:"",password:"",rePassword:"",type:!0});const M=(n,e,l)=>{e===""?l(new Error("请输入用户名!")):l()},O=(n,e,l)=>{e===""?l(new Error("请输入密码!")):l()},L=async n=>{n&&(V.value=!0,await n.validate((e,l)=>{e?J():console.log("error submit!",l)}))},z=(n,e,l)=>{e===""?l(new Error("请输入用户名!")):l()},T=(n,e,l)=>{if(e==="")l(new Error("请输入密码!"));else{if(d.password!==""){if(!A.value)return;A.value.validateField("rePassword",()=>null)}l()}},G=(n,e,l)=>{e===""?l(new Error("请输入确认密码")):e!==d.password?l(new Error("两次输入密码不匹配")):l()},H=(n,e,l)=>{e===!1?l(new Error("请点击接受协议")):l()},K=async n=>{n&&await n.validate((e,l)=>{e?(C.value=!0,ue(d).then(_=>{const c=d.username;ie.alert("<font color='red'>恭喜你，您的账号 "+c+" 注册成功！</font>","系统提示",{dangerouslyUseHTMLString:!0,type:"success"}).then(()=>{r.value=!0}).catch(()=>{})}).catch(()=>{C.value=!1,console.log("似乎注册失败了")})):console.log("error submit!",l)})},N=b({username:[{validator:M,trigger:"blur"}],password:[{validator:O,trigger:"blur"}],code:[{required:!0,message:"请输入验证码!!!",trigger:"blur"},{min:4,max:8,message:"验证码长度为4-8位",trigger:"blur"}]}),Z=b({username:[{validator:z,trigger:"blur"},{min:6,max:15,message:"用户名长度6-15位",trigger:"blur"}],password:[{validator:T,trigger:"blur"},{min:6,max:15,message:"密码长度为6-15位",trigger:"blur"}],rePassword:[{validator:G,trigger:"blur"},{min:6,max:15,message:"确认密码长度6-15位",trigger:"blur"}],type:[{validator:H,trigger:"change"}]}),U=f("data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7"),h=f(!0),R=f(void 0);te(q,(n,e)=>{var l;R.value=(l=n.query)==null?void 0:l.redirect},{immediate:!0});function J(){B.Login(p).then(()=>{j.push({path:R.value||"/"})}).catch(()=>{V.value=!1,h.value&&k()})}function k(){V.value=!1,le().then(n=>{h.value=n.data===void 0?!0:n.data,h.value&&(U.value=n.data)})}return k(),(n,e)=>{const l=i("el-button"),_=i("el-col"),c=i("el-row"),v=i("el-input"),u=i("el-form-item"),E=i("el-image"),x=i("el-text"),Q=i("el-divider"),P=i("el-form"),W=i("el-switch");return g(),w("div",ce,[$(s(P,{"status-icon":"",ref_key:"ruleLoginFormRef",ref:I,model:o(p),rules:N,class:"login-form"},{default:t(()=>[s(c,null,{default:t(()=>[s(_,{class:"chooseCol",span:12,align:"middle"},{default:t(()=>[s(l,{class:"chooseBtn",onClick:e[0]||(e[0]=a=>y(r)?r.value=!0:r=!0),text:"",type:`${o(r)?"success":"default"}`},{default:t(()=>[m("登录")]),_:1},8,["type"])]),_:1}),s(_,{class:"chooseCol",span:12,align:"middle"},{default:t(()=>[s(l,{class:"chooseBtn",onClick:e[1]||(e[1]=a=>y(r)?r.value=!1:r=!1),text:"",type:`${o(r)?"default":"success"}`},{default:t(()=>[m("注册")]),_:1},8,["type"])]),_:1})]),_:1}),s(u,{class:"formItem",prop:"username"},{default:t(()=>[s(v,{clearable:"",modelValue:o(p).username,"onUpdate:modelValue":e[2]||(e[2]=a=>o(p).username=a),placeholder:"请输入用户名",name:"username"},{prepend:t(()=>[s(l,{icon:"User"})]),_:1},8,["modelValue"])]),_:1}),s(u,{class:"formItem",prop:"password"},{default:t(()=>[s(v,{clearable:"",type:"password","show-password":"",modelValue:o(p).password,"onUpdate:modelValue":e[3]||(e[3]=a=>o(p).password=a),placeholder:"请输入密码"},{prepend:t(()=>[s(l,{icon:"Lock"})]),_:1},8,["modelValue"])]),_:1}),s(u,{class:"formItem",prop:"code"},{default:t(()=>[s(v,{onKeyup:e[4]||(e[4]=oe(a=>L(I.value),["enter"])),clearable:"",style:{width:"63%"},modelValue:o(p).code,"onUpdate:modelValue":e[5]||(e[5]=a=>o(p).code=a),placeholder:"验证码",class:"input-with-select"},{prepend:t(()=>[s(l,{icon:"Message"})]),_:1},8,["modelValue"]),re("div",{onClick:k,class:"login-code"},[s(E,{src:U.value,fit:"cover",class:"login-code-img"},null,8,["src"])])]),_:1}),s(u,{class:"formItem"},{default:t(()=>[s(l,{onClick:e[6]||(e[6]=a=>L(I.value)),loading:o(V),size:"large",type:"primary",style:{width:"100%"}},{default:t(()=>[o(V)?(g(),w("span",_e,"登 录 中...")):(g(),w("span",ge,"登 录"))]),_:1},8,["loading"])]),_:1}),s(Q,{class:"formItem"},{default:t(()=>[s(x,{size:"small"},{default:t(()=>[m("其他方式登录")]),_:1})]),_:1}),s(c,{class:"formItem"},{default:t(()=>[(g(!0),w(ae,null,ne(o(S),(a,D)=>(g(),de(_,{key:D,span:8,style:{display:"flex","justify-content":"center","align-items":"center"}},{default:t(()=>[s(E,{style:{width:"30px",height:"30px"},src:a,fit:"cover"},null,8,["src"])]),_:2},1024))),128))]),_:1}),s(c,{class:"formItem"},{default:t(()=>[s(x,{onClick:e[7]||(e[7]=a=>y(r)?r.value=!1:r=!1),type:"primary"},{default:t(()=>[m("立即注册")]),_:1})]),_:1}),s(x,{class:"formItem",size:"small"},{default:t(()=>[m("登录即代表同意 服务条款 和 隐私协议")]),_:1})]),_:1},8,["model","rules"]),[[F,o(r)]]),$(s(P,{"status-icon":"",ref_key:"ruleRegisterFormRef",ref:A,model:o(d),rules:Z,class:"register-form"},{default:t(()=>[s(c,null,{default:t(()=>[s(_,{class:"chooseCol",span:12,align:"middle"},{default:t(()=>[s(l,{class:"chooseBtn",onClick:e[8]||(e[8]=a=>y(r)?r.value=!0:r=!0),text:"",type:`${o(r)?"success":"default"}`},{default:t(()=>[m("登录")]),_:1},8,["type"])]),_:1}),s(_,{class:"chooseCol",span:12,align:"middle"},{default:t(()=>[s(l,{class:"chooseBtn",onClick:e[9]||(e[9]=a=>y(r)?r.value=!1:r=!1),text:"",type:`${o(r)?"default":"success"}`},{default:t(()=>[m("注册")]),_:1},8,["type"])]),_:1})]),_:1}),s(u,{class:"formItem",prop:"username"},{default:t(()=>[s(v,{clearable:"",modelValue:o(d).username,"onUpdate:modelValue":e[10]||(e[10]=a=>o(d).username=a),placeholder:"请输入用户名",name:"username"},{prepend:t(()=>[s(l,{icon:"User"})]),_:1},8,["modelValue"])]),_:1}),s(u,{class:"formItem",prop:"password"},{default:t(()=>[s(v,{clearable:"",modelValue:o(d).password,"onUpdate:modelValue":e[11]||(e[11]=a=>o(d).password=a),placeholder:"请输入密码"},{prepend:t(()=>[s(l,{icon:"Lock"})]),_:1},8,["modelValue"])]),_:1}),s(u,{class:"formItem",prop:"rePassword"},{default:t(()=>[s(v,{clearable:"",modelValue:o(d).rePassword,"onUpdate:modelValue":e[12]||(e[12]=a=>o(d).rePassword=a),placeholder:"确认密码"},{prepend:t(()=>[s(l,{icon:"Lock"})]),_:1},8,["modelValue"])]),_:1}),s(u,{class:"formItem",prop:"type"},{default:t(()=>[s(u,{prop:"type"},{default:t(()=>[s(W,{modelValue:o(d).type,"onUpdate:modelValue":e[13]||(e[13]=a=>o(d).type=a)},null,8,["modelValue"]),s(x,{style:{"margin-left":"7px"},type:"primary"},{default:t(()=>[m("注册即同意用户协议")]),_:1})]),_:1})]),_:1}),s(u,{class:"formItem",style:{width:"100%"}},{default:t(()=>[s(l,{onClick:e[14]||(e[14]=a=>K(A.value)),loading:o(C),size:"large",type:"primary",style:{width:"100%"}},{default:t(()=>[o(C)?(g(),w("span",we,"注 册 中...")):(g(),w("span",ve,"注 册"))]),_:1},8,["loading"])]),_:1}),s(c,{class:"formItem"},{default:t(()=>[s(x,{onClick:e[15]||(e[15]=a=>y(r)?r.value=!0:r=!0),type:"primary"},{default:t(()=>[m("立即登录")]),_:1})]),_:1})]),_:1},8,["model","rules"]),[[F,!o(r)]])])}}},be=X(ye,[["__scopeId","data-v-3d058930"]]);export{be as default};
