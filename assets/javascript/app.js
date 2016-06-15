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
