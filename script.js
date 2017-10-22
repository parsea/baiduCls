var divObjs = $("#content_left").children();
var str = "";
divObjs.each(function(){
	str = $(this).html();
	if (str.indexOf('广告') > 0) {
		$(this).remove();
	}
});