import{H as e}from"./index-9ee4bf01.js";import{c as r,g as s}from"./question-3a6720b9.js";const i=e("question",{state:()=>({list:[],category:[]}),getters:{},actions:{async getQuestionList(){try{let t=await r();return this.list=t.data,t.data}catch(t){return new Error(t)}},async getQuestionType(){try{let t=await s();return this.category=t.data,t.data}catch(t){return new Error(t)}}}});export{i as u};