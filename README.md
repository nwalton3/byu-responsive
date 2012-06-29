byu-responsive
==============

Responsive web site for byu.edu

The beta site can be viewed at [beta.byu.edu](http://beta.byu.edu/m)

## Dependencies

I'm using CodeKit to compile my SASS and to concatenate and minify my Javascript

1. **PHP**
  - The main file is **index.php**, with *_header.php* and *_footer.php* imported
  - Some of the other files are imported via AJAX depending on screen width. Many of these are included in the */inc* folder
2. **Compass/Sass/CSS**
  - *config.rb* included for Compass
  - SCSS flavor
  - */css-sass/style.css* is the main file, which imports everything else. The included files are broken up by content type, with mixins defined for each screen width.
3. **JS Concat/Minify**
  - Three files are actually loaded into the delivered site: *init.min.js*, *script.min.js*, and *fonts.min.js*.
  - **init.min.js** is concatenated from */js/libs/modernizr-custom.min.js*, */js/lab.min.js*, and */js/init.js*
  - **script.min.js** is concatenated from */js/libs/jquery.min.js*, */js/plugins.js*, and a minified */js/script.js*. It's loaded through *init.js* only if media queries are supported.
  - **fonts.min.js** is minified from fonts.js. It's loaded through *init.js* only if web fonts are supported.