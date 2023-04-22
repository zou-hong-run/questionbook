import useUserStore from "../store/user";

const userStore = useUserStore()
// const token = encodeURIComponent(userStore.token)
// const ws = new WebSocket("ws://10.10.62.63:6060/websocket",[token]);
let globalCallback = null
function initWebsocket(){
  this.url = "ws://10.10.62.63:6060/websocket"
  this.token = encodeURIComponent(userStore.token)
  this.websocket = new WebSocket(this.url,[token]);
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
    this.onerror(e)
  }
}
initWebsocket.prototype.onopen = function(e){
  console.log("open");
}
initWebsocket.prototype.onmessage = function(e){
  const data = JSON.parse(e.data)
  if(globalCallback){
    globalCallback(data);
  }
}
initWebsocket.prototype.send = function(data){
  this.websocket.send(JSON.stringify(data))
  if(globalCallback){
    globalCallback(data)
  }
}

initWebsocket.prototype.onclose = function(e){
  console.log("close");
}
initWebsocket.prototype.onerror = function(err){
  console.log("error",err)
}
function sendSocket(data,callback){
  globalCallback = callback
  initWebsocket.send(data)
}
let client = null
const connectSocket = ()=>{
  if(client){
    return client
  }else{
    client = new initWebsocket()
  }
}
export default{
  connectSocket,
  sendSocket
};