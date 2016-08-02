var lavalamp = {};

lavalamp.init = function(navObj, speed, color, height) {
	var navCore = navObj.children("ul");

	navCore.append("<li><div class='lavalamp'></div></li>");

	$(".lavalamp").css({position: "absolute",
						width: "0",
						height: height,
						background: color,
						top: navCore.children("li:first > a").offset()["top"],
						left: navCore.children("li:first > a").offset()["left"]
	});
	var navPosition = navCore.children("li:first").offset();
	navCore.children("li > a").hover(inMenuItem, function() {});

	function inMenuItem(e) {
	
		var totalWidth = $(e.target).width() + parseFloat($(e.target).css("padding-left")) + parseFloat($(e.target).css("padding-right")) + parseFloat($(e.target).css("border-left-width")) + parseFloat($(e.target).css("border-right-width"));
		
		$(".lavalamp").clearQueue()
		$(".lavalamp").animate({
			left: $(e.target).offset()["left"],
			width: totalWidth + "px"
		}, speed);

	navCore.mouseout(hideCursor);

	function hideCursor(e) {
		$(".lavalamp").animate({
			width: 0
		}, speed);
	}

}