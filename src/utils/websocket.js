import useUserStore from "../store/user";

const userStore = useUserStore()
// const token = encodeURIComponent(userStore.token)
// const ws = new WebSocket("ws://10.10.62.63:6060/websocket",[token]);
let globalCallback = [];
function initWebsocket(){
  this.url = "ws://43.143.237.123:6060/websocket"
  // this.url = "ws://10.10.62.63:6060/websocket"
  this.token = encodeURIComponent(userStore.token)
  this.websocket = new WebSocket(this.url,[this.token]);
  this.websocket.onopen = (e)=>{
    this.onopen(e)
  }
  this.websocket.onmessage = (e)=>{
    this.onmessage(e)
  }
  this.websocket.onclose = (e)=>{
    this.onclose(e)
  }
  this.websocket.onerror = (err)=>{
    this.onerror(err)
  }
}
initWebsocket.prototype.onopen = function(e){
  console.log("open",e);
}
initWebsocket.prototype.onmessage = function(e){
  if(e.data.includes("server")){
    console.log("server",e.data,"不解析他");
    return
  }
  const data = JSON.parse(e.data)
  if(globalCallback.length!==0){
    globalCallback.forEach(func=>{
      func(data)
    })
  }
}
initWebsocket.prototype.onsend = function(data,func){
  // 开启状态直接发送
  if (this.websocket.readyState === this.websocket.OPEN) {
    this.websocket.send(JSON.stringify(data))
    // 正在开启状态，则等待1s后重新调用
  } else if (this.websocket.readyState === this.websocket.CONNECTING) {
    setTimeout(()=>{
      this.websocket.send(JSON.stringify(data))
    }, 1000)
  }
  if (func) {
    globalCallback.push(func)
  }
}

initWebsocket.prototype.onclose = function(e){
  console.log("close",e);
}
initWebsocket.prototype.onerror = function(err){
  console.log("error",err)
}

let client = null
const connectSocket = ()=>{
  if(client){
    return client
  }else{
    client = new initWebsocket()
  }
  // console.log(client);
  return client
}
export default connectSocket