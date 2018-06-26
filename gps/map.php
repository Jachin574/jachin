<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
<title>电瓶车实时位置</title>
<link rel="stylesheet" href="http://cache.amap.com/lbs/static/main1119.css"/>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=8ae39bcd685d57b1583259f668a5ee02"></script> 
<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>
<!-- 自动刷新 -->
<!-- <meta http-equiv="refresh" content="2"> -->
</head>
<body>
<div id="container"></div>
</body>
</html>

<script type="text/javascript">
  var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:16,
    center: [113.536326,22.348959]        
  });
  function getposition(){
    $.ajax({
      url:'data.php',
      dataType: "json", 
      async:false,
      success:function(data){
        console.log(data);
        map.clearMap();
        for ( var i=0; i<data.length; i++ ){
          if( data[i][0] == null )
            continue;
          marker = new AMap.Marker({
            position: data[i],
            map: map
          });
        }
      }
    });
    setTimeout("getposition()",5000);
  }
  getposition();
</script>

