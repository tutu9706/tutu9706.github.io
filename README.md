# tutu9706.github.io
---
## 你们好，我叫李涂。欢迎来到我的github.    

>  这是我的第一个功能作品，一路走来，在经历过6个月的前端学习后，我开始脱离框架用原声编写自己喜欢的东西。欢迎你们为我提建议，可以给我留言。非常喜欢交朋友，也喜欢旅游。
>  我也自学了React，小项目已经快完成了，马上可以给大家看看。

### 就请先通过我的github开始访问吧！！！

### 请点击下面的 fresh
![fresh](tutu9706.github.io)

### 项目名称：视频网站
- 项目描述：
	1.  整个网站通过原生JS编写.
	2.  具有视频版块按分类快速跳转，单页视频播放，热门视频推荐，更多视频列表展示，播放页面按点击量推荐，用户留言板块，登录验证版块等功能。
	3.  欢迎页面使用了HTML5新标签 video audio做了全屏展示；首页中采用大量CSS3效果配合JS.合理使用了transition延迟参数，避免了手动封装运动函数.使用animation配合随机数做出花瓣随机出现的旋转效果；使用2d变换封装成函数复用了每个版块的文字运动效果；使用滚轮事件配合transform做出导航滚动伸缩效果,并做了少量兼容。

- 项目问题及处理方法总结：
			
1. 同一页面通过a标签改变hash时，页面视频不跳转问题.
处理方法：将onhashchange配合location.reload()一起使用，可以将页面刷新后跳转指定播放视频.
			
2. 模拟登录注册数据储存问题.
处理方法：使用localStorage存储用户名及密码，并作出验证。
			
3. 数据类型处理.使用地址栏字段或将数据放入地址栏中时会报错,提示无法计算未定义或NaN.
处理方法：从数据中获取到的数据类型和URL中截取到的数据类型有时候是不同的，必须要明确知道获取到的数据类型才能够做相应的处理。

4. 使用localStorage模拟登录后无法模拟其它页面同步登录状态问题。
处理方法：单独写登录页面并使用open()，其它页面通过storage事件	配合close()关闭登录页面。

5. 重复设置localStorage无法触发兄弟storage事件问题。
处理方法：在当前页面同一判断中“删除、设置”同一key值和value值，达到数据不变，触发storage效果。

6. 文字延时运动问题.
处理方案：此项目中文字运动没有自设定时器运动函数，巧妙的使用了transition延迟参数计算了运动延迟时间.

7. 数据编写.数据随意编写会增加大量代码，可操作性不强.
   处理方法：数据的编写跟页面的渲染息息相关，这里将城市代码植入到ID当中，能通过URL获取到对应城市，也能进行热播排序、用户留言对应等功能。

8. 如何找到对应数据的视频并跳转至单页播放界面.
处理方法：使用ES6模板字符串加a标签的方式将数据中设置的备案号ID拼接入每个对应视频中.

9. 欢迎页面Video全屏问题。直接使用宽高100%会出滚动条；使用相对定位配合(top,right,bottom,left)定位值零，会出现滚动条。
解决方法：只设宽100% +绝对定位(right,bottom,left)定位值为零。若要加top值，只能为auto。

