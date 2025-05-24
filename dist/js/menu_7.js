document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const specialSection = document.querySelector('.section-blackhole') || document.querySelector('.section-star') || document.querySelector('.hero');
    const letters = document.querySelectorAll("#logo .letter");
    const underscore = document.querySelector("#logo .underscore");
    const menuItems = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById('menu-toggle');
    const navbarNav = document.getElementById('navbar-nav');
    const menuOverlay = document.getElementById('menu-overlay');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const whiteColor = '#ffffff';
    const blueColor = '#004aac';
    
    // Increased transition buffer
    const TRANSITION_OFFSET = 150; // Pixels before reaching the section

    function setColors(isScrolled) {
        const color = isScrolled ? blueColor : whiteColor;

        // Logo colors
        letters.forEach(letter => {
            letter.style.fill = color;
        });
        if (underscore) {
            underscore.style.color = color;
        }

        // Menu button color
        if (menuToggle) {
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.backgroundColor = color;
            });
        }

        // Menu items color for desktop only
        if (window.innerWidth > 1024) {
            menuItems.forEach(item => {
                item.style.color = color;
            });
        }
    }

    function typingAnimation() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, index * 100);
        });
        if (underscore) {
            setTimeout(() => {
                underscore.style.opacity = '1';
                underscore.style.transform = 'translateX(0)';
            }, letters.length * 100);
        }
    }

    function checkVisibility() {
        const scrollPosition = window.scrollY;
        const specialSectionHeight = specialSection ? specialSection.offsetHeight : 0;

        // Modified to trigger earlier
        if (scrollPosition >= specialSectionHeight - TRANSITION_OFFSET) {
            menu.classList.add('scrolled');
            setColors(true);
        } else {
            menu.classList.remove('scrolled');
            setColors(false);
        }

        // Letter removal animation
        const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);
        let visibleLetters = Math.floor((1 - scrollPercentage) * letters.length);
        visibleLetters = Math.max(1, visibleLetters);

        letters.forEach((letter, index) => {
            if (index < visibleLetters) {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            } else {
                letter.style.opacity = '0';
                letter.style.transform = 'translateY(-20px)';
            }
        });

        // Position underscore
        if (underscore) {
            const lastVisibleLetter = letters[visibleLetters - 1];
            if (lastVisibleLetter) {
                underscore.style.opacity = '1';
                const logoRect = document.querySelector('#logo').getBoundingClientRect();
                const letterRect = lastVisibleLetter.getBoundingClientRect();
                const underscorePos = letterRect.right - logoRect.left;
                underscore.style.transform = `translateX(${underscorePos}px)`;
            } else {
                underscore.style.opacity = '0';
            }
        }
    }

    window.addEventListener('resize', () => {
        // Adjust button and text visibility on resize
        const button = document.querySelector('button');
        
        if (window.innerWidth < 768) {
            button.style.fontSize = '16px';
        } else if (window.innerWidth < 480) {
            button.style.fontSize = '14px';
        } else {
            button.style.fontSize = '18px';
        }
    });

    // Handle mobile menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navbarNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navbarNav.classList.contains('active') ? 'hidden' : '';
    }

    // Handle dropdowns
    menuItems.forEach(item => {
        const parent = item.parentElement;
        const dropdown = parent.querySelector('.dropdown-menu');
        
        if (dropdown && window.innerWidth <= 1024) {
            item.addEventListener('click', function(e) {
                if (dropdown) {
                    e.preventDefault(); // Prevent navigation to the link's href
                    dropdown.classList.toggle('show');
                }
            });
        }
    });

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 &&
            navbarNav.classList.contains('active') &&
            !navbarNav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking nav links (for mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024 && navbarNav.classList.contains('active')) {
                toggleMenu();
                window.location.href = link.getAttribute('href'); // Navigate to the link's href
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            menuToggle.classList.remove('active');
            navbarNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            dropdownMenus.forEach(menu => menu.classList.remove('show'));
        }
        checkVisibility();
    });

    // Add smooth scroll handling with requestAnimationFrame
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                checkVisibility();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial setup
    checkVisibility(); // Check on load
    setColors(false); // Set initial colors
    typingAnimation(); // Start typing animation

    // Run visibility check after animation
    setTimeout(checkVisibility, (letters.length + 1) * 100);
});
function openModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    // Store current scroll position
    modal.setAttribute('data-scroll', window.scrollY);
    // Prevent Safari bounce
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    // Restore scroll position
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(modal.getAttribute('data-scroll') || '0'));
}

// Add event listeners when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.close-butt-demo');

    // Close on overlay click
    modalOverlay.addEventListener('click', closeModal);

    // Close on button click
    closeBtn.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });

    // Prevent clicks inside modal from closing it
    modal.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});