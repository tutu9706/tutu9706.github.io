// 渲染More 界面对应的数据
var hash = window.location.hash.split('=')[1];
var kind = hash.charAt(0)   //第0位数用来判断是哪个洲的视频
if(kind == '9'){
	show(hotData)
}else if(kind == '1'){
	show(AsianData);
}else if(kind == '2'){
	show(EuropeData);
}else if(kind == '3'){
	show(AmericaData);
}else if(kind == '4'){
	show(AfricaData);
}else if(kind == '5'){
	show(polesData);
}else if(kind == '6'){
	show(OceanData);
}


//console.log(kind,hash)
//根据数据渲染页面
function show (data){
	var movie = document.getElementById('movie');  //获取video标签
	var visitors = document.getElementById('visitors-text'); //留言板
	var p2 = document.getElementsByClassName('p2')[0]; //留言字数的布局
	var aI = p2.getElementsByTagName('i'); //留言字数显示
	var issue = document.getElementById('issue-sub'); //留言提交按钮
	//	console.log(visitors,aI)
	var showUl= document.getElementById('showUl'); // 留言部分
	var titleB = document.getElementById('main-1-title').getElementsByTagName('b')[0]//原创
	
	
	var str = ''; 
	data.forEach((e,i,all)=>{	
		//根据hash找到对应的数据id 进行渲染视频
		if(String(e.id) == hash){   //因为id是数字 所有需要变成string 去判断	
			titleB.innerText = e.title;//渲染【原创】后的文字
			movie.src = e.href;//对应视频
			if(e.uesrData.length!=0){//如果存在用户留言
//				console.log(e.uesrData)
				e.uesrData.forEach((ele,index)=>{   //渲染用户原有的留言
//					console.log(ele)
					str +=  `<li class="clear showLi">
								<div class="fl showPic">
									<a href="javascript:;">
										<img src=${ele.headpic} class="showImg"/>
									</a>
								</div>
								<div class="fr showT">
									<div class="showName">
										<a href="javascript:;">${ele.name}</a>
									</div>
									<div class="showContent">
										<p>${ele.content}</p>
									</div>
									<div class="showIcon clear">
										<div>
											<a href="javascript:;" class="like"></a>
											<span>${ele.like}</span>
										</div>
										<div>
											<a href="javascript:;" class="say"></a>
											<span>${ele.say}</span>
										</div>
										<div>
											<a href="javascript:;" class="collect"></a>
											<span></span>
										</div>
										
									</div>
								</div>
							</li>`
				})
			}
			showUl.innerHTML = str;
			str = ''
			
		}
	})
	
	
	//留言板字数限制
	visitors.oninput = function(){   //留言字数限制
		if(visitors.value.length <= 300){   //限制 300个字
			aI[0].innerText = visitors.value.length;
		}else{
			alert('请输入小于300字内容再发送')
			visitors.value = '';
		}
		
	}
	
	//在提交的时候还应该创建相应的{}数据   不过要根据登录信息来定   以后慢慢加
	issue.onclick = function(){ //提交留言
		showUl.innerHTML = `<li class="clear showLi">
							<div class="fl showPic">
								<a href="javascript:;">
									<img src="../images/headpic/1.jpg" class="showImg"/>
								</a>
							</div>
							<div class="fr showT">
								<div class="showName">
									<a href="javascript:;">新登录用户</a>
								</div>
								<div class="showContent">
									<p>${visitors.value}</p>
								</div>
								<div class="showIcon clear">
									<div>
										<a href="javascript:;" class="like"></a>
										<span>999</span>
									</div>
									<div>
										<a href="javascript:;" class="say"></a>
										<span>10</span>
									</div>
									<div>
										<a href="javascript:;" class="collect"></a>
										<span></span>
									</div>
									
								</div>
							</div>
						</li>`+showUl.innerHTML;
		visitors.value = '';
		aI[0].innerText=0;
	}
	
	//QQ  微信  新浪分享
	let qq = document.getElementsByClassName('s1')[0]
	let wx = document.getElementsByClassName('s2')[0]
	let xl = document.getElementsByClassName('s3')[0]
	qq.onclick = function(){
		open('http://w.qq.com/')
	}
	wx.onclick = function(){
		open('https://wx.qq.com/')
	}
//	xl.onclick = function(){
////		open('')
//	}
	
	
	
}

//渲染最右边的列表视频

//1.找到每个数据中播放次数的前两名  渲染  

var lisArrData = []; //存各种热门视频
findA(AsianData);
findA(EuropeData);
findA(AmericaData);
findA(AfricaData);
findA(polesData);
findA(OceanData);

function findA(data){
	var arr=[];
	data.sort(function(a,b){
		return b.playTime - a.playTime ; 
	})
	arr = data.slice(0,2) 
	arr.forEach((e,i,all)=>{
		lisArrData.push(e)
	})
}
//console.log(lisArrData);


//2.创建结构渲染数据


lisA(lisArrData);
function lisA(data){
	let recommendLis = document.getElementsByClassName('recommendLis')[0];
	var str = '';
//	console.log(recommendLis)
	data.forEach((e,i,all)=>{
		str += `<li>
					<a href=show.html?#id=${e.id}>${e.title}</a>
					<span>${e.playTime}</span><span>次播放</span>
				</li>` 
	})
	recommendLis.innerHTML = str; 
	str='';
}


//刷新页面   解决改变hash不刷新问题
window.onhashchange = function(){
	location.reload();
}

//设置注册登录
var add_login = document.getElementsByClassName('p1')[0].getElementsByTagName('a');
var opener = null;//存open的新窗口login.html
//登录
add_login[0].onclick=function(){
	opener = open('../html/login.html','_blank')
}
//注册
add_login[1].onclick=function(){
	opener = open('../html/login.html','_blank')
}


window.addEventListener('storage',function(){
//	console.log('变化了')
	//5秒后关闭另一边的登录页面
	setTimeout(function(){
		opener.close();
	},3000)	;
	document.getElementsByClassName('p1')[0].innerHTML = '';
	document.getElementsByClassName('p1')[0].innerHTML = `<div class="fl userId">
								<a href="javascript:;">
									<img src="../images/headpic/1.jpg" class="userImg"/> 新登录用户
								</a>
							</div>`
	
	
})


