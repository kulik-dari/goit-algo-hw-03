(function($) {
    $.fn.timeline = function() {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };

        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css("background-color", "#fff");

        var $logo = $(".timeline-logo");
        var timelineHeight = $(".timeline").height();
        var itemHeight = $(".timeline-item").first().outerHeight();

        $(window).scroll(function() {
            var max = selectors.id.offset().top + selectors.id.outerHeight();
            var min = selectors.id.offset().top;
            var pos = $(window).scrollTop() + ($(window).height() / 2);

            if (pos >= min && pos <= max) {
                var activeItem = null;
                selectors.item.each(function() {
                    var thisPos = $(this).offset().top;
                    var itemHeight = $(this).outerHeight();
                    var threshold = itemHeight * 0.4;

                    if (pos >= thisPos && pos < (thisPos + itemHeight - threshold)) {
                        activeItem = $(this);
                        return false;
                    }
                });

                if (activeItem) {
                    selectors.item.removeClass(selectors.activeClass);
                    activeItem.addClass(selectors.activeClass);

                    var itemTop = activeItem.offset().top - min;
                    var logoTop = itemTop + (activeItem.outerHeight() / 2) - ($logo.height() / 2);

                    $logo.css("top", logoTop + "px");
                } else {
                    // Reach the end or start of the timeline
                    if (pos < min) {
                        selectors.item.removeClass(selectors.activeClass);
                        selectors.item.eq(0).addClass(selectors.activeClass);
                        $logo.css("top", (selectors.item.eq(0).offset().top - min) + (itemHeight / 2) - ($logo.height() / 2) + "px");
                    } else if (pos > max) {
                        selectors.item.removeClass(selectors.activeClass);
                        selectors.item.last().addClass(selectors.activeClass);
                        $logo.css("top", (selectors.item.last().offset().top - min) + (itemHeight / 2) - ($logo.height() / 2) + "px");
                    }
                }
            }
        });
    };
})(jQuery);

$(".timeline").timeline();
