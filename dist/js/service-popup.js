document.addEventListener('DOMContentLoaded', () => {
    const modalBackdrop = document.querySelector('.newmodal-backdrop');
    const modal = document.querySelector('.newmodal');
    const closeButton = document.querySelector('.close-button');
    const fullscreenButton = document.querySelector('.fullscreen-button');
    const shareButton = document.querySelector('.share-button');
    const modalTitle = modal.querySelector('.newmodal-title');
    const modalContent = modal.querySelector('.newmain-content');
    const heroImage = modal.querySelector('.newhero-image img');

    // Modal content for each service
    const serviceContent = {
        'threat-detection': {
            title: 'Threat Detection',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">Advanced Threat Detection System</h2>
                    <p>Our AI-powered system continuously monitors your network to identify and neutralize cyber threats before they can cause damage.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Real-time Network Monitoring</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">AI-Powered Threat Analysis</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Automated Threat Neutralization</div>
                        </div>
                    </div>
                </div>
            `
        },
        'incident-response': {
            title: 'Incident Response',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">24/7 Incident Response</h2>
                    <p>Our expert team provides round-the-clock incident response services to handle any cybersecurity emergency.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">24/7 Emergency Response Team</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Rapid Incident Assessment</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Comprehensive Recovery Plans</div>
                        </div>
                    </div>
                </div>
            `
        },
        'security-consulting': {
            title: 'Security Consulting',
            image: '/api/placeholder/800/300',
            content: `
                <div class="section">
                    <h2 class="section-title">Expert Security Consulting</h2>
                    <p>Get expert guidance on your security infrastructure from our experienced consultants.</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Security Assessment & Audit</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Custom Security Strategy</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div class="feature-description">Implementation Guidance</div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Add click handlers to service blocks
    document.querySelectorAll('.service-block').forEach(block => {
        block.addEventListener('click', () => {
            const title = block.querySelector('.title').textContent.trim().toLowerCase();
            const serviceId = title.replace(/\s+/g, '-');
            
            const content = serviceContent[serviceId];
            if (content) {
                modalTitle.textContent = content.title;
                modalContent.innerHTML = content.content;
                heroImage.src = content.image;
                modalBackdrop.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modalBackdrop.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.classList.remove('fullscreen');
    }

    // Toggle fullscreen
    function toggleFullscreen() {
        modal.classList.toggle('fullscreen');
    }

    // Event listeners
    closeButton.addEventListener('click', closeModal);
    fullscreenButton.addEventListener('click', toggleFullscreen);
    
    // Share functionality
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
                    window.location.href = `mailto:?subject=Security Services&body=${encodeURIComponent(window.location.href)}`;
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

    // Close modal when clicking outside
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
