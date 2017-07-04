$(function(){
	function resize() {
		var $width = $(document.body).innerWidth();
		var $rem = $width/750;
		$("html, body").css({"font-size":$rem+"rem"});
	};
	$(window).resize(function(){
		resize();
	});
	resize();
	var music = document.getElementById("bgMusic");
	music.play();
	$(".yue").click(function(){
	if(music.paused){
		music.play();
		$(this).addClass("xuanzhuan");
		$(".yue").removeClass("pause").addClass("play");
	}else{music.pause();
	$(this).removeClass("xuanzhuan");
	$(".yue").removeClass("play").addClass("pause");}});
});
