
// var hotcourse = [
//     {
//       "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//       "title" : "Alfreds Futterkiste",
//       "teachername" : "Germany",
//       "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     },
//     {
//         "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//         "title" : "Alfreds Futterkiste",
//         "teachername" : "Germany",
//         "value":"免费"
//     }
    
//   ];



//   var hotpage = [1,2,3];
  
//   var course = angular.module('Course', []);
//   course.controller("course", function($scope) {
//     //   alert(111);
//     $scope.hot = hotcourse;
   
//     $scope.hotpage = hotpage;
//     $scope.hotpagechange = function(event) {
//         var page = $(event.target).html();
//             hotcourse = [
//                 {
//                   "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//                   "title" : "Alfreds Futterkiste",
//                   "teachername" : "Germany",
//                   "value":"免费3"
//                 }
                
//               ];
//               $scope.hot = hotcourse;
//         // alert(page);
//     };

//     $scope.chooseItem=function(index){
//         var ch=$scope.hot[index];
//         var name=ch.teachername;
//         //location.href = "components/course_buy/course_buy.html?&id=" + name;
//         window.open("../course_buy/course_buy.html?&id=" + name);
//     }

    
  
// });










var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';    
var urlget = 'http://39.106.19.27:8080/course/mystudy/';
var hotcourse;
var hotpage ;

 var course = angular.module('Course', []);
course.controller('course', ['$scope', '$http', function ($scope, $http) {
    
    $http({
        method:'get', //get请求方式
        url:urlcookie,   //请求地址
        withCredentials:true,  
    }).then(function(response){
        if(response.error){
            alert(response.error);
        }else{
            if(response.data.id){
                document.getElementById("signup").style.display="none";
                document.getElementById("headerimg").src=response.data.picture;
            }
            // console.log(JSON.stringify(response.data));
            $http({
                method:'post', //get请求方式
                url:urlget+1,   //请求地址
                withCredentials:true,  
            }).then(function(response){
                        hotcourse = response.data.data;
                        
                        hotpage = new Array(response.data.length);
                        for(i=0;i<response.data.length;i++){
                            hotpage[i]=i+1;
                            newpage[i]=i+1;
                        }
                        $scope.hot = hotcourse;
                        $scope.hotpage = hotpage;
                        $scope.hotpagechange = function(event) {
                            var page = $(event.target).html();
         
                            $http({
                                method:'post', //get请求方式
                                url:urlget+page,   //请求地址
                                withCredentials:true, 
                            }).then(function(response){
                                 hotcourse = response.data.data;
                                
                            },function(response){
                                //失败时执行 
                                console.log(response);
                            
                            });
                            
                                $scope.hot = hotcourse;
                            // alert(page);
                        };
                        $scope.newpagechange = function(event) {
                            var page = $(event.target).html();
                            $http({
                                method:'post', //get请求方式
                                url:urlget+page,   //请求地址
                                withCredentials:true, 
                            }).then(function(response){
                                newcourse = response.data.data;
                                
                            },function(response){
                                //失败时执行 
                                console.log(response);
                            
                            });
                                $scope.new = newcourse;
                            // alert(page);
                        };
                        
                        $scope.chooseItem=function(index){
                            var ch=$scope.new[index];
                        // console.log(JSON.stringify(ch.id));
                            
                            var id=ch.id;
                            //location.href = "components/course_buy/course_buy.html?&id=" + name;
                            window.open("components/course_buy/course_buy.html?&id=" + id);
                        }
                    
         
         
            },function(response){
                //失败时执行 
                console.log(response);
                alert("error");
            });


        }
        

        
    },function(response){
        //失败时执行 
        console.log("CookieError"+response);
    
    });



}]);