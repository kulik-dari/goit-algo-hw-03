// menu.js - Complete fixed version
function createMenu() {
    const menuContainer = document.querySelector('.section-menu');
    if (!menuContainer) return;

    menuContainer.innerHTML = `
        <div class="section-menu">
            <nav id="menu">
                <div id="logo">
                    <img src="images/nobackground.png" alt="CyberXYZ Logo">
                    <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 50">
                        <g class="letter-container">
                        <path class="letter" d="M9 7.859999999999999 q-0.26 -0.04 -0.43 -0.24 t-0.17 -0.46 l0 -1.46 q0 -0.34 0.24 -0.54 t0.56 -0.16 q1.72 0.28 3.06 1.22 q1.74 1.26 2.46 3.34 q0.12 0.34 -0.08 0.64 t-0.58 0.3 l-1.6 0 q-0.22 0 -0.4 -0.11 t-0.26 -0.31 q-0.44 -1.04 -1.34 -1.66 q-0.7 -0.44 -1.46 -0.56 z M14.06 14.5 q0.38 0 0.58 0.3 t0.08 0.64 q-0.72 2.08 -2.46 3.34 q-1.34 0.94 -3.06 1.22 l-0.1 0 q-0.28 0 -0.46 -0.18 q-0.24 -0.18 -0.24 -0.52 l0 -1.46 q0 -0.26 0.16 -0.46 t0.42 -0.24 q0.84 -0.12 1.48 -0.56 q0.9 -0.62 1.34 -1.66 q0.08 -0.2 0.26 -0.31 t0.4 -0.11 l1.6 0 z M6.9 5.24 q0.26 0.2 0.26 0.54 l0 1.56 q0 0.22 -0.15 0.41 t-0.37 0.27 q-0.28 0.06 -0.44 0.14 q-0.8 0.36 -1.36 0.98 q-1.14 1.28 -1.14 3.35 t1.14 3.37 q0.7 0.8 1.8 1.12 q0.22 0.06 0.37 0.25 t0.15 0.41 l0 1.58 q0 0.34 -0.26 0.54 q-0.18 0.16 -0.46 0.16 l-0.14 0 q-2.14 -0.46 -3.62 -2.08 q-1.9 -2.14 -1.9 -5.34 t1.9 -5.34 q1.48 -1.64 3.62 -2.06 q0.32 -0.08 0.6 0.14 z"/>
                        <path class="letter" d="M30.503999999999998 5.380000000000001 q0.1 0.18 0.09 0.38 t-0.13 0.36 l-5.54 8 l0 5.14 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.54 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.49 l0 -5.86 q0 -0.2 0.14 -0.4 l5.34 -7.7 q0.1 -0.14 0.25 -0.22 t0.33 -0.08 l1.86 0 q0.2 0 0.37 0.1 t0.25 0.28 z M22.084 9.78 q-0.08 0.18 -0.25 0.28 t-0.37 0.1 l-1.86 0 q-0.36 0 -0.6 -0.3 l-2.6 -3.74 q-0.1 -0.16 -0.11 -0.36 t0.07 -0.38 t0.25 -0.28 t0.37 -0.1 l1.88 0 q0.34 0 0.58 0.3 l2.6 3.74 q0.1 0.16 0.11 0.36 t-0.07 0.38 z"/>
                        <path class="letter" d="M43.668 12.18 q1.04 0.64 1.52 1.84 q0.28 0.64 0.28 1.58 q0 1.46 -0.78 2.45 t-2.28 1.47 q-0.94 0.32 -2.22 0.32 l-6.38 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.3 0.21 -0.51 t0.49 -0.21 l6.54 0 q1.16 0 1.72 -0.42 q0.48 -0.4 0.48 -1.09 t-0.5 -1.13 q-0.62 -0.54 -1.86 -0.54 l-6.38 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.38 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.02 0 q0.86 0 1.34 -0.3 q0.34 -0.2 0.54 -0.58 q0.14 -0.28 0.14 -0.65 t-0.1 -0.67 q-0.08 -0.24 -0.28 -0.44 q-0.44 -0.5 -1.46 -0.5 l-6.2 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z"/>
                        <path class="letter" d="M59.372 16.96 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l9.88 0 z M49.492 13.86 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.5 q0 -0.28 0.21 -0.49 t0.49 -0.21 l8.98 0 q0.3 0 0.51 0.21 t0.21 0.49 l0 1.5 q0 0.28 -0.21 0.49 t-0.51 0.21 l-8.98 0 z M59.372 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.3 -0.2 0.51 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.28 0.21 -0.49 t0.49 -0.21 l9.88 0 z"/>
                        <path class="letter" d="M72.856 14.1l3.02 4.62q0.22 0.36 0.02 0.72q-0.08 0.16 -0.25 0.26t-0.35 0.1l-1.82 0q-0.18 0 -0.34 -0.09t-0.24 -0.23l-3.04 -4.82l-3.56 0l0 4.44q0 0.28 -0.21 0.49t-0.49 0.21l-1.52 0q-0.28 0 -0.49 -0.21t-0.21 -0.49l0 -6.58q0 -0.28 0.21 -0.49t0.49 -0.21l6.16 0q1.76 0 2.34 -1q0.2 -0.32 0.2 -0.92q0 -0.94 -0.62 -1.48q-0.64 -0.58 -1.84 -0.58l-6.24 0q-0.28 0 -0.49 -0.21t-0.21 -0.49l0 -1.44q0 -0.28 0.21 -0.49t0.49 -0.21l6.42 0q2.34 0 3.74 1.32q1.46 1.32 1.46 3.58q0 1.46 -0.64 2.49t-1.86 1.57z"/>
                        <path class="letter" d="M96.524 18.82 q0.12 0.16 0.14 0.36 t-0.06 0.38 t-0.26 0.29 t-0.38 0.11 l-1.94 0 q-0.36 0 -0.58 -0.28 l-3.82 -5.06 l-3.82 5.06 q-0.22 0.28 -0.56 0.28 l-1.96 0 q-0.2 0 -0.37 -0.1 t-0.25 -0.28 q-0.2 -0.42 0.06 -0.76 l10.36 -13.54 q0.22 -0.28 0.56 -0.28 l1.94 0 q0.2 0 0.37 0.11 t0.27 0.29 t0.08 0.38 t-0.16 0.36 l-4.7 6.12 z M85.98400000000001 9.88 l-2.88 -3.74 q-0.14 -0.16 -0.16 -0.36 t0.08 -0.38 t0.27 -0.29 t0.37 -0.11 l1.94 0 q0.16 0 0.32 0.07 t0.24 0.21 l2.82 3.74 q0.28 0.34 0.08 0.76 q-0.08 0.18 -0.25 0.28 t-0.39 0.1 l-1.88 0 q-0.16 0 -0.32 -0.07 t-0.24 -0.21 z"/>
                        <path class="letter" d="M111.72800000000001 5.380000000000001 q0.1 0.18 0.09 0.38 t-0.13 0.36 l-5.54 8 l0 5.14 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.54 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.49 l0 -5.86 q0 -0.2 0.14 -0.4 l5.34 -7.7 q0.1 -0.14 0.25 -0.22 t0.33 -0.08 l1.86 0 q0.2 0 0.37 0.1 t0.25 0.28 z M103.308 9.78 q-0.08 0.18 -0.25 0.28 t-0.37 0.1 l-1.86 0 q-0.36 0 -0.6 -0.3 l-2.6 -3.74 q-0.1 -0.16 -0.11 -0.36 t0.07 -0.38 t0.25 -0.28 t0.37 -0.1 l1.88 0 q0.34 0 0.58 0.3 l2.6 3.74 q0.1 0.16 0.11 0.36 t-0.07 0.38 z"/>
                   <path class="letter" d="M124.73200000000001 17.12 q0.28 0 0.49 0.21 t0.21 0.49 l0 1.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-10.74 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.24 0.16 -0.44 l2.86 -3.46 q0.22 -0.26 0.54 -0.26 l1.92 0 q0.2 0 0.38 0.11 t0.27 0.3 t0.06 0.4 t-0.17 0.35 l-1.92 2.32 l7.34 0 z M124.73200000000001 5 q0.28 0 0.49 0.21 t0.21 0.51 l0 1.46 q0 0.26 -0.16 0.46 l-2.86 3.42 q-0.2 0.26 -0.54 0.26 l-1.9 0 q-0.2 0 -0.38 -0.11 t-0.28 -0.29 q-0.16 -0.44 0.1 -0.76 l1.92 -2.3 l-7.2 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.51 l0 -1.42 q0 -0.3 0.21 -0.51 t0.51 -0.21 l10.6 0 z"/>
                        </g>
                    </svg>
                    <span class="underscore">_</span>
                </div>
                <div class="menu-toggle" id="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="menu-overlay" id="menu-overlay"></div>
                
                <div class="navbar-center">
                    <ul class="navbar-nav" id="navbar-nav">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link" data-link>Home</a>
                        </li>
                        <li class="nav-item" data-dropdown="about-dropdown">
                            <a href="about.html" class="nav-link">About</a>
                            <div class="dropdown" id="about-dropdown">
                                <div class="dropdown-container">
                                    <div class="left-section">
                                        <div class="section active" data-content="company">
                                            <div class="sections-titles">Company</div>
                                            <div class="section-description">Learn about our mission</div>
                                        </div>
                                        <div class="section" data-content="careers">
                                            <div class="sections-titles">Careers</div>
                                            <div class="section-description">Join our team</div>
                                        </div>
                                    </div>
                                    <div class="right-section">
                                        <div class="content-group active" id="company-content">
                                            <div class="menu-item">
                                                <a href="about.html">
                                                    <div class="menu-item-title">Our story</div>
                                                    <div class="menu-item-description">How we started</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="content-group" id="careers-content">
                                            <div class="menu-item">
                                                <a href="careers.html">
                                                    <div class="menu-item-title">Open Positions</div>
                                                    <div class="menu-item-description">Current opportunities</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item" data-dropdown="services-dropdown">
                            <a href="service.html" class="nav-link">Service</a>
                            <div class="dropdown" id="services-dropdown">
                                <div class="dropdown-container">
                                    <div class="left-section">
                                        <div class="section active" data-content="solutions">
                                            <div class="sections-titles">Solutions</div>
                                            <div class="section-description">Our core offerings</div>
                                        </div>
                                        <div class="section" data-content="industries">
                                            <div class="sections-titles">Products</div>
                                            <div class="section-description">Your Complete Security Arsenal</div>
                                        </div>
                                    </div>
                                    <div class="right-section">
                                        <div class="content-group active" id="solutions-content">
                                            <div class="menu-item">
                                                <a href="service.html">
                                                    <div class="menu-item-title">Services</div>
                                                    <div class="menu-item-description">Our main services</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="content-group" id="industries-content">
                                            <div class="menu-item">
                                                <a href="security-testing.html">
                                                    <div class="menu-item-title">APT Exploit scanner</div>
                                                    <div class="menu-item-description">Comprehensive assessments</div>
                                                </a>
                                            </div>
                                            <div class="menu-item">
                                                <a href="dfir-timeline.html">
                                                    <div class="menu-item-title">DFIR & CSIRT</div>
                                                    <div class="menu-item-description">Night Owl</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="pricing.html" class="nav-link" data-link>Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.html" class="nav-link" data-link>Contact</a>
                        </li>
                        <li class="nav-item-demo">
                            <button onclick="openModal()" class="btn-outline-dark-menu btn-hover-color">Book Demo</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     <div id="bookingModal" class="modal">
            <div class="modal-content">
                <span class="close-modal" onclick="closeModal()">&times;</span>
                <div class="iframe-container">
                    <div id="iframe-loader" class="loader">
                        <div class="loading-spinner"></div>
                        <div class="loading-text">Loading calendar...</div>
                    </div>
                    <iframe 
                        id="booking-iframe"
                        src="about:blank"
                        data-src="https://outlook-sdf.office.com/bookwithme/user/f26966c203b14789a4dab153891adf9e@cyberxyz.io/meetingtype/A9xzCWBLo0OcQeGAOTqgzw2?anonymous&ep=mcard&isanonymous=true"
                        onload="handleIframeLoad()"
                        style="opacity: 0; transition: opacity 0.3s ease;"
                    ></iframe>
                </div>
            </div>
        </div>
    `;

    // Modal handler functions
    window.handleIframeLoad = function() {
        const iframe = document.getElementById('booking-iframe');
        const loader = document.getElementById('iframe-loader');
        if (iframe && loader) {
            setTimeout(() => {
                iframe.style.opacity = '1';
                loader.style.display = 'none';
            }, 500);
        }
    };

    window.openModal = function() {
        const modal = document.getElementById('bookingModal');
        const iframe = document.getElementById('booking-iframe');
        const loader = document.getElementById('iframe-loader');
        
        if (modal && iframe && loader) {
            modal.style.display = 'block';
            loader.style.display = 'block';
            iframe.style.opacity = '0';
            
            if (iframe.src === 'about:blank') {
                iframe.src = iframe.dataset.src;
            } else {
                iframe.src = iframe.src;
            }

            // Store scroll position and prevent body scrolling
            const scrollY = window.scrollY;
            document.body.setAttribute('data-scroll-position', scrollY);
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.classList.add('modal-open');
            
            // Track modal open in analytics
            if (typeof gtag === 'function') {
                gtag('event', 'open_demo_modal', {
                    'event_category': 'Engagement',
                    'event_label': 'Demo Booking'
                });
            }
        }
    };

    window.closeModal = function() {
        const modal = document.getElementById('bookingModal');
        const iframe = document.getElementById('booking-iframe');
        
        if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            
            // Restore scroll position
            const scrollY = parseInt(document.body.getAttribute('data-scroll-position') || '0');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
            
            if (iframe) {
                iframe.style.opacity = '0';
                iframe.src = 'about:blank';
            }
        }
    };

    // Initialize menu functionality on next animation frame for better performance
    requestAnimationFrame(() => {
        initializeMenuFunctionality();
    });
}

function initializeMenuFunctionality() {
    // Initialize variables
    const menu = document.getElementById("menu");
    const specialSection = document.querySelector('.section-blackhole') || 
                          document.querySelector('.section-star') || 
                          document.querySelector('.hero') || 
                          document.querySelector('.hero-section');
    const svCliSection = document.querySelector('.sv-cli');
    const letters = document.querySelectorAll("#logo .letter");
    const underscore = document.querySelector("#logo .underscore");
    const menuItems = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById('menu-toggle');
    const navbarNav = document.getElementById('navbar-nav');
    const menuOverlay = document.getElementById('menu-overlay');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    const whiteColor = '#ffffff';
    const blueColor = '#004aac';
    const TRANSITION_OFFSET = 150;
    let dropdownTimeouts = new Map();
    let currentDropdown = null;
    let isDropdownOpen = false;
    let lastInteractionTime = 0;
    const CLICK_DELAY = 300;

    // Menu functions
    function setColors(isScrolled) {
        const color = isScrolled ? blueColor : whiteColor;
        letters.forEach(letter => letter.style.fill = color);
        if (underscore) underscore.style.color = color;
        if (menuToggle) {
            menuToggle.querySelectorAll('span').forEach(span => {
                span.style.backgroundColor = color;
            });
        }
        if (window.innerWidth > 1024) {
            menuItems.forEach(item => item.style.color = color);
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

        // Check if we're in the sv-cli section
        let isInSvCliSection = false;
        if (svCliSection) {
            const svCliRect = svCliSection.getBoundingClientRect();
            isInSvCliSection = svCliRect.top <= 0 && svCliRect.bottom > 0;
        }

        if (scrollPosition >= specialSectionHeight - TRANSITION_OFFSET) {
            menu.classList.add('scrolled');
            if (isInSvCliSection) {
                setColors(false); // Use white in sv-cli section
            } else {
                setColors(true); // Use blue otherwise
            }
        } else {
            menu.classList.remove('scrolled');
            setColors(false); // Use white at top
        }

        // Adjust logo letters based on scroll position
        const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);
        let visibleLetters = Math.floor((1 - scrollPercentage) * letters.length);
        visibleLetters = Math.max(1, visibleLetters);

        letters.forEach((letter, index) => {
            letter.style.opacity = index < visibleLetters ? '1' : '0';
            letter.style.transform = index < visibleLetters ? 'translateY(0)' : 'translateY(-20px)';
        });

        // Update underscore position
        if (underscore) {
            const lastVisibleLetter = letters[visibleLetters - 1];
            if (lastVisibleLetter) {
                underscore.style.opacity = '1';
                const logoRect = document.querySelector('#logo').getBoundingClientRect();
                const letterRect = lastVisibleLetter.getBoundingClientRect();
                underscore.style.transform = `translateX(${letterRect.right - logoRect.left}px)`;
            } else {
                underscore.style.opacity = '0';
            }
        }
    }

    // Mobile menu fixes
    function fixMobileMenu() {
        // Only run on mobile devices
        if (window.innerWidth > 1024) return;
        
        // Get menu elements
        const navbarNav = document.getElementById('navbar-nav');
        const demoButton = document.querySelector('.nav-item-demo');
        const dropdowns = document.querySelectorAll('.dropdown');
        
        // 1. Move demo button to the end of the menu
        if (navbarNav && demoButton) {
            navbarNav.appendChild(demoButton);
        }
        
        // 2. Add back buttons to dropdowns if they don't exist
        dropdowns.forEach(dropdown => {
            const contentGroups = dropdown.querySelectorAll('.content-group');
            
            contentGroups.forEach(group => {
                if (!group.querySelector('.mobile-back-button')) {
                    const backButton = document.createElement('div');
                    backButton.className = 'mobile-back-button';
                    backButton.innerHTML = '← Back';
                    backButton.addEventListener('click', function() {
                        dropdown.querySelector('.left-section').style.display = '';
                        group.classList.remove('active');
                    });
                    
                    group.prepend(backButton);
                }
            });
            
            // Center dropdown
            dropdown.style.left = '0';
            dropdown.style.right = '0';
            dropdown.style.margin = '0 auto';
        });
    }

    // Dropdown handling
    function handleDropdownShow(dropdown) {
        if (!dropdown) return;
        
        // Close other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });
        
        // Activate current dropdown
        dropdown.classList.add('active');
        currentDropdown = dropdown;
        isDropdownOpen = true;
        lastInteractionTime = Date.now();
        
        // Track dropdown opening in analytics
        if (typeof gtag === 'function') {
            const dropdownId = dropdown.id;
            gtag('event', 'dropdown_open', {
                'event_category': 'Navigation',
                'event_label': dropdownId
            });
        }
    }

    function handleDropdownHide(dropdown) {
        if (!dropdown) return;

        const timeoutId = setTimeout(() => {
            if (currentDropdown === dropdown) {
                dropdown.classList.remove('active');
                currentDropdown = null;isDropdownOpen = false;
            }
        }, 150);
        dropdownTimeouts.set(dropdown, timeoutId);
    }

    function clearDropdownTimeout(dropdown) {
        const timeoutId = dropdownTimeouts.get(dropdown);
        if (timeoutId) {
            clearTimeout(timeoutId);
            dropdownTimeouts.delete(dropdown);
        }
    }

    // Event listeners
    document.querySelectorAll('.nav-item[data-dropdown]').forEach(item => {
        const dropdownId = item.getAttribute('data-dropdown');
        const dropdown = document.getElementById(dropdownId);
        const navLink = item.querySelector('.nav-link');
        
        if (!dropdown || !navLink) return;

        // Desktop dropdown handling
        if (window.innerWidth > 1024) {
            item.addEventListener('mouseenter', () => {
                clearDropdownTimeout(dropdown);
                handleDropdownShow(dropdown);
            });

            item.addEventListener('mouseleave', (e) => {
                if (!e.relatedTarget || !dropdown.contains(e.relatedTarget)) {
                    handleDropdownHide(dropdown);
                }
            });

            dropdown.addEventListener('mouseenter', () => {
                clearDropdownTimeout(dropdown);
                dropdown.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', (e) => {
                if (!e.relatedTarget || !item.contains(e.relatedTarget)) {
                    handleDropdownHide(dropdown);
                }
            });
        }

        navLink.addEventListener('click', (e) => {
            const timeSinceLastInteraction = Date.now() - lastInteractionTime;
            
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // For mobile, capture analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'mobile_dropdown_toggle', {
                        'event_category': 'Mobile Navigation',
                        'event_label': dropdownId,
                        'value': dropdown.classList.contains('active') ? 1 : 0
                    });
                }
                return;
            }

            if (!isDropdownOpen || timeSinceLastInteraction >= CLICK_DELAY) {
                return true;
            }

            e.preventDefault();
        });

        dropdown.querySelectorAll('.section').forEach(section => {
            section.addEventListener('mouseenter', () => {
                const contentId = section.getAttribute('data-content');
                dropdown.querySelectorAll('.section').forEach(s => 
                    s.classList.toggle('active', s === section));
                dropdown.querySelectorAll('.content-group').forEach(content => 
                    content.classList.toggle('active', content.id === `${contentId}-content`));
            });
            
            // For mobile
            section.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    const contentId = section.getAttribute('data-content');
                    dropdown.querySelectorAll('.section').forEach(s => 
                        s.classList.toggle('active', s === section));
                    dropdown.querySelectorAll('.content-group').forEach(content => 
                        content.classList.toggle('active', content.id === `${contentId}-content`));
                        
                    // Hide the sections on mobile to show only content
                    if (window.innerWidth <= 1024) {
                        dropdown.querySelector('.left-section').style.display = 'none';
                    }
                }
            });
        });
    });

    document.querySelectorAll('.menu-item a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                menuToggle?.classList.remove('active');
                navbarNav?.classList.remove('active');
                menuOverlay?.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Track menu item clicks in analytics
            if (typeof gtag === 'function') {
                const linkText = link.querySelector('.menu-item-title')?.textContent || link.textContent;
                const href = link.getAttribute('href');
                gtag('event', 'menu_item_click', {
                    'event_category': 'Navigation',
                    'event_label': linkText,
                    'value': href
                });
            }
            
            const href = link.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    if (menuToggle && navbarNav && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbarNav.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = navbarNav.classList.contains('active') ? 'hidden' : '';
            
            // Track mobile menu toggle in analytics
            if (typeof gtag === 'function') {
                gtag('event', 'mobile_menu_toggle', {
                    'event_category': 'Mobile Navigation',
                    'event_label': 'Menu Toggle',
                    'value': navbarNav.classList.contains('active') ? 1 : 0
                });
            }
        });

        menuOverlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbarNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Modal event listeners
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }

    // Window event listeners
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 1024) {
                menuToggle?.classList.remove('active');
                navbarNav?.classList.remove('active');
                menuOverlay?.classList.remove('active');
                document.body.style.overflow = '';
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                
                // Reset any mobile-specific styles
                document.querySelectorAll('.dropdown .left-section').forEach(section => {
                    section.style.display = '';
                });
            } else {
                // If we resized to mobile, fix the mobile menu
                fixMobileMenu();
            }
            checkVisibility();
        }, 250);
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = requestAnimationFrame(() => {
                checkVisibility();
                scrollTimeout = null;
            });
        }
    }, { passive: true });

    // Document click handlers
    document.addEventListener('click', (e) => {
        if (!e.target.closest('[data-dropdown]')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                currentDropdown = null;
                isDropdownOpen = false;
            });
        }

        if (window.innerWidth <= 1024 &&
            navbarNav?.classList.contains('active') &&
            !navbarNav.contains(e.target) &&
            !menuToggle?.contains(e.target)) {
            menuToggle?.classList.remove('active');
            navbarNav.classList.remove('active');
            menuOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.querySelectorAll('.nav-link[data-link]').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                menuToggle?.classList.remove('active');
                navbarNav.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Track navigation clicks in analytics
            if (typeof gtag === 'function') {
                const linkText = link.textContent;
                const href = link.getAttribute('href');
                gtag('event', 'navigation_click', {
                    'event_category': 'Navigation',
                    'event_label': linkText,
                    'value': href
                });
            }
        });
    });

    // Initialize menu
    checkVisibility();
    setColors(false);
    typingAnimation();
    setTimeout(checkVisibility, (letters.length + 1) * 100);
    
    // Call mobile menu fixes
    fixMobileMenu();

    // Add accessibility attributes
    menuToggle?.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.addEventListener('click', function() {
        this.setAttribute('aria-expanded', this.classList.contains('active').toString());
    });
    
    document.querySelectorAll('.nav-item[data-dropdown]').forEach(item => {
        const dropdownId = item.getAttribute('data-dropdown');
        const navLink = item.querySelector('.nav-link');
        if (navLink) {
            navLink.setAttribute('aria-expanded', 'false');
            navLink.setAttribute('aria-controls', dropdownId);
            navLink.addEventListener('click', function() {
                const expanded = document.getElementById(dropdownId).classList.contains('active');
                this.setAttribute('aria-expanded', expanded.toString());
            });
        }
    });
}

// Add performance tracking for the menu
function trackMenuPerformance() {
    if (typeof gtag === 'function') {
        // Track menu load time
        const menuLoadTime = window.performance.now();
        gtag('event', 'menu_load_time', {
            'event_category': 'Performance',
            'event_label': 'Menu Load',
            'value': Math.round(menuLoadTime)
        });
        
        // Track page load performance metrics
        window.addEventListener('load', () => {
            // Use the Performance API to get timing metrics
            if (window.performance && window.performance.timing) {
                setTimeout(() => {
                    const t = window.performance.timing;
                    const pageLoadTime = t.loadEventEnd - t.navigationStart;
                    const domReadyTime = t.domComplete - t.domLoading;
                    
                    gtag('event', 'page_performance', {
                        'event_category': 'Performance',
                        'page_load_time': pageLoadTime,
                        'dom_ready_time': domReadyTime
                    });
                }, 0);
            }
        });
    }
}

// Position Book Demo button for mobile/tablet
function positionBookDemoButton() {
    if (window.innerWidth <= 1024) {
        const navbarNav = document.getElementById('navbar-nav');
        const demoButton = document.querySelector('.nav-item-demo');
        
        if (navbarNav && demoButton) {
            // Make sure it's the last item in the nav
            navbarNav.appendChild(demoButton);
            
            // Apply mobile-specific styling
            demoButton.style.position = 'relative';
            demoButton.style.right = 'auto';
            demoButton.style.width = '80%';
            demoButton.style.maxWidth = '300px';
            demoButton.style.margin = '20px auto 30px';
            demoButton.style.order = '999'; // Push to end with flexbox ordering
            
            // Add specific classes for mobile
            demoButton.classList.add('mobile-demo-button');
            
            // Make sure it appears below all menu items
            const btn = demoButton.querySelector('.btn-outline-dark-menu');
            if (btn) {
                btn.style.width = '100%';
                btn.style.textAlign = 'center';
            }
        }
    } else {
        // Reset desktop styles
        const demoButton = document.querySelector('.nav-item-demo');
        if (demoButton) {
            demoButton.style.position = '';
            demoButton.style.right = '';
            demoButton.style.width = '';
            demoButton.style.maxWidth = '';
            demoButton.style.margin = '';
            demoButton.style.order = '';
            demoButton.classList.remove('mobile-demo-button');
            
            const btn = demoButton.querySelector('.btn-outline-dark-menu');
            if (btn) {
                btn.style.width = '';
                btn.style.textAlign = '';
            }
        }
    }
}

// Call these functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createMenu();
    trackMenuPerformance();
    
    // Position Book Demo button and update on resize
    positionBookDemoButton();
    window.addEventListener('resize', positionBookDemoButton);
});