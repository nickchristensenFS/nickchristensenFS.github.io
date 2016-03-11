#Gulp Sass framework for FDP 2.0


###gulp features
***
* html file include with **gulp-file-include**
* js file include with **gulp-include**

###gulp tasks
***

`gulp` - default task, watches for changes to scss, html, and js

`gulp sass` - autoprefixes and compiles sass to **./css**

`gulp html` - file includes(see "html partials") to **./**

`gulp js` 
* lints **./js/site.js** and **./js/components/**
* includes js partials(see "javascript partials") and renames to **./js/site.inc.js**
* minifies and renames to **./js/site.min.js**

`gulp subcompile` - for each folder in **./subdesigns** compile each **/scss/stylesheet.scss** to **/css**

`gulp prod` - run the following tasks: `sass`, `html`, `js`



###html partials
***
**./html/components/** contains html files which of fdp output for content types.  You can include these partials in your html by using `@@include('components/_filename.html')`

###javascript partials
***
**./js/components/** contains js partials which can be included by using `//= include folder/filename.js`



###additional info
***
#####landing.twig - templated
the landing.twig has been turn into a template for streamlining build time.  for the most part anything that effects the landing page has been isolated.  edit the variables and you should be good to go.

**./js/components/landing_page.js** include landing layout specific js

**./scss/layouts/_landing.scss** includes all css for the landing layout

> the landing page uses `.has-bg-li__collection` which is located in the **/js/site.js** and **./js/components/backgroundImage.js**
