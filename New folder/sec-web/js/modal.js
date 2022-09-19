(function ($) {

	"use strict";

	// Open Toggle Sign In --- Register
	$(".btn-register").click(function() {
		$(".btn-register").addClass('active') && $('.modal-body .register').show(400)
		$('.btn-sign-in').removeClass('active') && $('.modal-body .sign-in').hide(400)
	})

	$('.btn-sign-in').click(function() {
		$(".btn-register").removeClass('active') && $('.modal-body .register').hide(400)
		$('.btn-sign-in').addClass('active') && $('.modal-body .sign-in').show(400);
	});


	let cart = [
	{
		id: "cart-1",
		imgCart: "https://wallpaperaccess.com/full/951832.jpg",
		title: "death stranding",
		discount: -50,
		firstPrice: "450.000đ",
		secPrice: "225.500đ",

	},
	{
		id: "cart-2",
		imgCart: "https://images7.alphacoders.com/104/thumb-1920-1045946.jpg",
		title: "ARK: Survival Evolved",
		discount: -50,
		firstPrice: "450.000đ",
		secPrice: "225.500đ",
	}
	];


	let insertCart = cart.map(v => {
		return `
		<div class="cart-product" id="${v.id}">
			<a href="#" class="cart-link-img">
				<img src="${v.imgCart}" alt="cart-preview-img">
			</a>

			<div class="cart-infor">
				<div class="cart-infor-content">
					<a href="#">
						<h6>${v.title}</h6>
					</a>
					<div class="some-infor">
						<div class="discount">${v.discount}%</div>
						<div class="price d-flex flex-column">
							<span>${v.firstPrice}</span>
							<span>${v.secPrice}</span>
						</div>
					</div>
				</div>

				<button type="button" class="btn  btn-delete-cart" data-nav="yes">
					<i class="fa-solid fa-trash"></i>
				</button>
			</div>				
		</div>
		`
	})

	$(".cart-preview-content").prepend(insertCart);	

	$('.cart-toggle').append(`<span class="cart-circle">${$('.cart-product').length}</span>`)

	$('.btn-delete-cart').click(function() {
		let parentId = $(this).parent().parent().attr('id');
		$('.cart-product').filter((index, item) => parentId === item.getAttribute("id")).remove();
		$('.cart-circle').text(`${$('.cart-product').length}`)
		return $('.cart-product').length === 0 
		? $(".cart-preview-content").empty().append(`<h5 class="empty-preview-cart">Your Shopping Cart is empty.</h5>`)
		: "";
	});

})(jQuery);

