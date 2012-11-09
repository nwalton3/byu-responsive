/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
/* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);;
(function ($) {
    $(function () {
        $('#slider').anythingSlider({
            startPanel: 1, // This sets the initial panel
            hashTags: false, // Should links change the hashtag in the URL?
            autoPlay: true, 	// This turns off the entire slideshow FUNCTIONALY, not just if it starts running or not
            expand: false, 	// If true, the entire slider will expand to fit the parent element
            startStopped: true, 	// If autoPlay is on, this can force it to start stopped
            startText: "Play", // Start button text
            stopText: "Stop", // Stop button text
            delay: 6000, 	// How long between slideshow transitions in AutoPlay mode (in milliseconds)
            animationTime: 600, 	// How long the slideshow transition takes (in milliseconds)
            easing: 'easeInOutCubic', // Anything other than "linear" or "swing" requires the easing plugin
            onSlideBegin: function (slider) { $('.anythingControls, .anythingSlider span.arrow').fadeOut(150); },
            onSlideComplete: function (slider) { $('.anythingControls, .anythingSlider span.arrow').fadeIn(200); }
        });
        $('#feature').css('visibility', 'visible');
    });
})(jQuery);

