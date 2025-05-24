const Footer = {
    // Core configuration
    config: {
        mobileStars: 75,
        desktopStars: 150,
        particleInterval: 50,
        cycleTime: 30000,
        spaceshipAmplitude: 0.3
    },

    // State management
    state: {
        particleInterval: null,
        animationFrame: null,
        initialized: false
    },

    // Content definitions
    content: {
        logo: {
            main: "images/icons/newlogo.svg",
            alt: "CyberXYZ"
        },
       
        navigation: {
            menu: [
                { header: "Navigation", links: [
                    { text: "Home", url: "index.html" },
                    { text: "Pricing", url: "pricing.html" },
                    { text: "Contact", url: "contact.html" }
                ]},
                { header: "Company", links: [
                    { text: "Services", url: "service.html" },
                    { text: "About Us", url: "about.html" },
                    { text: "Careers", url: "careers.html" }
                ]},
                { header: "Services", links: [
                    { text: "APT Exploit scanner", url: "security-testing.html" },
                    { text: "DFIR", url: "dfir-timeline.html" }
                    
                ]}
            ]
        },
        contact: {
            header: "Contact",
            location: "Vancouver, Canada",
            phone: "(604) 123-4567"
        },
        social: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/company/cyberxyz/",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
            },
            {
                platform: "GitHub",
                url: "https://github.com/your-username",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
            },
            {
                platform: "Twitter",
                url: "https://x.com/cyberxyz_io",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg"
            }
        ],
        copyright: {
            year: new Date().getFullYear(),
            text: "CyberXYZ Security Inc. All Rights Reserved."
        }
    },

    // Content generation methods
    generateFooterContent() {
        return `
            <div class="footer-content">
                ${this.generateLogoSection()}
                ${this.generateNavigationSections()}
                ${this.generateContactSection()}
            </div>
            ${this.generateCopyright()}
            ${this.generateSpaceshipSection()}
        `;
    },

    generateLogoSection() {
        return `
            <div class="footer-section">
                <img src="${this.content.logo.main}" alt="${this.content.logo.alt}" class="logo-top">
                ${this.generateSocialLinks()}
            </div>
        `;
    },


    generateSocialLinks() {
        return `
            <div class="social">
                ${this.content.social.map(item => `
                    <a href="${item.url}" class="social-link" target="_blank" rel="noopener noreferrer">
                        <img src="${item.icon}" alt="${item.platform}" width="20" height="20">
                    </a>
                `).join('')}
            </div>
        `;
    },
   

    generateNavigationSections() {
        return this.content.navigation.menu.map(section => `
            <div class="footer-section">
                <h3 class="footer-header">${section.header}</h3>
                <div class="footer-links">
                    ${section.links.map(link => `
                        <a href="${link.url}" class="footer-link">${link.text}</a>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    generateContactSection() {
        return `
            <div class="footer-section">
                <h3 class="footer-header">${this.content.contact.header}</h3>
                <div class="contact-info">
                    <div class="location">${this.content.contact.location}</div>
                    <div class="phone">${this.content.contact.phone}</div>
                </div>
            </div>
        `;
    },

    generateCopyright() {
        return `
            <div class="copyright">
                © ${this.content.copyright.year} ${this.content.copyright.text}
            </div>
        `;
    },

    generateSpaceshipSection() {
        return `
            <div class="spaceship-container">
                <div class="stars1"></div>
                <div class="spaceship">
                    <svg width="120" height="60" viewBox="0 0 120 60">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#4A6FFF"/>
                                <stop offset="100%" style="stop-color:#9C6DFF"/>
                            </linearGradient>
                        </defs>
                        <path d="M30,30 Q45,15 60,15 Q75,15 90,30 Q75,45 60,45 Q45,45 30,30" 
                              fill="url(#shipGradient)" stroke="#FFFFFF" stroke-width="1" filter="url(#glow)"/>
                        <ellipse cx="60" cy="30" rx="12" ry="10" 
                                fill="#7FDBFF" fill-opacity="0.8" stroke="#FFFFFF"/>
                        <path d="M45,20 L55,25 L45,30" fill="none" stroke="#FFFFFF" stroke-width="1"/>
                        <path d="M45,40 L55,35 L45,30" fill="none" stroke="#FFFFFF" stroke-width="1"/>
                        <rect x="25" y="25" width="10" height="10" 
                              fill="#B0B0B0" stroke="#FFFFFF"/>
                    </svg>
                    <div class="particles"></div>
                </div>
            </div>
        `;
    },

    // Animation methods
    createStars() {
        const stars = document.querySelector('.stars1');
        if (!stars) return;
        
        stars.innerHTML = '';
        const numberOfStars = window.innerWidth <= 768 ? 
            this.config.mobileStars : this.config.desktopStars;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star1';
            
            Object.assign(star.style, {
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: String(Math.random() * 0.5 + 0.5)
            });

            stars.appendChild(star);
        }
    },

    createParticles() {
        const container = document.querySelector('.particles');
        if (!container) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            Object.assign(particle.style, {
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                top: `${Math.random() * 100}%`
            });

            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        };

        this.state.particleInterval = setInterval(createParticle, this.config.particleInterval);
    },

    animateSpaceship() {
        const spaceship = document.querySelector('.spaceship');
        const footer = document.getElementById('footer');
        if (!spaceship || !footer) return;

        let time = 0;
        let lastTimestamp = 0;

        const animate = (timestamp) => {
            if (timestamp - lastTimestamp < 16) {
                this.state.animationFrame = requestAnimationFrame(animate);
                return;
            }

            const progress = (time % this.config.cycleTime) / this.config.cycleTime;
            const width = footer.offsetWidth;
            const height = footer.offsetHeight;

            const x = width * progress;
            const y = height / 2 + Math.sin(progress * Math.PI * 4) * height * this.config.spaceshipAmplitude;

            spaceship.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            
            time += 16;
            lastTimestamp = timestamp;
            this.state.animationFrame = requestAnimationFrame(animate);
        };

        this.state.animationFrame = requestAnimationFrame(animate);
    },

    // Initialization and cleanup
    init() {
        const footer = document.getElementById('footer');
        if (!footer) return;

        footer.innerHTML = this.generateFooterContent();
        
        if (window.innerWidth > 768) {
            this.createStars();
            this.createParticles();
            this.animateSpaceship();
        }
        
        this.state.initialized = true;
        this.addEventListeners();
    },

    addEventListeners() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth <= 768) {
                    this.cleanup();
                } else {
                    this.createStars();
                    this.createParticles();
                    this.animateSpaceship();
                }
            }, 250);
        }, { passive: true });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.cleanup();
            } else if (window.innerWidth > 768) {
                this.createStars();
                this.createParticles();
                this.animateSpaceship();
            }
        });
    },

    cleanup() {
        if (this.state.particleInterval) {
            clearInterval(this.state.particleInterval);
            this.state.particleInterval = null;
        }
        
        if (this.state.animationFrame) {
            cancelAnimationFrame(this.state.animationFrame);
            this.state.animationFrame = null;
        }

        const stars = document.querySelector('.stars1');
        if (stars) stars.innerHTML = '';
    }
};

// Initialize footer
document.addEventListener('DOMContentLoaded', () => Footer.init(), { passive: true });
window.addEventListener('unload', () => Footer.cleanup(), { passive: true });