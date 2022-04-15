(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    jQuery.easing.def = "easeInOutExpo";
    $("html, body").animate({ scrollTop: 0 }, 1800);
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Main carousel
  $(".carousel .owl-carousel").owlCarousel({
    autoplay: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    smartSpeed: 500,
    dots: false,
    loop: true,
    nav: false,
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    // console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
        );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

   // Dropdown on mouse hover
   $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').on('mouseover', function () {
          $('.dropdown-toggle', this).trigger('click');
        }).on('mouseout', function () {
          $('.dropdown-toggle', this).trigger('click').blur();
        });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });
   
  // Date and time picker
  $("#date").datetimepicker({
    format: "L",
  });
  $("#time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".related-slider").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0:{
        items:1
      },
      576:{
        items:1
      },
      768:{
        items:2
      }
    }
  });

})(jQuery);
