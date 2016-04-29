

turn();//轮播图函数



function turn(){
	var $oParent = $('#bigPic');
	var $aLi = $('#bigPic li');
	var $zParent = $('#small');
	var $zLi = $('#small li');
	var $iNow = 0;
	var $iNow2 = 0;
	var timer = null;
	var $oWidth = $aLi.eq(0).width();
	
	timer = setInterval(function(){
		if($iNow == $aLi.length-1){
			$aLi.eq(0).css('position','relative');
			$aLi.eq(0).css('left',$oParent.width()+'px');
			$iNow = 0;
		}
		else{
			$iNow++;	
		}
		if($iNow2 == $aLi.length){
			$aLi.eq(0).css('position','static');
			$oParent.css('left',0);
			$iNow2 = 0;
		}
		$zLi.attr('class','');
		$iNow2++;
		$zLi.eq($iNow).attr('class','change');
		$oParent.animate({left:-$iNow2*$oWidth},400,'linear');
	},2000)
}



change();//改变viewport函数
function change(){//通过获取像素比和视口宽来设置 缩放比例和html的font-size的值
	var i = 1/window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+i+',minimum-scale='+i+',maximum-scale='+i+',user-scalable=no">');
	var iWidth = document.documentElement.clientWidth;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth/6.4 +'px';
}





