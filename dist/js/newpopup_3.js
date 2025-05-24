document.addEventListener('DOMContentLoaded', () => {
    const modalBackdrop = document.querySelector('.newmodal-backdrop');
    const modal = document.querySelector('.newmodal');
    const closeButton = document.querySelector('.close-button');
    const fullscreenButton = document.querySelector('.fullscreen-button');
    const shareButton = document.querySelector('.share-button');
    const modalTitle = modal.querySelector('.newmodal-title');
    const modalContent = modal.querySelector('.newmain-content');
    const heroImage = modal.querySelector('.newhero-image img');

    // Modal content for each card
    const cardContent = {
        'popup1': {
            title: 'Threat Intelligence',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">Next-Generation Threat Intelligence</h2>
                    <p>Stay ahead of cyber criminals with real-time threat data and predictive analytics.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Dark Web Monitoring: Scanning hidden forums and marketplaces</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Malware Analysis & Threat Detection</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Real-time Threat Intelligence Feeds</div>
                        </div>
                    </div>
                </div>
            `
        },
        'popup2': {
            title: 'Network Security',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">Network Protection</h2>
                    <p>Fortify your perimeter with next-gen firewalls and intrusion prevention systems.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Next-Gen Firewall Protection</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Intrusion Detection Systems</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Advanced VPN Solutions</div>
                        </div>
                    </div>
                </div>
            `
        },
        'popup3': {
            title: 'Incident Response',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">24/7 Incident Response</h2>
                    <p>Swift and decisive action when seconds count. Our team is ready 24/7.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">24/7 Emergency Response</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Rapid Incident Assessment</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Post-Incident Analysis</div>
                        </div>
                    </div>
                </div>
            `
        },
        'popup4': {
            title: 'Cloud Security',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">Cloud Protection</h2>
                    <p>Secure your cloud infrastructure with our comprehensive protection suite.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Cloud Access Security</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Container Protection</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Cloud Monitoring</div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Open modal with specific content
    window.openPopup = function(popupId) {
        const content = cardContent[popupId];
        if (content) {
            modalTitle.textContent = content.title;
            modalContent.innerHTML = content.content;
            heroImage.src = content.image;
            modalBackdrop.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modalBackdrop.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.classList.remove('fullscreen');
    }

    function toggleFullscreen() {
        modal.classList.toggle('fullscreen');
    }

    // Event listeners
    closeButton.addEventListener('click', closeModal);
    fullscreenButton.addEventListener('click', toggleFullscreen);
   // Share menu functionality
   shareButton.addEventListener('click', (e) => {
    e.stopPropagation();
    shareMenu.classList.toggle('active');
});

// Handle share options
document.querySelectorAll('.share-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = option.dataset.action;
        
        switch(action) {
            case 'copy':
               navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(err => console.error('Failed to copy:', err));
                break;
            case 'email':
                window.location.href = `mailto:?subject=Security Solutions&body=${encodeURIComponent(window.location.href)}`;
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`);
                break;
        }
        
        shareMenu.classList.remove('active');
    });
});


    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
