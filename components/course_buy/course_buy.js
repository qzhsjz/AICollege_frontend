var urlcourse = 'http://39.106.19.27:8080/course/judgeCourse/';
var urlAdd = 'http://39.106.19.27:8080/course/addtostudy/'
var next_page;
var myBuy = angular.module("myBuy", []);
var isLearn;
var isLog;
var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
var quit = function () {
    var urlquit = 'http://39.106.19.27:8080/user/logout';
    $.ajax({
        url: urlquit,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(JSON.stringify(data));
            if (data.error) {
                alert(data.error);
            } else {
                location.href = "../../index.html";
            }
        }
    });
}

myBuy.controller('buyCtrl', ['$scope', '$http', function ($scope, $http, $location) {
    $http({
        method: 'get', //get请求方式
        url: urlcookie,   //请求地址
        withCredentials: true,
    }).then(function (response) {
        if (response.error) {
            alert("网络错误，请刷新网页");
        } else {
            console.log(JSON.stringify(response));
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

            var searchStr = location.search;
            var searchArr = searchStr.split("&");
            var id = searchArr[1].replace("id=", "");//string
            urlcourse = urlcourse + id;
            urlAdd = urlAdd + id;
            var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
            $http({
                method: 'post', //get请求方式
                url: urlcourse,   //请求地址
                withCredentials: true,
                //data:{index:1}
            }).then(function (response) {
                console.log(JSON.stringify("1111111"));
                console.log(JSON.stringify(response));
                isLearn=true;
                var course_info = response.data.course;
                isLearn = response.data.islearn;
                
                //console.log(JSON.stringify(response.data.islearn));
                $scope.name = course_info.course_name;
                //console.log(JSON.stringify(course_info.course_name));
                $scope.teacher = course_info.teacherName;
                $scope.value = course_info.course_price;
                if($scope.value==0)
                {
                    $scope.value_dis = "免费";
                }
                else
                {
                    $scope.value_dis = "￥"+ $scope.value;
                }
                $scope.introduce = course_info.course_info;
                $scope.img = course_info.picPath;
                $scope.chapter = response.data.section;
                if (isLearn == false) {

                    $scope.design = "开始学习";
                    if (isLog == "1") {
                        if ($scope.value > 0) {
                            next_page = "../pay_page/pay_page.html?&id=" + id;
                        }
                        else {

                            next_page = "../study_detail/study_detail.html?&id=" + id;
                        }
                    }
                    else {
                        next_page = "../login/login.html";
                    }

                }
                else {
                    document.getElementById("shop_car").style.display = "none";
                    $scope.design = "继续学习";
                    next_page = "../study_detail/study_detail.html?&id=" + id;
                }

                //console.log(JSON.stringify(next_page));

                $scope.go_to = function () {
                    var name = "course_buy";
                    var value = $scope.value;
                    console.log(urlAdd);
                    if ($scope.value == 0 && isLog == "1" && isLearn == false) {
                        $http({
                            method: 'post', //get请求方式
                            url: urlAdd,   //请求地址
                            withCredentials: true,
                            //data:{index:1}
                        }).then(function (response) {
                            console.log(JSON.stringify(response));

                        }, function (response) {
                            //失败时执行 
                            console.log(response);
                            alert("网络连接出错，请刷新");
                        });
                        //if(value>0)location.href = next_page;
                        
                    }
                    location.href=next_page;
                }
                $scope.add_shopcar=function(){

                }

            }, function (response) {
                //失败时执行 
                console.log(response);
                //alert("9999");
            });
        }



    }, function (response) {
        //getuserinfo失败时执行 
        console.log(JSON.stringify(response));
        console.log(JSON.stringify("获取用户信息失败"));
        //alert("8888");

    });
    
}]);