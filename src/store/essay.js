import {defineStore} from 'pinia'
import {getEssayList,getEssayType} from "../api/essay"

const useEssayStore = defineStore("essay",{
  state:()=>({
    list:[],
    category:[]
  }),
  getters:{
    
  },
  actions:{
    // 获取文章列表列表
    async getEssayList(){
      try {
        let res = await getEssayList()
        this.list = res.data;
        return res.data
      } catch (error) {
        return new Error(error)
      }
    },
    // 获取文章分类列表
    async getEssayType(){
      try {
        let res = await getEssayType()
        this.category = res.data;
        return res.data
      } catch (error) {
        return new Error(error)
      }
    },

  }
})

export default useEssayStore