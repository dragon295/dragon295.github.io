(function ($) {

  "use strict";

  $(".troll1").slick({
   asNavFor: ".troll2",
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   dots: true,
 });

  $(".troll2").slick({
   asNavFor: ".troll1",
   slidesToShow: 3,
   slidesToScroll: 1,
   vertical: true,
   centerMode: true,
   focusOnSelect: true,
   verticalSwiping: true,
   arrows: false,
   centerPadding: "30px",
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
   {
    breakpoint: 1000,
    settings: {
      centerPadding: "20px",
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      centerPadding: "10px",
    },
  },
  {
    breakpoint: 600,
    settings: {
      centerPadding: "80px",
      slidesToShow: 1,
      vertical: false,
    },
  },
  ],
});

  $('.image-grid').masonry({
  // options
  itemSelector: '.image-grid__item',
  percentPosition: true,
  gutter: 10,
  fitWidth: true
});

  // $('.image-grid').infiniteScroll({
  //   path: '.pagination__next',
  //   append: '.image-grid__image',
  //   status: '.scroller-status',
  //   hideNav: '.pagination',
  // });



})(jQuery);
