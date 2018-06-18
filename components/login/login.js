

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
          if(data.error){
           alert(data.error);
         }else{
          location.href = "../../index.html";
         }
        }
    });
    // $.post(urlget,{ username: "John", password: "2pm" });
    });

    
    $("#validation").on('click',function(){
   
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
              console.log(JSON.stringify(data));
              if(data.error){
               alert(data.error);
             }else{
              location.href = "login.html";
             }
            }
        });
        // $.post(urlget,{ username: "John", password: "2pm" });
        });