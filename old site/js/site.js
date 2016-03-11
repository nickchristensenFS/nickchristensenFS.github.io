// =============================================================================
//	Imports
// =============================================================================
//= include components/updatevalue.js
//= include components/backgroundImage.js
//= include components/bodyClassToggler.js
//= include components/placeholders.js
//= include components/accordianMenu.js


$(document).ready(function() {

	backgroundImage($(".has-bg"), "center center / cover no-repeat'");
	backgroundImage($(".has-bg__collection li"), "center center / cover no-repeat'");
	backgroundImage($(".has-bg-li__collection li .collection-item-image"), "center center / cover no-repeat'");

	// =============================================================================
	//	Add class for nav that has child
	//==============================================================================
	if( $('nav.dropdown').length > 0 ) {
		$('nav.dropdown ul li ul li').has('ul').each(function() {
			$(this).children('a').addClass('has_flyout');
		});
	}
	// =============================================================================
	//	Adding Cross-browser first and last child support
	//==============================================================================
	$("li:first-child").addClass("first");
	$("li:last-child").addClass("last");

	// =============================================================================
	//	Forms
	//==============================================================================
	updateValue( $(".fdpc_search_form_input"), "Search" );

	// =============================================================================
	//	Fireslider
	//==============================================================================
	if( $('.fireSlider ul li').length > 1 ) {
		$('.fireSlider ul').fireSlider(
			{
				slide: 'li',
				show: 1,
				active: 1,
				//prev: '.prev',
				//next: '.next',
				//pager: '.fireSlider .pager',
				//effect: "fadeInOut",
				speed: 500,
				delay: 8000
			},
			[
				//{breakpoint: 480, show: 1, active: 1},
				//{breakpoint: 960, show: 1, active: 1}
			]
		);
	}	

}); // end document ready