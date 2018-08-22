
function chkvalue(txt) {

  var username = txt.value;
  // console.log(username);
  if(txt.value==""){
    // alert("不能为空!");
    $('.toast').html("邮箱不能为空！");
    $('.toast').css("display","block");
    $('.toast').css("color","red");
    $('.email').css("border","0.5px solid red");

  } else{
  var urlget = 'http://39.106.19.27:8080/user/chkemail';
  $.ajax({
    url:urlget,
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    type:'post',
    data: {
      'email': username,
    },
    dataType: 'json',
    success: function(data) {
      // console.log(JSON.stringify(data));
      if(data.error){
      //  alert(data.error);
      $('.toast').html(data.error);
      $('.toast').css("display","block");
      $('.toast').css("color","red");
      $('.email').css("border","0.5px solid red");
     }else{
      $('.toast').css("display","none");
      $('.email').css("border","1px solid #ccc");
     }
    }
});
}
}

$("#login").on('click',function(){
   
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var urlget = 'http://39.106.19.27:8080/user/login';
      $.ajax({
        url:urlget,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        type:'get',
        data: {
          'username': username,
          'password': password,
        },
        dataType: 'json',
        success: function(data) {
          console.log(JSON.stringify(data));
          if(data.emailVerified){
           
            // console.log("成功登陆");
            location.href = "../../index.html";
         }else{
          alert(data.error);
         }
        }
    });
    // $.post(urlget,{ username: "John", password: "2pm" });
    });

    
    $("#validation").on('click',function(){
      var tip = "正在加载中，请稍后...";
    
      ZENG.msgbox.show(tip, 6);
      $('#overlay').css("display","block");
    
        var usernamesign = $("input[name='usernamesign']").val();
        var passwordsign = $("input[name='passwordsign']").val();
        var email = $("input[name='email']").val();
        var invitecode = $("input[name='invitecode']").val();
        // console.log(passwordsign);
        var urlget = 'http://39.106.19.27:8080/user/register';
          $.ajax({
            url:urlget,
            type:'post',
            data: {
              'username': usernamesign,
              'password': passwordsign,
              'email':email,
              'refer_id':invitecode
            },
            dataType: 'json',
            success: function(data) {
              // console.log(JSON.stringify(data));
              if(data.error){
                
               ZENG.msgbox._hide();
               alert(data.error);
               $('#overlay').css("display","none");
             }else{
              ZENG.msgbox._hide();
              $('#overlay').css("display","none");

                location.replace(document.referrer);
                location.href = "../../components/login/login.html";
             }
            }
        });
        // $.post(urlget,{ username: "John", password: "2pm" });
        });