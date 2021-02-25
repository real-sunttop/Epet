//获取操作对象
var row=document.querySelector('.lis-box');
var pagination1=document.querySelector('.pagination');
var filterBox=document.querySelector(".filterBox");
var selectBox=document.querySelector(".selectBox");
var brands=document.getElementsByName("a0"); //品牌
var recipe=document.getElementsByName("a1"); //主要配方
var bodyType=document.getElementsByName("a2"); //适合体型
var age=document.getElementsByName("a3"); //适合体型
var goodsNum=document.querySelector(".filterMenu-right");
var arr1=[recipe,bodyType,age];
// var allSelect=document.getElementsByName("a1"); //主要配方
var flag=false;

(async function(){
    var dt=await promiseAjax({
        url:'./php/pdList.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:12,
            total:dt.length,
            totalpage:Math.ceil(dt.length/12)
        },
        textInfo:{
            first: '首页',
            prev: '上一页',
            list: '',
            next: '下一页',
            last: '尾页'
        },change(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*12,m*12)
			show1(ar1)
			/* //创建拼接所有数据的字符串
			var str2=''
			//遍历当前ar1数组中所有的数据
			    str2+=`
			    <div class="filterMenu clearfix">
			    	<div class="filterMenu-left clearfix">
			    		<a href="javascript:;" class="filterMenu-left-show">默认</a>
			    		<a href="javascript:;">销量</a>
			    		<a href="javascript:;">人气</a>
			    		<a href="javascript:;">新品</a>
			    		<a href="javascript:;">评论</a>
			    		<a href="javascript:;">价格</a>
			    	</div>
			    	<div class="filterMenu-right clearfix">
			    		<span class="pd-num">共找到<span>${dt.length}</span>件商品</span>
			    	</div>
			    </div>
			    <div class="sent clearfix">
			    	<div class="sent-left">
			    		<span>送货至：</span>
			    		<div class="det-sent">
			    			<div class="sent-title">重庆&nbsp;北碚区</div>
			    			<i></i>
			    			<!-- 隐藏 -->
			    			<div class="placeBox2">
			    				<ul class="place-header clearfix">
			    					<li class="color1"><a href="#">重庆</a></li>
			    					<li><a href="#">北碚区</a></li>
			    				</ul>
			    				<div class="place-content">
			    					<div class="north padd">
			    						<span>华北：</span>
			    						<a href="#">北京</a>
			    						<a href="#">天津</a>
			    						<a href="#">河北</a>
			    						<a href="#">山西</a>
			    						<a href="#">内蒙古</a>
			    					</div>
			    					<div class="east padd">
			    						<span>华东：</span>
			    						<a href="#">上海</a>
			    						<a href="#">江苏</a>
			    						<a href="#">浙江</a>
			    						<a href="#">安徽</a>
			    						<a href="#">福建</a>
			    						<a href="#">山东</a>
			    					</div>
			    					<div class="south padd">
			    						<span>华南：</span>
			    						<a href="#">广东</a>
			    						<a href="#">广西</a>
			    						<a href="#">海南</a>
			    					</div>
			    					<div class="cen padd">
			    						<span>华中：</span>
			    						<a href="#">江西</a>
			    						<a href="#">河南</a>
			    						<a href="#">湖南</a>
			    						<a href="#">湖北</a>
			    					</div>
			    					<div class="westSouth padd">
			    						<span>西南：</span>
			    						<a href="#" class="show4">重庆</a>
			    						<a href="#">四川</a>
			    						<a href="#">贵州</a>
			    						<a href="#">云南</a>
			    						<a href="#">西藏</a>
			    					</div>
			    					<div class="westNorth padd">
			    						<span>西北：</span>
			    						<a href="#">陕西</a>
			    						<a href="#">甘肃</a>
			    						<a href="#">青海</a>
			    						<a href="#">宁夏</a>
			    						<a href="#">新疆</a>
			    					</div>
			    					<div class="eastNorth padd">
			    						<span>东北：</span>
			    						<a href="#">辽宁</a>
			    						<a href="#">吉林</a>
			    						<a href="#">黑龙江</a>
			    					</div>
			    					<div class="other padd">
			    						<span>其他：</span>
			    						<a href="#">香港</a>
			    						<a href="#">澳门</a>
			    						<a href="#">台湾</a>
			    						<a href="#">钓鱼岛</a>
			    						<a href="#">南沙群岛</a>
			    					</div>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    	<div class="sent-right">
			    		<div class="price-select">
			    			<form action="">
			    				<span>价格：</span>
			    				<input type="text" name="qujian1"/>
			    				<span>-</span>
			    				<input type="text" name="qujian2"/>
			    				<button type="button">确定</button>
			    			</form>
			    		</div>
			    	</div>
			    </div>
				`
			//把当前拼接好的字符串，添加到row盒子中
			filterBox.innerHTML=str2 */
			
			//鼠标移入小图li
			function show_img(){
				var imgs=document.getElementsByClassName("good-imgs")
				for(let i=0;i<imgs.length;i++){
					let imgList=imgs[i].firstElementChild.children
					for(let j=0;j<imgList.length;j++){
						imgList[j].onmouseover=function(){
							for(let z=0;z<imgList.length;z++){
								imgList[z].className=""
							}
							this.className="show-border"
							var img1=this.firstElementChild.firstElementChild
							var src1=img1.getAttribute('src')
							var bigImg=this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild
							bigImg.setAttribute("src",src1)
						}
					}
				}
			}
			show_img()
			
			var filterMenu=$(".filterMenu")
			//nav固定
			$(window).scroll(function(){
			    //获取滚动距离
			    const top1=$(window).scrollTop()
			    //判断当滚动距离大于nav距页面顶部距离时，固定nav
			    if(top1>645){
			        filterMenu.css({
						position:"fixed",
						top:0,
						boxShadow: "0 1px 5px #CCC",
						zIndex: 1000
					})
			    }else{
					filterMenu.css({
						position:"relative",
						boxShadow: "none"
					})
			    }
			})
			
			// 品牌筛选
			for(var a=0;a<brands.length;a++){
				brands[a].onclick=function(){
					for(var b=0;b<brands.length;b++){
						brands[b].className=''
					}
					this.className='listShow'
				}
			}
			for(let n=0;n<arr1.length;n++){
				for(var c=0;c<arr1[n].length;c++){
					arr1[n][c].onclick=function(){
						for(var b=0;b<arr1[n].length;b++){
							arr1[n][b].className=''
						}
						this.className='listShow2'
					}
				}
			}
			
			//点击筛选商品
			selectBox.onclick=function(e){
				e = e || window.event
				var target = e.target || e.srcElement
				if(target.getAttribute('name')=='a0'){
					sx()
				}
				if(target.getAttribute('name')=='a1'){
					sx()
				}
				if(target.getAttribute('name')=='a2'){
					sx()
				}
				if(target.getAttribute('name')=='a3'){
					sx()
				}
			}
			
			// 筛选结果函数
			async function sx(){
				var brandName=document.getElementsByClassName("listShow")
				var s1=document.getElementsByClassName("listShow2")
				var s2=document.getElementsByName("aa")
				var as=[]
				for(var s=0;s<s1.length;s++){
					as.push(s1[s].innerHTML)
				}
				dt=await promiseAjax({
				    url:'./php/search.php',
					data:`brand=${brandName[0].innerHTML}&recipe=${as[0]}&bodyType=${as[1]}&age=${as[2]}`,
				    datatype:'json'
				})
				if(dt.length>0){
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt.length,
					        totalpage:Math.ceil(dt.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
					        //获取当前页需要显示的数据
					        var ars=dt.slice((m-1)*12,m*12)
							show1(ars)
							show_img()
							if(s2[0].innerHTML=="默认"){
								//dt数组默认排序
								var dt0=dt.sort(function(a,b){
									return a.goods_id-b.goods_id
								})
								//获取当前页需要显示的数据
								var ar0=dt0.slice((m-1)*12,m*12)
								show1(ar0)
								show_img()
								show2(s2[0])
								section(dt0,s2[0])
								if(flag){
									var dt_new=dt0.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt0,s2[0])
									}
								}
							}
							if(s2[0].innerHTML=="销量"){
								//dt数组销量排序
								var dt1=dt.sort(function(a,b){
									return b.sale-a.sale
								})
								//获取当前页需要显示的数据
								var ar2=dt1.slice((m-1)*12,m*12)
								show1(ar2)
								show_img()
								show2(s2[0])
								section(dt1,s2[0])
								if(flag){
									var dt_new=dt1.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt1,s2[0])
									}
								}
							}
							if(s2[0].innerHTML=="人气"){
								//dt数组人气排序
								var dt4=dt.sort(function(a,b){
									return b.consult.split('(')[1].split(')')[0]-a.consult.split('(')[1].split(')')[0]
								})
								//获取当前页需要显示的数据
								var ar5=dt4.slice((m-1)*12,m*12)
								show1(ar5)
								show_img()
								show2(s2[0])
								section(dt4,s2[0])
								if(flag){
									var dt_new=dt4.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt4,s2[0])
									}
								}
							}
							if(s2[0].innerHTML=="新品"){
								//dt数组新品排序
								var dt3=dt.concat().reverse()
								//获取当前页需要显示的数据
								var ar4=dt3.slice((m-1)*12,m*12)
								show1(ar4)
								show_img()
								show2(s2[0])
								section(dt3,s2[0])
								if(flag){
									var dt_new=dt3.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt3,s2[0])
									}
								}
							}
							if(s2[0].innerHTML=="评论"){
								//dt数组评论排序
								var dt2=dt.sort(function(a,b){
									return b.assess.split('(')[1].split(')')[0]-a.assess.split('(')[1].split(')')[0]
								})
								//获取当前页需要显示的数据
								var ar3=dt2.slice((m-1)*12,m*12)
								show1(ar3)
								show_img()
								show2(s2[0])
								section(dt2,s2[0])
								if(flag){
									var dt_new=dt2.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt2,s2[0])
									}
								}
							}
							if(s2[0].innerHTML=="价格"){
								//dt数组价格排序
								var dt5=dt.sort(function(a,b){
									return a.Eprice-b.Eprice
								})
								//获取当前页需要显示的数据
								var ar6=dt5.slice((m-1)*12,m*12)
								show1(ar6)
								show_img()
								show2(s2[0])
								section(dt5,s2[0])
								if(flag){
									var dt_new=dt5.concat().sort(function(a,b){
										return a.Eprice-b.Eprice
									})
									search.onclick=function(){
										flag=true
										section_show(qujian1,qujian2,dt_new,dt5,s2[0])
									}
								}
							}
						}
					})
				}else{
					// 找不到页面
					var str4=''
					str4+=`
					<div class="not-found"></div>
					`
					row.innerHTML=str4
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt.length,
					        totalpage:Math.ceil(dt.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    }
					})
				}
			}
			
			// 价格区间（flag=false的转换？）
			var filterMenuL=document.querySelector(".filterMenu-left")
			var navLis=filterMenuL.children
			var qujian1=document.querySelector("[name='qujian1']")
			var qujian2=document.querySelector("[name='qujian2']")
			var search=document.querySelector("[name='ok']")
			for(var j=0;j<navLis.length;j++){
				var style
				if(navLis[j].currentStyle){
					style=navLis[j].currentStyle["background-color"]
				}else{
					style=getComputedStyle(navLis[j],false)["background-color"]
				}
				if(style=="rgb(83, 170, 91)"){
					section(dt,navLis[j])
					show2(navLis[j])
				}
			}
			
			function section(dtt,tag){
				// console.log(tag)
				var dt_new=dtt.concat().sort(function(a,b){
					return a.Eprice-b.Eprice
				})
				if(!flag){
					search.onclick=function(){
						flag=true
						section_show(qujian1,qujian2,dt_new,dtt,tag)
					}
				}else{
					section_show(qujian1,qujian2,dt_new,dtt,tag)
				}
			}
			
			function section_show(qujian1,qujian2,dt_new,dtt,tag){
				// qujian1.value>=parseInt(dt_new[0].Eprice) && qujian1.value<=parseInt(dt_new[dt_new.length-1].Eprice)
				//  qujian2.value>=parseInt(dt_new[0].Eprice) && qujian2.value<=parseInt(dt_new[dt_new.length-1].Eprice
				if(Number(qujian1.value)!=NaN && Number(qujian2.value)!=NaN){
					if(parseInt(qujian1.value)<=parseInt(qujian2.value)){
						var dtf=dtt.filter(item=>{
							return parseInt(item.Eprice)>=parseInt(qujian1.value) && parseInt(item.Eprice)<=parseInt(qujian2.value)
						})
						console.log(dtf.length)
						if(dtf.length==0){
							// 找不到页面
							console.log(111)
							var str3=''
							str3+=`
							<div class="not-found"></div>
							`
							row.innerHTML=str3
							new Pagination(pagination1,{
							    pageInfo:{
							        pagenum:1,
							        pagesize:12,
							        total:dt.length,
							        totalpage:Math.ceil(dt.length/12)
							    },
							    textInfo:{
							        first: '首页',
							        prev: '上一页',
							        list: '',
							        next: '下一页',
							        last: '尾页'
							    }
							})
						}else{
							new Pagination(pagination1,{
							    pageInfo:{
							        pagenum:1,
							        pagesize:12,
							        total:dtf.length,
							        totalpage:Math.ceil(dtf.length/12)
							    },
							    textInfo:{
							        first: '首页',
							        prev: '上一页',
							        list: '',
							        next: '下一页',
							        last: '尾页'
							    },change(m){
									//获取当前页需要显示的数据
									var arr=dtf.slice((m-1)*12,m*12)
									show1(arr)
									show2(tag)
									show_img()
								}
							})
						}
						
					}else{
						var dtf=dtt.filter(item=>{
							return parseInt(item.Eprice)<=parseInt(qujian1.value) && parseInt(item.Eprice)>=parseInt(qujian2.value)
						})
						if(dtf.length==0){
							// 找不到页面
							var str3=''
							str3+=`
							<div class="not-found"></div>
							`
							row.innerHTML=str3
							new Pagination(pagination1,{
							    pageInfo:{
							        pagenum:1,
							        pagesize:12,
							        total:dt.length,
							        totalpage:Math.ceil(dt.length/12)
							    },
							    textInfo:{
							        first: '首页',
							        prev: '上一页',
							        list: '',
							        next: '下一页',
							        last: '尾页'
							    }
							})
						}else{
							
							//创建分页器对象
							new Pagination(pagination1,{
							    pageInfo:{
							        pagenum:1,
							        pagesize:12,
							        total:dtf.length,
							        totalpage:Math.ceil(dtf.length/12)
							    },
							    textInfo:{
							        first: '首页',
							        prev: '上一页',
							        list: '',
							        next: '下一页',
							        last: '尾页'
							    },change(m){
									//获取当前页需要显示的数据
									var arr=dtf.slice((m-1)*12,m*12)
									show1(arr)
									show2(tag)
									show_img()
								}
							})
						}
					}
				}else{
					// 找不到页面
					var str3=''
					str3+=`
					<div class="not-found"></div>
					`
					row.innerHTML=str3
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt.length,
					        totalpage:Math.ceil(dt.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    }
					})
				}
			}
			
			// 导航条点击
			filterMenuL.onclick=function(e){
				e = e || window.event
				var target = e.target || e.srcElement
				if(target.innerHTML=="默认"){
					//dt数组默认排序
					var dt0=dt.sort(function(a,b){
						return a.goods_id-b.goods_id
					})
					
					if(flag){
						var dt_new=dt0.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt0,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt0.length,
					        totalpage:Math.ceil(dt0.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							var ar0=dt0.slice((m-1)*12,m*12)
							show1(ar0)
							show_img()
							show2(target)
							section(dt0,target)
						}
					})
					
				}
				if(target.innerHTML=="销量"){
					//dt数组销量排序
					var dt1=dt.sort(function(a,b){
						return b.sale-a.sale
					})
					
					if(flag){
						var dt_new=dt1.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt1,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt1.length,
					        totalpage:Math.ceil(dt1.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							//获取当前页需要显示的数据
							var ar2=dt1.slice((m-1)*12,m*12)
							show1(ar2)
							show_img()
							show2(target)
							section(dt1,target)
						}
					})
					
				}
				if(target.innerHTML=="评论"){
					//dt数组评论排序
					var dt2=dt.sort(function(a,b){
						return b.assess.split('(')[1].split(')')[0]-a.assess.split('(')[1].split(')')[0]
					})
					
					if(flag){
						var dt_new=dt2.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt2,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt2.length,
					        totalpage:Math.ceil(dt2.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							//获取当前页需要显示的数据
							var ar3=dt2.slice((m-1)*12,m*12)
							show1(ar3)
							show_img()
							show2(target)
							section(dt2,target)
						}
					})
				}
				if(target.innerHTML=="新品"){
					//dt数组新品排序
					var dt3=dt.concat().reverse()
					
					if(flag){
						var dt_new=dt3.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt3,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt3.length,
					        totalpage:Math.ceil(dt3.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							//获取当前页需要显示的数据
							var ar4=dt3.slice((m-1)*12,m*12)
							show1(ar4)
							show_img()
							show2(target)
							section(dt3,target)
						}
					})
				}
				if(target.innerHTML=="人气"){
					//dt数组人气排序
					var dt4=dt.sort(function(a,b){
						return b.consult.split('(')[1].split(')')[0]-a.consult.split('(')[1].split(')')[0]
					})
					
					if(flag){
						var dt_new=dt4.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt4,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt4.length,
					        totalpage:Math.ceil(dt4.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							//获取当前页需要显示的数据
							var ar5=dt4.slice((m-1)*12,m*12)
							show1(ar5)
							show_img()
							show2(target)
							section(dt4,target)
						}
					})
				}
				if(target.innerHTML=="价格"){
					//dt数组价格排序
					var dt5=dt.sort(function(a,b){
						return a.Eprice-b.Eprice
					})
					
					if(flag){
						var dt_new=dt5.concat().sort(function(a,b){
							return a.Eprice-b.Eprice
						})
						search.onclick=function(){
							flag=true
							section_show(qujian1,qujian2,dt_new,dt5,target)
						}
					}
					//创建分页器对象
					new Pagination(pagination1,{
					    pageInfo:{
					        pagenum:1,
					        pagesize:12,
					        total:dt5.length,
					        totalpage:Math.ceil(dt5.length/12)
					    },
					    textInfo:{
					        first: '首页',
					        prev: '上一页',
					        list: '',
					        next: '下一页',
					        last: '尾页'
					    },change(m){
							//获取当前页需要显示的数据
							var ar6=dt5.slice((m-1)*12,m*12)
							show1(ar6)
							show_img()
							show2(target)
							section(dt5,target)
						}
					})
				}
				
			}
			
			// 显示商品函数
			function show1(ar){
				var str=''
				var strg=''
				//遍历当前ar数组中所有的数据
				ar.forEach(item=>{
				    str+=`
				    <div class="good-li">
				    	<div class="good-li-cont">
				    		<div class="good-img">
				    			<a href="">
				    				<img src="${item.img1}" alt="" class="big-img">
				    			</a>
				    		</div>
				    		<div class="good-imgs">
				    			<ul class="clearfix">
					`
					if(item.img1){
						str+=`
						<li class="show-border">
							<a href=""><img src="${item.img1}" alt=""></a>
						</li>
						`
					}
					if(item.img2){
						str+=`
						<li>
							<a href=""><img src="${item.img2}" alt=""></a>
						</li>
						`
					}
					if(item.img3){
						str+=`
						<li>
							<a href=""><img src="${item.img3}" alt=""></a>
						</li>
						`
					}
					str+=`
				    			</ul>
				    		</div>
				    		<a href="./pdDetails.html?id=${item.goods_id}" title="${item.goods_title}">
				    			<span class="activity"><img src="imgs/activity.png" alt=""></span>
				    			<span>${item.goods_title}</span>
				    		</a>
				    		<p class="gprice">
				    			<span>${item.del_price}</span>
				    			<span>￥${item.Eprice}</span>
				    			<span>${item.univalence}</span>
				    		</p>
				    		<p class="month-sale">月销${item.sale}袋</p>
				    	</div>
				    </div>    
				    `
				})
				
				strg+=`
				<span class="pd-num">共找到<span>${dt.length}</span>件商品</span>
				`
				
				//把当前拼接好的字符串，添加到row盒子中
				row.innerHTML=str
				goodsNum.innerHTML=strg
			}
			
			// 导航样式函数
			function show2(target){
				navLis[0].style.backgroundColor='#fff'
				navLis[0].style.color="#333"
				navLis[navLis.length-1].style.background='url(./imgs/paixu-ico.png) 34px -172px no-repeat'
				navLis[navLis.length-1].style.color="#333"
				for(var i=1;i<navLis.length-1;i++){
					navLis[i].style.background='url(./imgs/paixu-ico.png) 34px 4px no-repeat'
					navLis[i].style.color="#333"
				}
				for(var j=0;j<navLis.length;j++){
					navLis[j].removeAttribute("name")
				}
				if(target!=navLis[0] && target!=navLis[navLis.length-1]){
					target.style.background="url(./imgs/paixu-ico.png) -30px 4px no-repeat"
					target.style.backgroundColor="#53aa5b"
					target.style.color="#fff"
					target.setAttribute("name","aa")
				}else if(target==navLis[0]){
					target.style.backgroundColor="#53aa5b"
					target.style.color="#fff"
					target.setAttribute("name","aa")
				}else if(target==navLis[navLis.length-1]){
					target.style.background='url(./imgs/paixu-ico.png) -30px -172px no-repeat'
					target.style.backgroundColor="#53aa5b"
					target.style.color="#fff"
					target.setAttribute("name","aa")
				}
				
			}
			
			//获取当前地址栏中的参数信息
			var search1=location.search
			if(search1){
				//分割search字符串
				var id0=search1.split('=')[1]
				var id1=decodeURIComponent(id0)
				var num=0
				var keyWorld
				var ark
				for(var a=0;a<brands.length;a++){
					for(var b=0;b<arr1.length;b++){
						for(var c=0;c<arr1[b].length;c++){
							if(id1==brands[a].innerHTML && id1!=arr1[b][c].innerHTML){
								for(var i=0;i<brands.length;i++){
									brands[i].className=''
								}
								brands[a].className='listShow'
								sx()
							}else if(id1!=brands[a].innerHTML && id1==arr1[b][c].innerHTML){
								ark=arr1[b]
								keyWorld=arr1[b][c]
								num=1
							}
						}
					}
				}
				if(num==1){
					console.log(111)
					for(var n=0;n<ark.length;n++){
						ark[n].className=''
					}
					keyWorld.className='listShow2'
					sx()
				}
			}
        }
    })
})()

