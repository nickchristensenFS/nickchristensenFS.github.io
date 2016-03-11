// ================================================================================================
// Subnav Accordian Menu
// ================================================================================================

$(document).ready(function() {

	if( $('nav.subnav').length > 0 ) {

		$('nav.subnav').find('ul').children('li').has('ul').each(function() {
			$(this).children('a').append('<span class="subnav_toggle"></span>');
			if( $(this).hasClass('fdpc_here') ) {
				$(this).addClass('subnav_open');
				$(this).closest('li').children('ul').slideDown();
			}
		});

		$('span.subnav_toggle').click(function(n) {
			n.preventDefault();
			if (!$(this).closest('li').hasClass('subnav_open')) {
				//$('nav.subnav').children('ul').children('li.subnav_open').removeClass('subnav_open').children('ul').slideUp();
				$(this).closest('li').siblings().removeClass('subnav_open').children('ul').slideUp();
				$(this).closest('li').addClass('subnav_open');
				$(this).closest('li').children('ul').slideDown();
			} else {
				$(this).closest('li').removeClass('subnav_open').children('ul').slideUp();
			}
		});

	}

});