// =============================================================================
//  fireslider settings
//==============================================================================

  //--------------------------------------------------------------------------//
  //--------------------------------------------------------------------------//
  //this is what is set in the core js   //
  //--------------------------------------------------------------------------//
  //--------------------------------------------------------------------------//

  //-------------------------------------  
  //  carousel
  //-------------------------------------
  // $(".js-slider--carousel .js-slider__contents > ul").each(function(){
  //   $(this).fireSlider({
  //     delay:7500,
  //     disableLinks:false,
  //     show:3,
  //     active:2,
  //     effect:"fadeInOut",
  //     activeSlideClass:"slide--active",
  //     activePagerClass:"slider__pager--active",
  //     breakpoints:sliderCarouselBreakpoints,
  //     pager:$(this).parents(".slider__contents").siblings(".slider__pager"),
  //     prev:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--prev"),
  //     next:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--next")
  //   })
  // });


  //-------------------------------------
  //  NO carousel
  //-------------------------------------
  // $(".js-slider--no-carousel .js-slider__contents > ul").each(function(){
  //   $(this).fireSlider({
  //     delay:7500,
  //     disableLinks:false,
  //     show:1,
  //     active:1,
  //     effect:"fadeInOut",
  //     activeSlideClass:"slide--active",
  //     activePagerClass:"slider__pager--active",
  //     pager:$(this).parents(".slider__contents").siblings(".slider__pager"),
  //     prev:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--prev"),
  //     next:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--next")
  //   })
  // });


  //-------------------------------------
  //  breakpoints example
  //-------------------------------------
  // var bps = [
  //     {breakpoint: 1, show: 1, active: 1},
  //     {breakpoint: 640, show: 2, active: 1},
  //     {breakpoint: 1000, show: 4, active: 2}
  // ];


//spotlight

if ( $('.spotlight-container ul > li').length > 1 ) {

  $('.spotlight-container ul').each(function() {
   $(this).fireSlider({
     delay: 8000,
     prev:$(this).parents(".slider__contents").siblings(".slider__controls").find(".slider-nav--prev"),
     next:$(this).parents(".slider__contents").siblings(".slider__controls").find(".slider-nav--next")
   });
 });
  
}



//sponsors
var bps = [
    {breakpoint: 1, show: 1, active: 1},
    {breakpoint: 640, show: 2, active: 1},
    {breakpoint: 800, show: 3, active: 1},
    {breakpoint: 1000, show: 4, active: 2}
];

if ( $('.sponsors-container ul > li').length > 1 ) {
  $('.sponsors-container ul').fireSlider({
    active: 2,
    delay: 8000,
    disableLinks: false,
    prev:$(this).parent().siblings(".slider__controls").find(".slider-nav--prev"),
    next:$(this).parent().siblings(".slider__controls").find(".slider-nav--next"),
    breakpoints: bps
  });
}