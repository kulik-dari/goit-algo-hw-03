// Service content data with all services
const serviceContent = {
    apt: {
        title: 'APT Hunting & Proactive Defense',
        description: 'Find Hidden Attackers Before They Strike',
        subheadline: 'XYZ Scan maps vulnerabilities to active MITRE ATT&CK TTPs – including Kubernetes, ARM, and legacy systems.',
        technicalSpecs: [
            'Real-time vulnerability scanning (Linux/Windows/macOS)',
            'APT attack simulation (ARM/x64 architectures)',
            'Dark web threat correlation',
            'HIPAA/NIST compliance scoring'
        ],
        useCase: 'A healthcare client avoided $3M HIPAA fines by patching 22 critical CVEs flagged by XYZ Scan.',
        pricing: {
            professional: 'Weekly scans + Basic reporting',
            premium: 'Daily scans + APT simulation + Advanced analytics',
            enterprise: 'Real-time monitoring + Custom integrations + 24/7 support'
        },
        cta: 'Run Free Exposure Scan →'
    },
    nightowl: {
        title: 'NightOwl IR & Digital Forensics',
        description: 'Breach? We Deliver Evidence & Action in 15 Mins',
        subheadline: 'NightOwl automates log collection, APT attribution, and courtroom-ready reports.',
        technicalSpecs: [
            'Automated evidence chains (edge-to-cloud)',
            'Ransomware negotiation team (63% avg. ransom reduction)',
            '$500K warranty + legal defense fund'
        ],
        useCase: 'Contained a Fortune 500 ransomware attack in 9 mins – saved $28M in downtime.',
        pricing: {
            professional: '4-hour SLA + Basic IR toolkit',
            premium: '2-hour SLA + Crisis PR support + Extended coverage',
            enterprise: '15-min SWAT team + Custom playbooks + War room access'
        },
        cta: 'Download DFIR Case Study →'
    },
    threat: {
        title: 'Threat Assessment Suite',
        description: 'From Weekly Scans to Real-Time APT Warfare',
        subheadline: 'Not all CVEs matter – we prioritize flaws APTs actively exploit in your industry.',
        technicalSpecs: [
            'Third-party kill chain analysis',
            'Patchless virtual patching (zero downtime)',
            'Custom compliance dashboards'
        ],
        useCase: 'Blocked a state-sponsored attack on a fintech client by hardening 14 edge Kubernetes nodes.',
        pricing: {
            professional: 'Weekly reports + Basic threat intel',
            premium: 'Daily briefings + Advanced analytics + Custom alerts',
            enterprise: 'Real-time APT tracking + ML-powered analysis + Dedicated analyst'
        },
        cta: 'Compare Threat Plans →'
    },
    resilience: {
        title: 'Proactive Cyber Resilience Program',
        description: "Turn Defense Into Offense – Even When Nothing's Wrong",
        subheadline: 'IR fire drills, threat war rooms, and compliance automation to silence boardroom fears.',
        technicalSpecs: [
            'Quarterly APT simulations with NightOwl',
            'Dark web monitoring for executive credentials',
            'Auto-generated HIPAA/NIST audit reports'
        ],
        useCase: 'A manufacturing client passed a SEC audit in 48 hours using our pre-built compliance docs.',
        pricing: {
            professional: 'Basic fire drills + Compliance templates',
            premium: 'Monthly briefings + Custom playbooks + Training',
            enterprise: 'Custom APT sims + Board reporting + Full coverage'
        },
        cta: 'Schedule Free Fire Drill →'
    }
};

// Initialize modal functionality
const modalmain = document.getElementById('modalmain');
const modalmainBody = document.getElementById('modalmain-body');
const closeBtn = document.querySelector('.close');

function openModalmain(service) {
    const content = serviceContent[service];
    modalmainBody.innerHTML = `
        <h2>${content.title}</h2>
        <p class="modalmain-description">${content.description}</p>
        <p class="modalmain-subheadline">${content.subheadline}</p>
        
        <div class="modalmain-section">
            <h4>Technical Capabilities</h4>
            <ul>
                ${content.technicalSpecs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>

        <div class="modalmain-section">
            <h4>Success Story</h4>
            <div class="success-story">
                <p>${content.useCase}</p>
            </div>
        </div>

        <div class="modalmain-section">
            <h4>Solution Tiers</h4>
            <div class="pricing-tiers">
                <div class="pricing-tier">
                    <h5>Professional</h5>
                    <p>${content.pricing.professional}</p>
                </div>
                <div class="pricing-tier">
                    <h5>Premium</h5>
                    <p>${content.pricing.premium}</p>
                </div>
                <div class="pricing-tier">
                    <h5>Enterprise</h5>
                    <p>${content.pricing.enterprise}</p>
                </div>
            </div>
        </div>
    `;
    modalmain.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalmain() {
    modalmain.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.onclick = closeModalmain;

modalmain.onclick = (e) => {
    if (e.target === modalmain) closeModalmain();
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalmain.style.display === 'block') {
        closeModalmain();
    }
});

// Card click handlers
document.querySelectorAll('.feature-card, .expand-btn').forEach(element => {
    element.addEventListener('click', (e) => {
        const card = element.closest('.feature-card');
        const service = card.getAttribute('data-service');
        openModalmain(service);
        
        if (element.classList.contains('expand-btn')) {
            e.stopPropagation();
        }
    });
});

// Add animation to cards on scroll
const cards = document.querySelectorAll('.feature-card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});