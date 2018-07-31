var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.box1 = true;
    $scope.toggle1 = function() {
        $('.list1').addClass('active');
        $('.list2').removeClass('active');
        $('.list3').removeClass('active');
        $('.Classinf').removeClass('dis');
        $('.Webinf').addClass('dis');
        $('.Interactioninf').addClass('dis');
    };
    $scope.toggle2 = function() {
        $('.list1').removeClass('active');
        $('.list2').addClass('active');
        $('.list3').removeClass('active');
        $('.Classinf').addClass('dis');
        $('.Webinf').removeClass('dis');
        $('.Interactioninf').addClass('dis');
    };
    $scope.toggle3 = function() {
        $('.list1').removeClass('active');
        $('.list2').removeClass('active');
        $('.list3').addClass('active');
        $('.Classinf').addClass('dis');
        $('.Webinf').addClass('dis');
        $('.Interactioninf').removeClass('dis');
    };
});