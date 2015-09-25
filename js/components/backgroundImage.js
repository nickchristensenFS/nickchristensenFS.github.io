/* Function that applies the first image to the background of the element option */
function backgroundImage(element, options) {
	$( element ).each(function() {
	 var imgSrc = $(this).find('img').first().attr('src');
	 $(this).find('img').first('img').hide();
	 $(this).css('background', 'url('+imgSrc+')' + options);
	});
}