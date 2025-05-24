document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const specialSection = document.querySelector('.section-blackhole') || document.querySelector('.section-star') || document.querySelector('.hero');
    const letters = document.querySelectorAll("#logo .letter");
    const underscore = document.querySelector("#logo .underscore");
    const menuItems = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById('menu-toggle');
    const navbarNav = document.getElementById('navbar-nav');

    const whiteColor = '#ffffff';
    const blueColor = '#004aac';

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

        // Menu background color change for mobile/tablet
        if (window.innerWidth <= 1024) {
            if (isScrolled) {
                navbarNav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            } else {
                navbarNav.style.backgroundColor = 'transparent';
            }
        }

        // Menu items color
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
        
        if (scrollPosition >= specialSectionHeight) {
            menu.classList.add('scrolled');
            setColors(true);
        } else {
            menu.classList.remove('scrolled');
            setColors(false);
        }

        // Apply letter removal animation
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

        // Position underscore after last visible letter
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

    function toggleMenu(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navbarNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        }
    }

    // Menu toggle button click
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 && 
            navbarNav.classList.contains('active') && 
            !navbarNav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navbarNav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024 && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navbarNav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        checkVisibility();
    });

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Initial setup
    setColors(false);
    typingAnimation();
    setTimeout(checkVisibility, (letters.length + 1) * 100);
});