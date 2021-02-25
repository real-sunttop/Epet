var reTop=document.querySelector(".b4")
var top1
//获取localStorage中的cartList1
var cartList=localStorage.getItem("cartList1")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
var sideBox1=document.querySelector(".img2")
var cricle=document.querySelector(".cricle")
const backShow=$(".u2").children().eq(3)
const backShow1=$(".back")

$(window).scroll(function(){
	top1=document.documentElement.scrollTop||document.body.scrollTop
})
//给p对象绑定点击事件
reTop.onclick=function(){
	var dsq=setInterval(function(){
    //每次移动当前滚动距离的10分之一
	var speed=Math.ceil(top1/10)
	//当滚动距离为0时，清除定时器
	if(top1<=0){
		clearInterval(dsq)
	}
	//重新设置滚动距离  
	document.documentElement.scrollTop=top1-speed
	},20)
}

backShow.mouseover(function(){
	backShow1.fadeToggle()
	backShow1.animate({right:'35px'})
})
backShow.mouseout(function(){
	backShow1.fadeToggle()
	backShow1.animate({right:'53px'})
})

show4()
function show4(){
    //判断当前localStorage中是否有内容
    if(cartList){
		if(cartList.length>0){
			cricle.style.display="block"
		}
        //获取当前被选中商品的种类
        var sum=total4()
		var str=`
		<i></i>
		<p>购物车<span>${sum}</span></p>
		`
        //最后把拼接好的内容添加到box大盒子中
        sideBox1.innerHTML=str
    }else{
        var str1=`
          <i></i>
          <p>购物车<span>0</span></p>
        ` 
		
        //把当前内容添加到box盒子中
        sideBox1.innerHTML=str1
		cricle.style.display="none"
    }
}

//统计所选商品种类和价格
function total4(){
    var num=0 //所选商品种类
    //遍历cartList数组对象
    cartList.forEach(item=>{
		num++
    })
    return num
}