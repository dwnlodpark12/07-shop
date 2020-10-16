/* $(".box1").click(function(){
	if( $(this).css("animation-play-state") == "paused") {
		$(this).css("animation-play-state","running");
	}
	else {
		$(this).css("animation-play-state","paused");
	}
}); */

$(".box1").click(function(e){
	if( $(this).css("animation-name") == "none") {
		$(this).css("animation-name","box1");
	}
	else {
		$(this).css("animation-name","unset");
	}
});