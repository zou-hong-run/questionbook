var start = document.querySelector('#start')
var img = document.querySelector('#start img')
var url = null
//得到上传图片的数据流
function getUrl(file) {
  var url = null;
  // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
  if (window.createObjectURL != undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
//上传图片
var file = document.querySelector('#start #pic').onchange = function () {
  var fileFiles = document.querySelector('#start #pic').files[0]
  url = getUrl(fileFiles)
  img.src = url
  //判断图片是否为空
  if (url !== null) {
    startBtn.disabled = false
  }
  var ctime = document.querySelector('.container #timer')//游戏界面显示游戏时间
  //创建游戏时间
  var timers = 0
  var timer = null
  function setime(value){
    if(value==1){
      clearInterval(timer)
      timer = setInterval(()=>{
        timers++
        ctime.innerHTML = formatSeconds(timers)
      },1000)
    }else{
      console.log("定时器清除");
      clearInterval(timer)
    }
  }
  setime(1)

  //游戏开始和暂定
  var stopBtn = document.querySelector('.btn.btn-pause')
  var stop = false
  stopBtn.onclick = function(){
    if(stop==false){
      setime(2)
      stop = true
    }else{
      setime(1)
    }
  }

  //转化秒为时分秒
  function formatSeconds(value) {
    var s = value//秒
    var m = 0;//分
    var h = 0;//小时
    var d = 0;//天
    if(s>60){
      m = parseInt(s/60)
      s = parseInt(s%60)
      if(m>60){
        h = parseInt(m/60)
        m = parseInt(m%60)
        if(h>24){
          d = parseInt(h/24)
          h = parseInt(h%24)
        }
      }
    }
    var result = ''
    if(s>0){
      if(s<10){
        result = "0"+s+"秒"
      }else{
        result = s+"秒"
      }
    }
    if(m>0){
      if(m<10){
        result = "0"+m+"分"+":"+result
      }else{
        result = m+"分"+":"+result
      }
    }
    if(h>0){
      if(h<10){
        result = "0"+h+"时"+":"+result
      }else{
        result = h+"时"+":"+result
      }
    }
    if(d>0){
      if(d<10){
        result = "0"+d+"天"+":"+result
      }else{
        result = d+"天"+":"+result
      }
    }
    return result
  }
  
  // console.log(formatSeconds(21055));
  //游戏逻辑
  //拼图块
  var puzzle = document.querySelector('#puzzle')
  puzzle.style.background = "url(" + url + ")"
  puzzle.style.backgroundSize = "100% 100%"
  //显示目标图片
  var pizzleM = document.querySelector('#pizzleM')
  pizzleM.style.background = "url(" + url + ")"
  pizzleM.style.backgroundSize = "100% 100%"
  //目标块
  var puzzleDestination = document.querySelector('#puzzleDestination')
  puzzleDestination.style.background = "url(" + url + ")"
  puzzleDestination.style.backgroundSize = "100% 100%"
  //得到用户选中难度
  var dif = document.querySelector('#start #difficult').value
  //得到用户姓名
  var nameValue = document.querySelector('#start #name').value
  //打乱图片函数
  function rM(value){
    var randonArr = []
    //保存有序数组
    for(let a=0;a<value;a++){
      randonArr.push(a)
    }
    //打乱有序数组
    randonArr.sort((a,b)=>Math.random() - 0.5)
    return randonArr
  }
  function createPic(parent, num1, num2) {
    var arr = []
    var num = 0
    var ppx = `${Math.floor(300/num1)}`
    var freeNumArr = rM(num1)
      for (var a = 0; a < num1; a++) {
        for (var b = 0; b < num2; b++) {
          var div = document.createElement('div')
              div.style.backgroundRepeat = "no-repeat"
              div.style.zIndex = '100'
          if(parent.id=="puzzle"){
              div.style.border = `${1}px solid yellow`
              //打乱图片顺序
              div.style.top = (freeNumArr[b] * ppx) + 'px'
              div.style.left = (freeNumArr[a] * ppx) + 'px'
              div.style.position = 'absolute'

              div.style.boxSizing = "border-box"
              div.style.background = "url(" + url + ")"
              div.style.backgroundSize = "300px 300px"
              div.style.width = ppx+'px'
              div.style.height = ppx+'px'
              div.draggable = true
              div.id = num
              //水平/垂直
              div.style.backgroundPosition = `-${(b*ppx)}px -${(a*ppx)}px`
              arr.push(div)
          }else{
            div.style.border = `${1}px solid pink`
            //不能打乱图片顺序
              div.style.top = (a * ppx) + 'px'
              div.style.left = (b * ppx) + 'px'
              div.style.position = 'absolute'
              div.style.width =  `${Math.ceil(300/num1)}px`
              div.style.height = `${Math.ceil(300/num1)}px`
              div.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
              div.className = num
              div.id = num + "1"
              arr.push(div)
          }
            num++
        }
      }
      if(parent.id=="puzzle"){
        for (let a = 0; a < arr.length; a++) {
          parent.appendChild(arr[a])
          arr[a].ondragstart = function (e) {
            e.dataTransfer.setData("Id", e.target.id);
          }
        }
      }else{
        //后面的块
        for (let a = 0; a < arr.length; a++) {
          parent.appendChild(arr[a])
          arr[a].ondragover = function (e) {
            e.preventDefault()
          }
          arr[a].ondrop = function (e) {
            var id1 = e.dataTransfer.getData('Id')
            var temp = document.getElementById(id1)
            temp.style.top = 0
            temp.style.left = 0
            this.appendChild(temp);

            //判断游戏是否胜利
            var G = this.parentNode.childNodes//获得所有，存放拖拽方块，的方块
            // console.log(G);
            var arrChild = []
            for(let i = 1;i<G.length;i++){
              var a = G[i].childNodes[0]
              if(a){
                arrChild.push(a.id)
              }
            }
            var index = 0
            for(let i = 1;i<arrChild.length;i++){
              if((arrChild[index+1]-arrChild[index])==1){
                index++
                if(index>=(G.length-2)){
                  alert("游戏胜利")
                  //存储游戏数据
                  var arrr = []
                  if(localStorage.getItem('paihang')){
                    var arrr = localStorage.getItem('paihang');
                    arrr = JSON.parse(arrr)
                  }
                  var datas = {}
                  datas.name = nameValue//玩家名字
                  datas.dif = dif//游戏难度
                  datas.time = formatSeconds(timers)//玩家游戏时长//格式化玩家时长
                  arrr.unshift(datas)//添加到前面
                  var arrr = JSON.stringify(arrr)
                  localStorage.setItem("paihang",arrr)
                  clearInterval(timer)
                }else{
                  console.log("差一点就胜利了");
                }
              }
            }

          }
        }
      }
  }
  createPic(puzzle,dif,dif)
  createPic(puzzleDestination,dif,dif)

}
//开始游戏按钮
var startBtn = document.querySelector('.group>button')
startBtn.disabled = true

//判断是否上传图片,如果没有上传图片,不能开始游戏
startBtn.onclick = function () {
  console.log("开始游戏");
  start.style.display = 'none'
}

//创建排行榜,读取缓存
var tbody = document.querySelector('#box>table>tbody')
var ps = localStorage.getItem("paihang")
var pss = JSON.parse(ps)
var nodes = []
nodes.push(`
<tr>
    <td>1</td>
    <td>不要尝试的难度</td>
    <td>邹红润</td>
    <td>4天:3时:5分:18秒</td>
  </tr>
`)

for (const key in pss) {
  let obj = pss[key]
  parseInt(obj.dif)
  if(obj.dif==3){
    obj.dif = "简单"
  }else if(obj.dif==5){
    obj.dif = "一般"
  }else if(obj.dif==7){
    obj.dif = "困难"
  }else if(obj.dif==9){
    obj.dif = "地狱"
  }else if(obj.dif==11){
    obj.dif = "天堂"
  }else if(obj.dif==15){
    obj.dif = "不要尝试的难度"
  }
  let node = `
  <tr>
    <td>${parseInt(key)+2}</td>
    <td>${obj.dif}</td>
    <td>${obj.name}</td>
    <td>${obj.time}</td>
  </tr>
  `
  nodes.push(node)
}
tbody.innerHTML = nodes

