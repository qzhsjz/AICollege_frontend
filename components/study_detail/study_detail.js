var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$location) {
    //var searchStr = location.search;
    //var searchArr = searchStr.split("&");
    //var name = searchArr[1].replace("id=","");//string
    $scope.title="111";
    $scope.teacher="赵老师";
    $scope.image='http://www.runoob.com/wp-content/uploads/2014/06/angular.jpg';
    $scope.play="http://video.eastday.com/a/160731002439353075334.html?qid=01359";
    $scope.itemNumber=0;
    $scope.chooseItem=function(index){
        var ch=$scope.chapter[index];
        $scope.play=ch.item;
    }
    $scope.chapter = [
        {
          "name":"第一节",
          "item":"media/study.mp4",
        },
        {
            "name":"第二节",
            "item":"media/study.mp4",
        },
        {
            "name":"第三节",
            "item":"media/study.mp4",
        }
       
        
      ];

});

  