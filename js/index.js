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
    Win10.newMsg('版本更新', '欢迎到来，2017-09-01更新')
});

//该函数可删除 Orz
function win10_forgive_me() {
    Win10.enableFullScreen();
    layer.alert('点击展示下一版本特性', {}, function(index){
        var blue=$('<img src="./img/presentation/bluescreen.jpg" style="position: fixed;width: 100%;height:100%;top:0;z-index:9999999999" />');
        setTimeout(function () {
            $('body').append(blue);
        },3000);
        setTimeout(function () {
            blue.remove();
            Win10.disableFullScreen();
            setTimeout(function () {
                layer.msg('开个玩笑，别打我');
            },1000);
        },7000);
        layer.close(index);
    });
}

var jachin = angular.module('jachin' , []);
jachin.controller('jachinCtrl' , function($scope , $http){
    $scope.vpn = function(){
        Win10.openUrl('//jachin.com/vpn.html?'+Math.random() , '<img class=\'icon\' src=\'img/icon/vpn.png\'/>vpn');
    }
})