

    var urlget = 'http://39.106.19.27:8080/user/getinviteid';
    var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';

   


    var file = new Array(1) ;

    var parseURL = function(loc){                  
        var n1 = loc.length;//地址的总长度
        var n2 = loc.indexOf("=");//取得=号的位置
        var type = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
        return type;
    };

    //console.log(parseURL(location.href)); //传参

    
    
    
    var app = angular.module('myApp', []);
    app.controller('personCtrl',['$scope', '$http', function($scope, $http, $location) {
        var array;
        $http({
            method: 'get', //get请求方式
            url: urlget,   //请求地址
            withCredentials: true,
        }).then(function (response) {
            if (response.error) {
                alert("1111");
            } else {
                //console.log(JSON.stringify(response));
                $scope.names = response.data.list;
            }
        }, function (response) {
            //失败时执行 
            console.log("CookieError" + response);
            alert("8888");
    
        });//请求用户id
        // $.ajax({
        //     url:urlget,
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     crossDomain: true,
        //     type:'get',
        //     dataType: 'json',
        //     success: function(data) {
        //       console.log(JSON.stringify(data.list));
        //       array = data.list;
        //       //console.log($scope.names);
        //       if(data.error){
        //        alert(data.error);
        //     }else{
                
            
        //     }
        //     }
        // });
        
    }]);


        // $("#btn_uploadimg").click(function () {
        //     var fileObj = document.getElementById("FileUpload").files[0]; // js 获取文件对象
        //     if (typeof (fileObj) == "undefined" || fileObj.size <= 0) {
        //         alert("请选择图片");
        //         return;
        //     }
        //     var formFile = new FormData();
        //     formFile.append("action", "UploadVMKImagePath");  
        //     formFile.append("file", fileObj); //加入文件对象

        //     //第一种  XMLHttpRequest 对象
        //     //var xhr = new XMLHttpRequest();
        //     //xhr.open("post", "/Admin/Ajax/VMKHandler.ashx", true);
        //     //xhr.onload = function () {
        //     //    alert("上传完成!");
        //     //};
        //     //xhr.send(formFile);

        //     //第二种 ajax 提交

        //     var data = formFile;
        //     $.ajax({
        //         url: "/Admin/Ajax/VMKHandler.ashx",
        //         data: data,
        //         type: "Post",
        //         dataType: "json",
        //         cache: false,//上传文件无需缓存
        //         processData: false,//用于对data参数进行序列化处理 这里必须false
        //         contentType: false, //必须
        //         success: function (result) {
        //             alert("上传完成!");
        //         },
        //     })
        // })
    
