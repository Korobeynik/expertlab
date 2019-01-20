
function screenClass() {
    if($(window).innerWidth() > 960) {
        $('.advantag-grid').removeClass('owl-carousel');
    } else {
        $('.advantag-grid').addClass('owl-carousel');
            var owl2 = $('.advantag-grid');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                smartSpeed: 500,
                //autoplay: true,
                //autoHeight:true,
                nav: true,
                autoplayTimeout: 20000,
                autoplayHoverPause: false,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items:1
                    },
                    // breakpoint from 480 up
                    480 : {
                       items:1
                    },
                    // breakpoint from 768 up
                    768 : {
                       items:2
                    }
                }
            });
    }
}


screenClass();


$(window).bind('resize',function(){
    screenClass();
});

$(function() {

    $("nav a").mPageScroll2id();

    $('.humburger').click(function(){
      $('.humburger').toggleClass('active');
      $('body').toggleClass('active');
    });

    $('div#l1').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(1) button').trigger('click');
    });
    $('div#l2').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(3) button').trigger('click');
    });
    $('div#l3').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(5) button').trigger('click');
    });
    $('div#l4').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(2) button').trigger('click');
    });
    $('div#l5').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(3) button').trigger('click');
    });
    $('div#l6').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(4) button').trigger('click');
    });
    $('div#l7').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(5) button').trigger('click');
    });
    $('div#l8').click(function() {
        $('.cardslider__dots-nav .cardslider__dot:nth-child(6) button').trigger('click');
    });

    $('.reviews-slider').cardslider({
        swipe: true,
        dots: true,
        loop: true,
        direction: 'up'
    });

    $('.acordion-question').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.acordion-item').toggleClass('active');
        $(this).next('.acordion-answer').slideToggle();
    });

});
