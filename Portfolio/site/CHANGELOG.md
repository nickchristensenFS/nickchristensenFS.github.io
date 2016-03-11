changelog
---------------------------------------------

#02.15.16

* update navChecker.js


#02.05.16

* update readme.md
* update gulpfile.js
* remove /sustain and /html
* remove duplicate /components folder and update gulpfile.js to fix the issue

#02.01.16
* update placeHolders.js

#01.27.16

* update landingpage: html/twig/scss

#01.21.16

* update placeHolders.js
* add textWrapper.js
* add $html-background variable, in settings and structure
* update locations component to match live
* add product.html files, based off internal.html for the time being
* update featured,social,collections components to include <a href=""></a> links
* add nav_footer.scss file in nav folder

#01.20.16

* add navChecker.js

#12.01.15

* add font mixin
* usage: @include font(font-size, line-height, font-weight);
* default: @include font(16,18,normal);

#11.30.15

* update media queries sizes, add xsmall, add xxxlarge

#11.24.15

* add landing.twig
* add index.twig
* create CHANGELOG.md
* rewrite README.md

#11.24.15

* add _location.html partial
* update asset links to aws

#11.18.15

* bug fixes
* update backgroundImage.js - new 3rd option for hiding img or .image
* added images

#11.17.15

####Snippet Changes
* add `hhh` - slashes hidden scss comment

####MOCKUPS
* added _mockups folder for holding

####HTML
* move html into partials
* move search inside of `<header>`
* update spotlight controls html
* remove font awesome import
* added `has-bg__collection` to `spotlight-container`

####CSS
* update `$fireslider_height` var to `$fireslider-height-large`
* update `$fireslider.scss` to match new spotlight controls markup
* add `$fireslider-height-medium` and `$fireslider-height-small` vars
* add `_content_blocks.scss` partial

####JS
* update backgroundImage.js to hide `.image` instead of `img`
* update placeholders.js to include new classes
* update fireslider_settings to match new markup
* add landing_page.js for landing page specific js

#10.06.15

* update firelsider_settings.js

#10.06.15

* update spotlight/fireslider markup
* update spotlight/fireslider scss
* update spotlight/fireslider js, move js out into its own partial/include
* add templates/layouts folder

#09.18.15

* various improvements, and qa

#09.10.15

* minor syntax fixes in `_nav_subnav.scss`

#09.10.15

* update gulpfile.js for stream dependency and more effeciency

#08.26.15

* update gulpfile.js to add jsinclude task
* update package.json to remove haml dependency
* add default fireslider.scss

#08.26.15

* add bodyClassToggler.js
* update backgroundImage.js to take options
* remove listPosition.js
* update spotlight html
* update nav_dropdown.scss to use .nav__list--parent instead of the previous js added class `.has-flyout`
* change `nav_accordian.scss` and variables to `nav_subnav.scss` and variables

#08.10.15

* update fireslider from 1.4.1 to 1.4.3

#08.05.15

* update fireSlider from 1.3.3 to 1.4.1

#07.08.15

* update accordian nav scss/js

#07.06.15

* update nav.scss - add flyout color

#07.06.15

* initial upload