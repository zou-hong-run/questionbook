<template>
  <div class="addEssay">
    <div class="addEssay-title">
      <el-divider content-position="center"><el-text type="info" size="large">发布文章</el-text></el-divider>
    </div>
    <div class="addEssay-content">
      <el-scrollbar style="height:calc(100%);z-index:100;" ref="scrollbarRef" always @scroll="scroll">
        <Toolbar
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
          style="border-bottom: 5px solid #F5F6F8;"
        />
        <Editor
          ref="innerRef"
          :defaultConfig="editorConfig"
          :mode="mode"
          v-model="valueHtml"
          @onCreated="handleCreated"
          @onChange="handleChange"
          @onDestroyed="handleDestroyed"
          @onFocus="handleFocus"
          @onBlur="handleBlur"
          @customAlert="customAlert"
          @customPaste="customPaste"
          @onMaxLength="handleMaxLength"
        />
      </el-scrollbar>
    </div>
    <div class="addEssay-bottom">
      <el-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
        size="large"
        style="width:30%;"
      />
      <el-button type="primary" @click="centerDialogVisible = true" size="large">点击发布新文章!</el-button>
    </div>
    <el-dialog
      v-model="centerDialogVisible"
        title="选择文章类别"
        width="50%"
        align-center
      >
        <div class="dialogbutton">
          <el-button v-model="buttonVal" @click="setButtonVal(item)" v-for="(item, index) in essayTypes" :key="index" size="small">{{item.type}}</el-button>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消发布</el-button>
            <el-button type="primary" @click="clickSumbitEssay">
              确定发布
            </el-button>
          </span>
        </template>
        
        <el-text>选中标签:{{buttonVal?buttonVal.type:"还没有选择标签呢!"}}</el-text>
    </el-dialog>

    
    
  </div>
</template>
<style scoped lang="scss">
  .addEssay{
    width: 100%;
    height: 100%;
    &-title{
      background: #fff;
      height: 40px;;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    &-content{
      width: 100%;
      height: calc(100% - 50px - 40px);
    }
    &-bottom{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 40px;
      margin:5px 0 5px;
      background-color: #fff;
      border-radius: 5px;;
    }
    .dialogbutton{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100px;
      width: 100%;
      justify-content: start;
      align-content: space-around;
      overflow: auto;
      .el-button {
        margin-left: 12px;
      }
    }
  }
</style>
<script setup>
import '@wangeditor/editor/dist/css/style.css'
import {onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'
import { ElScrollbar } from 'element-plus'
import {uploadImage} from "@/api/common"
import {addEssay} from "@/api/essay"
import useEssayStore from '../../../store/essay'
import {useRoute,useRouter} from 'vue-router'
import { ElNotification } from 'element-plus'
const route = useRoute()
const router = useRouter()

let essayStore = useEssayStore()
// 获取文章分类
let essayTypes = essayStore.category
if(essayTypes.length===0){
  essayStore.getEssayType().then(list=>{
    essayTypes = list
  })
}
// 图片路径
const images = ref("")


// 滚动条 =======================
  const max = ref(0)
  const value = ref(0)
  const innerRef = ref()
  const scrollbarRef = ref()

  const inputSlider = (value) => {
    scrollbarRef.value?.setScrollTop(value)
  }
  const scroll = ({ scrollTop }) => {
    value.value = scrollTop
  }
  const formatTooltip = (value) => {
    return `${value} px`
  }
// ========================================

// 添加markdown语法支持
Boot.registerModule(markdownModule)

const mode = ref("default")
// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    // 进度条
    max.value = innerRef.value?.box?.clientHeight;

    setTimeout(() => {
        // valueHtml.value = '<h1 style="text-align: center;">我是标题内容哦</h1><hr/><p>我是你要输入的问题哦!</p><p>同时我也支持markdown语法哦!</p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul><p style="text-align: left;">开始写作吧!!!!!!</p>'
      valueHtml.value = '<h1 style="text-align: center;">我是文章标题内容哦</h1><hr/><p>我是你要输入的文章哦!</p><p>同时我也支持markdown语法哦!<img src="https://askbook-1317227518.cos.ap-beijing.myqcloud.com/askbook/images/eda2fefe-0cde-4445-b03a-ef831763f241.png" alt="header.png" data-href="" style="width: 58.00px;height: 58.00px;"/></p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul><p style="text-align: left;">开始写作吧!!!!!!</p>'
    }, 1500)
})

const toolbarConfig = {
  // 将添加框移动到body内
  modalAppendToBody:false, 
}

const editorConfig = {
  maxLength:3333, 
  placeholder: '请输入内容...',

  // 图片上传功能 =========================================
  MENU_CONF:{
    
    insertImage:{
      onInsertedImage(imageNode) {                    // JS 语法
          if (imageNode == null) return
          const { src, alt, url, href } = imageNode
          console.log('inserted image', src, alt, url, href)
      },
      // 自定义校验图片
      // checkImage: customCheckImageFn, // 也支持 async 函数
      
      // 转换图片链接
      // parseImageSrc: customParseImageSrc, // 也支持 async 函数
    },
    editImage:{
      onUpdatedImage(imageNode) {                    // JS 语法
          if (imageNode == null) return

          const { src, alt, url } = imageNode
          console.log('updated image', src, alt, url)
      },
      // checkImage: customCheckImageFn, // 也支持 async 函数
      // parseImageSrc: customParseImageSrc, // 也支持 async 函数
    },
    uploadImage:{
      // 自定义上传
      async customUpload(file, insertFn) { 
        uploadImage(file).then(res=>{
          const {errno,data} = res
          if(errno!==0){
            alert("图片上传失败")
            return
          }
          const {alt,href,url} = data
          // file 即选中的文件
          // 自己实现上传，并得到图片 url alt href
          images.value = images.value + url +","
          // 最后插入图片
          insertFn(url, alt, href)
        }).catch(err=>{
          console.error(err);
        })
      },
      // 小于该值就插入 base64 格式（而不上传），默认为 0
      base64LimitSize: 5 * 1024, // 5kb
      server: 'images/uploadCos',// 上传服务器地址
        // form-data fieldName ，默认值 'wangeditor-uploaded-image'
      fieldName: 'image',

      // 单个文件的最大体积限制，默认为 2M
      maxFileSize: 1 * 1024 * 1024 * 10, // 1M 10M

      // 最多可上传几个文件，默认为 100
      maxNumberOfFiles: 10,

      // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
      allowedFileTypes: ['image/*'],

      // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
      meta: {
          token: 'xxx',
          otherKey: 'yyy'
      },

      // 将 meta 拼接到 url 参数中，默认 false
      metaWithUrl: false,

      // 自定义增加 http  header
      headers: {
          Accept: 'text/x-json',
          otherKey: 'xxx'
      },

      // 跨域是否传递 cookie ，默认为 false
      withCredentials: true,

      // 超时时间，默认为 10 秒
      timeout: 5 * 1000, // 5 秒
      // 上传回调函数====================================
      // 上传之前触发
      onBeforeUpload(file) {    // JS 语法
          // file 选中的文件，格式如 { key: file }
          return file

          // 可以 return
          // 1. return file 或者 new 一个 file ，接下来将上传
          // 2. return false ，不上传这个 file
      },

      // 上传进度的回调函数
      onProgress(progress) {       // JS 语法
          // progress 是 0-100 的数字
          console.log('progress', progress)
      },

      // 单个文件上传成功之后
      onSuccess(file, res) {          // JS 语法
          console.log(`${file.name} 上传成功`, res)
      },

      // 单个文件上传失败
      onFailed(file, res) {           // JS 语法
          console.log(`${file.name} 上传失败`, res)
      },

      // 上传错误，或者触发 timeout 超时
      onError(file, err, res) {               // JS 语法
          console.log(`${file.name} 上传出错`, err, res)
      },
    }
  }

}
  // 自定义校验图片
  function customCheckImageFn(src, alt, url) {                                                    // JS 语法
    if (!src) {
        return
    }
    if (src.indexOf('http') !== 0) {
        return '图片网址必须以 http/https 开头'
    }
    return true

    // 返回值有三种选择：
    // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
    // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
    // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
  }

  // 转换图片链接
  function customParseImageSrc(src) {               // JS 语法
    if (src.indexOf('http') !== 0) {
        return `http://${src}`
    }
    return src
  }

// ====================================================
// 编辑器相关===========================================

  // 组件销毁时，也及时销毁编辑器，重要！
  onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return

      editor.destroy()
  })

  // 编辑器回调函数
  const handleCreated = (editor) => {
    // console.log('created', editor);
    editorRef.value = editor // 记录 editor 实例，重要！
  }
  const handleChange = (editor) => {
    max.value = innerRef.value?.box?.clientHeight;
    // console.log('change:', editor.getHtml());
  }
  const handleDestroyed = (editor) => {
    console.log('destroyed', editor)
  }
  const handleFocus = (editor) => {
      // console.log('focus', editor)
  }
  const handleBlur = (editor) => {
      // console.log('blur', editor)
  }
  const customAlert = (info, type) => {
      alert(`【自定义提示】${type} - ${info}`)
  }
  const customPaste = (editor, event, callback) => {
      console.log('ClipboardEvent 粘贴事件对象', event)
      // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
      const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
      // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）
      // 自定义插入内容
      editor.insertText(text)

      // 返回值（注意，vue 事件的返回值，不能用 return）
      callback(false) // 返回 false ，阻止默认粘贴行为
      // callback(true) // 返回 true ，继续默认的粘贴行为
      
  }
  // 内容到达最大长度触发
  const handleMaxLength = (editor)=>{
    alert("内容过多了哦")
  }
  const insertText = () => {
      const editor = editorRef.value
      if (editor == null) return
      editor.insertText('hello world')
  }

  const printHtml = () => {
      const editor = editorRef.value
      if (editor == null) return
      console.log(editor.getHtml())
      console.log(editor.getText())
  }

  const disable = () => {
      const editor = editorRef.value
      if (editor == null) return
      editor.disable()
  }
// ====================================================

// 对话框
const centerDialogVisible = ref(false)
const buttonVal = ref(null)
// 提交文章
function clickSumbitEssay(){
  if(!buttonVal.value){
    alert("标签没选")
    return
  }
  centerDialogVisible.value = false;
  // 拿到标题
  let title = valueHtml.value.match(/<h1.*?>(.*?)<\/h1>/)[1]
  
  // 拿到文章内容
  let data = valueHtml.value
  // buttonVal.value
  // 拿到标签分类
  let types = []
  types.push({id:buttonVal.value.id})

  addEssay(title,data,images.value,types).then(res=>{
    ElNotification({
      title: '添加文章成功',
      position: 'bottom-right',
      message: 'ohohohohohohoh!!!!!!!!!',
      duration: 2000,
    })
    ElNotification({
      title: '添加文章成功',
      position: 'top-right',
      message: 'ohohohohohohoh!!!!!!!!!',
      duration: 2000,
    })
    ElNotification({
      title: '添加文章成功',
      position: 'bottom-right',
      message: 'ohohohohohohoh!!!!!!!!!',
      duration: 2000,
    })
    ElNotification({
      title: '添加文章成功',
      position: 'bottom-left',
      message: 'ohohohohohohoh!!!!!!!!!',
      duration: 2000,
    })
    ElNotification({
      title: '添加文章成功',
      position: 'top-left',
      message: 'ohohohohohohoh!!!!!!!!!',
      duration: 2000,
    })
    let data = res.data
    router.push(`/essay/essayItem/${data}`)
  })
}
// 设置文章类别
function setButtonVal(btnVal){
  // console.log(btnVal.id);
  buttonVal.value = btnVal;
}
</script>
