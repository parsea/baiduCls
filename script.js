function clsAd(){
	var divObjs = $("#content_left").children();
	divObjs.each(function(){
		if ($(this).html().indexOf('广告') > 0) {
			$(this).remove();
		}
	});	
}
window.onload = clsAd;