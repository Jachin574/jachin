<?php
session_start();
header("Content-type: text/html; charset=utf-8");
require 'conn.php';

$username = $_POST["username"];
$password = $_POST["password"];
$searchname = " SELECT * FROM user WHERE name = '$username' ";
$resname = mysql_query($searchname);
$res = mysql_fetch_assoc($resname);

if( !$resname || $res['password'] != $password ){
	echo "<script>alert('登录失败哥们，想想你是不是被选中的孩子。');history.back();</script>";die;
}
$_SESSION['username'] = $username;
$_SESSION['id'] = $res['id'];
header("Location:locate.php?id=".$res['id']);

?>
