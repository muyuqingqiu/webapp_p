define(function(require,exports,module){
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
