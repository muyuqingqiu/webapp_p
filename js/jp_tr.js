// JavaScript Document
$(function(){
	
$('#banner-slideul').on('touchmove',function(ev){
	ev.preventDefault();
});

var viewW = document.documentElement.clientWidth;
var viewH = document.documentElement.clientHeight;
var oUl = document.getElementById('banner-slideul');
var aLi = oUl.getElementsByTagName('li');
var disX = 0;
var downX = 0;
var iNow = 0;
var downTime = 0;

oUl.addEventListener('touchstart',fnStart,false);

 function fnStart(ev){
	var touch = ev.changedTouches[0];
	disX = touch.pageX - oUl.offsetLeft;
	downX =  touch.pageX;
	downTime = (new Date()).getTime();
	        this.addEventListener('touchmove',fnMove,false);
			this.addEventListener('touchend',fnEnd,false);
function fnMove(ev){
		var touch = ev.changedTouches[0];
		oUl.style.left = touch.pageX - disX + 'px';
	};
function fnEnd(ev){
	    this.removeEventListener('touchmove',fnMove,false);
		this.removeEventListener('touchend',fnEnd,false);
		var touch = ev.changedTouches[0];
		
		var upTime = (new Date()).getTime();
		
		if(touch.pageX < downX){  
			//alert('←');
			if(iNow != aLi.length-1 && (downX - touch.pageX > viewW/2 || upTime - downTime < 200 ) ){
				iNow++;
			}
			startMove(oUl,{left : - iNow * viewW },500,'linear');
		}
		else if(touch.pageX > downX){
			//alert('→');
			if(iNow != 0 && (touch.pageX - downX > viewW/2 || upTime - downTime < 200 )){
				iNow--;
			}
			startMove(oUl,{left : - iNow  * viewW },500,'linear');
		}
	};
	return false;
};

})