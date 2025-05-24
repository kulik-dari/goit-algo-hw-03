(function($) {
    "use strict";

    $.fn.counterUp = function(options) {
        const settings = $.extend({
            time: 2000,
            delay: 10
        }, options);

        return this.each(function() {
            const $this = $(this);
            const finalValue = parseFloat($this.data('value'));
            const suffix = $this.data('suffix') || '';
            const isDecimal = String(finalValue).includes('.');
            
            function startCounter() {
                const steps = settings.time / settings.delay;
                const increment = finalValue / steps;
                let currentValue = 0;
                let step = 0;

                const interval = setInterval(() => {
                    step++;
                    currentValue += increment;
                    
                    if (step >= steps) {
                        currentValue = finalValue;
                        clearInterval(interval);
                    }

                    const displayValue = isDecimal ? 
                        currentValue.toFixed(1) : 
                        Math.floor(currentValue);
                        
                    $this.text(displayValue + suffix);
                }, settings.delay);
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            });

            observer.observe(this);
        });
    };
})(jQuery);

// Initialize when document is ready
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});