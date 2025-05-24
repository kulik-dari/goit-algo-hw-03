document.addEventListener('DOMContentLoaded', () => {
    const serviceBlocks = document.querySelectorAll('.service-block');
  
    serviceBlocks.forEach(block => {
        let starsCreated = false;
  
        block.addEventListener('mouseenter', () => {
            if (!starsCreated) {
                createStars(block);
                starsCreated = true;
            }
            animateStars(block);
        });
  
        block.addEventListener('mousemove', (e) => {
            if (starsCreated) {
                moveStars(block, e);
            }
        });
  
        block.addEventListener('mouseleave', () => {
            removeStars(block);
            starsCreated = false;
        });
  
        // For touch devices
        block.addEventListener('touchstart', () => {
            if (!starsCreated) {
                createStars(block);
                starsCreated = true;
                animateStars(block);
            } else {
                removeStars(block);
                starsCreated = false;
            }
        });
    });
  
    function createStars(parent) {
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const sizeClass = Math.random() < 0.3 ? 'small' : (Math.random() < 0.7 ? 'medium' : 'large');
            star.classList.add(sizeClass);
            
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
            
            parent.appendChild(star);
        }
    }
  
    function animateStars(block) {
        const stars = block.querySelectorAll('.star');
        stars.forEach(star => {
            star.style.opacity = '1';
        });
    }
  
    function moveStars(block, event) {
        const stars = block.querySelectorAll('.star');
        const rect = block.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
  
        stars.forEach(star => {
            const starX = star.offsetLeft + star.offsetWidth / 2;
            const starY = star.offsetTop + star.offsetHeight / 2;
            
            const deltaX = mouseX - starX;
            const deltaY = mouseY - starY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
            const force = (maxDistance - distance) / maxDistance;
            
            const moveX = (deltaX / distance) * force * 5;
            const moveY = (deltaY / distance) * force * 5;
            
            star.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
  
    function removeStars(block) {
        const stars = block.querySelectorAll('.star');
        stars.forEach(star => {
            star.remove();
        });
    }
  });