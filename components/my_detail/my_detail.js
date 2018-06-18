
$(function(){
    var urlget = 'http://39.106.19.27:8080/user/changeinfo';
    var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';

    var nickname = "YDS";
    var email = "YDS";
    var QQ = "YDS";
    var weixin = "YDS";
    var UserID = "122345";
    var picsrc = "../login/images/weixin.png";


    var file = new Array(1) ;




    $.ajax({
        url:urlcookie,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        type:'get',
        dataType: 'json',
        success: function(data) {
        //   console.log(JSON.stringify(data));
          if(data.error){
           alert(data.error);
         }else{
            
            document.getElementById("nickname").value=data.username;
            document.getElementById("email").value=data.email;
            // document.getElementById("QQ").setAttribute("placeholder",QQ);
            // document.getElementById("weixin").setAttribute("placeholder",weixin);
            document.getElementById("UserID").innerHTML = data.id;
            document.getElementById("avarimgs").src=data.picture;
         }
        }
    });
    
    $("#save").on('click',function(){
        // var i=0;


        var fileObj = document.getElementById("xdaTanFileImg").files[0]; // js 获取文件对象
        if (typeof (fileObj) == "undefined" || fileObj.size <= 0) {
            alert("请选择图片");
            return;
        }
        var formFile = new FormData();
        formFile.append("action", "UploadVMKImagePath");  
        formFile.append("file", fileObj); //加入文件对象


        nickname = document.getElementById("nickname").value;
        email = document.getElementById("email").value;
        picsrc = document.getElementById("avarimgs").src;
        // file = document.getElementById('avarimgs').files[i];
        console.log(nickname,email,picsrc);
        
          $.ajax({
            url:urlget,
            type:'post',
            // data: {
            //   'username':nickname,
            //   'imagefile':formFile,
            //   'email':email
            // },
            data:formFile,
            dataType: 'json',
            cache: false,//上传文件无需缓存
            processData: false,//用于对data参数进行序列化处理 这里必须false
            contentType: false, //必须
            success: function(data) {
              
              if(data.error){
               alert(data.error);
             }else{
                location.href = "../../index.html";
             }
            }
        });
        
        });


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
    
 })