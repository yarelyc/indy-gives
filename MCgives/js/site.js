(function ($) {

  "use strict";

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

/* ==========================================================================
   Helpers
   ========================================================================== */

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

  $.fn.exists = function() {
    return $(this).length>0;
  };

  //Placeholder polyfill for browsers that don't support it.
  $('input, textarea').placeholder();

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

/* ==========================================================================
 Money count increase effect
 ========================================================================== */

  $('.countup').waypoint(function(direction) {
    console.log("hey");
    var el = $(this);
    var el = $('.countup');
    var total = parseFloat(el.text().replace(/\$|,/g, '')),
      i = total - 100,
      triggered = false,
      tval = setInterval(function(){
      triggered = true;
      if (i < total && triggered) {
        i++;
        el.text(commaSeparateNumber(i)).prepend('$');
      }
      else {
        clearInterval(tval);
        triggered = false;
      }
    }, 100);
  }, {
      offset: '100%'
  });


/* ==========================================================================
 Donation page
 ========================================================================== */

   $('.expand-next').on('click', function(){
      $(this).next().slideToggle();
   });

   $('.chosen-select').chosen();

// Tooltips

    $('.tooltip').tooltipster({
        theme: 'tooltipster-light'
    });

    $('#c_country').change(function() {
          if($(this).val() != 'US'){
             $('label#state').hide();
          }
          else{
              $('label#state').show();
          }
    });


if($('.challenge-grant').length!==0){

    if($('.challenge-grant .cg-amt').html()=='$0'){

        $('.challenge-grant').hide();
        $('.challenge-grant-span').hide();
    }
}

//Tidy up columns on donate page
 $('#dv_donate_container').masonry({
    itemSelector: '.np-donate-category',
    columnWidth: 20
  });
})(jQuery);


// donations_by_nonprofit
function donations_by_nonprofit_front(container, data) {
    if(typeof(data) !== 'undefined') {
        var plot_data = [];
        $.each(data, function(k, v) {
            if(v.total_sum && v.total_sum>0)
                plot_data.push({
					name : v.post_title,
					y : parseInt(v.total_sum, 10),
					events: {
					  click: function (event) {
								 window.location = "/nonprofit/" + v.post_name + "/";
					 }
			 		} }); });
        //plot_data.push({ name : v.post_title, y : parseInt(v.dod_amount, 10) }); });
        $(container).highcharts({

            chart       :   { type : 'column' },
            title       :   { text : '' },
            xAxis       :   { type : 'category', title : { text : 'Nonprofits' } },
            yAxis       :   { title : { text : '$' } },
            legend      :   { enabled : false },
            plotOptions :   { series : { borderWidth : 0, dataLabels : { enabled : true, rotation: -45,align: 'center', y:-20 } , pointWidth: 35} },
            series      :   [{ name : '$', colorByPoint : true, data : plot_data }]

        });
    }
}