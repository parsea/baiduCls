var timer = setInterval(function(){
	var divObjs = $("#content_left").children();
	divObjs.each(function(){
		if ($(this).html().indexOf('广告') > 0) {
			$(this).remove();
		}
	});	
},100);
setTimeout(function(){
	clearInterval(timer);
},1000);