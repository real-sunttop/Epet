<?php
header("content-type:text/html;charset=utf-8");
$b=$_GET['brand'];
$r=$_GET['recipe'];
$t=$_GET['bodyType'];
$a=$_GET['age'];
//连接数据库
$link=mysqli_connect("localhost:3307",'root','123456','epets');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="select * from goods";
$sql2="select * from goods where goods_title like '%$b%'";
$sql3="select * from goods where goods_title like '%$r%'";
$sql4="select * from goods where goods_title like '%$t%'";
$sql5="select * from goods where goods_title like '%$a%'";
$sql6="select * from goods where goods_title like '%$b%' and goods_title like '%$r%'";
$sql7="select * from goods where goods_title like '%$b%' and goods_title like '%$t%'";
$sql8="select * from goods where goods_title like '%$b%' and goods_title like '%$a%'";
$sql9="select * from goods where goods_title like '%$r%' and goods_title like '%$t%'";
$sql10="select * from goods where goods_title like '%$r%' and goods_title like '%$a%'";
$sql11="select * from goods where goods_title like '%$t%' and goods_title like '%$a%'";
$sql12="select * from goods where goods_title like '%$b%' and goods_title like '%$r%' and goods_title like '%$t%'";
$sql13="select * from goods where goods_title like '%$b%' and goods_title like '%$r%' and goods_title like '%$a%'";
$sql14="select * from goods where goods_title like '%$b%' and goods_title like '%$t%' and goods_title like '%$a%'";
$sql15="select * from goods where goods_title like '%$r%' and goods_title like '%$t%' and goods_title like '%$a%'";
$sql16="select * from goods where goods_title like '%$b%' and goods_title like '%$r%' and goods_title like '%$t%' and goods_title like '%$a%'";
//执行SQL语句，并返回结果集
if($b == '全部' && $r == '全部' && $t == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql);
}else if($r == '全部' && $t == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql2);
}else if($b == '全部' && $t == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql3);
}else if($b == '全部' && $r == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql4);
}else if($b == '全部' && $r == '全部' && $t == '全部'){
	$result=mysqli_query($link,$sql5);
}else if($t == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql6);
}else if($r == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql7);
}else if($r == '全部' && $t == '全部'){
	$result=mysqli_query($link,$sql8);
}else if($b == '全部' && $a == '全部'){
	$result=mysqli_query($link,$sql9);
}else if($b == '全部' && $t == '全部'){
	$result=mysqli_query($link,$sql10);
}else if($b == '全部' && $r == '全部'){
	$result=mysqli_query($link,$sql11);
}else if($a == '全部'){
	$result=mysqli_query($link,$sql12);
}else if($t == '全部'){
	$result=mysqli_query($link,$sql13);
}else if($r == '全部'){
	$result=mysqli_query($link,$sql14);
}else if($b == '全部'){
	$result=mysqli_query($link,$sql15);
}else{
	$result=mysqli_query($link,$sql16);
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