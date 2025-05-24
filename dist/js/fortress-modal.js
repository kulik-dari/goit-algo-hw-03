document.addEventListener('DOMContentLoaded', () => {
    const fortressModal = document.querySelector('.fortress-modal');
    const modal = fortressModal.querySelector('.modal');
    const closeButton = modal.querySelector('.close-button');
    const fullscreenButton = modal.querySelector('.fullscreen-button');
    const shareButton = modal.querySelector('.share-button');
    const shareMenu = modal.querySelector('.share-menu');
    const toast = modal.querySelector('.toast');

    // Share functionality
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            showToast('Link copied to clipboard!');
        } catch (err) {
            showToast('Failed to copy link');
        }
    }

    function shareViaEmail() {
        const subject = encodeURIComponent('Check out this Digital Fortress solution');
        const body = encodeURIComponent('I thought you might be interested in this: ' + window.location.href);
        window.open(`mailto:?subject=${subject}&body=${body}`);
    }

    function shareViaTwitter() {
        const text = encodeURIComponent('Check out this amazing Digital Fortress solution!');
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }

    // Toggle share menu
    shareButton.addEventListener('click', (e) => {
        e.stopPropagation();
        shareButton.classList.toggle('active');
        shareMenu.classList.toggle('active');
    });

    // Handle share options
    document.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const action = e.currentTarget.dataset.action;
            switch(action) {
                case 'copy':
                    copyToClipboard();
                    break;
                case 'email':
                    shareViaEmail();
                    break;
                case 'twitter':
                    shareViaTwitter();
                    break;
            }
            shareMenu.classList.remove('active');
            shareButton.classList.remove('active');
        });
    });

    // Close share menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!shareMenu.contains(e.target) && !shareButton.contains(e.target)) {
            shareMenu.classList.remove('active');
            shareButton.classList.remove('active');
        }
    });

    // Modal functionality
    window.openFortressModal = function() {
        fortressModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeFortressModal() {
        fortressModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.classList.remove('fullscreen');
        shareMenu.classList.remove('active');
        shareButton.classList.remove('active');
    }

    function toggleFullscreen() {
        modal.classList.toggle('fullscreen');
    }

    closeButton.addEventListener('click', closeFortressModal);
    fullscreenButton.addEventListener('click', toggleFullscreen);

    fortressModal.addEventListener('click', (e) => {
        if (e.target === fortressModal) {
            closeFortressModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFortressModal();
        }
    });
});
