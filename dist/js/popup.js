function createStars(container, count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
    }
}

// Popup open function
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    const circle = popup.querySelector('.popup-inside');
    const content = popup.querySelector('.content');

    // Add active class to show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Create stars if they don't exist
    const existingStars = circle.querySelectorAll('.star');
    if (existingStars.length === 0) {
        createStars(circle, 50);
    }

    // Reset any existing transitions
    circle.style.transition = 'none';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    content.style.opacity = '0';

    // Force reflow
    circle.offsetHeight;

    // Add transitions back
    circle.style.transition = 'transform 2s ease-in-out';
    content.style.transition = 'opacity 1s ease-in-out';

    // Start animations
    requestAnimationFrame(() => {
        circle.style.transform = 'translate(-50%, -50%) scale(3)';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 1000);
    });
}
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    const circle = popup.querySelector('.popup-inside');
    const content = popup.querySelector('.content');

    // Hide content first
    content.style.opacity = '0';

    // Shrink circle after content starts fading
    setTimeout(() => {
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 600);

    // Remove active class after animations complete
    setTimeout(() => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }, 2000);
}
