//jQuery to collapse the navbar on scroll
var mq = window.matchMedia('@media all and (max-width: 500px)');

if(mq.matches) {
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 25) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css({"background": "black", "color": "white"});

    }else{
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").css({"background": "transparent", "color": "black"});

    }
});
    // the width of browser is more then 700px
} else {
        $(".navbar-default").css{"background-color:": "black", "color":"white"}

    // the width of browser is less then 700px
}


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

