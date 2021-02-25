//获取localStorage中的cartList1
var cartList=localStorage.getItem("cartList1")
//获取账号cookie
var name2=getCookie("user")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
var boxm=document.querySelector(".header-top-right")
var boxm2=document.querySelector(".car")
var inp=document.querySelector('[name="text"]')
var btn=document.querySelector(".sou")
var url2=location.href

//判断当前cookie是否存在
if(name2){
    show2()
	var userName=document.getElementById("login1").parentNode
	var strUser=`
		<span>您好,<span id="welcome">${name2}</span></span>
	`
	userName.innerHTML=strUser
}else{
    show2()
}

function show2(){
    //判断当前localStorage中是否有内容
    if(cartList){
        //获取当前被选中商品的种类
        var sum=total2()
		var str=`
		<ul class="clearfix">
			<!-- 登录 -->
			<li><a href="login.html" class="hover1" id="login1">[登录]</a></li>
			<!-- 注册 -->
			<li><a href="zhuce.html" class="hover1">[注册]</a></li>
			<li><i></i><a href="./shopping.html" class="hover1">购物车(<span>${sum}</span>)</a></li>
			<li class="mypet">
				<i></i><a href="#" class="a1 hover1">我的E宠<span class="jiantou1"></span></a>
				<div class="my">
					<a href="#">我的订单</a>
					<a href="#">退换货记录</a>
					<a href="#">我的优惠券</a>
					<a href="#">我的余额</a>
					<a href="#">VIP俱乐部</a>
				</div>
			</li>
			<li class="mypet">
				<i></i><a href="#"  class="a1">收藏<span class="jiantou1"></span></a>
				<div class="my">
				<a href="https://my.epet.com/favorites.html" rel="nofollow">我的收藏</a>
				</div>
			</li>
			<li class="phone"><i></i><a href="#" class="hover1">手机版</a><img src="imgs/code.png" class="show"></li>
			<li><a href="#" class="a2 hover1">问题反馈</a></li>
		</ul>
		`
		var str2=`
		<a href="./shopping.html">购物车(<span>${sum}</span>)</a>
		`
		
        //最后把拼接好的内容添加到box大盒子中
        boxm.innerHTML=str
		boxm2.innerHTML=str2
    }else{
        var str1=`
          <ul class="clearfix">
          	<!-- 登录 -->
          	<li><a href="login.html" class="hover1" id="login1">[登录]</a></li>
          	<!-- 注册 -->
          	<li><a href="zhuce.html" class="hover1">[注册]</a></li>
          	<li><i></i><a href="./shopping.html" class="hover1">购物车(<span>0</span>)</a></li>
          	<li class="mypet">
          		<i></i><a href="#" class="a1 hover1">我的E宠<span class="jiantou1"></span></a>
          		<div class="my">
          			<a href="#">我的订单</a>
          			<a href="#">退换货记录</a>
          			<a href="#">我的优惠券</a>
          			<a href="#">我的余额</a>
          			<a href="#">VIP俱乐部</a>
          		</div>
          	</li>
          	<li class="mypet">
          		<i></i><a href="#"  class="a1">收藏<span class="jiantou1"></span></a>
          		<div class="my">
          		<a href="https://my.epet.com/favorites.html" rel="nofollow">我的收藏</a>
          		</div>
          	</li>
          	<li class="phone"><i></i><a href="#" class="hover1">手机版</a><img src="imgs/code.png" class="show"></li>
          	<li><a href="#" class="a2 hover1">问题反馈</a></li>
          </ul>
        ` 
		
		var str3=`
		<a href="./shopping.html">购物车(<span>0</span>)</a>
		`
		
        //把当前内容添加到box盒子中
        boxm.innerHTML=str1
		boxm2.innerHTML=str3
    }
}

//统计所选商品种类和价格
function total2(){
    var num=0 //所选商品种类
    //遍历cartList数组对象
    cartList.forEach(item=>{
		num++
    })
    return num
}

header()
async function header(){
	var dt=await promiseAjax({
		url:'./php/pdList.php',
		datatype:'json'
	})
	btn.onclick=function(){
		var val=inp.value
		var aa=0
		for(var x=0;x<dt.length;x++){
			if(dt[x].goods_title.indexOf(val)!=-1){
				aa=1
			}
		}
		if(aa==1){
			location.href="./pdList.html?key="+val
		}else{
			alert("请输入正确关键字！")
			location.href=url2
		}
	}
}