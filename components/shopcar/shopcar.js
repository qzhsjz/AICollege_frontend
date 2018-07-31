var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.myCheck = false;
    $scope.names = [
        {
            id:0,
            name:'人工智能第二期',
            mon:288,
            num:2,
            checked:false
        },
        {
            id:1,
            name:'人工智能第三期',
            mon:33338,
            num:1,
            checked:false
        }
    ];
    $scope.all = 0.00;
    $scope.allbuy = function(a){
        var Mon = 0;
        for(var i=0;i<$scope.names.length;i++){
            $scope.names[i].checked=a;
            Mon = Mon + $scope.names[i].mon*$scope.names[i].num;
        }
        if(a==true){
            $scope.all = Mon;
            $('.butt').addClass('acti');
        }else{
            $scope.all = 0;
            $('.butt').removeClass('acti');
        }
        
    };
    $scope.oneclick = function(id,b,check){
        if(check==true){
            $scope.all = $scope.all - b;
            $scope.names[id].checked=false;
            $scope.myCheck=false;
            var flag = false;
            for(var i=0;i<$scope.names.length;i++){
                if($scope.names[i].checked==true){
                    flag=true;
                }
            }
            if(flag==false){
                $('.butt').removeClass('acti');
            }
        }else{
            $scope.all = $scope.all + b;
            $scope.names[id].checked=true;
            $('.butt').addClass('acti');
        }
    };
    $scope.delete = function(id){
        $scope.names.splice(id,1);
        $scope.myCheck=false;
        for(var i=0;i<$scope.names.length;i++){
            $scope.names[i].checked=false;
            if(i>id||i==id){
                $scope.names[i].id=$scope.names[i].id-1;
            }
        }
        $scope.all = 0;
    }
});