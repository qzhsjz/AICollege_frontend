

$("#login").on('click',function(){
   
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var urlget = 'http://39.106.19.27:8080/user/login';
      $.ajax({
        url:urlget,
        type:'post',
        data: {
          'username': username,
          'password': password,
        },
        dataType: 'json',
        success: function(data) {
          console.log(JSON.stringify(data));
        }
    });
    // $.post(urlget,{ username: "John", password: "2pm" });
    });