
$(function(){
    var urlget = 'http://39.106.19.27:8080/user/picupload';
//     $.ajax({
//       url:urlget,
//       type:'post',
//       data: {
          
//       },
//       dataType: 'json',
//       success: function(data) {
//         console.log(JSON.stringify(data));
//         if(data.error){
//          alert(data.error);
//        }else{
//           location.replace(document.referrer);
//        }
//       }
//   });
    var nickname = "YDS";
    var email = "YDS";
    var QQ = "YDS";
    var weixin = "YDS";
    var UserID = "122345";
    var picsrc = "../login/images/weixin.png";
    document.getElementById("nickname").setAttribute("placeholder",nickname);
    document.getElementById("email").setAttribute("placeholder",email);
    document.getElementById("QQ").setAttribute("placeholder",QQ);
    document.getElementById("weixin").setAttribute("placeholder",weixin);
    document.getElementById("UserID").innerHTML = UserID;
    document.getElementById("avarimgs").src=picsrc;
    
    
 })