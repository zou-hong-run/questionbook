import {defineStore} from 'pinia'
import {getQuestionList} from "../api/question"

const useQuestionStore = defineStore("question",{
  state:()=>({
    list:[],
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
    }
  }
})

export default useQuestionStore