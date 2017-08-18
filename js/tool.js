//背景滚动
	bgMove('Asian','bgAsian')
	bgMove('Europe','bgEurope')
	bgMove('America','bgAmerica')
	bgMove('Africa','bgAfrica')
	bgMove('poles','bgpoles')
	bgMove('Ocean','bgOcean')
	
	
	function bgMove(city,id){
		var city = document.getElementById(city)
		var bg = document.getElementById(id);
//		console.log(city,bg)
		//初始位置
		var a = 0;
		var b = 0;
		bg.style.backgroundPositionX = a+'px';  
		bg.style.backgroundPositionY = b+'px';
		var X = 0;
		var Y = 0;
		city.onmousemove = function(ev){
			var x = ev.clientX;
			var y = ev.clientY;
//			console.log(X,Y,x,y)
			if(x<X){a+=0.5;}
			if(x>X){a-=0.5;}
			if(y<Y){b+=0.5;}
			if(y>Y){b-=0.5;}
			bg.style.backgroundPositionX = a+'px';
			bg.style.backgroundPositionY = b+'px';
			X = ev.clientX;
			Y = ev.clientY;
		}
		city.onmouseenter = function(ev){   //当鼠标移入时 先还原成初始位置
			a=0;
			b=0;
			bg.style.backgroundPositionX = a+'px';
			bg.style.backgroundPositionY = b+'px';
		}
	}





