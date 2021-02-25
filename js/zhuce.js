// 获取操作对象
const btn=$(".zhuce-btn")
const frm=$('form')
const check1=$(".checkbox>span").first()
const name1=$("input:eq(0)")
const phone1=$("input:eq(1)")
const pwd=$("input:eq(2)")
const repwd=$("input:eq(3)")

//给当前按钮对象绑定点击事件
check1.click(function(){
    //判断当前选项是否被选中
    if(check1[0].className==''){
		check1[0].className='no'
        //取消注册按钮的禁用
        btn.prop("disabled",true)
    }else{
		check1[0].className=''
        btn.prop("disabled",false)
    }
})

//用户名输入判断
name1.blur(function(){
	const reg=/^[a-zA-Z\u4E00-\u9FA5_]{2,16}$/
	const val=name1.val()
	if(!reg.test(val)){
		if(!$(".username").next().is("span")){
			$(".username").after($(`<span class="tishi">
										请输入正确的用户名！（字母，中文或下划线长度为3~16位）
									</span>`))
			name1.focus()
		}
	}else{
		if($(".username").next().is("span")){
			$(".username").next().remove()
		}
	}
})

//手机号输入判断
phone1.blur(function(){
	const reg=/^(1|\+861)[3-8]{1}\d{9}$/
	const val=phone1.val()
	if(!reg.test(val)){
		if(!$(".telphone").next().is("span")){
			$(".telphone").after($(`<span class="tishi">
										请输入正确的手机号！（可以以+86开头）
									</span>`))
			phone1.focus()
		}
	}else{
		if($(".telphone").next().is("span")){
			$(".telphone").next().remove()
		}
	}
})	
	
//密码输入判断
pwd.blur(function(){
	const reg=/^[a-zA-Z]\w{5,17}$/
	const val=pwd.val()
	if(!reg.test(val)){
		if(!$(".pwd").next().is("span")){
			$(".pwd").after($(`<span class="tishi">
										请输入正确的密码！（以字母开头，包含字母、数字和下划线，长度为6~18）
									</span>`))
			pwd.focus()
		}
	}else{
		if($(".pwd").next().is("span")){
			$(".pwd").next().remove()
		}
	}
})	

//再次输入密码判断
repwd.blur(function(){
	const val=pwd.val()
	const reval=repwd.val()
	if(val!=reval){
		if(!$(".repwd").next().is("span")){
			$(".repwd").after($(`<span class="tishi">
										再次输入密码错误！
									</span>`))
			repwd.focus()
		}
	}else{
		if($(".repwd").next().is("span")){
			$(".repwd").next().remove()
		}
	}
})	

//提交注册信息
btn.click(function(){
	//获取账号输入框中的value
	var u1=name1.val()
	var ph1=phone1.val()
	var p1=pwd.val()
	if(u1!='' && ph1!='' && p1!='' && !$(".repwd").next().is("span") && !$(".pwd").next().is("span") && !$(".telphone").next().is("span") && !$(".username").next().is("span")){
		//调用ajax发送请求
		Ajax({
		    url:'./php/zhuce.php',
		    data:`username=${u1}&phone=${ph1}&password=${p1}`,
		    success:function(dt){
		        //判断当前返回值是否等于1
		        if(dt==1){
		            location.href="./login.html"
		        }else{
		            alert("注册失败")
		        }
		    }
		})
	}else{
		alert("注册失败")
	}
	
	return false
})