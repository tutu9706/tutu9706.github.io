// more  页面的渲染
var hash = window.location.hash.split('=')[1];
//console.log(hash)
if(hash=='Asian'){
	more(AsianData);
}else if(hash=='Europe'){
	more(EuropeData);
}else if(hash=='America'){
	more(AmericaData);
}else if(hash=='Africa'){
	more(AfricaData);
}else if(hash=='poles'){
	more(polesData);
}else if(hash=='Ocean'){
	more(OceanData);
}

//渲染more的界面
function more(data){
	var moreUl = document.getElementById('moreUl')
	var str = '';
	data.forEach((e,i,all)=>{
//			console.log(e)
		str+=`
			<li class="moreLi fl">
				<a href=show.html?#id=${data[i].id} id="">
					<img src=${e.src} alt="" class="moreImg"/>
					<img src="../images/icon/player.png" alt=""  class="morePlay"/>
					<p class="moreText">
						<span>更多精彩内容...</span>
						<i><img src="../images/icon/icon2_03.png"><strong>${e.playTime}</strong></i>
						<b><img src="../images/icon/icon1_03.png"></b>
						<em><img src="../images/icon/icon3_03.png"></em>
					</p>
				</a>	
			</li>`	
	})
	moreUl.innerHTML = str;
}
