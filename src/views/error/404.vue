<template>
  <div class="page404" @click="open"></div>
</template>

<script setup >
import {ref} from "vue"
import {useRouter} from "vue-router"
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter()


const open = () => {
  ElMessageBox.alert('要跳转到首页吗', '用户提示', {
    confirmButtonText: '是的',
    callback: (action) => {
      if(action==="confirm") router.push("/")
      return
    },
  })
}
</script>
<style scoped lang='scss'>
  .page404{
    width: 100%;
    height: 100%;
    background: url("../../assets/404/404.jpg") 100% 100%;
  }
</style>