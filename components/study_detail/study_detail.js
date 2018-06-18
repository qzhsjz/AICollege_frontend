var urlget = 'http://39.106.19.27:8080/course/judgeCourse/';
var next_page;
var app = angular.module("myApp", []);
var isLearn;

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http,$location) {
    var searchStr = location.search;
    var searchArr = searchStr.split("&");
    var id = searchArr[1].replace("id=","");//string
    urlget=urlget+id;
    $http({
        method:'post', //get请求方式
        url:urlget,   //请求地址
        withCredentials:true,
        //data:{index:1}
    }).then(function(response){    
               // hotcourse = response.dict.course.course_name;
                
                //console.log(JSON.stringify(response));
                //$scope.id=id;
                var course_info=response.data.course[0];
                //console.log(JSON.stringify(response.data.islearn));
                $scope.title=course_info.course_name;
                //console.log(JSON.stringify(course_info.course_name));
                $scope.teacher=course_info.teacherName;
                $scope.value=course_info.course_price;
                $scope.introduce=course_info.course_info;
                $scope.image=course_info.picPath;
                $scope.chapter = response.data.section;
                console.log(JSON.stringify($scope.chapter));

                $scope.itemNumber=0;
                $scope.chooseItem=function(index){
                    var ch=$scope.chapter[index];
                    $scope.play=ch.videoPath;
                    console.log(JSON.stringify($scope.play));
                }
                $scope.play=$scope.chapter[0].videoPath;
                console.log(JSON.stringify($scope.play));
                
                
            },function(response){
                //失败时执行 
                console.log(response);
                alert("网络连接出错，请刷新");
            });
}]);



  