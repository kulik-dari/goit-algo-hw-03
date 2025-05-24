function openModalBook(modalId = 'bookingModal') {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Handle WebGL animation pause if on about page
        if (window.isModalOpen !== undefined) {
            window.isModalOpen = true;
            if (window.animationFrameId) {
                cancelAnimationFrame(window.animationFrameId);
            }
        }
    }
}

function closeModalBook(modalId = 'bookingModal') {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        
        // Handle WebGL animation resume if on about page
        if (window.isModalOpen !== undefined) {
            window.isModalOpen = false;
            if (typeof animate === 'function') {
                animate();
            }
        }
    }
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modalbook');
    for (let modal of modals) {
        if (event.target === modal) {
            closeModalBook(modal.id);
        }
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modalbook');
        for (let modal of modals) {
            if (modal.style.display === 'block') {
                closeModalBook(modal.id);
            }
        }
    }
});
