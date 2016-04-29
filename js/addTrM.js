
define(function(require,exports,module){
	function postAjax(id,num,iNow){
		if(!iNow){
			iNow = 0;
		}
		if(!num){
			num = 10;
		}
		$.ajax({
			url : 'php/addTr.php?num=' + num + '&start='+ iNow,
			data : 'GET',
			dataType : 'json',
			success : function(data){
				$(data).each(function(i,elem){
					addTr(id,elem);			
				})
			}
		});
		iNow++;
	}
	function addTr(id,data) {
		var $newLi = $('<li class="tr_items">'+	
							'<a href="####"></a>'+
							'<div class="item_top">'+
								'<div class="top_img">'+
									'<img src="img/jpg/tr_img' + data.tr_img + '.jpg" alt="tr0" />'+
								'</div>'+
								'<div class="top_ex">'+
									'<i class="icon icon-tours"></i><span>'+data.tr_kind+'</span><span class="ex_line">|</span><span>'+ data.tr_start +'</span>'+
								'</div>'+
								'<div class="top_price">'+
									'<div class="price_now">'+
										'￥<em>'+data.tr_price+'</em>起'+
									'</div>'+
									'<div class="saving">'+data.tr_save+'</div>'+
								'</div>'+
							'</div>'+
							'<div class="tr_info">'+
								'<h5 class="info_title">'+data.tr_title+'</h5>'+
								'<p class="info_describe">'+data.tr_des+'</p>'+
							'</div>'+
						'</li>');
		$('#'+id).append($newLi);
	}
	exports.addTr = addTr;
	exports.postAjax = postAjax;
});

