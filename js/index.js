(function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))

tpwidget("init", {
    "flavor": "bubble",
    "location": "WS0E9D8WN298",
    "geolocation": "disabled",
    "position": "top-right",
    "margin": "10px 10px",
    "language": "zh-chs",
    "unit": "c",
    "theme": "chameleon",
    "uid": "UBB779AF55",
    "hash": "9e448bd1c39cb66613a4ab223bc10e3b"
});
tpwidget("show");

Win10.onReady(function () {

    //设置壁纸
    Win10.setBgUrl({
        main:'./img/wallpapers/main.jpg',
        mobile:'./img/wallpapers/mobile.jpg',
    });

    Win10.setAnimated([
        'animated flip',
        'animated bounceIn',
    ], 0.01);

    // Win10.newMsg('官方交流一群', '欢迎各位大侠加入讨论：<a target="_blank" href="https://jq.qq.com/?_wv=1027&k=4Er0u8i">[点击加入]205546163</a>')
    Win10.newMsg('版本更新', '欢迎到来，2017-09-01更新');
    Win10.newMsg('更新VPN模块', '');
    Win10.newMsg('更新正则表达式模块', '2018-06-26');
});

//该函数可删除 Orz
function win10_forgive_me() {
    Win10.enableFullScreen();
    layer.alert('点击展示下一版本特性', {}, function(index){
        var blue=$('<img src="./img/presentation/bluescreen.jpg" style="position: fixed;width: 100%;height:100%;top:0;z-index:9999999999" />');
        setTimeout(function () {
            $('body').append(blue);
        },1000);
        setTimeout(function () {
            blue.remove();
            Win10.disableFullScreen();
            setTimeout(function () {
                layer.msg('蓝屏效果');
            },1000);
        },7000);
        layer.close(index);
    });
}

var jachin = angular.module('jachin' , []);
jachin.controller('jachinCtrl' , function($scope , $http){
    $scope.vpn = function(){
        Win10.openUrl('./vpn.html?'+Math.random() , '<img class=\'icon\' src=\'img/icon/vpn.png\'/>vpn');
    }
    $scope.regexper = function(){
        Win10.openUrl('./regexper/index.html?'+Math.random() , '<img class=\'icon\' src=\'img/icon/machine.png\'/>vpn');
    }
    $scope.memorial = function(){
        Win10.openUrl('./memorial.html?'+Math.random() , '<img class=\'icon\' src=\'img/icon/icon-love.png\'/>vpn');
    }
});


//天气预报
(function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))

tpwidget("init", {
    "flavor": "bubble",
    "location": "WS0E9D8WN298",
    "geolocation": "disabled",
    "position": "bottom-right",
    "margin": "100px 10px",
    "language": "zh-chs",
    "unit": "c",
    "theme": "chameleon",
    "uid": "UBB779AF55",
    "hash": "9e448bd1c39cb66613a4ab223bc10e3b"
});
tpwidget("show");