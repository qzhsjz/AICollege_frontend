var app = angular.module("myBuy", []);

//$location.search()需要此配置
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

app.controller("buyCtrl", function ($scope, $location) {
    $scope.name="11";
    $scope.value=2222;
    var searchStr = location.search;
    var searchArr = searchStr.split("&");
    var name = searchArr[0].replace("?name=", "");//string
    $scope.name=name;
    var value = searchArr[1].replace("value=", "");//string
    $scope.value=value; 
});