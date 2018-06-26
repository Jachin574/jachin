<?php
header("Content-type: text/html; charset=utf-8");
require 'conn.php';

$id = $_GET['id'];
$posx = $_GET['posx'];
$posy = $_GET['posy'];
session_start();
if( $id!=$_SESSION['id'] || !$_SESSION['username']){
    header("Location:log.html");
}
mysql_query("UPDATE position SET posx=".$posx.",posy=".$posy." WHERE id=".$id);
mysql_close($con);
?>