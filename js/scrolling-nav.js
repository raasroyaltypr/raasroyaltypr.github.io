//jQuery to collapse the navbar on scroll
$(document).ready(function() {
    // put all your jQuery goodness in here.


var mq = window.matchMedia("max-width: 961px)");

    if (document.documentElement.clientWidth > 961) {
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 25) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css({"background": "white", "color": "black", "box-shadow": "0 0 20px 0 #ccc"});
        $(".navbar-brand").css({"color":"black"});
        $(".navbar-right>ul>li>a").css({"color": "black", });
        $(".rr-nav-links").css({"color":"black"});
        $("#hoverLink").hover(
            function() {
                $(this).css("color", "#FF0049").css("transition", ".3s");
            }, function() {
                 $(this).css("color", "black").css("transition", ".3s");
            });


    }
    if ($(".navbar").offset().top < 25) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").css({"background": "transparent", "color": "white", "box-shadow": "none"});
        $(".navbar-brand").css({"color":"white"});
        $(".rr-nav-links").css({"color":"white"});
        $("#hoverLink").hover(
            function() {
                $(this).css("color", "#FF0049").css("transition", ".3s");
                },
            function() {
                $(this).css("color", "white").css("transition", ".3s");
            });
        $("#hoverLinks").hover(
            function() {
                $(this).css("color", "#FF0049").css("transition", ".3s");
                },
            function() {
                $(this).css("color", "black").css("transition", ".3s");
            });

    }
});

    }




    // the width of browser is more then 700px


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

});

