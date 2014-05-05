$(document).ready(function() {
  function scroll(id) {
     var scroll = "#scroll-" + id;
     $(scroll).click(function() {
        $('html, body').animate({
        scrollTop:$("#" + id).offset().top
     }, 600);
     return false;
     });
  };

  scroll("home");
  scroll("portfolio");
  scroll("about");
  scroll("contact");
  scroll("skills");


$(function() {
var sticky = $('.sticky');
var pos = sticky.offset();
var el = $(this);
var menu = $("#home");

$(window).scroll(function() {
  if(el.scrollTop() > (pos.top) && sticky.css('position') == 'static') {
  sticky.addClass('fixed');
  menu.show();
  $("#portfolio").addClass("more-height");
}

else if(el.scrollTop() <= pos.top && sticky.hasClass('fixed')){
  sticky.removeClass('fixed');
  menu.hide();
  $("#portfolio").removeClass("more-height");
}
});
});


});