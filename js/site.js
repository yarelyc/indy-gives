

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

    $('.nonprofit-slider').slick({
        autoplay:false,
        arrows:true,
        infinite: false,
        slidesToShow:1,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
    });

    var container = $('div[id^="dv_chart_container_"]');

    if($('input[type="hidden"][name="hdn-donations-by-nonprofit"]').length != 0)
    {
        var data = JSON.parse($('input[type="hidden"][name="hdn-donations-by-nonprofit"]').val());

    }

    $('.home-rewards').owlCarousel({
        loop:true,
        navigation : true, // Show next and prev buttons
        singleItem:true,
        slideSpeed : 800,
        paginationSpeed: 800,
        pagination: false,
        singleItem:true,
        navigationText: ["&#xf053", "&#xf054"],
    })

});


/* ==========================================================================
Favorite fly-out tab
 ========================================================================== */

$(".fav-toggle").hover(function(){
    $(".icon-heart").css("font-size", "1.6em");
}, function(){
    $(".icon-heart").css("font-size", "1.4em");
});

$(".fav-toggle").on("click", function(e){
    $(this).toggleClass('active');

    $('.favbar').toggleClass('active');

    e.preventDefault();

});

/* ==========================================================================
Donation Page Masonry Grid
 ========================================================================== */

$('#dv_donate_container').masonry({
    // options
    itemSelector: '.np-donate-category',
    columnWidth: 400
});


/* ==========================================================================
   Responsive Navigation
   ========================================================================== */

var $menu = $('.main-nav'),
    $menulink = $('.navicon');

$menulink.on("click", function(e) {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    e.preventDefault();
});



