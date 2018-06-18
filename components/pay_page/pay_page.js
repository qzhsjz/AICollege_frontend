
//$location.search()需要此配置
/*app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);*/


var urlget = 'http://39.106.19.27:8080/course/';
var next_page;
var myBuy = angular.module("myBuy", []);
var isLearn;

myBuy.controller('buyCtrl', ['$scope', '$http', function ($scope, $http,$location) {
    var searchStr = location.search;
    var searchArr = searchStr.split("&");
    var id = searchArr[1].replace("id=","");//string
    console.log(JSON.stringify(id));
    urlget=urlget+id;
    $http({
        method:'post', //get请求方式
        url:urlget,   //请求地址
        //data:{index:1}
    }).then(function(response){    
               // hotcourse = response.dict.course.course_name;
               var course_info=response.data.course[0];
               isLearn=response.data.islearn;
               //console.log(JSON.stringify(response.data.islearn));
               $scope.name=course_info.course_name;
               //console.log(JSON.stringify(course_info.course_name));
               $scope.value=course_info.course_price;

                console.log(JSON.stringify(response));

            },function(response){
                //失败时执行 
                console.log(response);
                alert("网络连接出错，请刷新");
            });
}]);