$(function() {
	$('body').css({'width':screen.width,'height':document.body.clientHeight});
	$(window, document).resize(function() {
		resize();
	});
});

function resize() {
	resizeFull();
	console.log(window.screen.display);
}

function resizeWidth() {
	var ratio = $(window).width() / (window.screen.width || $('body').width());
	console.log(ratio);
	$('body').css({
		transform: "scale(" + ratio + ")",
		transformOrigin: "left top",
		backgroundSize: "100%"
	});
}

function resizeCenter() {
	if(!window.screen.height || !window.screen.width) return resizeCenterBak();
	var ratio = $(window).height() / window.screen.height;
	$('body').css({
		transform: "scale(" + ratio + ")",
		transformOrigin: "left top",
		backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
		backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
		marginLeft: ($(window).width() - $('body').width() * ratio) / 2
	});
}

function resizeFull() {
//	console.log(document.body.height);
	if(!window.screen.height || !window.screen.width) return resizeFullBak();
	var ratioX = $(window).width() / window.screen.width;
	var ratioY = $(window).height() / $('body').height();
	console.log(ratioX+"---------"+ratioY);
	$('body').css({
		transform: "scale(" + ratioX + ", " + ratioY + ")",
		transformOrigin: "left top",
		backgroundSize: "100% 100%",
	});
}

function resizeCenterBak() {
	var ratioX = $(window).width() / $('body').width();
	var ratioY = $(window).height() / $('body').height();
	var ratio = Math.min(ratioX, ratioY);
	$('body').css({
		transform: "scale(" + ratio + ")",
		transformOrigin: "left top",
		backgroundSize: (1 / ratioX) * 100 * ratio + "%",
		backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
		marginLeft: ($(window).width() - $('body').width() * ratio) / 2
	});
}

function resizeFullBak() {
	var ratioX = $(window).width() / $('body').width();
	var ratioY = $(window).height() / $('body').height();
	$('body').css({
		transform: "scale(" + ratioX + ", " + ratioY + ")",
		transformOrigin: "left top",
		backgroundSize: "100% " + ratioY * 100 + "%",
	});
}