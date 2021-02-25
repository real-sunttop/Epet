//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var box=document.querySelector(".pd-cont")
var box2=document.querySelector(".details-bottom")
var box3=document.querySelector('.total-title')
var dt;

//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('=')[1];

    (async function(){
        dt=await promiseAjax({
            url:'./php/pdDetails.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        var str=`
        <div id="wrap" class="clearfix">
        	<!-- 左边 -->
        	<div class="pd-left">
        		<div class="show-img">
        			<div class="goodsBox">
        				<a href="">
        					<img src="${dt.img1}">
        					<!-- 放大镜 -->
        					<div class="magnify"></div>
        				</a>
        				<!-- 放大盒子 -->
        				<div class="magnify-big"></div>
        			</div>
        		</div>
        		<div class="img-list clearfix">
        			<p class="prev"><i></i></p>
        			<div class="oborder">
        				<ul class="clearfix" id="oborder-ul">
			`
			if(dt.img1){
				str+=`
				<li class="on"><a href=""><img src="${dt.img1}"></a></li>
				`
			}
			if(dt.img2){
				str+=`
				<li><a href=""><img src="${dt.img2}"></a></li>
				`
			}
			if(dt.img3){
				str+=`
				<li><a href=""><img src="${dt.img3}"></a></li>
				`
			}
			if(dt.img4){
				str+=`
				<li><a href=""><img src="${dt.img4}"></a></li>
				`
			}
			if(dt.img5){
				str+=`
				<li><a href=""><img src="${dt.img5}"></a></li>
				`
			}
			if(dt.img6){
				str+=`
				<li><a href=""><img src="${dt.img6}"></a></li>
				`
			}
			str+=`	
        				</ul>
        			</div>
        			<p class="next"><i></i></p>
        		</div>
        		<div class="id-cont">
        			<p>编号：<span>${dt.goods_bh}</span></p>
        			<div class="fx">
        				<a href="">分享</a>
        				<a href="">收藏商品</a>
        			</div>
        		</div>
        	</div>
        	<!-- 右边 -->
        	<div class="pd-right">
        		<h1>${dt.goods_title}</h1>
        		<p>${dt.goods_introduce}</p>
        		<div class="pd-right-bottom">
        			<div class="bprice">
        				<span>市场价 ：</span>
        				<del>${dt.del_price}</del>
        			</div>
        			<div class="Eprice">
        				<span>E宠价 ：</span>
        				<span>￥</span>
        				<span>${dt.Eprice}</span>
        			</div>
        		</div>
        		<div class="sales">
        			<div class="clearfix">
        				<p><i>月销：</i><span>${dt.sale}</span>包</p>
        				<p>评价：<a href="">${dt.assess}</a></p>
        				<p>咨询：<a href="">${dt.consult}</a></p>
        				<p><i>赠送：</i>最多<span>${dt.Econ}</span>E宠币</p>
        			</div>
        			<div class="services">
        				<ul class="clearfix">
        					<li>
        						<img src="imgs/qualityassurance.png">
        						正品保障
        						<div class="qa">
        							<i></i>
        							<span></span>
        							<p>正规授权，所有商品可100%追溯来源。</p>
        						</div>
        					</li>
        					<li>
        						<img src="imgs/thirtydays.png">
        						99元包邮
        						<div class="qa">
        							<i></i>
        							<span></span>
        							<p>单个仓库单笔订单满99包邮（西部大仓覆盖的川渝地区满58元包邮）；不包邮地区：西藏、新疆；不包邮快递：顺丰、EMS；</p>
        						</div>
        					</li>
        					<li>
        						<img src="imgs/freeshipping.png">
        						30天退货
        						<div class="qa">
        							<i></i>
        							<span></span>
        							<p>在不影响该商品二次销售的情况下，自收到商品30天内，可申请退换货服务（定制狗牌、蛋糕等特殊商品除外）。</p>
        						</div>
        					</li>
        				</ul>
        			</div>
        		</div>
        		<div class="my-num clearfix">
        			<span>我要买：</span>
        			<div class="val-btn">
        				<button type="button" value="-">-</button>
        				<input type="text" value="1" id="cn"/>
        				<button type="button" value="+">+</button>
        			</div>
        			<span>包</span>
        		</div>
        		<div class="sent-city clearfix">
        			<span>送货至：</span>
        			<div class="det-sent">
        				<div class="sent-title">重庆&nbsp;北碚区</div>
        				<i></i>
        				<!-- 隐藏 -->
        				<div class="placeBox3">
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
        		<div class="norms">
        			<p>16点前下单，当天发货。</p>
        			<a href="">运费详情>></a>
        		</div>
        		<div class="join-btn">
        			<a href="./shopping.html">加入购物车</a>
        		</div>
        	</div>
        </div>
        `
		
		var str2=`
		<div id="wrap">
			<div class="main-cont">
				<div class="det-nav">
					<a href="" class="show5">商品详情</a>
					<a href="">评价${dt.assess}</a>
					<a href="">咨询${dt.consult}</a>
					<a href="">正品保证</a>
					<div class="phone-buy">
						<span>手机购买</span>
						<span></span>
						<span></span>
						<img src="imgs/faq-code.png" class="code-img">
					</div>
				</div>
				<div class="multi">
					<div class="shop clearfix">
						<div class="shop-img">
							<a href=""><img src="${dt.shop_img}"></a>
						</div>
						<div class="shop-title">
							<div class="shop-name">
								<a href="">${dt.shop_name}</a>
								<a href=""></a>
							</div>
						</div>
						<div class="production-site">
							<p>生产产地：<span>${dt.create_area}</span></p>
							<p>品牌起源地：<span>${dt.origin_area}</span></p>
						</div>
					</div>
					<div class="imgdetail">
						<p><span>包装说明：</span>包装升级替换中，新老包装随机发送。</p>
						<p><img src="${dt.detail_img1}"></p>
						<p><img src="${dt.detail_img2}"></p>
						<p><img src="${dt.detail_img3}"></p>
					</div>
					<div class="pfont">
						<p><span></span></p>
						<div class="pfont-cont">
							<h2>价格说明：</h2>
							<p><strong>E宠价：</strong>E宠价为商品的销售价，是您最终决定是否购买商品的依据。</p>
							<p><strong>划线价：</strong>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在E宠商城上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
							<p><strong>折扣：</strong>E宠价为商品的销售价，是您最终决定是否购买商品的依据折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。。</p>
							<p><strong>异常问题：</strong>商品促销信息以商品详情页“促销”栏中的信息为准；因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
		
		var str3=`
		<div id="wrap">
			<div class="pets-lis">
				<span>狗狗</span>
				<i></i>
				<ul>
					<li><a href="">狗狗</a></li>
					<li><a href="">猫猫</a></li>
				</ul>
			</div>
			<b class="gt"></b>
			<div class="pets-lis">
				<span>狗狗主粮</span>
				<i></i>
				<ul>
					<li><a href="">狗狗主粮</a></li>
					<li><a href="">狗狗零食</a></li>
					<li><a href="">狗狗窝垫</a></li>
					<li><a href="">狗狗玩具</a></li>
					<li><a href="">狗狗清洁</a></li>
					<li><a href="">狗狗保健</a></li>
					<li><a href="">狗狗护理</a></li>
					<li><a href="">狗狗生活</a></li>
					<li><a href="">狗狗牵引</a></li>
					<li><a href="">出游洗澡</a></li>
					<li><a href="">狗狗服饰</a></li>
					<li><a href="">狗狗美容</a></li>
				</ul>
			</div>
			<b class="gt"></b>
			<div class="pets-lis">
				<span>${dt.category}</span>
				<i></i>
				<ul>
					<li><a href="">进口狗粮</a></li>
					<li><a href="">国产狗粮</a></li>
					<li><a href="">冻干狗粮</a></li>
				</ul>
			</div>
			<b class="gt"></b>
			<span class="pddet">商品详情</span>
		</div>
		`
		
        //把当前内容添加到大盒子中
        box.innerHTML=str;
		box2.innerHTML=str2;
		box3.innerHTML=str3;
		
		const magnify=$(".magnify")
		const magBox=$(".magnify-big")
		const goods=$(".goodsBox")
		const left=$(".prev")
		const right=$(".next")
		const scroll1=$(".oborder>ul")
		const sBox=$(".oborder")
		const nav=$(".det-nav")
		var imgsBox=document.getElementById("oborder-ul")
        var imgs=document.getElementById("oborder-ul").children
		var cn=document.getElementById("cn")
		
		
		//设置ul的宽
		imgsBox.style.width=imgs.length*84+'px'
        
		// 鼠标移入放大镜以及放大盒子显示
		goods.mouseover(function(){
			var imgs1=imgs[0].firstElementChild.children[0].getAttribute("src")
			magnify.css({display:"block"})
			magBox.css({display:"block",background:"url("+imgs1+") no-repeat"})
		})
		
		// 放大镜移动
		goods.mousemove(function(e){
			var e = e||window.event
			boxMove(e)
		})
		
		//移出
		goods.mouseout(function(){
		    //让显示的内容隐藏
		    magnify.css("display","none")
		    magBox.css("display","none")
		})
		
		//移动函数
		function boxMove(e){
			//获取当前移动距离
			var x1=e.pageX-goods[0].offsetLeft-parseInt(magnify[0].offsetWidth/2)
			var y1=e.pageY-goods[0].offsetTop-parseInt(magnify[0].offsetHeight/2)
			//设置移动范围
			var maxX=goods[0].offsetWidth-magnify[0].clientWidth
			var maxY=goods[0].offsetHeight-magnify[0].clientHeight
			//右边图片的移动
			var rightX,rightY
			//水平判断
			if(x1<=0){
			    magnify[0].style.left="0px"
			    rightX=0
			}else if(x1>=maxX){
			    magnify[0].style.left=maxX+"px"
			    rightX=maxX
			}else{
			    magnify[0].style.left=x1+"px"
			    rightX=x1
			}
			//垂直方式
			if(y1<=0){
			    magnify[0].style.top="0px"
			    rightY=0
			}else if(y1>=maxY){
			    magnify[0].style.top=maxY+'px'
			    rightY=maxY
			}else{
			    magnify[0].style.top=y1+'px'
			    rightY=y1
			}
			//让右边图片进行移动(左边盒子和遮罩层的比值，和右边盒子和图片比值对应)
			magBox[0].style.backgroundPositionX=-2.67*rightX+'px'
			magBox[0].style.backgroundPositionY=-2.67*rightY+'px'
		}
		
		// 
		for(var i=0;i<imgs.length;i++){
		    imgs[i].onmouseover=function(){
				//先把所有的图片边框去掉
				for(var j=0;j<imgs.length;j++){
					imgs[j].className=''
				}
				//给当前选中对象添加边框
				this.className='on'
				//获取当前点击的图片地址
				var url1=this.firstElementChild.children[0].getAttribute("src")
				//分别修改左右两个盒子中的图片路径
				goods.find("img").prop('src',url1)
				goods.mouseover(function(){
					magBox[0].style.backgroundImage="url("+url1+")"
				})
		    }
		}
		
		// 左箭头
		left.click(function(){
			const posi=parseInt(scroll1.css("left"))
			if(posi<0){
				scroll1.css("left",posi+84+"px")
			}
		})
		
		// 右箭头
		right.click(function(){
			const posi=parseInt(scroll1.css("left"))
			const wh=parseInt(sBox.css("width"))
			const uWh=parseInt(scroll1.css("width"))
			if(posi>(wh-uWh)){
				scroll1.css("left",posi-84+"px")
			}
		})
		
		//nav固定
		window.onscroll=function(){
		    //获取滚动距离
		    const top1=$(window).scrollTop()
		    //判断当滚动距离大于nav距页面顶部距离时，固定nav
		    if(top1>824){
		        nav.css({
					position:"fixed",
					top:0
				})
		    }else{
				nav.css({
					position:"relative"
				})
		    }
		}
    })()

}else{
    alert("你还没选中商品")
    location="./pdList.html"
}

//给大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
	if(target.value=="-"){
		if(cn.value>1){
			cn.value--
		}
	}
	if(target.value=="+"){
		cn.value++
	}
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList1")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.goods_id==dt.goods_id){
                    a++
                    item.cart_number=parseInt(cn.value)+parseInt(item.cart_number)
                }
            })
            //判断a变量是否等于0
            if(a==0){
				//修改当前商品数量
				dt['cart_number']=parseInt(cn.value)+parseInt(dt.cart_number)
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList1",JSON.stringify(cartList))
        }else{
			//修改当前商品数量
			dt['cart_number']=parseInt(cn.value)+parseInt(dt.cart_number)
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList1",JSON.stringify([dt]))
        }

    }  
}


