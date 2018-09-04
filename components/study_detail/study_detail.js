var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';
var urlget = 'http://39.106.19.27:8080/course/judgeCourse/';
var ulrcomment = 'http://39.106.19.27:8080/course/getevaluation/'
var next_page;
var app = angular.module("myApp", []);
var isLearn;
var isLog;
var mediaURL;
var player;

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http, $location) {
    $http({
        method: 'get', //get请求方式
        url: urlcookie,   //请求地址
        withCredentials: true,
    }).then(function (response) {
        console.log(JSON.stringify(response));
        if (response.error) {
            //alert("网络错误，请刷新");
        } else {
            if (response.data.id) {
                isLog = "1";
                document.getElementById("signup").style.display = "none";
                document.getElementById("headerimg").src = response.data.picture;
                $(".mystudy").show();
                //显示状态改变
                $('.head').on('mouseenter', function () {
                    $('.bubble').css("display", "block");
                });
                $('.head').on('mouseleave', function () {
                    $('.bubble').css("display", "none");
                });
                $('.headimg').attr('href', '../my_detail/my_detail.html');
                $('.headimg').attr('target', '_blank');
            } else {
                isLog = "0";
                $(".mystudy").hide();
            }
            //console.log(JSON.stringify(response));
            if (response.data.id) {
                isLog = "1";
            } else {
                location.href = "../login/login.html";
            }
            var searchStr = location.search;
            var searchArr = searchStr.split("&");
            var id = searchArr[1].replace("id=", "");//string
            urlget = urlget + id;
            $http({
                method: 'post', //get请求方式
                url: urlget,   //请求地址
                withCredentials: true,
                //data:{index:1}
            }).then(function (response) {
                $('.span3').css("height", $('.span9').height());
                var course_info = response.data.course;
                //console.log(JSON.stringify(response.data.islearn));
                $scope.title = course_info.course_name;
                //console.log(JSON.stringify(course_info.course_name));
                $scope.course_info = course_info.course_info;
                $scope.teacher = course_info.teacherName;
                $scope.value = course_info.course_price;
                $scope.introduce = course_info.course_info;
                $scope.image = course_info.picPath;
                $scope.chapter = response.data.section;
                console.log(JSON.stringify($scope.chapter));
                $scope.play = $scope.chapter[0].videoPath;
                $scope.itemNumber = 0;
                $scope.section_id = $scope.chapter[$scope.itemNumber].section_id;
                //console.log(JSON.stringify("section_id:"+$scope.section_id));
                $scope.discuss;
                $scope.flv_load_mds=function(mediaDataSource) {
                    console.log('flv_load_mds ');
                    var element = document.getElementsByName('videoElement')[0];
                    if (typeof player == "undefined")
                    {
                        console.log("player undefined");
                    }
                    if (typeof player !== "undefined") {
                        if (player != null) {
                            player.unload();
                            player.detachMediaElement();
                            player.destroy();
                            player = null;
                        }
                    }
                    player = flvjs.createPlayer(mediaDataSource, {
                        enableWorker: false,
                        lazyLoadMaxDuration: 5 * 60,
                        seekType: 'range',
                    });
                    player.attachMediaElement(element);
                    player.load();
                    player.play();
                    console.log('flv_load_mds finish');
                }
                var playrate=document.getElementById("play-rate");
                playrate.addEventListener('change',function(){
                    var element = document.getElementsByName('videoElement')[0];
                    if (typeof player !== "undefined") {
                        if (player != null) {
                            player.playbackRate=this.value;
                            console.log("改变播放速度");
                            console.log(JSON.stringify(this.value));
                        }
                    }
                });

                var playrate1=document.getElementById("play-rate1");
                playrate1.addEventListener('change',function(){
                    var element = document.getElementsByName('videoElement')[0];
                    if (typeof player !== "undefined") {
                        if (player != null) {
                            element.playbackRate=this.value;
                            console.log("改变播放速度1");
                            console.log(JSON.stringify(this.value));
                        }
                    }
                });

                var playrate2=document.getElementById("play-rate2");
                playrate2.addEventListener('change',function(){
                    var element = document.getElementsByName('videoElement')[0];
                    if (typeof player !== "undefined") {
                        if (player != null) {
                            player.playbackRate=2;
                            console.log("改变播放速度2");
                            console.log(JSON.stringify(this.value));
                        }
                    }
                });

                var playrate3=document.getElementById("play-rate3");
                playrate3.addEventListener('change',function(){
                    var element = document.getElementsByName('videoElement')[0];
                    if (typeof player !== "undefined") {
                        if (player != null) {
                            element.playbackRate=2;
                            console.log("改变播放速度3");
                            console.log(JSON.stringify(this.value));
                        }
                    }
                });

                $scope.flv_load=function() {
                    console.log('flv_load');
                    console.log('isSupported: ' + flvjs.isSupported());
                    var index = $scope.play.indexOf("."); //得到"."在第几位
                    var mediaType = $scope.play;
                    mediaType = mediaType.substring(index + 1);
                    var mediaDataSource = {
                        type: mediaType
                    };
                    mediaDataSource['url'] = $scope.play;
                    console.log('MediaDataSource', mediaDataSource);
                    $scope.flv_load_mds(mediaDataSource);
                }

                

                $scope.flv_load();
                
                var url_c = ulrcomment + $scope.section_id;
                $http({
                    method: 'get', //get请求方式
                    url: url_c,   //请求地址
                    withCredentials: true,
                    //data:{index:1}
                }).then(function (response) {
                    console.log(JSON.stringify(response.data));
                    $scope.discuss=response.data.evaluation;
                }, function (response) {
                    console.log(JSON.stringify("获取评论失败"));
                });
               

                $scope.chooseItem = function (index) {
                    var ch = $scope.chapter[index];
                    $scope.itemNumber = index;
                    $scope.play = ch.videoPath;
                    $scope.section_id = $scope.chapter[$scope.itemNumber].section_id;
                    console.log(JSON.stringify('videoPath:'+$scope.play));
                    $scope.flv_load();
                    var url_com = ulrcomment + $scope.section_id;
                    $http({
                        method: 'get', //get请求方式
                        url: url_com,   //请求地址
                        withCredentials: true,
                        //data:{index:1}
                    }).then(function (response) {
                        console.log(JSON.stringify(response.data));
                        $scope.discuss=response.data.evaluation;
                    }, function (response) {
                        console.log(JSON.stringify("获取评论失败"));
                    });
                }
                //发表评论按钮点击事件
                $scope.comment="";
                $scope.publish_comment = function () {
                    var content = $scope.comment;
                    var videoID = $scope.section_id;
                    var push_comment={sid:videoID,str:content};
                    console.log(JSON.stringify(content));
                    var urlget = 'http://39.106.19.27:8080/course/addEvaluation';
                    $.ajax({
                        url:urlget,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        type:'get',
                        data: {
                          'sid': videoID,
                          'str': content,
                        },
                        dataType: 'json',
                        success: function(data) {
                          //console.log(JSON.stringify("添加评论返回内容："+data));
                            if (data.error) {
                                alert(data.error);
                            } else {
                                alert("评论添加成功");
                                var url_c = ulrcomment + $scope.section_id;
                                console.log(JSON.stringify("请求地址：" + url_c));
                                $http({
                                    method: 'get', //get请求方式
                                    url: url_c,   //请求地址
                                    withCredentials: true,
                                    //data:{index:1}
                                }).then(function (response) {
                                    console.log(JSON.stringify("返回评论：" + response.data.evaluation));
                                    $scope.discuss = response.data.evaluation;
                                }, function (response) {
                                    console.log(JSON.stringify("获取评论失败"));
                                });
                                document.getElementById("comment-text").value="";
                            }
                        }
                    });
                    console.log(JSON.stringify("添加评论成功"));              
                    
                }
                //发表评论按钮点击事件结束
                //console.log(JSON.stringify($scope.play));


            }, function (response) {
                //失败时执行 
                console.log(response);
                alert("网络连接出错，请刷新");
            });//请求课程信息





        }//else



    }, function (response) {
        //失败时执行 
        //console.log("CookieError" + response);
        alert("8888");

    });//请求用户id

}]);



