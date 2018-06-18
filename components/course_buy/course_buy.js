var urlget = 'http://39.106.19.27:8080/course/';
var next_page;
var myBuy = angular.module("myBuy", []);
var isLearn;

myBuy.controller('buyCtrl', ['$scope', '$http', function ($scope, $http,$location) {
    var searchStr = location.search;
    var searchArr = searchStr.split("&");
    var id = searchArr[1].replace("id=","");//string
    urlget=urlget+id;
    $http({
        method:'post', //get请求方式
        url:urlget,   //请求地址
        //data:{index:1}
    }).then(function(response){    
               // hotcourse = response.dict.course.course_name;
                
                console.log(JSON.stringify(response));
                //$scope.id=id;
                var course_info=response.data.course[0];
                isLearn=response.data.islearn;
                //console.log(JSON.stringify(response.data.islearn));
                $scope.name=course_info.course_name;
                //console.log(JSON.stringify(course_info.course_name));
                $scope.teacher=course_info.teacherName;
                $scope.value=course_info.course_price;
                $scope.introduce=course_info.course_info;
                $scope.img=course_info.picPath;
                $scope.chapter = response.data.section;
                if(isLearn==false)
                {
                    $scope.design="开始学习";
                    if($scope.value>0)
                    {
                        next_page="../pay_page/pay_page.html?&id="+id;
                    }
                    else
                    {
                        next_page="../study_detail/study_detail.html?&id="+id;
                    }
                }
                else
                {
                    $scope.design="继续学习";
                    next_page="../pay_page/pay_page.html?&id="+"1";
                }
                
                $scope.go_to = function () {
                    var name = "course_buy";
                    var value =$scope.value;
                    if(value>0)location.href = next_page;
                    else location.href=next_page;
                }
            },function(response){
                //失败时执行 
                console.log(response);
                alert("网络连接出错，请刷新");
            });
}]);