var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
var urlnew =  'http://39.106.19.27:8080/message/getmsg';
var app = angular.module('myApp', []);

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
        }
        $http({
            method: 'get', //get请求方式
            url: urlnew,   //请求地址
            withCredentials: true,
        }).then(function (response) {
            //console.log(JSON.stringify(response.data.Message));
            $scope.box1 = true;
            $scope.Message = response.data.Message;
            $scope.Announcement = response.data.Announcement;
            if(response.data.Announcement.length==0){
                $('.Webinf').removeClass('dis');
                $scope.toggle1 = function() {
                    $('.list2').removeClass('active');
                    $('.list1').addClass('active');
                    $('.Classinf').addClass('dis');
                    $('.Webinf').removeClass('dis');
                    $('.Interactioninf').addClass('dis');
                };
            }else{
                $scope.toggle1 = function() {
                    console.log(2);
                    $('.list1').addClass('active');
                    $('.list2').removeClass('active');
                    $('.Classinf').removeClass('dis');
                    $('.Webinf').addClass('dis');
                    $('.Interactioninf').addClass('dis');
                };
            }
            if(response.data.Message.length==0){
                $scope.toggle2 = function() {
                    console.log(1);
                    $('.list1').removeClass('active');
                    $('.list2').addClass('active');
                    $('.Classinf').addClass('dis');
                    $('.Webinf').removeClass('dis');
                    $('.Interactioninf').addClass('dis');
                };
            }else{
                $scope.toggle2 = function() {
                    $('.list1').removeClass('active');
                    $('.list2').addClass('active');
                    $('.Classinf').addClass('dis');
                    $('.Webinf').addClass('dis');
                    $('.Interactioninf').removeClass('dis');
                };
            }
            // $scope.toggle1 = function() {
            //     $('.list1').addClass('active');
            //     $('.list2').removeClass('active');
            //     $('.list3').removeClass('active');
            //     $('.Classinf').removeClass('dis');
            //     $('.Webinf').addClass('dis');
            //     $('.Interactioninf').addClass('dis');
            // };
            // $scope.toggle2 = function() {
            //     $('.list1').removeClass('active');
            //     $('.list2').addClass('active');
            //     $('.list3').removeClass('active');
            //     $('.Classinf').addClass('dis');
            //     $('.Webinf').removeClass('dis');
            //     $('.Interactioninf').addClass('dis');
            // };
            // $scope.toggle3 = function() {
            //     $('.list1').removeClass('active');
            //     $('.list2').removeClass('active');
            //     $('.list3').addClass('active');
            //     $('.Classinf').addClass('dis');
            //     $('.Webinf').addClass('dis');
            //     $('.Interactioninf').removeClass('dis');
            // };
        }, function (response) {
            //失败时执行 
            console.log("CookieError" + response);
            alert("88881");
        
        });//请求用户id
        
}, function (response) {
    //失败时执行 
    console.log("CookieError" + response);
    alert("8888");

});//请求用户id
}]);