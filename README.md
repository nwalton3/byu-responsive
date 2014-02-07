byu-responsive
==============

**Note:** This is an early test for the responsive byu.edu web site

The current development on the BYU web site and templates can be found at:
[github.com/byuweb/HTML-Templates](https://github.com/byuweb/HTML-Templates)

==============

## Dependencies

I'm using CodeKit to compile my SASS and to concatenate and minify my Javascript. Details on the configuration below:

1. **PHP**
  - The main file is **index.php**, with *_header.php* and *_footer.php* imported
  - Some of the other files are imported via AJAX depending on screen width. Many of these are included in the */inc* folder
2. **Compass/Sass/CSS**
  - **config.rb** included for Compass
  - Using SCSS flavor of Sass
  - **style.scss** is the main file, which imports everything else. The included files are broken up by content type, with mixins defined for each screen width. Imported files:
      - *_colors.scss* - Standard colors
      - *_mixins.scss* - SASS mixins
      - *_type.scss* - Typography
      - *_header.scss* - Logo and search
      - *_nav.scss* - Primary and secondary navigation
      - *_slider.scss* - The main image slider
      - *_content.scss* - Calendar and news sections
      - *_footer.scss* - Footer
      - *_feedback.scss* - Styles for the feedback page (not included in the GIT Repo)
  - **_mobile.scss** is loaded for every browser. It's got the very basic styles that should work for almost any browser, even when media queries or javascript are not supported. It includes the above files, and:
      - *_normalize.scss* - Normalize styles from HTML5 Boilerplate
      - *_basics.scss* - Basic styles only - For old browsers and devices that can't do media queries or js
3. **JS Concat/Minify:** Three files are actually loaded into the delivered site: *init.min.js*, *script.min.js*, and *fonts.min.js*.
  - **init.min.js** is concatenated from */js/libs/modernizr-custom.min.js*, */js/lab.min.js*, and */js/init.js*
  - **script.min.js** is concatenated from */js/libs/jquery.min.js*, */js/plugins.js*, and a minified */js/script.js*. It's loaded through *init.js* only if media queries are supported.
  - **fonts.min.js** is minified from fonts.js. It's loaded through *init.js* only if web fonts are supported.
