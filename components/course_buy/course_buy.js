var myBuy = angular.module("myBuy", []);
myBuy.controller("buyCtrl", function($scope) {
    $scope.name="人工智能";
    $scope.teacher="赵老师";
    $scope.value=0;
    $scope.introduce="人工智能（Artificial Intelligence），英文缩写为AI。它是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。\n人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。人工智能从诞生以来，理论和技术日益成熟，应用领域也不断扩大，可以设想，未来人工智能带来的科技产品，将会是人类智慧的“容器”。人工智能可以对人的意识、思维的信息过程的模拟。人工智能不是人的智能，但能像人那样思考、也可能超过人的智能。\n人工智能是一门极富挑战性的科学，从事这项工作的人必须懂得计算机知识，心理学和哲学。人工智能是包括十分广泛的科学，它由不同的领域组成，如机器学习，计算机视觉等等，总的说来，人工智能研究的一个主要目标是使机器能够胜任一些通常需要人类智能才能完成的复杂工作。但不同的时代、不同的人对这种“复杂工作”的理解是不同的。 [1]  2017年12月，人工智能入选“2017年度中国媒体十大流行语”。";
    $scope.img="http://7zn2fy.com1.z0.glb.clouddn.com/apicloud/ffc1a309e40d8272b5bf0975170762c7.jpg";

    $scope.chapter = [
        {
          "name":"第一节"
        },
        {
            "name":"第二节",
        },
        {
            "name":"第三节",
        }
       
        
      ];
      $scope.go_to = function () {
        var name = "course_buy";
        var value =$scope.value;
        if(value>0)location.href = "../pay_page/pay_page.html?&name=" + name + "&value=" + value;
        else alert("课程已添加到我的学习，请点击导航栏 “我的学习” 开始学习 ");
    }

});