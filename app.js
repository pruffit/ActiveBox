$(function() {
    /*FIXED HEADER*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function() {

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH){

            header.addClass("fixed");

        }else{

            header.removeClass("fixed");

        }
    }
    /*SMOOTH SCROLL*/
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - 80
        }, 500);

    });
    /*Nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {

        event.preventDefault();
        nav.toggleClass("show");
    });
});