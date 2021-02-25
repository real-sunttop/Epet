//获取账号cookie
var name1=getCookie("user")
//获取大盒子对象
var box=document.querySelector(".contentBox")
var box2=document.querySelector(".bigbox")
var boxSale=document.querySelector(".hg")
var clear=document.querySelector(".clear")
var kg=false
//获取地址栏中的地址
var url=location.href
//获取localStorage中的cartList1
var cartList=localStorage.getItem("cartList1")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]

//判断当前cookie是否存在
if(name1){
    show()
}else{
    alert("你还没登录，请登录再进入")
    location="./login.html?pathUrl="+url
}
// 购物车
function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中
            return item.is_select==1
        })
        //获取当前被选中商品的种类和价格
        var sum=total()
		var str=`
		<div class="cart-menu">
			<ul class="clearfix">
				<li class="color2">
					<i></i>
					E宠购物车
					<span>${sum[0]}</span>
				</li>
				<li>
					我的收藏
					<span>?</span>
				</li>
			</ul>
			<div class="nav-line"><i class="arrow"></i></div>
		</div>
		<div class="sent-city clearfix">
			<span>送货至：</span>
			<div class="det-sent">
				<div class="sent-title">重庆&nbsp;北碚区</div>
				<i></i>
				<!-- 隐藏 -->
				<div class="placeBox4">
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
		`
        var str2=`
        <table border="0" cellspacing="0" cellpadding="0">
        	<tbody>
        		<tr>
        			<td class="td1 clearfix" colspan="5">
        				<input type="checkbox" name="quanxuan" ${aa?"checked":''}/>
        				<span>E宠西部中央仓</span>
        				<i>
        					<img src="imgs/help.jpg">
        					<div class="sent-help">
        						<em></em>
        						<i></i>
        						<p>以下商品由西部大仓发货，全国除西藏、新疆外满99元包邮（西藏、新疆满99元免首重），部分地区满58元包邮（顺丰、EMS不包邮），支持余额支付、在线支付!</p>
        					</div>
        				</i>
        				<div class="baoyou">
        					<span>已包邮</span>
        					 <p>订单已包邮</p>
        				</div>
        			</td>
        		</tr>
        `
        //遍历数组中所有商品
        cartList.forEach(item=>{
            str2+=`
            <tr class="cart-order">
            			<td><input type="checkbox" ${item.is_select==1?"checked":''} name="xuan" data-id="${item.goods_id}"/></td>
            			<td class="td2">
            				<a href=""><img src="${item.img2}"></a>
            				<a href="">${item.goods_title}</a>
            			</td>
            			<td class="td3 clearfix">
            				<button type="button" data-id="${item.goods_id}" ${item.cart_number<=1?"disabled":''}>-</button>
            				<input type="text" value="${item.cart_number}" />
            				<button type="button" data-id="${item.goods_id}">+</button>
            			</td>
            			<td class="td4">￥${item.Eprice}</td>
            			<td class="td5">
            				<a href="">[收藏]</a>
            				<a href="" data-id="${item.goods_id}">[删除]</a>
            			</td>
            		</tr>
            		
            `
        })
		//给当前字符串拼接结束的标签
		str2+=`
							<tr>
								<td colspan="5" class="td6">
									<div class="buy clearfix">
										<div class="buy-left">
											<span><input type="checkbox"  name="quanxuan" ${aa?"checked":''}/>全选</span>
											<a href="">[ 删除选中商品 ]</a>
											<a href="">[ 收藏选中商品 ]</a>
										</div>
										<div class="buy-right">
											<span>总价（不含运费）:</span>
											<span>￥${sum[1]}</span>
											<a href="" class="jiesuan">去结算(${sum[0]})</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="5" class="td7">
									<a href="./pdList.html">继续购买</a>
								</td>
							</tr>
						</tbody>
					</table>
		`
		box.innerHTML=str2
		box2.innerHTML=str
		var tAll=document.getElementsByName("l1")
		for(var i=0;i<tAll.length;i++){
			tAll[i].onclick=function(){
				for(var j=0;j<tAll.length;j++){
					tAll[j].className=''
				}
				this.className='border-b'
				show()
			}
		}
		shop()
		async function shop(){
			var b1=document.getElementsByClassName("border-b")
		    var dt=await promiseAjax({
		        url:'./php/shopping.php',
				data:`title=${b1[0].innerHTML}`,
		        datatype:'json'
		    })
			
				var str3=`
								<ul class="clearfix">
									`
					
			dt.forEach(item=>{
					str3+=`
					<li>
						<a href="" class="hgimg"><img src="${item.img2}" alt="${item.goods_id}"></a>
						<p>${item.goods_title}</p>
						<div class="hgprice clearfix">
							<div>
								<p>￥${item.Eprice}</p>
								<p>E宠价: <del>￥${item.prev_price}</del></p>
							</div>
							<a href="javascript:;"><img src="imgs/cart.png" class="join-cart"></a>
						</div>
					</li>
					`
			})				
				
			str3+=`
								</ul>
						`
			//最后把拼接好的内容添加到box大盒子中
			boxSale.innerHTML=str3
		}
    }else{
        var str1=`
          <div class="null-cart">
          	<h1>您购物车空空的，快去选购吧！</h1>
          	<a href="./EpetsIndex.html">去首页</a>
          </div>
        ` 
        //把当前内容添加到box盒子中
        clear.innerHTML=str1
    }
}

//给box大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.goods_id==id){
                item.cart_number++
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList1",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.goods_id==id){
                item.cart_number--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList1",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if(target.innerHTML=="[删除]"){
        //获取当前点击对象的id
        var id=target.getAttribute("data-id")
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.goods_id!=id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList1",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList1",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.goods_id==id){
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList1",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.className=="jiesuan"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList1",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }
	//删除选中商品
	if(target.innerHTML=="[ 删除选中商品 ]"){
		cartList=cartList.filter(item=>{
		    //过滤被删除的商品
		    return item.is_select!=1
		})
	    //重新把当前操作完毕的数组添加到localStorage中
	    localStorage.setItem("cartList1",JSON.stringify(cartList))
	    //调用show方法，重新把页面再次渲染
	    show()
	}

}
//统计所选商品种类和价格
function total(){
    var num=0 //所选商品种类
    var price=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            num++
            price+=item.cart_number*item.Eprice
        }
    })
    return [num,price.toFixed(2)]
}

// 加入购物车
boxSale.onclick=function(){
	var e = e || window.event
	//获取点击对象
	var target=e.target || e.srcElement
	if(target.className=='join-cart'){
		//获取当前地址栏中的参数信息
		var id=target.parentNode.parentNode.parentNode.firstElementChild.children[0].getAttribute("alt")
		kg=true
		var dt1
		join()
		async function join(){
		    dt1=await promiseAjax({
		        url:'./php/shopping2.php',
				data:'id='+id,
		        datatype:'json'
		    })
			//获取localStorage中的cartList3
			// var cartList=localStorage.getItem("cartList1")
			//判断当前获取的cartList是否存在
			if(cartList){
				//把localStorage中获取的内容转为数组对象
				// cartList=JSON.parse(cartList)
				var a=0 //判断当前添加的商品是否在localStorage中存在
				//遍历数组中所有元素
				cartList.forEach(item=>{
					//判断当前遍历的商品是否等于要添加的商品
					if(item.goods_id==dt1.goods_id){
						a++
					}
				})
				//判断a变量是否等于0
				if(a==0){
					//修改当前商品数量
					dt1['cart_number']=dt1.cart_number
					//把当前对象追加到数组中
					cartList.push(dt1)
				}
				//把当前商品添加到localStorage中
				localStorage.setItem("cartList1",JSON.stringify(cartList))
			}else{
				//修改当前商品数量
				dt['cart_number']=dt1.cart_number
				//把当前商品添加到localStorage中
				localStorage.setItem("cartList1",JSON.stringify([dt1]))
			}
			show()
			location.reload()
		}
	} 
}