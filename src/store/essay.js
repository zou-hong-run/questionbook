import {defineStore} from 'pinia'
import {getEssayList} from "../api/essay"

const useEssayStore = defineStore("essay",{
  state:()=>({
    list:[],
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
    }
  }
})

export default useEssayStore