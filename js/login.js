const user1=$("input:eq(0)")
const pwd1=$("input:eq(1)")
const btn=$(".login-btn")
//获取地址栏中的参数
var search=location.search
//给能被点击的登录按钮绑定点击事件
btn.click(function(){
    //获取账号输入框中的value
    var u1=user1.val()
    var p1=pwd1.val()
    //调用ajax发送请求
    Ajax({
        url:'./php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            //判断当前返回值是否等于1
            if(dt==1){
				if(search){
				    //获取参数中传入的地址
				    var new_url=search.split('=')[1]
				    location.href=new_url
				}else{
				    location.href="./EpetsIndex.html"
				}
				setCookie("user",u1)
            }else{
                alert("登录失败")
            }
        }
    })
    return false
})