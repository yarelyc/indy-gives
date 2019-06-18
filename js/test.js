$(document).ready(function () {

	$('.donate-checkout .reward-checkout input:radio').click(function() {
	if ($(this).val() === 'recive_rewards') {
		if ($(".left-sidebar .npid-np-5494").length > 0) {
			$('#rewards-59-boost').addClass( "boost-reward-section" );
			}
		}
	});

    $('.cvv-tooltip').click(function (event) {

        event.preventDefault();

    });

    $('.cvv-tooltip').tooltipster({
        content: $('<span><img src="<?php echo get_template_directory_uri(); ?>/images/cvv.gif" /></span>'),
        theme: 'tooltipster-light'

    });



    $('input[name="gifttype"]').change(function () {

        if ($(this).val() == 2) {

            $('div#subform_iho').show();

            $('div#subform_imo').hide();

        } else if ($(this).val() == 3) {

            $('div#subform_imo').show();

            $('div#subform_iho').hide();

        } else {

            $('div#subform_imo').hide();

            $('div#subform_iho').hide();

        }
    });

    $("#reward_email").hide();
    $('.receive-rewards').click(function () {

        if ($(this).val() == 'give_rewards') {
            $("#reward_email").show();

        } else {
            $("#reward_email").hide();

        }
    });


    $("#c_year_born").change(function () {
        var donat_year = $(this).val();
        var current_date = new Date();
        var currentYear = current_date.getFullYear();
        var age = currentYear - donat_year;
        if (age >= 18 && age <= 35) {
            $("#young_donor").val(1);
        } else {
            $("#young_donor").val(0);
        }
    })
});
