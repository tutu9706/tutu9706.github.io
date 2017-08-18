/********************************head****************************************************/

head();
function head(){
	var headImg = document.getElementsByClassName('headR')[0].getElementsByTagName('img');
	var subnav = document.getElementsByClassName('subnav')[0];
	var english = document.getElementsByClassName('english')[0];
	var book = document.getElementsByClassName('book')[0];
	var subnavList = document.getElementById('subnavList');
	let lis = subnavList.getElementsByTagName('li');
	let href = subnavList.getElementsByTagName('a')
	let a = document.getElementsByClassName('headR')[0].getElementsByTagName('a'); 
	let head = document.getElementById('head');
	let logo = document.getElementById('logo');
	let nav = document.getElementsByClassName('nav')[0]
//	let logoImage = logo.getElementsByTagName('img')[0];
	subnav.onmouseenter = function(){
		headImg[0].src="../images/icon/nav2.png"
	}
	english.onmouseenter = function(){
		headImg[1].src="../images/icon/en2.png"
	}
	book.onmouseenter = function(){
		headImg[2].src="../images/icon/weixin2.png"
	}
	subnav.onmouseleave = function(){
		headImg[0].src="../images/icon/nav1.png"
	}
	english.onmouseleave = function(){
		headImg[1].src="../images/icon/en1.png"
	}
	book.onmouseleave = function(){
		headImg[2].src="../images/icon/weixin1.png"
	}
	a[0].onclick=function(){
		subnavList.style.display='block';
		subnavList.style.right='207px';
		subnavList.style.top='0px';
		subnavList.style.zIndex='0.9';
	}
	for(var i=0;i<href.length;i++){
		href[i].onclick=function(){
//			open('http://baidu.com')
		}
	}
	document.onmousedown=function(ev){
		if(ev.target.id!=='subnavList'&&ev.target.tagName!=='LI'&&ev.target.tagName!=='A'){
			subnavList.style.display='none';
		}
	}
	document.onscroll=function(ev){
		var h=document.body.scrollTop;  //谷歌专用
		var h2=document.documentElement.scrollTop; //其它浏览器用
		if(h>='150'||h2>'150'){
			head.style.height='60px'
			logo.style.transform='scale(0.8)';
			book.style.top='0px';
			logo.style.top='5px';
			book.style.right='208px';
			nav.style.top= '25px'
		}else{
			head.style.height='120px'
			book.style.top='60px';
			book.style.right='0px';
			logo.style.transform='scale(1)';
			logo.style.top='25px';
			nav.style.top= '50px'
		}
	}
}


/********************************banner************************************************/
banner(bannerData);
function banner(data){
	var banner=document.getElementById('banner');
	var bannerImg = document.getElementById('bannerImg');
	var a=banner.getElementsByTagName('a');
	var lis=banner.getElementsByTagName('li');
	var num = 0;
	var n=0;
	bannerImg.src= data[num];
	banner.timer=setInterval(function(){
		num++;
		bannerImg.style.opacity=0.2;
		setTimeout(function(){
			bannerImg.src= data[num%data.length];
			bannerImg.style.opacity=1;
			a[n].classList.remove('active');
			a[num%data.length].classList.add('active');
			n=num%data.length;
		},400)	
	},3000)
	for(var i=0;i<a.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			a[n].classList.remove('active');
			bannerImg.src= data[this.index];
			a[this.index].classList.add('active');
			n=this.index;
		}
	}
	banner.onmouseenter=function(){
		//整点配合banner的效果	
	}	
}
/********************************hot************************************************/
hot(hotData);
function hot(data){
	var hotImg = document.getElementById('hot').getElementsByTagName('img');
	var hotP = document.getElementById('hot').getElementsByTagName('p');
	var hotA = document.getElementById('hot').getElementsByTagName('a');
	var hotLis = document.getElementById('hot').getElementsByTagName('li');
	data.forEach((e,i,all)=>{
//		console.log(e)
		hotImg[i].src=e.src;
		hotP[i].innerText = e.content;
//		console.log(e.id)
		hotA[i].href=`show.html?#id=${e.id}`;
		hotA[i].target = "_blank";
	})		
}

/*****************************Asian********************************************/
show(AsianData,'Asian');
show(EuropeData,'Europe');
show(AmericaData,'America');
show(AfricaData,'Africa');
show(polesData,'poles');
show(OceanData,'Ocean');
function show(data,id){
	var country = document.getElementById(id);
	var countryA = country.getElementsByTagName('ul')[0].getElementsByTagName('a')
//	console.log(countryA)  //获取countryA时要去掉h5中的那个a标签
	var itemI = country.getElementsByClassName('itemI');
	var lis = country.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		var itemTxtAP = lis[i].getElementsByClassName('itemTxt1');
		var itemTxtBP = lis[i].getElementsByClassName('itemTxt2');	
		itemI[i].src=data[i].src;
		itemTxtAP[0].innerHTML=data[i].title;
		itemTxtAP[1].innerHTML=data[i].content;
		itemTxtBP[0].innerHTML = data[i].t;
		itemTxtBP[1].innerHTML = data[i].by;
		itemTxtBP[2].innerHTML = data[i].c;	
		countryA[i].href = `show.html?#id=${data[i].id}`;
		countryA[i].target = '_blank';
	}
}
/*******************************bg**************************************************/
bgA(bgData1,'Asian');
bgA(bgData2,'Europe');
bgA(bgData1,'America');
bgA(bgData2,'Africa');
bgA(bgData1,'poles');
bgA(bgData2,'Ocean');
function bgA(data,country){
	var city = document.getElementById(country);
	
	data.sort((a,b)=>{
		return Math.random()-0.5;
	});
	data.forEach(function(e,i,all){
		var img = document.createElement('img');
		img.style.position='absolute';
		img.src = e.src;
		img.style.left = Math.random()*1000+'px';
		img.style.top = Math.random()*600+'px';
		city.appendChild(img);	    //向city块儿中直接插入创建的img
	})
	var arrImg = [];
//	console.log(city.children)
	for(var i=3;i<data.length+3;i++){  
		//向city下第三个子元素  也就是所有创建的Img  +3是因为前两个元素不是img  为了选中和数据对应上的img，所以+3.
		
		arrImg.push(city.children[i])
	}
	arrImg.forEach(function(e,i,all){
//		console.log(e)
		e.className = 'imgBg';

	})	
}

/************************************************************************************/



