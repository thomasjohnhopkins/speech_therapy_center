$(document).foundation();

$("#home-button").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 2000);
});

$("#footer-home-button").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 2000);
});

$("#button-one").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-one").offset().top - offset
    }, 2000);
});

$("#button-two").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-two").offset().top - offset
    }, 2000);
});

$("#button-three").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-three").offset().top - offset
    }, 2000);
});

$("#button-four").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-four").offset().top - offset
    }, 2000);
});

$("#button-five").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-five").offset().top - offset
    }, 2000);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 300){
      $('header').addClass("sticky");
  } else {
      $('header').removeClass("sticky");
      $('#menu').addClass('menu-toggle');
  }
});

// Menu.
$('#menu-button').click(function(e) {
  e.preventDefault();
  $('#menu').toggleClass('menu-toggle');
});
