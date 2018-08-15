var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
var goodsinfo = 'http://39.106.19.27:8080/user/shopcar';

var quit = function(){
    var urlquit = 'http://39.106.19.27:8080/user/logout';
    $.ajax({
        url:urlquit,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        type:'get',
        dataType: 'json',
        success: function(data) {
          console.log(JSON.stringify(data));
          if(data.error){
           alert(data.error);
         }else{
          location.href = "../../index.html";
         }
        }
    });
}

var app = angular.module('myApp', []);
app.controller('personCtrl',['$scope', '$http', function($scope, $http, $location) {
    $http({
        method: 'get', //get请求方式
        url: urlcookie,   //请求地址
        withCredentials: true,
    }).then(function (response) {
        if (response.error) {
            alert("1111");
        } else {
            if(response.data.id){
                document.getElementById("signup").style.display="none";
                document.getElementById("headerimg").src=response.data.picture;
                $(".mystudy").show();
                                //显示状态改变
                $('.head').on('mouseenter',function(){
                    $('.bubble').css("display","block");
                });
                $('.head').on('mouseleave',function(){
                    $('.bubble').css("display","none");
                });
                $('.headimg').attr('href','../../components/my_detail/my_detail.html'); 
                $('.headimg').attr('target','_blank');
            }else{
                $(".mystudy").hide();
            }
            
            $.ajax({
                url:goodsinfo,
                type:'post',
                data: JSON.stringify({
                'name': "usernamesign",
                'mon': 233,
                'num':1
                }),
                dataType: 'json',
                success: function(data) {
                console.log(JSON.stringify(data));
                    alert(1);
                    $http({
                        method: 'get', //get请求方式
                        url: goodsinfo,   //请求地址
                        withCredentials: true,
                    }).then(function (response) {
                        if (response.error) {
                            alert("1111");
                        } else {
                            console.log("返回值："+response.data);
                        }
                    }, function (response) {
                        //失败时执行 
                        console.log("CookieError" + response);
                        alert("8888");
                
                    });//请求用户id
                }
            });
            
            $scope.myCheck = false;
            $scope.names = [
                {
                    id:0,
                    name:'人工智能第二期',   //名字
                    mon:288,                //单价
                    num:2,                  //数量
                    checked:false
                },
                {
                    id:1,
                    name:'人工智能第三期',
                    mon:33338,
                    num:1,
                    checked:false
                }
            ];
            $scope.all = 0.00;
            $scope.allbuy = function(a){
                var Mon = 0;
                for(var i=0;i<$scope.names.length;i++){
                    $scope.names[i].checked=a;
                    Mon = Mon + $scope.names[i].mon*$scope.names[i].num;
                }
                if(a==true){
                    $scope.all = Mon;
                    $('.butt').addClass('acti');
                }else{
                    $scope.all = 0;
                    $('.butt').removeClass('acti');
                }
                
            };
            $scope.oneclick = function(id,b,check){
                if(check==true){
                    $scope.all = $scope.all - b;
                    $scope.names[id].checked=false;
                    $scope.myCheck=false;
                    var flag = false;
                    for(var i=0;i<$scope.names.length;i++){
                        if($scope.names[i].checked==true){
                            flag=true;
                        }
                    }
                    if(flag==false){
                        $('.butt').removeClass('acti');
                    }
                }else{
                    $scope.all = $scope.all + b;
                    $scope.names[id].checked=true;
                    $('.butt').addClass('acti');
                }
            };
            $scope.delete = function(id){
                $scope.names.splice(id,1);
                $scope.myCheck=false;
                for(var i=0;i<$scope.names.length;i++){
                    $scope.names[i].checked=false;
                    if(i>id||i==id){
                        $scope.names[i].id=$scope.names[i].id-1;
                    }
                }
                $scope.all = 0;
            }
        }
    }, function (response) {
        //失败时执行 
        console.log("CookieError" + response);
        alert("8888");

    });//请求用户id
    
}]);