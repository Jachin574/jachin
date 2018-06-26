//地理编码插件，用于通过坐标获取地址信息
var geocoder = new AMap.Geocoder();

//添加定位组件，用于获取用户当前的精确位置
var geolocation = new AMap.Geolocation({
	enableHighAccuracy: true, //是否使用高精度定位，默认:true
	showCircle: false, //不显示定位结果的圆
	showMarker: false, //不现实定位结果的标记
	showButton: false, //不现实组件的定位按钮
	timeout: 5000, //浏览器定位超时时间5s
	zoomToAccuracy:true
});
map.addControl(geolocation);

//body onload时调用
var startLocate = function() {
	geolocation.getCurrentPosition(function(status, result) {
		if (status == 'complete') {
			onLocateSuccess(result); //定位成功
		} else if (status == 'error') {
			//定位失败
			if (result.message.indexOf('Geolocation permission denied.') !== -1) {
				//Geolocation permission denied.表示用户禁用了浏览器或者APP的定位权限或者关闭了手机的定为服务
				//或者当前页面为非安全页面,Chrome或者IOS10等系统会禁用非安全页面的定位请求，如果您的页面还没有支持HTTPS请尽快升级
				//安全页面指的是支持HTTPS的Web站点，而且是通过https协议打开的页面。安全页面也包括本地页面
				showTip('您好，请在系统的隐私设置中打开当前应用的定位权限。');
			} else {
				showTip('无法获取精确位置,将定位您所在的城市。');
			}
			onLocateFailed();
		}
	});
};
var showDestinationAddress = function(address) {
	destination.innerHTML = address;
};

//定位失败之后进行城市定位
var onLocateFailed = function() {
	geolocation.getCityInfo(function(status, result) {
		map.setZoom(10);
		showLocation(result.center); //在城市中心点显示起始marker
		placeSearch.setCity(result.citycode);
		autoComplete.setCity(result.citycode);
	});
};

//定位成功
var onLocateSuccess = function(result) {
	showLocation(result.position); //在定位结果显示起始marker
	change(result);
};

//显示起始marker，并开启拖拽调整起始位置的功能
var showLocation = function(position) {
	startMarker.setPosition(position);
	startMarker.show();
	startMarker.setMap(map);
};

//AJAX传坐标
var xmlhttp;
if (window.XMLHttpRequest){
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
} else {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

function getLocation(){
	if (navigator.geolocation){
	  navigator.geolocation.watchPosition(showPosition,showError,{
	    // 指示浏览器获取高精度的位置，默认为false
	    enableHighAccuracy: true,
	    // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
	    timeout: 10000,
	    // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
	    maximumAge: 10000
	  });
	} else { alert('来自getLocation()的提示：无法获取精确位置。'); }
}
function showPosition(position){}
function showError(error){}
getLocation();
