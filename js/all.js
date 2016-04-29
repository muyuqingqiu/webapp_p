
define('cookie',function(require,exports,module){
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

define('tellPhone',function(require,exports,module){
	//直接打电话的模块
	function tell(num){ //传入手机号码
		var Uri = plus.android.importClass("android.net.Uri");
		var Intent = plus.android.importClass("android.content.Intent");
		var number = new Uri.parse('tel:' + num);
		var callIntent = new Intent(Intent.ACTION_CALL, number);//这步是关键，ACTION_CALL而不是ACTION_DIAL
		plus.android.runtimeMainActivity().startActivity(callIntent);
	}
	exports.tell = tell;
})

define('geoM',['cookie'],function(require,exports,module){
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




//define('addTrM',function(require,exports,module){
//	function postAjax(id,num,iNow){
//		if(!iNow){
//			iNow = 0;
//		}
//		if(!num){
//			num = 10;
//		}
//		$.ajax({
//			url : 'php/addTr.php?num=' + num + '&start='+ iNow,
//			data : 'GET',
//			dataType : 'json',
//			success : function(data){
//				$(data).each(function(i,elem){
//					addTr(id,elem);			
//				})
//			}
//		});
//		iNow++;
//	}
//	function addTr(id,data) {
//		var $newLi = $('<li class="tr_items">'+	
//							'<a href="####"></a>'+
//							'<div class="item_top">'+
//								'<div class="top_img">'+
//									'<img src="img/jpg/tr_img' + '0' + '.jpg" alt="tr0" />'+
//								'</div>'+
//								'<div class="top_ex">'+
//									'<i class="icon icon-tours"></i><span>'+'跟团游'+'</span><span class="ex_line">|</span><span>'+ '大连出发 '+'</span>'+
//								'</div>'+
//								'<div class="top_price">'+
//									'<div class="price_now">'+
//										'￥<em>'+ '1079' +'</em>起'+
//									'</div>'+
//									'<div class="saving">'+'立省￥400'+'</div>'+
//								'</div>'+
//							'</div>'+
//							'<div class="tr_info">'+
//								'<h5 class="info_title">'+'<华东五市双飞6日游>两人减800，夜宿水乡乌镇，宋城千古情主题酒店'+'</h5>'+
//								'<p class="info_describe">'+'华东五市+水乡 华东 乌镇 古镇古村 旅馆客栈'+'</p>'+
//							'</div>'+
//						'</li>');
//		$('#'+id).append($newLi);
//	}
//	exports.addTr = addTr;
//	exports.postAjax = postAjax;
//});


define('all',['addTrM','geoM','tellPhone'],function(require,exports,module){
    var tr = require('addTrM');
    var geo = require('geoM');
    var tell = require('tellPhone');
    geo.setGeo($('.place a'));
    $('.phone').click(function(){
        tell.tell('10086');
    });
    
//  document.addEventListener( "plusscrollbottom", onScrollBottom, false );
//  function onScrollBottom() {
//      tr.addTr('trList');
//  }
});

