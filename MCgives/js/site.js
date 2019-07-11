(function ($) {

    /* ==========================================================================
       Responsive Navigation
       ========================================================================== */

    $(document).ready(function(){
        var $menu = $('.main-nav'),
            $menulink = $('.navicon');


    $menulink.on("click", function(e) {
        console.log("Menu was clicked");
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        e.preventDefault();
    });


    /*
    $('.main-nav .menu-item-has-children').on('click', function(){
      $(this).find('.sub-menu').slideToggle();
    });
    */

    /* Trigger Category Dropdown */

    if ($(window).width() <= 640){
        $('.left-sidebar h3').on("click", function(){
            $('.subnav').toggleClass('active');
        });
    }


//Tidy up columns on donate page
        $('#dv_donate_container').masonry({
            itemSelector: '.np-donate-category',
            columnWidth: 20
        });
    });
/* ==========================================================================
   Slider
   ========================================================================== */

    $(document).ready(function(){
        var slidesCount = $('.home-slider .item').length;

        //console.log(slidesCount);

        $(".home-slider").owlCarousel({
            autoPlay : 10000,
            navigation : true, // Show next and prev buttons
            slideSpeed : 800,
            paginationSpeed: 800,
            singleItem:true,
            navigationText: ["&#xf053", "&#xf054"],
            items:slidesCount

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

        var container = $('div[id^="dv_chart_container_"]');

        if($('input[type="hidden"][name="hdn-donations-by-nonprofit"]').length != 0)
        {
            var data = JSON.parse($('input[type="hidden"][name="hdn-donations-by-nonprofit"]').val());
        }
        donations_by_nonprofit_front($(container), data);

    });




if($('.challenge-grant').length!==0){

    if($('.challenge-grant .cg-amt').html()=='$0'){

        $('.challenge-grant').hide();
        $('.challenge-grant-span').hide();
    }
}

})(jQuery);

