import{I as r}from"./index-6c2aad7d.js";import{b as s,c as a}from"./essay-346afb65.js";const y=r("essay",{state:()=>({list:[],category:[]}),getters:{},actions:{async getEssayList(){try{let t=await s();return this.list=t.data,t.data}catch(t){return new Error(t)}},async getEssayType(){try{let t=await a();return this.category=t.data,t.data}catch(t){return new Error(t)}}}});export{y as u};