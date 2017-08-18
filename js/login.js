var user_name = document.getElementById('username');
	var pass_word = document.getElementById('password');
	var add = document.getElementById('add')
	var login = document.getElementById('login');
	//['key=value']
	
	
	
	
	
	
	add.onclick = function(){
		var key = localStorage.getItem(user_name.value);
		if(key){
			alert('该用户名已经注册，请使用新用户名')
			user_name.value='';
			pass_word.value='';
		}else{
			localStorage.setItem(user_name.value,pass_word.value);
			alert('恭喜你注册成功，确认后自动登录，本页面3秒后将自动关闭')
			user_name.value='';
			pass_word.value='';
		}	
	}
	
	
	login.onclick = function(){
		var value = localStorage.getItem(user_name.value)
		if(value == null){ //用户名不存在
			alert('该用户名不存在，请先注册');
			user_name.value='';
			pass_word.value='';
		}else{
			//用户名存在,而且正确
			if(pass_word.value == value){//密码正确
				alert('登录成功，确认后自动登录，本页面3秒后将自动关闭');
				//触发另一个页面的stroage事件，但是一删一加触发了两次
				localStorage.removeItem(user_name.value);
				localStorage.setItem(user_name.value,pass_word.value);
				//清空输入框
				user_name.value='';
				pass_word.value='';
			}else{//密码不正确
				alert('密码错误，请重新输入');
				user_name.value='';
				pass_word.value='';
			}	
		}
	}