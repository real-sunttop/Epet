<?php
header("content-type:text/html;charset=utf-8");
$title=$_GET['title'];
//连接数据库
$link=mysqli_connect("localhost:3307",'root','123456','epets');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="select * from sale limit 0,17";
$sql2="select * from sale limit 17,19";
$sql3="select * from sale limit 36,17";
$sql4="select * from sale limit 53,5";
$sql5="select * from sale limit 58,19";
//执行SQL语句，并返回结果集
if($title == '购满19.90'){
	$result=mysqli_query($link,$sql);
}else if($title == '购满79.00'){
	$result=mysqli_query($link,$sql2);
}else if($title == '购满169.00'){
	$result=mysqli_query($link,$sql3);
}else if($title == '购满399.00'){
	$result=mysqli_query($link,$sql4);
}else if($title == '清仓换购'){
	$result=mysqli_query($link,$sql5);
}

//创建存储所有数据的数组
$arr=[];
//遍历结果集
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组中
    array_push($arr,$row);
}
//把当前数组转为字符串，并响应给浏览器
echo json_encode($arr);
//关闭连接
mysqli_close($link);

?>