var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';

var urlget = 'http://39.106.19.27:8080/course/all/';
var hotcourse;
var hotpage ;
var newpage ;


 var newcourse;

 
 var course = angular.module('Course', []);


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
          location.href = "index.html";
         }
        }
    });
}

$('.find_button').on('click',function(){
    var search_text = $('#search_area').val();
    var urlsearch = 'http://39.106.19.27:8080/course/keysearch/'+search_text;
    $.ajax({
        url:urlsearch,
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
          location.href = "index.html";
         }
        }
    });
});

course.controller('course', ['$scope', '$http', function ($scope, $http) {
    
    $http({
        method:'get', //get请求方式
        url:urlcookie,   //请求地址
        withCredentials:true,  
    }).then(function(response){
        if(response.error){
            alert(response.error);
        }else{
            console.log(JSON.stringify(response.data.error));
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
                $('.headimg').attr('href','components/my_detail/my_detail.html'); 
                $('.headimg').attr('target','_blank');
            }else{
                $(".mystudy").hide();
            }
            // console.log(JSON.stringify(response.data));
            $http({
                method:'post', //get请求方式
                url:urlget+1,   //请求地址
                withCredentials:true,  
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
                        
                        $scope.chooseHotItem=function(index){
                            var ch=$scope.hot[index];
                        // console.log(JSON.stringify(ch.id));
                            
                            var id=ch.id;
                            //location.href = "components/course_buy/course_buy.html?&id=" + name;
                            window.open("components/course_buy/course_buy.html?&id=" + id);
                        }

                        $scope.chooseNewItem=function(index){
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