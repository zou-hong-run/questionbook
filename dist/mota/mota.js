// "auto";
// setScreenMetrics(1080, 1920);
// var a= true;
// var random = Math.round(Math.random()*10);
// setInterval(function(){
// 	if(a==true){
// 		click(600+random,1111);
// 		a=false;
// 	}else{
// 		click(590+random,1111);
// 		a=true;
// 	}
	
// },500)


function Game(){
	
	this.hero = {
		keynum:0,//钥匙数量
		hp:10000,//血量
		atk:100,//
		atkbg:100,
		floor:1,
		floorx : null,//记录玩家位置
		floory : null
	}
	this.maparray = [//地图数据
		[//第一层
			[0,0,0,0,0,0,0,0,0,7,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[0,2,0,0,0,3,4,0,0,2,3,],
		],
		[//第二层
			[7,0,0,0,0,0,0,15,0,0,0,],
			[2,2,2,2,2,2,2,2,2,2,0,],
			[4,0,0,6,11,9,0,2,3,0,0,],
			[0,5,0,2,3,0,5,6,0,0,0,],
			[2,6,2,2,5,0,0,2,2,2,0,],
			[0,0,0,2,0,9,0,2,10,9,0,],
			[0,5,3,2,3,0,0,2,4,2,0,],
			[2,6,2,2,0,0,0,2,11,2,0,],
			[0,3,0,2,2,6,2,2,2,2,6,],
			[0,9,0,2,0,0,0,2,11,9,0,],
			[0,11,13,2,8,1,3,2,10,0,0,],
		],
		[//第三层
			[0,0,7,0,0,0,0,0,0,9,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[8,2,0,0,0,3,4,0,0,2,3,],
			],
		[//第四层
			[0,0,0,0,0,0,0,0,0,7,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[8,2,0,0,0,3,4,0,0,2,3,],
			],
		[//第五层
			[0,0,0,0,0,0,0,0,0,7,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[8,2,0,0,0,3,4,0,0,2,3,],
		],
		[//第六层
			[0,0,0,0,0,0,0,0,0,7,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[8,2,0,0,0,3,4,0,0,2,3,],
		],
		[//第七层
			[0,0,0,0,0,0,0,0,0,7,0,],
			[2,2,2,2,0,0,0,2,2,2,2,],
			[3,11,3,2,2,6,2,2,3,10,11,],
			[10,11,0,6,0,5,0,6,0,4,0,],
			[2,2,2,2,5,5,5,2,2,2,2,],
			[4,0,0,2,0,9,0,2,0,0,0,],
			[3,5,3,2,2,0,2,2,0,0,0,],
			[9,0,0,2,2,0,2,2,0,0,0,],
			[0,2,0,2,2,6,2,2,0,2,6,],
			[1,2,0,2,0,5,0,2,0,2,12,],
			[8,2,0,0,0,3,4,0,0,2,3,],
		],
		[//第八层
			[0,0,0,0,0,16,16,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,1,15,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
			[0,0,0,0,0,0,0,0,0,0,0,],
		],
		
	]
	//创建地图
	this.createMap = function(arrayTwo){
		document.getElementsByClassName('gamebox')[0].innerHTML = ''
		for(var i =0;i<arrayTwo.length;i++){
			for(var k = 0;k<arrayTwo[i].length;k++){
				//动态创建节点
				this.createdom(arrayTwo[i][k])
			}
		}
	}
	this.createdom = function(srcnum){
		var src = '';
		//创建节点
		if(srcnum==0){
			src='./imgs/背景.png'
		}
		else if(srcnum==1){
			src='./imgs/人物.png'
		}
		else if(srcnum==2){
			src='./imgs/障碍.png'
		}
		else if(srcnum=="3"){
			src='./imgs/钥匙.png'
		}
		else if(srcnum=="4"){
			src='./imgs/药水.png'
		}
		else if(srcnum=="5"){
			src='./imgs/骷髅队长.png'
		}
		else if(srcnum==6){
			src='./imgs/门.png'
		}else if(srcnum==7){
			src='./imgs/上楼.png'
		}
		else if(srcnum==8){
			src='./imgs/下楼.png'
		}
		else if(srcnum==9){
			src='./imgs/法师怪物.png'
		}
		else if(srcnum==10){
			src='./imgs/大药水.png'
		}
		else if(srcnum==11){
			src='./imgs/加攻击力.png'
		}
		else if(srcnum==12){
			src='./imgs/铁剑.png'
		}
		else if(srcnum==13){
			src='./imgs/盾牌.png'
		}
		else if(srcnum==15){
			src='./imgs/公主.jpg'
			
		}
		else if(srcnum==16){
			src='./imgs/大门.jpg'
			
		}
		
		var dom = document.createElement('img');
		dom.src = src;
		//给节点添加类名
		dom.classList.add('box');
		//给节点设置宽度
		dom.style.width = '50px'
		//给节点设置高度
		dom.style.height = '50px'
		//给节点设置背景颜se
		dom.style.backgroundColor = "green"
		//给节点添加浮动元素
		dom.style.float = 'left'
		//把创建的节点添加到body里面
		document.getElementsByClassName('gamebox')[0].appendChild(dom)
		
	}
	this.move = function(nowarray){
		var that = this;
		window.onkeydown = function(event){
			// console.log(nowarray[0].length);
			var x = that.getpersonposition(nowarray)[0];
			var y = that.getpersonposition(nowarray)[1]
			if(event.keyCode ==39){
				//向右移动
				that.moveP(x,y,x+1,y,nowarray)
			}else if(event.keyCode ==40){
				//向下移动
				that.moveP(x,y,x,y+1,nowarray)
			}else if(event.keyCode ==37){
				//向左移动
				that.moveP(x,y,x-1,y,nowarray)
			}
			else if(event.keyCode ==38){
				//向上移动
				that.moveP(x,y,x,y-1,nowarray)
			}
			else if(event.keyCode ==82){
				//重新开始游戏
				var game = new Game();
				game.gamestart()
			}
		}
	}
	this.gamestart = function(){//开始游戏
		
		this.createMap(this.maparray[this.hero.floor-1]);//创建地图传入参数，把第一个地图数组传入进去
		this.move(this.maparray[this.hero.floor-1])//把第一层数组传入进去
		this.hero.floorx = this.getpersonposition(this.maparray[this.hero.floor-1])[0]
		this.hero.floory = this.getpersonposition(this.maparray[this.hero.floor-1])[1]
	}
	this.getpersonposition = function(nowarray){//得到主角位置
		for(var i= 0;i<nowarray.length;i++){
			for(var k = 0;k<nowarray[i].length;k++){
				if(nowarray[i][k]==1){
					var position = [k,i];
					return position
				}
			}
		}
	}
	this.moveP = function(x,y,movetox,movetoy,nowarray){
		if(movetox>nowarray[0].length-1||movetoy>nowarray.length-1||movetox<0||movetoy<0){
			console.log("到达边界")
		}else {
			if(nowarray[movetoy][movetox]==2){
				console.log('这是墙')
			}else if(nowarray[movetoy][movetox]==3){
				//处理钥匙代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.keynumchange()
			}
			else if(nowarray[movetoy][movetox]==4){
				//处理药代码
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.dy()
			}
			else if(nowarray[movetoy][movetox]==5){
				//处理怪物
				this.moster1(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==6){
				//处理门的代码
				/* this.door(x,y,movetox,movetoy,nowarray) */
				this.door(x,y,movetox,movetoy,nowarray)
				
			}
			else if(nowarray[movetoy][movetox]==7){
				//上楼并更换地图的代码
			    this.upfloor()
			}
			else if(nowarray[movetoy][movetox]==8){
				//下楼并更换地图的代码
				this.downfloor()
			}
			else if(nowarray[movetoy][movetox]==9){
				//法师怪物
				this.moster1(x,y,movetox,movetoy,nowarray)
			}
			else if(nowarray[movetoy][movetox]==10){
				//打药水
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.dys()
			}
			else if(nowarray[movetoy][movetox]==11){
				//加攻击力
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.gongji()
			}
			else if(nowarray[movetoy][movetox]==12){
				//铁剑
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.sword()
			}
			else if(nowarray[movetoy][movetox]==13){
				//盾牌
				nowarray[movetoy][movetox] = 0;
				this.changepositon(x,y,movetox,movetoy,nowarray)
				this.sheld()
			}
			else if(nowarray[movetoy][movetox]==15){
				this.hero.floor=8;//绝了
				this.createMap(this.maparray[this.hero.floor-1])
				this.move(this.maparray[this.hero.floor-1])
					document.getElementsByClassName('gagade')[0].innerHTML ="恭喜你，拯救了公主"
			}
			else{
				this.changepositon(x,y,movetox,movetoy,nowarray)
			}
		}
		
	}
	this.changepositon = function(x,y,movetox,movetoy,nowarray){
		var a = nowarray[y][x];
		nowarray[y][x] = nowarray[movetoy][movetox];
		nowarray[movetoy][movetox] = a;
		this.createMap(nowarray)
	}
	this.keynumchange = function(){
		this.hero.keynum++;
		document.getElementsByClassName('keynum')[0].innerHTML = this.hero.keynum
	}
	this.kaimen=function(){
		this.hero.keynum--;
		document.getElementsByClassName('keynum')[0].innerHTML = this.hero.keynum
	}
	this.gongji=function(){
		this.hero.atk+=5
		document.getElementsByClassName('atk')[0].innerHTML = this.hero.atk
	}
	this.sword=function(){
		this.hero.atk+=50
		document.getElementsByClassName('atk')[0].innerHTML = this.hero.atk
	}
	this.sheld=function(){
		this.hero.atkbg+=50
		document.getElementsByClassName('aktbg')[0].innerHTML = this.hero.atkbg
	}
	this.dy = function(){
		this.hero.hp+=100;
		document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
	}

	this.dys = function(){
		this.hero.hp+=600;
		document.getElementsByClassName('hp')[0].innerHTML = this.hero.hp
	}
	this.moster1 = function(x,y,movetox,movetoy,nowarray){
		var moster1atk = 101;
		var moster1atkbg = 20;
		var moster1hp=200;
		var gongjicishu=moster1hp %(this.hero.atk-moster1atkbg)+1;
		var hpjian=(moster1atk-this.hero.atkbg)*gongjicishu
		if(this.hero.atk>moster1atkbg){
			nowarray[movetoy][movetox] = 0;
			this.hero.hp=this.hero.hp-hpjian
			document.getElementsByClassName('hp')[0].innerHTML=this.hero.hp
			this.changepositon(x,y,movetox,movetoy,nowarray)
		}else{
			alert("you dead")
			nowarray[y][x] = 0;
			nowarray[this.hero.floory][this.hero.floorx] = 1
			this.gamestart()
		}
	}
	this.door=function(x,y,movetox,movetoy,nowarray){
		if(this.hero.keynum>0){
			nowarray[movetoy][movetox] = 0;
			this.changepositon(x,y,movetox,movetoy,nowarray)
			this.kaimen()
		}else {}
	}
	this.upfloor=function(){
		this.hero.floor++;
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
	}
	this.downfloor=function(){
		this.hero.floor--;
		this.createMap(this.maparray[this.hero.floor-1])
		this.move(this.maparray[this.hero.floor-1])
		
	}

}

var game = new Game();
game.gamestart()
