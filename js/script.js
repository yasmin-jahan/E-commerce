
$(document).ready(function () {
  $(".search_toggle").click(function () {
    $(".search_box input").toggleClass("active").focus();
    $(".cart").removeClass("active");
    $(".user").removeClass("active");
  });

  $(".cart_toggle").click(function () {
    $(".cart").toggleClass("active").focus();
    $(".search_box input").removeClass("active");
    $(".user").removeClass("active");
  });

  $(".user_toggle").click(function () {
    $(".user").toggleClass("active").focus();
    $(".search_box input").removeClass("active");
    $(".cart").removeClass("active");
  });


  $(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $(".search_box input").removeClass("active");
    $(".cart").removeClass("active");
    $(".user").removeClass("active");
  }
});


$(".menu_btn").click(function () {
  $(".header_nav").addClass("header_mobile_nav_active")
  $(".black_overlay").fadeIn()
    $(".search_box input").removeClass("active");
  $(".cart").removeClass("active");
  $(".user").removeClass("active");
});
$(".close_btn").click(function () {
  $(".header_nav").removeClass("header_mobile_nav_active")
  $(".black_overlay").fadeOut()
});
$(".black_overlay").click(function () {
  $(".header_nav").removeClass("header_mobile_nav_active")
  $(".black_overlay").fadeOut()
});

});
