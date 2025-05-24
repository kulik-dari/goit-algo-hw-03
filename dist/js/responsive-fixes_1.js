// Responsive JavaScript Fixes
document.addEventListener('DOMContentLoaded', function() {
    // Detect device type
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    // Fix blackhole animation for mobile
    if (typeof blackhole === 'function') {
      const blackholeInstance = blackhole('#blackhole');
      
      // Optimize blackhole for mobile
      if (isMobile || isTablet) {
        // Reduce the number of stars for better performance
        if (blackholeInstance && typeof blackholeInstance.reset === 'function') {
          setTimeout(() => {
            blackholeInstance.reset({
              stars: isMobile ? 1000 : 1500
            });
          }, 100);
        }
      }
      
      // Handle resize properly
      window.addEventListener('resize', _.debounce(function() {
        if (blackholeInstance && typeof blackholeInstance.resize === 'function') {
          blackholeInstance.resize();
        }
      }, 250));
    }
    
    // Fix timeline scroll for mobile
    if ($('.timeline').length) {
      const adjustTimelineForMobile = () => {
        if (window.innerWidth <= 768) {
          // Adjust timeline logo position
          const firstItem = $('.timeline-item').first();
          const logoHeight = $('.timeline-logo').height();
          
          if (firstItem.length) {
            const itemTop = firstItem.position().top;
            const itemHeight = firstItem.outerHeight();
            $('.timeline-logo').css('top', (itemTop + itemHeight / 2 - logoHeight / 2) + 'px');
          }
          
          // Make timeline items visible on mobile without scrolling
          $('.timeline-item').addClass('timeline-item--active');
        }
      };
      
      // Run initial adjustment
      adjustTimelineForMobile();
      
      // Update on resize
      $(window).on('resize', _.debounce(adjustTimelineForMobile, 250));
      
      // Ensure timeline initialization runs properly
      if ($.fn.timeline) {
        $(".timeline").timeline();
      }
    }
    
    // Better counter animation
    if ($('.counter').length) {
      const inViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      
      const startCounters = () => {
        $('.counter:not(.counted)').each(function() {
          if (inViewport(this)) {
            $(this).addClass('counted').counterUp({
              delay: 10,
              time: 1000
            });
          }
        });
      };
      
      // Check on scroll
      $(window).on('scroll', _.debounce(startCounters, 100));
      
      // Initial check
      startCounters();
    }
    
    // Fix feature card animations
    const animateFeatureCards = () => {
      const cards = document.querySelectorAll('.feature-card');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
      });
    };
    
    // Initialize feature card animations
    if (document.querySelectorAll('.feature-card').length) {
      animateFeatureCards();
    }
    
    // Fix modal functionality
    const fixModals = () => {
      // Make sure modal closes properly on mobile
      $('.close-modal, .close-button-demo').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const modalId = $(this).closest('.modal').attr('id');
        if (typeof closeModal === 'function') {
          closeModal(modalId);
        } else {
          $(`#${modalId}`).hide();
          $('body').css('overflow', '');
        }
      });
      
      // Close modal on click outside content
      $('.modal').on('click', function(e) {
        if ($(e.target).hasClass('modal')) {
          const modalId = $(this).attr('id');
          if (typeof closeModal === 'function') {
            closeModal(modalId);
          } else {
            $(this).hide();
            $('body').css('overflow', '');
          }
        }
      });
      
      // Close modal on escape key
      $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
          $('.modal:visible').each(function() {
            const modalId = $(this).attr('id');
            if (typeof closeModal === 'function') {
              closeModal(modalId);
            } else {
              $(this).hide();
              $('body').css('overflow', '');
            }
          });
        }
      });
    };
    
    // Initialize modal fixes
    fixModals();
    
    // Handle menu dropdowns on mobile
    const fixMenuDropdowns = () => {
      if (window.innerWidth <= 1024) {
        $('.nav-item[data-dropdown] .nav-link').off('click').on('click', function(e) {
          e.preventDefault();
          
          const dropdown = $(this).siblings('.dropdown');
          if (dropdown.length) {
            dropdown.toggleClass('active');
          }
        });
        
        // Close dropdown when clicking elsewhere
        $(document).on('click', function(e) {
          if (!$(e.target).closest('.nav-item[data-dropdown]').length) {
            $('.dropdown').removeClass('active');
          }
        });
      }
    };
    
    // Initialize menu dropdown fixes
    fixMenuDropdowns();
    
    // Update on resize
    $(window).on('resize', _.debounce(function() {
      fixMenuDropdowns();
    }, 250));
    
    // Fix scroll animations
    const initScrollAnimations = () => {
      const animateOnScroll = (elements, animationClass) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        elements.forEach(el => observer.observe(el));
      };
      
      // Animate timeline items
      animateOnScroll(document.querySelectorAll('.timeline-item:not(.timeline-item--active)'), 'timeline-item--active');
      
      // Animate stats
      animateOnScroll(document.querySelectorAll('.stat-item'), 'fade-in');
    };
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Fix smooth scrolling
    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // Account for fixed header
            const headerOffset = document.querySelector('nav#menu') ? document.querySelector('nav#menu').offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const menuToggle = document.getElementById('menu-toggle');
            const navbarNav = document.getElementById('navbar-nav');
            
            if (menuToggle && menuToggle.classList.contains('active')) {
              menuToggle.classList.remove('active');
              navbarNav.classList.remove('active');
              document.body.style.overflow = '';
            }
          }
        });
      });
    };
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Fix iframe loading in modals
    const fixIframeLoading = () => {
      const iframes = document.querySelectorAll('iframe[data-src]');
      
      iframes.forEach(iframe => {
        const loadingHandler = () => {
          const loader = iframe.parentElement.querySelector('.loader');
          if (loader) {
            loader.style.display = 'none';
          }
          
          iframe.style.opacity = '1';
          iframe.removeEventListener('load', loadingHandler);
        };
        
        iframe.addEventListener('load', loadingHandler);
      });
      
      // Load iframes when needed rather than on page load
      const openModalButtons = document.querySelectorAll('[onclick*="openModal"]');
      
      openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
          setTimeout(() => {
            const modalId = this.getAttribute('onclick').match(/openModal\(['"]?([^'"]+)['"]?\)/);
            const modal = modalId ? document.getElementById(modalId[1]) : document.querySelector('.modal');
            
            if (modal) {
              const iframe = modal.querySelector('iframe[data-src]');
              if (iframe && iframe.src === 'about:blank') {
                iframe.src = iframe.getAttribute('data-src');
              }
            }
          }, 10);
        });
      });
    };
    
    // Initialize iframe loading fix
    fixIframeLoading();
  });
  
  // Fix for modal function if it doesn't exist
  if (typeof openModal !== 'function') {
    window.openModal = function(modalId = 'bookingModal') {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        const iframe = modal.querySelector('iframe[data-src]');
        if (iframe && iframe.src === 'about:blank') {
          iframe.src = iframe.getAttribute('data-src');
        }
      }
    };
  }
  
  if (typeof closeModal !== 'function') {
    window.closeModal = function(modalId = 'bookingModal') {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    };
  }