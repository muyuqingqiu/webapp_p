define(function(require,exports,module){
	//存cookie
	function setCookie(key,value,times){
		var oDate = new Date();
		oDate.setDate( oDate.getDate() + times );
		document.cookie = key + '=' + value + ';expires=' + oDate;
	}
	//取cookie
	function getCookie(key){
		var sCookie = document.cookie;
		var a = sCookie.split('; ');
		for(var i=0;i<a.length;i++){
			var b = a[i].split('=');
			if(b[0]==key){
				return b[1];
			}
		}
	}

	//删除cookie
	function delCookie(key){
		setCookie(key,'',-1);
	}
	exports.setCookie = setCookie;
	exports.getCookie = getCookie;
	exports.delCookie = delCookie;
})
