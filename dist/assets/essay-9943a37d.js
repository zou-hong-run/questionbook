import{B as e}from"./index-cc774a4a.js";function u(){return e({url:"/text/list",method:"get"})}function a(){return e({url:"/text/type",method:"get"})}function m(t,s,o,n){return e({url:"/text",method:"post",data:{title:t,data:s,images:o,types:n}})}function l(t){return e({url:`/text/byType/${t}`,method:"get"})}function c(t){return e({url:`/text/${t}`,method:"get"})}function i(t){return e({url:`/like/likeText/${t}`,method:"post"})}function d(t){return e({url:`/collect/collectText/${t}`,method:"post"})}function y(t,s){return e({url:"/comment/toText",method:"post",data:{data:t,textId:s}})}function g(t){return e({url:`/comment/getTextComment/${t}`,method:"get"})}export{m as a,u as b,a as c,c as d,g as e,d as f,l as g,y as h,i as l};