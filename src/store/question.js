import {defineStore} from 'pinia'
import {getQuestionList,getQuestionType} from "../api/question"

const useQuestionStore = defineStore("question",{
  state:()=>({
    list:[],
    category:[]
  }),
  getters:{
    
  },
  actions:{
    // 获取问题列表
    async getQuestionList(){
      try {
        let res = await getQuestionList()
        this.list = res.data;
        return res.data
      } catch (error) {
        return new Error(error)
      }
    },
    // 获取问题分类列表
    async getQuestionType(){
      try {
        let res = await getQuestionType()
        this.category = res.data;
        return res.data
      } catch (error) {
        return new Error(error)
      }
    },
  }
})

export default useQuestionStore