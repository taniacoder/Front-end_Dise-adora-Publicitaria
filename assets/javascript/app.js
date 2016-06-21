$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$("header").css("background-color", "#014039");
    } else {
       $("header").css("background-color", "rgba(0,0,0,0.6)");
    }

});


function scrollWin() {
    window.scrollTo(300, 500);
}


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});