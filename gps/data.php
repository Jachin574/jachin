<?php
header("Content-type: text/html; charset=utf-8");
require 'conn.php';

$arrmain = array();
//插入数据到数据库
// mysql_query("INSERT INTO position (posx , posy) VALUES ('116.398258' , '39.914600')");

//获取数据库的值
$result = mysql_query(" SELECT * FROM position ");



//遍历获取的值并输出
while($pos = mysql_fetch_array($result)){
	$arr = array();
	array_push($arr , $pos['posx']);
	array_push($arr , $pos['posy']);
	array_push($arrmain , $arr);
}
echo json_encode($arrmain);
mysql_close($con);
?>