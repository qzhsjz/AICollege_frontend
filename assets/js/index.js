var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
// $.ajax({
//     url:urlcookie,
//     type:'get',
//     data: {
        
//     },
//     xhrFields: {
//         withCredentials: true
//     },
//     crossDomain: true,
//     dataType: 'json',
//     success: function(data) {
//         if(data.error){
            
//           }else{
            

//           }


         
      
//     }
// });
    
    
var urlget = 'http://39.106.19.27:8080/course/all/';
var hotcourse;
var hotpage ;
var newpage ;
//  var hotpagelen;


 var newcourse;
//    = [
//     {
//       "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//       "title" : "Alfreds Futterkiste",
//       "teachername" : "Germany",
//       "value":"免费2"
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
//   var newpage = [1,2];
 
 var course = angular.module('Course', []);
//   course.controller("course", function($scope) {
//     //   alert(111);


//     $.ajax({
//         url:urlget,
//         type:'post',
//         data: {
         
//         },
//         dataType: 'json',
//         success: function(data) {
//          //  console.log(JSON.stringify(data));
//           if(data.error){
//            alert(data.error);
//          }else{
         
//              hotcourse = data;
            
//             //  hotpagelen = parseInt(data.length/9)+1;
          
//              // for(i=0;i<hotpagelen;i++){
//              //     hotpage[i]=i+1;
//              // }
//              // hotpage[0] = 1;
//             //  var len = 9;
//              hotpage = new Array(data.length);
//              console.log(hotpage);
//              for(i=0;i<len;i++){
//                  hotpage[i]=i+1;
//              }
//              console.log(JSON.stringify(hotcourse));
//              $scope.hot = hotcourse;
//              $scope.new = newcourse;
//              $scope.hotpage = hotpage;
//              $scope.newpage = newpage;
//              console.log(JSON.stringify($scope.hot));
//             //  console.log(JSON.stringify(hotcourse[0].teacherName));
            
//              $scope.hotpagechange = function(event) {
//                  var page = $(event.target).html();
//                      hotcourse = [
//                          {
//                            "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//                            "title" : "Alfreds Futterkiste",
//                            "teachername" : "Germany",
//                            "value":"免费3"
//                          }
                        
//                        ];
//                        $scope.hot = hotcourse;
//                  // alert(page);
//              };
//              $scope.newpagechange = function(event) {
//                  var page = $(event.target).html();
//                      newcourse = [
//                          {
//                            "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//                            "title" : "Alfreds Futterkiste",
//                            "teachername" : "Germany",
//                            "value":"免费3"
//                          }
                        
//                        ];
//                        $scope.new = newcourse;
//                  // alert(page);
//              };
            
//              $scope.chooseItem=function(index){
//                  var ch=$scope.new[index];
//                  var name=ch.teachername;
//                  //location.href = "components/course_buy/course_buy.html?&id=" + name;
//                  window.open("components/course_buy/course_buy.html?&id=" + name);
//              }
//          }
//         }
//      });


  
   
// });

course.controller('course', ['$scope', '$http', function ($scope, $http) {
    
    $http({
        method:'get', //get请求方式
        url:urlcookie,   //请求地址
        withCredentials:true,  
    }).then(function(response){
        if(response.error){
            alert(response.error);
        }else{
            console.log(JSON.stringify(response));
            $http({
                method:'post', //get请求方式
                url:urlget+1,   //请求地址
            
            }).then(function(response){
                //成功时执行
                // console.log(response);
                // console.log(JSON.stringify(response));
                
                // $scope.data = response.data; //得到请求的数据
         
                    
                        hotcourse = response.data.data;
                        newcourse = response.data.data;
                        
                    //  hotpagelen = parseInt(data.length/9)+1;
                    
                        // for(i=0;i<hotpagelen;i++){
                        //     hotpage[i]=i+1;
                        // }
                        // hotpage[0] = 1;
                    //  var len = 9;
                        hotpage = new Array(response.data.length);
                        newpage = new Array(response.data.length);
                        // console.log(hotpage);
                        for(i=0;i<response.data.length;i++){
                            hotpage[i]=i+1;
                            newpage[i]=i+1;
                        }
                        // console.log(JSON.stringify(hotcourse));
                        $scope.hot = hotcourse;
                        $scope.new = newcourse;
                        $scope.hotpage = hotpage;
                        $scope.newpage = newpage;
                        // console.log(JSON.stringify($scope.hot));
                    //  console.log(JSON.stringify(hotcourse[0].teacherName));
                        
                        $scope.hotpagechange = function(event) {
                            var page = $(event.target).html();
         
         
                            $http({
                                method:'post', //get请求方式
                                url:urlget,   //请求地址
                                data:{index:page}
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
                        // console.log(JSON.stringify(ch));
                            
                            var name=ch.teachername;
                            //location.href = "components/course_buy/course_buy.html?&id=" + name;
                            // window.open("components/course_buy/course_buy.html?&id=" + name);
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