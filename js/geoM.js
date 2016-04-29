define(function(require,exports,module){
	//读取和设定地理信息的模块	
	var cookie = require('cookie');
	function setGeo(obj){ //传入的需要是jq对象
		if(cookie.getCookie('geo_ad')){
			obj.html(cookie.getCookie('geo_ad'));
		}else{				
			plus.geolocation.getCurrentPosition( function (p) {	
				var city = p.address.city;
				obj.html(city);
				cookie.setCookie('geo_ad',city,10);	
			}, function (e) {
				alert('地理信息获取失败，请重新获取');
			} );
		}
		
	}
	exports.setGeo = setGeo;
})


