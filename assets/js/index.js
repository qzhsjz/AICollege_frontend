

 var urlget = 'http://39.106.19.27:8080/course';
 $.ajax({
   url:urlget,
   type:'post',
//    data: {
//      'username': username,
//      'password': password,
//    },
   dataType: 'json',
   success: function(data) {
     console.log(JSON.stringify(data));
   }
});

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

//   $(".hotpage").delegate("li","click",function(){
//     var x = $(this).children("a").text();
//     hotcourse = [
//         {
//           "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
//           "title" : "Alfreds Futterkiste",
//           "teachername" : "Germany",
//           "value":"免费3"
//         }
        
//       ];
//       console.log(JSON.stringify(hotcourse));
//   });

  var newcourse = [
    {
      "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
      "title" : "Alfreds Futterkiste",
      "teachername" : "Germany",
      "value":"免费2"
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
  var newpage = [1,2];
  
  var course = angular.module('Course', []);
  course.controller("course", function($scope) {
    //   alert(111);
    $scope.hot = hotcourse;
    $scope.new = newcourse;
    $scope.hotpage = hotpage;
    $scope.newpage = newpage;
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
    $scope.newpagechange = function(event) {
        var page = $(event.target).html();
            newcourse = [
                {
                  "img":"http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg",
                  "title" : "Alfreds Futterkiste",
                  "teachername" : "Germany",
                  "value":"免费3"
                }
                
              ];
              $scope.new = newcourse;
        // alert(page);
	};
});