
    function createStars(container, count) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
      }
    }

    function createOrbital(ring, count) {
      for (let i = 0; i < count; i++) {
        const orbital = document.createElement('div');
        orbital.className = 'orbital';
        const angle = (360 / count) * i;
        const radius = ring.offsetWidth / 2;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        orbital.style.left = `${x + radius}px`;
        orbital.style.top = `${y + radius}px`;
        ring.appendChild(orbital);
      }
    }

    function openPopup(popupId) {
      const popup = document.getElementById(popupId);
      if (!popup) return;

      const background = popup.querySelector('.cosmic-background');
      if (!background.querySelector('.star')) {
        createStars(background, 100);
      }

      const rings = popup.querySelectorAll('.planet-ring');
      rings.forEach((ring, index) => {
        if (!ring.querySelector('.orbital')) {
          createOrbital(ring, 6 + index * 2);
        }
      });

      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (!popup) return;
  
  const content = popup.querySelector('.content');
  const planetCore = popup.querySelector('.planet-core');
  const rings = popup.querySelectorAll('.planet-ring');
  const backgrounds = popup.querySelectorAll('.background');
  
  // First fade out the content
  content.style.transition = 'opacity 0.8s ease-in-out';
  content.style.opacity = '0';
  
  // Wait before starting the planet animations
  setTimeout(() => {
    // Set planet and rings animation speed
    planetCore.style.transition = 'transform 1.2s ease-in-out';
    rings.forEach(ring => {
      ring.style.transition = 'transform 1.2s ease-in-out';
    });
    
    // Scale down the planets and rings
    planetCore.style.transform = 'translate(-50%, -50%) scale(0)';
    rings.forEach(ring => {
      ring.style.transform = 'translate(-50%, -50%) scale(0)';
    });
    
    // Scale down backgrounds with delays
    backgrounds.forEach((bg, index) => {
      bg.style.transition = 'transform 1.2s ease-in-out';
      setTimeout(() => {
        bg.style.transform = 'scale(0)';
      }, index * 150); // Slightly faster delay between backgrounds
    });
  }, 200); // Reduced delay before starting planet animations
  
  // Finally close the popup after all animations
  setTimeout(() => {
    popup.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset transitions to original speeds for next opening
    content.style.transition = 'opacity 0.5s ease-in-out';
    planetCore.style.transition = 'transform 0.8s ease-in-out';
    rings.forEach(ring => {
      ring.style.transition = 'transform 0.8s ease-in-out';
    });
    backgrounds.forEach(bg => {
      bg.style.transition = 'transform 0.8s ease-in-out';
    });
  }, 1000); // Reduced total animation time
}

    function openPopup(popupId) {
      const popup = document.getElementById(popupId);
      if (!popup) return;

      // Reset content opacity before showing
      const content = popup.querySelector('.content');
      content.style.opacity = '0';

      const background = popup.querySelector('.cosmic-background');
      if (!background.querySelector('.star')) {
        createStars(background, 100);
      }

      const rings = popup.querySelectorAll('.planet-ring');
      rings.forEach((ring, index) => {
        if (!ring.querySelector('.orbital')) {
          createOrbital(ring, 6 + index * 2);
        }
      });

      // Show popup
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Force reflow to ensure animation plays
      popup.offsetHeight;

      // Show content with slight delay to ensure it's visible
      setTimeout(() => {
        content.style.opacity = '1';
      }, 100);
    }
    

    // Initialize popup handlers for each security card
    document.addEventListener('DOMContentLoaded', function() {
      const securityCards = ['net-sec', 'data-sec', 'clo-sec', 'app-sec'];
      
      securityCards.forEach(cardId => {
        // Find the button within each card
        const card = document.getElementById(cardId);
        if (!card) return;
        
        const btn = card.querySelector('.btn-outline-light, .btn-outline-dark');
        if (!btn) return;
        
        // Add click handler
        btn.addEventListener('click', () => {
          openPopup(`${cardId}-popup`);
        });
      });
      
      // Initialize all popups with their cosmic backgrounds
      securityCards.forEach(cardId => {
        const popup = document.getElementById(`${cardId}-popup`);
        if (!popup) return;
        
        const background = popup.querySelector('.cosmic-background');
        createStars(background, 100);
        
        const rings = popup.querySelectorAll('.planet-ring');
        rings.forEach((ring, index) => {
          createOrbital(ring, 6 + index * 2);
        });
      });
      
      // Add keyboard support for closing popups
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          const activePopup = document.querySelector('.popup-container.active');
          if (activePopup) {
            closePopup(activePopup.id);
          }
        }
      });
      
      // Prevent content scroll from affecting background
      document.querySelectorAll('.content').forEach(content => {
        content.addEventListener('wheel', function(event) {
          event.stopPropagation();
        });
      });
    });
