<?php 
  $id = $_GET['id'];
  session_start();
  if( $id!=$_SESSION['id'] || !$_SESSION['username']){
    header("Location:log.html");
  }
?>

<!DOCTYPE html>
<html lang="zh" >
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<title>定位后规划线路</title>
<link rel="stylesheet" type="text/css" href="./css/locate.css">
<script type="text/javascript" src='https://webapi.amap.com/maps?v=1.3&plugin=AMap.Geolocation,AMap.ToolBar,AMap.Geocoder,AMap.PlaceSearch,AMap.Autocomplete,AMap.Driving&key=608d75903d29ad471362f8c58c550daf'></script>
</head>
<body onload='startLocate()'>
  <div id="container" class="map" tabindex="0"></div>
<script type="text/javascript">
  // 创建地图
  var map = new AMap.Map('container', {
    zoom:17
  });

  //起点（用户位置）的marker标记
  var role = "<?php $id ?>";
  if( role == '1' ){
    var startMarker = new AMap.Marker({
      content:"<img style='width:19px;height:32px' src='images/1.jpg'/>",
      offset:new AMap.Pixel(-10,-32)
    })
  } else{
    var startMarker = new AMap.Marker({
      content:"<img style='width:19px;height:32px' src='images/mark_bs.png'/>",
      offset:new AMap.Pixel(-10,-32)
    })
  }

  //显示控制，执行后显示地图页面
  var showLeftView = function(){
    AMap.event.removeListener(placeSearch.listElementClickHandler);
    AMap.event.removeListener(autoComplete.selectHandler);
    placeSearch.clear();
  }
  setInterval("startLocate()",5000);
  function change(result){
    var locat = "./changeposition.php?id="+"<?php echo $id?>"+"&posx="+result.position.getLng()+'&posy='+result.position.getLat();
    xmlhttp.open("GET",locat,true);
    xmlhttp.send();
  }
</script>
<script type="text/javascript" src='js/locate.js'></script>
</body>
</html>