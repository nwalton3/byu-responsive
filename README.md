byu-responsive
==============

Responsive web site for byu.edu

The beta site can be viewed at [beta.byu.edu](http://beta.byu.edu/m)

## Dependencies

I'm using CodeKit to compile my SASS and to concatenate and minify my Javascript

1. *PHP*
  - The main file is *index.php*, with *_header.php* and *_footer.php* imported
  - Some of the other files are imported via AJAX depending on screen width. Many of these are included in the */inc* folder
2. *Compass/Sass/CSS*
  - *config.rb* included for Compass
  - SCSS flavor
  - */css-sass/style.css* is the main file, which imports everything else. The included files are broken up by content type, with mixins defined for each screen width.
3. *JS Concat/Minify*
  - Three files are actually loaded into the delivered site: *init.min.js*, *script.min.js*, and *fonts.min.js*.
  - *init.min.js* is concatenated from _/js/libs/modernizr-custom.min.js_, _/js/lab.min.js_, and _/js/init.js_
  - *script.min.js* is concatenated from _/js/libs/jquery.min.js_, _/js/plugins.js_, and a minified _/js/script.js_. It's loaded through _init.js_ only if media queries are supported.
  - *fonts.min.js* is minified from fonts.js. It's loaded through _init.js_ only if web fonts are supported.