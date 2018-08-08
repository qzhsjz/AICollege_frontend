﻿
var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
var urlget = 'http://39.106.19.27:8080/course/';
var next_page;
var app = angular.module("myApp", []);
var isLearn;


app.controller('myCtrl', ['$scope', '$http', function ($scope, $http, $location) {
    $http({
        method: 'get', //get请求方式
        url: urlcookie,   //请求地址
        withCredentials: true,
    }).then(function (response) {
        if (response.error) {
            alert("1111");
        } else {
            if (response.data.id) {
                isLog = "1";
                document.getElementById("signup").style.display = "none";
                document.getElementById("headerimg").src = response.data.picture;
                $(".mystudy").show();
                //显示状态改变
                $('.head').on('mouseenter', function () {
                    $('.bubble').css("display", "block");
                });
                $('.head').on('mouseleave', function () {
                    $('.bubble').css("display", "none");
                });
                $('.headimg').attr('href', '../my_detail/my_detail.html');
                $('.headimg').attr('target', '_blank');
            } else {
                isLog = "0";
                $(".mystudy").hide();
            }
            //console.log(JSON.stringify(response));
            if (response.data.id) {
                isLog = "1";
            } else {
                location.href = "../login/login.html";
            }
            var searchStr = location.search;
            var searchArr = searchStr.split("&");
            var id = searchArr[1].replace("id=", "");//string
            urlget = urlget + id;
            $http({
                method: 'post', //get请求方式
                url: urlget,   //请求地址
                withCredentials: true,
                //data:{index:1}
            }).then(function (response) {
                $('.span3').css("height",$('.span9').height());
                var course_info = response.data.course;
                //console.log(JSON.stringify(response.data.islearn));
                $scope.title = course_info.course_name;
                //console.log(JSON.stringify(course_info.course_name));
                $scope.course_info = course_info.course_info;
                $scope.teacher = course_info.teacherName;
                $scope.value = course_info.course_price;
                $scope.introduce = course_info.course_info;
                $scope.image = course_info.picPath;
                $scope.chapter = response.data.section;
                $scope.discuss=[
                {
                    head:"img/1.jpg",
                    name:"swift",
                    comment:"很棒的课程！"

                },
                {
                    head:"img/1.jpg",
                    name:"swift",
                    comment:"很棒的课程！"

                },

            ];
                $scope.play = $scope.chapter[0].videoPath;
                $scope.itemNumber = 0;
                $scope.flv_load = function () {
                    console.log('isSupported: ' + flvjs.isSupported());
                    var index = $scope.play.indexOf("."); //得到"."在第几位
                    var addr = $scope.play;
                    addr = addr.substring(index + 1);
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', $scope.play, true);
                    xhr.onload = function (e) {
                        var player;
                        var element = document.getElementsByName('videoElement')[0];
                        if (typeof player !== "undefined") {
                            if (player != null) {
                                player.unload();
                                player.detachMediaElement();
                                player.destroy();
                                player = null;
                            }
                        }

                        player = flvjs.createPlayer({
                            type: addr,
                            url: $scope.play
                        });
                        player.attachMediaElement(element);
                        player.load();
                    }
                    xhr.send();
                }
                
                $scope.chooseItem = function (index) {
                    var ch = $scope.chapter[index];
                    $scope.play = ch.videoPath;
                    //console.log(JSON.stringify($scope.play));
                    $scope.flv_load();
                }
                $scope.flv_load();
                //console.log(JSON.stringify($scope.play));


            }, function (response) {
                //失败时执行 
                console.log(response);
                alert("网络连接出错，请刷新");
            });//请求课程信息





        }//else



    }, function (response) {
        //失败时执行 
        console.log("CookieError" + response);
        alert("8888");

    });//请求用户id

}]);



