$(document).ready(function () {
    // alert(1);
    $('.header .search .icon_search').click(function(){
        $(this).parent().toggleClass('open');
    })
    $('.slider_widget').owlCarousel({
      loop:true,
      dots:false,
      nav:false,
      margin:16,
      items:3,
      autoWidth:true
    });

    $('.hamburger span').click(function(){
        $(this).parent().toggleClass('active');
    })
    $('.article_book_link').click(function(){
        $('.article_nav').addClass('show');
    })
     $('.article_nav').click(function(){
        $('.article_nav').removeClass('show');
    })
    var owl = $('.owl-carousel'),

        owlOptions = {
          loop: true,
               // margin: 30,
                //smartSpeed: 700,
                nav: false,
                dots:true,
                items: 1
        };

    if ( $(window).width() < 768 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});
