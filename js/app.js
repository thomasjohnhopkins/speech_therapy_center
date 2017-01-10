$(document).foundation();

var hideMenu = function() {
  $('#menu').addClass('menu-toggle');
};

$("#home-button, #footer-home-button").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 2000);
  hideMenu();
});

$("#menu-mission-button").click(function(e) {
  e.preventDefault();
  var offset = 50; //Offset of 20px

  $('html, body').animate({
    scrollTop: $("#mission-statement").offset().top - offset
  }, 2000);
  hideMenu();

});

$("#button-one, #menu-button-one").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-one").offset().top - offset
    }, 2000);
    hideMenu();
});

$("#button-two, #menu-button-two").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-two").offset().top - offset
    }, 2000);
    hideMenu();
});

$("#button-three, #menu-button-three").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-three").offset().top - offset
    }, 2000);
    hideMenu();
});

$("#button-four, #menu-button-four").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-four").offset().top - offset
    }, 2000);
    hideMenu();
});

$("#button-five, #menu-button-five").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section-five").offset().top - offset
    }, 2000);
    hideMenu();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 300){
      $('header').addClass("sticky");
  } else {
      $('header').removeClass("sticky");
      hideMenu();
  }
});

// Menu.
$('#menu-button').click(function(e) {
  e.preventDefault();
  $('#menu').toggleClass('menu-toggle');
});
