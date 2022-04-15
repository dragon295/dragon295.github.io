

(function ($) {

	"use strict";
	
	// Data Blog
	let data = [
	{
		img: "https://www.dualshockers.com/static/uploads/2020/05/cloud5-150x150.jpg",
		alt: "Smell magic in the air. Or maybe barbecue",
		title: "Smell magic in the air. Or maybe barbecue",
		bgMain: "bg-main-4",
		categories: "MMO",
		itemText: "With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...",
		linkToContent: "ff7-remake",
		link: "troll.html",
		time: " Sep 18, 2021",
		imgContent: "https://gamek.mediacdn.vn/133514250583805952/2020/3/3/photo-1-15832080197081214335686.jpg"
	},
	{
		img: "https://savegame.pro/wp-content/uploads/2020/04/resident-evil-3-cover.jpg",
		alt: "Grab your sword and fight the Horde",
		title: "Grab your sword and fight the Horde",
		bgMain: "bg-main-1",
		categories: "Action",
		itemText: "For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob . After we had jogged on for some little time, I asked the carrier...",
		linkToContent: "re-3",
		link: "cut.html",
		time: " Sep 5, 2021",
		imgContent: "https://image.thanhnien.vn/w1024/Uploaded/2021/hgjokv/2020_05_12/thumb-1920-1057560_bjnk.jpg"
	},
	{
		img: "https://news.toyark.com/wp-content/uploads/sites/4/2020/01/Prime-1-DMCV-Vergil-028-150x150.jpg",
		alt: "We found a witch! May we burn her?",
		title: "We found a witch! May we burn her?",
		bgMain: "bg-main-2",
		categories: "Adventure",
		itemText: "And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...",
		linkToContent: "DMC5",
		link: "bcn.html",
		time: " Aug 27, 2021",
		imgContent: "https://wallpaperaccess.com/full/5098825.png"
	},
	{
		img: "https://i.rada.vn/data/image/2017/06/30/Call-of-Duty-WWII-150.png",
		alt: "For good, too though, in consequence",
		title: "For good, too though, in consequence",
		bgMain: "bg-main-3",
		categories: "Strategy",
		itemText: "This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...",
		linkToContent: "call-of-duty",
		link: "dcm.html",
		time: " Aug 14, 2021",
		imgContent : "https://1.bp.blogspot.com/-YXCXeiMxIc0/YUbbIch0VpI/AAAAAAAAAXk/oHgB_TWs89cQyXk94R9OCkZkkiLdEElgQCLcBGAsYHQ/s1920/T%25E1%25BA%25A3i%2BCall%2Bof%2BDuty%2BWWII%2BDigital%2BDeluxe%2BEdition%2Bmi%25E1%25BB%2585n%2Bph%25C3%25AD.jpg"
	}, 
	{
		img: "https://vipapk.org/wp-content/uploads/2020/10/11MORTAL-KOMBAT-150x150.png",
		alt: "He made his passenger captain of one",
		title: "He made his passenger captain of one",
		bgMain: "bg-main-5",
		categories: "Indie",
		itemText: "Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...",
		linkToContent: "mortal-kombat",
		link: "winner.html",
		time: " Jul 23, 2021",
		imgContent: "https://images4.alphacoders.com/993/thumb-1920-993081.jpg"
	},
	{
		img: "https://www.gamingverdict.com/wp-content/uploads/2021/06/Naraka-Bladepoint-150x150.jpg",
		alt: "At first, for some time, I was not able to answer",
		title: "At first, for some time, I was not able to answer",
		bgMain: "bg-main-5",
		categories: "Racing",
		itemText: "This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...",
		linkToContent: "naraka",
		link: "kellin.html",
		time: " Jul 3, 2021",
		imgContent: "https://images2.alphacoders.com/114/thumb-1920-1143026.jpg"
	}
	];

	$('.main-carousel').owlCarousel({
		autoplay: true,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		items: 1,
		smartSpeed: 500,
		dots: false,
		loop: true,
		nav: false
	});

	$('.new-release-big-carousel').owlCarousel({
		autoplay: true,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		items: 1,
		smartSpeed: 3000,
		dots: false,
		loop: true,
		nav: false,
		margin: 30
	});

	$('.new-release-small-carousel').owlCarousel({
		autoplay: true,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		items: 1,
		smartSpeed: 5000,
		dots: false,
		loop: true,
		nav: false,
		margin: 30
	});


	$('.onsale-carousel').owlCarousel({
		autoplay: true,
		dots: false,
		loop: true,
		margin: 25,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 2,
				stagePadding: 0
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				items: 5,
			},
			1200: {
				items: 6,
			},
		}
	});

	$(".bigger-content").slick({
		asNavFor: ".small-content",
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: true,
		cssEase: 'linear',
		// arrows: false,
	});

	$(".small-content").slick({
		asNavFor: ".bigger-content",
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		centerPadding: "30px",
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				centerPadding: "20px",
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				centerPadding: "10px",
			},
		},
		{
			breakpoint: 577,
			settings: {
				centerPadding: "80px",
				slidesToShow: 1,
				vertical: false,
			},
		},
		],
	});

	$(".owl-customer-review").owlCarousel({
		center: true,
		autoplay: true,
		loop: true,
		dots: false,
		nav: false,
		margin: 20,
		responsive: {
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			}
		}
	});


	// Append Data
	let getLeftData = data.map(v => {
		return `<div class="blog-news-box-item" id="${v.linkToContent}">
		<div class="blog-news-box-item-img">
		<img src="${v.img}" alt="${v.alt}">
		</div>
		<h3 class="blog-news-box-item-title">${v.title}</h3>

		<span class="blog-news-box-item-categories">
		<span class="${v.bgMain}">${v.categories}</span>
		</span>

		<div class="blog-news-box-item-text">
		<p>${v.itemText}</p>
		</div>
		<div class="blog-news-box-item-date"><span class="fa fa-calendar"></span>${v.time}</div>
		</div>`
	});

	let getRightData = data.map(v => {
		return `<div id="${v.linkToContent}" class="blog-news-content">
		<div class="blog-news-box-item-image">
		<img src="${v.imgContent}" alt="img-blog-huge">
		<span class="blog-news-box-item-categories">
		<span class="${v.bgMain}">${v.categories}</span>
		</span>
		</div>
		<h3 class="blog-news-box-item-title">${v.title}</h3>
		<div class="blog-news-box-item-text">
		<p>${v.itemText}</p>
		</div>
		<a href="${v.link}" class="blog-news-box-item-more">Read More</a>
		<div class="blog-news-box-item-date">
		<span class="fa fa-calendar">${v.time}</span>
		</div>
		</div>`
	});

	$(".blog-news-box-list .nano .nano-content").append(getLeftData);
	$(".blog-news-box-list .nano .nano-content .blog-news-box-item:first-child").addClass("blog-news-box-item-active");
	$(".blog-news-box-each-info .nano .nano-content").append(getRightData);
	$(".blog-news-content").filter(":nth-child(1)").css("display", "block");
	
	// Event Click to content
	$(".blog-news-box-item").click(function() {

		let getId = $(this).attr('id');
		$(".blog-news-box-item").filter(function(index) {
			!$(this).hasClass('blog-news-box-item-active') && $(this).attr("id") === getId 
			? $(this).addClass('blog-news-box-item-active') 
			: $(this).hasClass('blog-news-box-item-active') && $(this).attr("id") !== getId 
			? $(this).removeClass('blog-news-box-item-active') 
			: ""
		});

		$(".blog-news-content").filter(function(index, el) {
			$(this).attr("id") === getId ? $(this).css("display", "block") : $(this).css("display", "none");
		});
	});

	// NanoScroller
	$(".nano").nanoScroller({ scroll: 'top' }, { flash: true });

})(jQuery);

