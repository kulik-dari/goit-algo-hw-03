// Section Stars Implementation - Exact Footer Match
const SectionStars = {
    init() {
      // Initialize all star layers
      this.createStarsLayer('stars');
      this.createStarsLayer('stars2');
      this.createStarsLayer('stars3');
      this.createStarsLayer('stars4');
    },
  
    createStarsLayer(id) {
      const container = document.getElementById(id);
      if (!container) return;
  
      // Clear existing stars
      container.innerHTML = '';
  
      // Number of stars based on layer
      const numberOfStars = this.getStarCount(id);
  
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'stara';
        
        // Size based on layer
        const size = this.getStarSize(id);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Animation timing
        star.style.animationDelay = `${Math.random()}s`;
        star.style.animationDuration = `${2 + Math.random() * 2}s`;
  
        container.appendChild(star);
      }
    },
  
    getStarCount(layerId) {
      const isMobile = window.innerWidth <= 768;
      const counts = {
        mobile: {
          stars: 50,    // Reduced from 150
          stars2: 40,   // Reduced from 100
          stars3: 30,   // Reduced from 75
          stars4: 20    // Reduced from 50
        },
        desktop: {
          stars: 100,   // Reduced from 250
          stars2: 80,   // Reduced from 200
          stars3: 60,   // Reduced from 150
          stars4: 40    // Reduced from 100
        }
      };
      return isMobile ? counts.mobile[layerId] : counts.desktop[layerId];
    },
  
    getStarSize(layerId) {
      const sizes = {
        stars: () => Math.random() * 2 + 1,  // 1-3px
        stars2: () => Math.random() * 2 + 2, // 2-4px
        stars3: () => Math.random() * 2 + 3, // 3-5px
        stars4: () => Math.random() * 2 + 4  // 4-6px
      };
      return sizes[layerId]();
    },
  
    handleResize() {
      this.init();
    }
  };
  
  // Initialize on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    SectionStars.init();
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    SectionStars.handleResize();
  });
  
  // Reinitialize stars when section becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        SectionStars.init();
      }
    });
  }, { threshold: 0.1 });
  
  // Observe the section
  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.page-banner-area');
    if (section) {
      observer.observe(section);
    }
  });