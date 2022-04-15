(function ($) {

  "use strict";
  
  let $grid = $('.image-grid').masonry({
    itemSelector: '.image-grid__item',
    columnWidth: ".image-grid__col-sizer",
    percentPosition: true,
    gutter: ".image-grid__gutter-sizer",
  });


  let msnry = $grid.data('masonry');

  $grid.infiniteScroll({ 
    path: ".pagination__next",
    append: '.image-grid__item',
    status: '.scroller-status',
    outlayer: msnry,
    history: true,
  })

  // // Background Footer
  $(window).width() <= 425 
  ? $(".footer").css('background-image', 'url("../../img/bg-footer-sma.jpg")') : "";

  //Change Bg when Resize
  $(window).resize(function() {
    var width = $(window).width();
    // Background Footer
    width <= 425
    ? $(".footer").css('background-image', 'url("../../img/bg-footer-sma.jpg")') 
    : $(".footer").css('background-image', 'url("../../img/bg-footer-lar.jpg")') ;
  });


})(jQuery);
