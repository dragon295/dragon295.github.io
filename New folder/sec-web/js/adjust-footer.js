(function ($) {

	"use strict";

	// // Background Footer
	$(window).width() <= 425 
	? $(".footer").css('background-image', 'url("../img/bg-footer-sma.jpg")') : "";

	//Change Bg when Resize
	$(window).resize(function() {
		var width = $(window).width();
		// Background Footer
		width <= 425
		? $(".footer").css('background-image', 'url("../img/bg-footer-sma.jpg")') 
		: $(".footer").css('background-image', 'url("../img/bg-footer-lar.jpg")') ;
	});


})(jQuery);
