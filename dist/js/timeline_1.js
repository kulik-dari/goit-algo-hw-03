(function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      
      // Initialize: activate first item
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css("background-color", "#f5f7fe");
      
      // Set up logo with smoother transition
      var $logo = $(".timeline-logo");
      $logo.css({
        "transition": "top 0.8s cubic-bezier(0.34, 0.615, 0.4, 0.985)"
      });
      
      // Add transitions to timeline items
      selectors.item.css({
        "transition": "opacity 0.65s ease-in-out, filter 0.65s ease-in-out, transform 0.65s ease-in-out"
      });
  
      // Helper function to check if device is mobile or tablet
      function isMobileOrTablet() {
        return window.innerWidth <= 1024;
      }
      
      // Helper function to update logo position with improved smoothness
      function updateLogoPosition($item) {
        if (!$item.length) return;
        
        var min = selectors.id.offset().top;
        var itemTop = $item.offset().top - min;
        var logoTop = itemTop + ($item.outerHeight() / 2) - ($logo.height() / 2);
        
        // Adjust logo position for mobile/tablet
        if (isMobileOrTablet()) {
          $logo.css({
            "left": "0",
            "transform": "translateX(-50%)",
            "top": logoTop + "px"
          });
        } else {
          $logo.css({
            "top": logoTop + "px"
          });
        }
      }
      
      // Initial position
      var firstItem = selectors.item.eq(0);
      updateLogoPosition(firstItem);
      
      // For extra smoothness, track previous scroll position
      var lastScrollTop = 0;
      var scrollDirection = 'down';
      
      // Smooth scroll handler with optimized requestAnimationFrame
      var scrollTimeout;
      var isScrolling = false;
      
      $(window).on('scroll', function() {
        // Determine scroll direction
        var st = $(window).scrollTop();
        scrollDirection = st > lastScrollTop ? 'down' : 'up';
        lastScrollTop = st;
        
        if (!isScrolling) {
          isScrolling = true;
          animateScroll();
        }
      });
      
      function animateScroll() {
        if (scrollTimeout) {
          window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
          var max = selectors.id.offset().top + selectors.id.outerHeight();
          var min = selectors.id.offset().top;
          var pos = $(window).scrollTop() + ($(window).height() / 2);
          
          if (pos >= min && pos <= max) {
            var activeItem = null;
            var smallestDistance = Infinity;
            
            // Find the closest item to the viewport center
            selectors.item.each(function(index) {
              var $this = $(this);
              var thisPos = $this.offset().top;
              var itemHeight = $this.outerHeight();
              var itemCenter = thisPos + (itemHeight / 2);
              var distance = Math.abs(pos - itemCenter);
              
              // Apply progressive visual effects based on distance
              var normalizedDistance = Math.min(distance / 400, 1);
              var opacity = 1 - (normalizedDistance * 0.7);
              var blur = normalizedDistance * 1.5;
              var translateY = normalizedDistance * 20 * (scrollDirection === 'down' ? 1 : -1);
              
              $this.css({
                "opacity": opacity,
                "filter": "blur(" + blur + "px)",
                "transform": "translateY(" + translateY + "px)"
              });
              
              // Track the closest item
              if (distance < smallestDistance) {
                smallestDistance = distance;
                activeItem = $this;
              }
            });
            
            if (activeItem) {
              selectors.item.removeClass(selectors.activeClass);
              activeItem.addClass(selectors.activeClass);
              updateLogoPosition(activeItem);
            }
          } else if (pos < min) {
            // Reset item styles when above timeline
            selectors.item.css({
              "opacity": "",
              "filter": "",
              "transform": ""
            });
            
            selectors.item.removeClass(selectors.activeClass);
            selectors.item.eq(0).addClass(selectors.activeClass);
            updateLogoPosition(selectors.item.eq(0));
          } else if (pos > max) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.item.last().addClass(selectors.activeClass);
            updateLogoPosition(selectors.item.last());
          }
          
          // Continue animation if still scrolling
          if ($(window).scrollTop() !== lastScrollTop) {
            animateScroll();
          } else {
            isScrolling = false;
          }
        });
      }
      
      // Handle window resize
      var resizeTimeout;
      $(window).on('resize', function() {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(function() {
          updateLogoPosition(selectors.item.filter('.' + selectors.activeClass));
        }, 250);
      });
    };
  })(jQuery);
  
  // Initialize timeline when document is ready
  $(document).ready(function() {
    $(".timeline").timeline();
  });