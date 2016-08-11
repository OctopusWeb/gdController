$(function(){
	$("#title_nav div").click(function(){
		$("#title_nav div").siblings($(this)).removeClass("selected");
		$(this).addClass("selected");
		var num = $("#title_nav div").index($(this));
		$("#content_content div").removeClass("selectedDiv");
		$("#content_content div").eq(num).addClass("selectedDiv");
	})
	
})
