<template>
  <div>
      <div>
          <button @click="insertText">insert text</button>
          <button @click="printHtml">print html</button>
          <button @click="disable">disable</button>
      </div>
      <div style="border: 1px solid #ccc; margin-top: 10px;">
          <Toolbar
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              :mode="mode"
              style="border-bottom: 1px solid #ccc"
          />
          <Editor
              :defaultConfig="editorConfig"
              :mode="mode"
              v-model="valueHtml"
              style="height: 400px; overflow-y: hidden;"
              @onCreated="handleCreated"
              @onChange="handleChange"
              @onDestroyed="handleDestroyed"
              @onFocus="handleFocus"
              @onBlur="handleBlur"
              @customAlert="customAlert"
              @customPaste="customPaste"
          />
      </div>
      <div style="margin-top: 10px;">
          <textarea v-model="valueHtml" readonly style="width: 100%; height: 200px; outline: none;"></textarea>
      </div>
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'

Boot.registerModule(markdownModule)

const mode = ref("default")
// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<h1 style="text-align: center;">我是标题内容哦</h1><hr/><p>我是你要输入的问题哦!</p><p>同时我也支持markdown语法哦!</p><ul><li style="text-align: left;">标题</li><li style="text-align: left;">列表 - + *</li><li style="text-align: left;">引用 &gt;</li><li style="text-align: left;">分割线 ---</li><li style="text-align: left;">代码块 ```js</li></ul>'
    }, 1500)
})

const toolbarConfig = {
  modalAppendToBody:true, 
}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return

    editor.destroy()
})

// 编辑器回调函数
const handleCreated = (editor) => {
  console.log('created', editor);
  editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor) => {
  console.log('change:', editor.getHtml());
}
const handleDestroyed = (editor) => {
  console.log('destroyed', editor)
}
const handleFocus = (editor) => {
    console.log('focus', editor)
}
const handleBlur = (editor) => {
    console.log('blur', editor)
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
</script>
