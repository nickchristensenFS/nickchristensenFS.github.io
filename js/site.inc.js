// =============================================================================
//	Imports
// =============================================================================
/* Function that updates the value field of text inputs */
function updateValue(input, text) {
	input.val(text);

	if(input.val() === null) {
		input.val(text);
	}
	input.focus(function() {
		if(input.val() === text) {
			input.val("");
		}
	});
	input.blur(function() {
		if(input.val() === null || input.val() === "") {
			input.val(text);
		}
	});
}

/* Function that applies the first image to the background of the element option */
function backgroundImage(element, options) {
	$( element ).each(function() {
	 var imgSrc = $(this).find('img').first().attr('src');
	 $(this).find('img').first('img').hide();
	 $(this).css('background', 'url('+imgSrc+')' + options);
	});
}

function bodyClassToggler(element, elemClass){
	$(element).on('click', function(){
		$('body').toggleClass(elemClass);
	});
}

/* Placeholders function that puts the label as a placeholder in input type text, textarea, and option 
/* To use replace 'form' with whatever you want to target, 'form' will do all forms on site:
//=============================================
/* placeHolders('form');
//=============================================*/

function placeHolders(form) {

  var exit = false;

  if($(form).hasClass('fdpc_designready_order_form')) {
    exit = true;
  }

  $(form).parents().each(function() {
    if( $(this).hasClass('checkout_process') ) {
      exit = true;
    }
  });

  if (exit) {
    return;
  }

  $(form).find('.portal_login div, .form_row, .e2ma_signup_form_row').each(function() {

    var label = $(this).find('.form_label label, .e2ma_signup_form_label');
    var input = $(this).find('.form_field input[type="text"]');
    var textarea = $(this).find('textarea');
    var select = $(this).find('select');
    var text = $.trim(label.text()).replace(/ +(?= )/g,'');
    var isRequired = false;

    if($(this).hasClass('required_form_row')) {
      isRequired = true;
    }

    if(isRequired) {
      text = text + ' *';
    }

    if(input.length) {
      $(input).attr("placeholder", text);
      label.hide();
    }

    if(textarea.length) {
      $(textarea).attr("placeholder", text);
      label.hide();
    }

    if(select.length) {
      $(select).find('option').first().prop('disabled',true).text(text);
      label.hide();
    }

  });
}

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