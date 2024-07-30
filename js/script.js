/*=====================================
           Responsive tabs
=====================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide',
    })
});

/*=====================================
           Protfolio
=====================================*/
$(window).on('load', function () {
    //initialize Isotope
    $("#isotope-container").isotope({

    });
    // Filter items on button click 
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filtervalue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filtervalue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');


    });
});
/*=====================================
           Protfolio
=====================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });


});
/*=====================================
    Navigation White Bar Hide
=====================================*/
$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

        } else {

            $("nav").removeClass("white-nav-top");

        }
    }

});

/*=====================================
    smooth scrolling 
=====================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/*=====================================
           Mobile Menu
=====================================*/

$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {

        $("#mobile-nav").css("height", "100%");

    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {

        $("#mobile-nav").css("height", "0%");

    });
});


/*=====================================
           Animation 
=====================================*/
// animate on scroll
$(function () {
    
    new WOW().init();
    
});

$(window).on('load', function () {
    
    $("#home-heading-1").addClass("animate fadeInDown");
    $("#home-heading-2").addClass("animate fadeInLeft");
    $("#home-text").addClass("animate zoomIn");
    $("#home-btn").addClass("animate zoomIn");
    $("#arrow-down i").addClass("animate fadeInDown infinite infinite");
});





























