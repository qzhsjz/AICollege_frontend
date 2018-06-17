
var hotcourse = [
    {
      "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
      "title" : "Alfreds Futterkiste",
      "teachername" : "Germany",
      "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    },
    {
        "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
        "title" : "Alfreds Futterkiste",
        "teachername" : "Germany",
        "value":"免费"
    }
    
  ];



  var hotpage = [1,2,3];
  
  var course = angular.module('Course', []);
  course.controller("course", function($scope) {
    //   alert(111);
    $scope.hot = hotcourse;
   
    $scope.hotpage = hotpage;
    $scope.hotpagechange = function(event) {
        var page = $(event.target).html();
            hotcourse = [
                {
                  "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
                  "title" : "Alfreds Futterkiste",
                  "teachername" : "Germany",
                  "value":"免费3"
                }
                
              ];
              $scope.hot = hotcourse;
        // alert(page);
    };

    $scope.chooseItem=function(index){
        var ch=$scope.hot[index];
        var name=ch.teachername;
        //location.href = "components/course_buy/course_buy.html?&id=" + name;
        window.open("../course_buy/course_buy.html?&id=" + name);
    }

    
  
});