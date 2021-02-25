import {move} from './move.js'

var imgBox=document.querySelector(".imgs")
var imgs=document.querySelectorAll(".imgs>a>img")
var nums=document.querySelectorAll('.num>span')
var bgColor=document.querySelector('.banner')
var titleBox=document.querySelector('.nav-left-title')
var menuBox=document.querySelector('.nav-left-menu')
var pets=document.querySelector('.pets')
var fenlei=document.querySelector('.fenlei')
var petsM=document.querySelector('.pets-menu')
var fenleiM=document.querySelector('.fenlei-menu')
var catels=document.querySelector('.catels')
var mincates=document.querySelectorAll('.mincate')
var lists=fenleiM.firstElementChild.children
var arr1=['D5463E','96CEEF','13255C','5EC1D0','C5C5C5','E96D65']
var navs=document.getElementsByName("n0")
var g1=document.getElementById("goods-show1")
var g2=document.getElementById("goods-show2")
var g3=document.getElementById("goods-show3")

var index=0 //当前图片下标
var timer //定时器1
var timer2 //定时器2

move(imgs[index],{"opacity":100})
// 当前背景颜色
bgColor.style.backgroundColor='#'+arr1[index]
move(bgColor,{"opacity":100})
autoMove()

function fn1(){
    imgs[index].style.zIndex=1
    imgs[index].style.opacity=0.3
	bgColor.style.opacity=0.3
    nums[index].className=''
}

function fn2(){
    nums[index].className='show2'
    imgs[index].style.zIndex=2
	bgColor.style.backgroundColor='#'+arr1[index]
}

//自动播放
function autoMove(){
    timer2=setInterval(function () {
        fn1()
        index++
        if(index>5){
            index=0
        }
        fn2()
        move(imgs[index],{"opacity":100})
		move(bgColor,{"opacity":100})
    },4000)
}

//点击数字切换图片
for(let i=0;i<nums.length;i++){
    nums[i].onclick= function () {
        clearInterval(timer2)
        fn1()
		index=i
        fn2()
        move(imgs[index],{"opacity":100})
		move(bgColor,{"opacity":100})
        autoMove()
    }
}

//滑动到数字切换图片
for(let i=0;i<nums.length;i++){
    nums[i].onmouseover= function () {
        clearInterval(timer2)
        fn1()
		index=i
        fn2()
        move(imgs[index],{"opacity":100})
		move(bgColor,{"opacity":100})
        autoMove()
    }
}

//鼠标移到图片上
imgBox.onmouseover= function () {
	clearInterval(timer2)
}

//鼠标移出图片
imgBox.onmouseout= function () {
	autoMove()
}

//鼠标移入切换效果
titleBox.onmouseover=function(e){
	e = e || window.event
	var target = e.target || e.srcElement
	if(target.className=='s1'){
		target.style.backgroundColor='rgb(70, 171, 80)'
		target.firstElementChild.style.color='#fff'
		pets.style.backgroundPosition='0 -1257px'
		target.nextElementSibling.style.backgroundColor='#fff'
		target.nextElementSibling.firstElementChild.style.color='#666'
		fenlei.style.backgroundPosition='-17px -1276px'
		fenleiM.className='fenlei-menu disn'
		petsM.className='pets-menu'
	}
	if(target.className=='s2'){
		target.style.backgroundColor='rgb(70, 171, 80)'
		target.firstElementChild.style.color='#fff'
		fenlei.style.backgroundPosition='0 -1276px'
		target.previousElementSibling.style.backgroundColor='#fff'
		target.previousElementSibling.firstElementChild.style.color='#666'
		pets.style.backgroundPosition='-17px -1257px'
		petsM.className='pets-menu disn'
		fenleiM.className='fenlei-menu'
	}
}

function showHide(){
	for(let i=0;i<lists.length;i++){
		lists[i].firstElementChild.className=''
	}
}
function showHide2(){
	for(let j=0;j<mincates.length;j++){
		mincates[j].style.display='none'
	}
}
//鼠标滑入菜单显示
for(let i=0;i<lists.length;i++){
	lists[i].onmouseover=function(){
		showHide()
		this.firstElementChild.className='showp'
		catels.style.display='block'
		showHide2()
		catels.firstElementChild.children[i*2].style.display='block'
		catels.firstElementChild.children[i*2+1].style.display='block'
	}
}

//鼠标滑出菜单隐藏
menuBox.onmouseleave=function(){
	showHide()
	catels.style.display='none'
}

for(var n=0;n<navs.length;n++){
	navs[n].onmouseover=function(){
		for(var m=0;m<navs.length;m++){
			navs[m].className=''
		}
		this.className='show3'
		var val=this.firstElementChild.firstElementChild.firstElementChild.innerHTML
		if(val=='热门'){
			g1.style.display="block"
			g2.style.display="none"
		}
		if(val=='进口狗粮'){
			g1.style.display="none"
			g2.style.display="block"
			indexShow()
			async function indexShow(){
				var dt=await promiseAjax({
				    url:'./php/EpetsIndex.php',
					data:`cate=${val}`,
				    datatype:'json'
				})
				var str0=`
				<ul class="clearfix">
				`
				dt.forEach(item=>{
					str0+=`
					<li>
						<a href="./pdDetails.html?id=${item.goods_id}">
							<div class="eight-proimg"><img src="${item.img2}" alt=""></div>
							<h1 class="ft">${item.goods_title}</h1>
							<div class="dprice">￥${item.Eprice}</div>
						</a>
					</li>
					`
				})
				str0+=`
				</ul>
				`
				g2.innerHTML=str0
			}
		}
		if(val=='国产狗粮'){
			g1.style.display="none"
			g2.style.display="block"
			indexShow()
			async function indexShow(){
				var dt=await promiseAjax({
				    url:'./php/EpetsIndex.php',
					data:`cate=${val}`,
				    datatype:'json'
				})
				var str0=`
				<ul class="clearfix">
				`
				dt.forEach(item=>{
					str0+=`
					<li>
						<a href="./pdDetails.html?id=${item.goods_id}">
							<div class="eight-proimg"><img src="${item.img2}" alt=""></div>
							<h1 class="ft">${item.goods_title}</h1>
							<div class="dprice">￥${item.Eprice}</div>
						</a>
					</li>
					`
				})
				str0+=`
				</ul>
				`
				g2.innerHTML=str0
			}
		}
	}
}