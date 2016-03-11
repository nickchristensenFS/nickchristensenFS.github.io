function landingImage(element, options) {
  $( element ).each(function() {
   var imgSrc = $(this).find('.masthead-container img').first().attr('src');
   $(this).find('.masthead-container').hide();
   $(this).css('background', 'url('+imgSrc+')' + options);
  });
}

$(document).ready(function() {
  landingImage($(".has-bg-landing"), "center center / cover no-repeat");
});