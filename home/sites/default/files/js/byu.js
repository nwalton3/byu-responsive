


var byu_template = (function ($) {

    var clickOpened = false;

    $(function () {
        activateMenus();
        loadMenuImages();

        if (!Modernizr.borderradius) {
            var searchButton = $('#search-button');
            searchButton.attr('src', 'template/img/search-button.png');
            searchButton.css('display', 'inline');
            $('#search').css('margin-right', '24px');
        }

        $(window).resize(positionFooter);
        positionFooter();
    });

    function positionFooter() {
        $('#content').css('minHeight', ($(window).height() - $('header').height() - $('footer').height() - 50) + 'px');
    }

    function loadMenuImages() {
        $('span.img').each(function () {
            var span = $(this);
            var url = span.removeClass('img').attr('class'),
		alt = span.attr('title');
            span.replaceWith('<img src="' + (typeof webRoot === 'undefined' ? '' : webRoot + (endsWith(webRoot, '/') ? '' : '/')) + 'images/menu/' + url + '" alt="' + alt + '" />');
        });
    }

    function activateMenus() {
        $('nav li:has(.mega, .sub) > a').click(function (e) {
            e.preventDefault();
            var li = $(this).parent();
            // Only close menu if user clicked to open it
            if (li.hasClass('hover') && clickOpened) {
                li.removeClass('hover');
            }
            else {
                li.addClass('hover');
                $('nav li').not(li).removeClass('hover');
                clickOpened = true;
            }
            return false;
        });

        $('nav li:has(.mega, .sub)').click(function (e) {
            e.stopPropagation();
        });

        // Menu config
        var byuMenuConfig = {
            sensitivity: 10,
            interval: 75,
            over: rollOver, // function = onMouseOver callback (REQUIRED)    
            timeout: 350, // number = milliseconds delay before onMouseOut    
            out: rollOut // function = onMouseOut callback (REQUIRED)    
        };
        $('#secondary-nav > ul > li, #primary-nav > ul > li').hoverIntent(byuMenuConfig);
        $('nav.no-js').removeClass('no-js');

        /* Positions menu divs */
        $('nav li .sub').each(function () {
            var mega = $(this);
            var left = mega.parent().position().left;
            if (left > mega.parent().parent().outerWidth() - mega.outerWidth())
                mega.css('right', 0);
        });
    }

    /* Func: RollOver
    * Desc: Show a dropdown menu on rollover. Called by the hoverIntent function.

    * Args: @evt	- Event object. Automatically generated.
    */
    function rollOver(evt) {

        if (!$(this).hasClass('hover')) {
            clickOpened = false;
            $(this).addClass('hover');
            $('nav li').not(this).removeClass('hover');
            $(document).click(hideAllMenus);
        }
        //if(evt !== undefined) evt.stopPropagation();
    }

    /* Func: RollOut
    * Desc: Hide a dropdown menu on rollout. Called by the hoverIntent function.
    * Args: -
    */
    function rollOut() {
        $(this).removeClass('hover');
    }

    /* Func: HideAllMenus
    * Desc: Hide all dropdown menus. Bound to click action.
    * Args: -
    */
    function hideAllMenus() {
        $('nav li').removeClass('hover');
        $(document).unbind('click');
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

})(jQuery);
