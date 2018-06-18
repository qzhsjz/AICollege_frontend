
$(function(){
    var urlget = 'http://39.106.19.27:8080/user/changeinfo';
    var urlcookie = 'http://39.106.19.27:8080/user/getuserinfo';

    var nickname = "YDS";
    var email = "YDS";
    var QQ = "YDS";
    var weixin = "YDS";
    var UserID = "122345";
    var picsrc = "../login/images/weixin.png";
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
   
        nickname = document.getElementById("nickname").value;
        email = document.getElementById("email").value;
        picsrc = document.getElementById("avarimgs").src;
        console.log(nickname,email,picsrc);
        
          $.ajax({
            url:urlget,
            type:'post',
            data: {
              'username':nickname,
              'userimg':picsrc,
              'email':email
            },
            dataType: 'json',
            success: function(data) {
              console.log(JSON.stringify(data));
              if(data.error){
               alert(data.error);
             }else{
                location.href = "../../index.html";
             }
            }
        });
        
        });
    
 })