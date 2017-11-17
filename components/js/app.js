$(document).ready(function() {
  var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#top-image").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });
  $('#but-on').on('click', function() {
    $('#but-on').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeIn');
    });
  });
  $('#but-on2').on('click', function() {
    $('#but-on2').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeIn');
    });
  });
  $('.js-tilt').tilt({scale: 1.2})
});