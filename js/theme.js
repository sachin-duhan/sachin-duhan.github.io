(function($) {
    'use strict';

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/
    //* Navbar Fixed
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();

    function slide() {
        var images = document.getElementsByClassName('carousel-item');
        var i;
        var done = false;
        for (i = 0; i < images.length; i++) {
            if (!done && !images[i].classList[1]) {
                images[i].classList.add('active');
                done = true;
            } else if (images[i].classList && images[i].classList[1] == 'active') images[i].classList.remove('active');
        }
    }
    setInterval(() => {
        slide();
    }, 5000);

    function noSavingAllowed(params) {
        $(document).bind('keydown', function(e) {
            if (e.ctrlKey && (e.which == 83)) {
                e.preventDefault();
                // alert('Ctrl+S');
                return false;
            }
        });
    }
    noSavingAllowed();

})(jQuery);