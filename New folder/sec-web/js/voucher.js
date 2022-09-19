(function ($) {

	"use strict";

	$(".custom-btn").click(function(event) {
		let $this = $(this);
		$(".value-discount").filter(function(index) {
			let temp = $(this).val();
			let slice = $this.attr("class").slice(-(temp.length));
			if(slice === temp && temp) {
				$(this).select();
				document.execCommand("copy");
				let time = 100;
				let click = setInterval(() => {
					$this.addClass('animate-click');
					time+=100;
					if(time === 1400) {
						clearInterval(click);
						 $this.removeClass('animate-click');
					}
				}, time)
			}
		});
	});


})(jQuery);
