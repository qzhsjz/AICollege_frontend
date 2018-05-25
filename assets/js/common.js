(function (window, undefined) {
	// 定义项目环境
	var env = (function (env) {
		if (env == 'development') { // 当前是开发环境
			return 'development';
		} else {
			console.log = console.error = console.warn = function () {};
			return 'production';
		}
	})('development'); // production

	// 分配命名空间
	var namespace = function (name, phone) {
		var Obj = Obj || {};
		Obj.component = {};
		Obj.util = {};
		Obj.server = {};
		Obj.env = env;
		Obj.developer = {
			name: name,
			tel: phone
		};
		return Obj;
	};

	window.YL = namespace('YL', '1');
	window.BXF = namespace('BXF', '1');

	// API 接口地址的集合
	window.templateUrl = {
		
	};

	//获取系统时间
	window.nowtime= new Date().getTime();

	//配置APICLOUD接口验证KEY，说明地址http://docs.apicloud.com/Cloud-API/push-cloud-api
	window.headers = {
		"X-APICloud-AppId": "A6061305551718",
		 "X-APICloud-AppKey":  sha1('A6061305551718' + 'UZ' + '2BC26BE0-6A79-21DC-AC96-C45232CA5164' + 'UZ' + nowtime) + '.' +  nowtime
	};

	//定义window挂载变量存储用户信息
	window.online_user = new Object();

	//监听刷新时间

	Date.prototype.Format = function(fmt)   
	{ //author: meizz   
	  var o = {   
	    "M+" : this.getMonth()+1,                 //月份   
	    "d+" : this.getDate(),                    //日   
	    "h+" : this.getHours(),                   //小时   
	    "m+" : this.getMinutes(),                 //分   
	    "s+" : this.getSeconds(),                 //秒   
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
	    "S"  : this.getMilliseconds()             //毫秒   
	  };   
	  /***判断发表时间与当前时间***/
	  if(/(y+)/.test(fmt))   
	    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
	    if(new RegExp("("+ k +")").test(fmt))   
	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	  return fmt;    
	} 
})(window);