// Footer Stars Implementation
const FooterStars = {
  init() {
    this.createStars();
    this.createParticles();
    this.updateSpaceshipPosition();
  },

  createStars() {
    const stars = document.querySelector('.stars1');
    if (!stars) return;
    
    // Clear existing stars
    stars.innerHTML = '';
    
    const numberOfStars = window.innerWidth <= 768 ? 75 : 150;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star1';
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay and opacity
      star.style.animationDelay = `${Math.random()}s`;
      star.style.opacity = Math.random() * 0.5 + 0.5;
      
      stars.appendChild(star);
    }
  },

  createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 4-10px
      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${Math.random() * 100}%`;
      
      particlesContainer.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    // Create new particle every 50ms
    this.particleInterval = setInterval(createParticle, 50);
  },

  updateSpaceshipPosition() {
    const spaceship = document.querySelector('.spaceship');
    const footer = document.getElementById('footer');
    if (!spaceship || !footer) return;

    let time = 0;
    const duration = 30000; // 30 seconds cycle

    const animate = () => {
      const progress = (time % duration) / duration;
      const width = footer.offsetWidth;
      const height = footer.offsetHeight;

      // Helical motion parameters
      const x = width * progress;
      const amplitude = height * 0.3;
      const frequency = 2;
      const y = height / 2 + Math.sin(progress * Math.PI * 2 * frequency) * amplitude / 2;

      // Calculate rotation
      const dx = 1;
      const dy = Math.cos(progress * Math.PI * 2 * frequency) * amplitude * Math.PI / duration;
      const rotation = Math.atan2(dy, dx) * 180 / Math.PI;

      // Handle seamless transition
      if (progress > 0.99) {
        spaceship.style.transition = 'none';
        time = 0;
      } else {
        spaceship.style.transition = 'transform 0.1s linear';
      }

      // Update spaceship position
      spaceship.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      
      time += 16;
      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  },

  cleanup() {
    if (this.particleInterval) {
      clearInterval(this.particleInterval);
    }
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  },

  handleResize() {
    this.cleanup();
    this.init();
  }
};

// Initialize on load
window.addEventListener('load', () => {
  FooterStars.init();
});

// Handle window resize
window.addEventListener('resize', () => {
  FooterStars.handleResize();
});

// Cleanup on page unload
window.addEventListener('unload', () => {
  FooterStars.cleanup();
});