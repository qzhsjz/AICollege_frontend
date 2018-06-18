var myVIP = angular.module("myVIP", []);
var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
myVIP.controller("vipCtrl", function($scope) {
    $http({
        method:'get', //get请求方式
        url:urlcookie,   //请求地址
        withCredentials:true,  
    }).then(function(response){
        if(response.error){
            alert(response.error);
        }else{
            $scope.isActive=0;
            $scope.price=998;
            $scope.name="Year VIP";
            $scope.go_to = function () {
                var name = $scope.name;
                var value =$scope.price;
                location.href = "../pay_page/pay_page.html?&name=" + name + "&value=" + value;
            }
            $scope.choose=function(index){
                $scope.isActive=index;
                $scope.price=$scope.info[index].value;
            }
            $scope.info = [
                {
                    "name":"年卡会员",
                    "welfare":"享受一年所有视频免费观看",
                    "value":998,
                    "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
                },
                {
                    "name":"季卡会员",
                    "welfare":"享受三个月所有视频免费观看",
                    "value":500,
                    "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
                },
                {
                    "name":"月卡会员",
                    "welfare":"享受31天所有视频免费观看",
                    "value":255,
                    "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
                }
               
                
              ];


        }
        
    },function(response){
        //失败时执行 
        console.log("CookieError"+response);
    
    });


});