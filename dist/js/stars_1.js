// section-star.js

const StarSection = {
    // Configuration
    config: {
        stars: {
            desktop: {
                stars: 50,    // Reduced for better performance
                stars2: 40,
                stars3: 30,
                stars4: 20
            },
            mobile: {
                stars: 25,
                stars2: 20,
                stars3: 15,
                stars4: 10
            }
        },
        classes: {
            section: 'section-star',
            banner: 'page-banner-area page-contact',
            overlay: 'overlay dark-overlay',
            animation: 'bg-about-animation'
        }
    },

    // Content
    content: {
        heading: "Securing Tomorrow, Today!",
        description: "Cutting-edge cybersecurity solutions to protect your digital future.",
        social: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/company/cyberxyz/",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
            },
            {
                platform: "GitHub",
                url: "https://github.com",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
            },
            {
                platform: "Twitter",
                url: "https://x.com/cyberxyz_io",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg"
            }
        ]
    },

    // State management
    state: {
        initialized: false,
        observer: null
    },

    // Content generation methods
    generateSectionContent() {
        return `
            <div class="${this.config.classes.banner}" id="page-banner">
                <div class="${this.config.classes.overlay}"></div>
                <div class="${this.config.classes.animation}">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="stars4"></div>
                </div>
                <div class="styleabout">
                    <h1 class="text-white">${this.content.heading}</h1>
                    <p class="text-white">${this.content.description}</p>
                    <div class="iconabout">
                        ${this.generateSocialLinks()}
                    </div>
                </div>
            </div>
        `;
    },

    generateSocialLinks() {
        return this.content.social.map(item => `
            <a href="${item.url}" target="_blank" class="social-icon">
                <img src="${item.icon}" alt="${item.platform}" width="24" height="24" />
            </a>
        `).join('');
    },

    // Star generation methods
    createStarsLayer(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = '';
        const numberOfStars = this.getStarCount(id);

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'stara';

            const size = this.getStarSize(id);
            Object.assign(star.style, {
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
            });

            container.appendChild(star);
        }
    },

    getStarCount(layerId) {
        const isMobile = window.innerWidth <= 768;
        const counts = isMobile ? this.config.stars.mobile : this.config.stars.desktop;
        return counts[layerId];
    },

    getStarSize(layerId) {
        const sizes = {
            stars: () => Math.random() * 1.5 + 0.5,  // Smaller sizes for better performance
            stars2: () => Math.random() * 1.5 + 1,
            stars3: () => Math.random() * 1.5 + 1.5,
            stars4: () => Math.random() * 1.5 + 2
        };
        return sizes[layerId]();
    },

    // Initialization and cleanup
    initializeStars() {
        ['stars', 'stars2', 'stars3', 'stars4'].forEach(id => {
            this.createStarsLayer(id);
        });
    },

    setupObserver() {
        this.state.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.initializeStars();
                }
            });
        }, { threshold: 0.1 });

        const section = document.querySelector(`.${this.config.classes.banner}`);
        if (section) {
            this.state.observer.observe(section);
        }
    },

    handleResize() {
        if (this.state.initialized) {
            this.initializeStars();
        }
    },

    cleanup() {
        if (this.state.observer) {
            this.state.observer.disconnect();
        }
        window.removeEventListener('resize', this.handleResize.bind(this));
    },

    init() {
        const section = document.querySelector(`.${this.config.classes.section}`);
        if (!section) return;

        // Generate content
        section.innerHTML = this.generateSectionContent();
        
        // Initialize stars
        this.initializeStars();
        
        // Setup observer
        this.setupObserver();
        
        // Resize handler with debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        this.state.initialized = true;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    StarSection.init();
});

// Cleanup
window.addEventListener('unload', () => {
    StarSection.cleanup();
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100; // Adjust this based on your menu height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});