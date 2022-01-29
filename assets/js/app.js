(function ($) {
  "use strict";
  /*
------------------------  
Preloader
--------------------------
*/
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  });
  /*
  ------------------------  
  Sticky Header 
  --------------------------
  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 0) {
      $(".header-bottombar").addClass("header-sticky");
    } else {
      $(".header-bottombar").removeClass("header-sticky");
    }
  });

   /*  Active Class*/
   $('.header-cart,.sidebar-close').on('click', function() {
    $("#sidebar-navbar-area").toggleClass('active');
    $("body").toggleClass('sidebar-before-bg');
});
  /*
  ------------------------  
  Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class").slideToggle();
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });



  $(".container-video, .video-container").fitVids();
 

  /*
  ------------------------  
  AOS Animation
  --------------------------
  */
  AOS.init({
    offset: 50,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
 

}(jQuery));
