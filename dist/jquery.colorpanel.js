(function ($) {
    $.fn.ColorPanel = function (options) {
        var settings = $.extend({
            styleSheet: '#cpswitch'
            , colors: {
                '#1abc9c': 'skins/default.css'
                , '#2980b9': 'skins/blue.css'
                , '#c0392b': 'skins/red.css'
            , }
            , linkClass: 'linka'
            , animateContainer: false
        }, options);
        var panelDiv = this;
		
		$('#cpToggle').click(function(e){
			e.preventDefault();
			 $('ul',panelDiv).slideToggle();
		});
		
        var colors = settings.colors || null;
        if (colors) {
            $.each(colors, function (key, value) {
                var li = $("<li/>");
                var e = $("<a />", {
                    href: value
                    , "class": settings.linkClass, // you need to quote "class" since it's a reserved keyword
                }).css('background-color', key);
                li.append(e);
                $(panelDiv).find('ul').append(li);
            });
            $('ul',panelDiv).on('click', 'a', function (e) {
                e.preventDefault();
                var CssFile = $(this).attr('href') || 'default.css';
                if (settings.animateContainer) {
                    $(settings.animateContainer).fadeOut(function () {
                        $(settings.styleSheet).attr('href', CssFile);
                        // And then:
                        $(this).fadeIn();
                    });
                }
                else {
                    $(settings.styleSheet).attr('href', CssFile);
                }
            });
        }
    };
}(jQuery));