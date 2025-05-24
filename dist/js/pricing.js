// State management
const state = {
    billingCycle: 'monthly',
    showComparison: false,
    activeTab: 'subscription'
};

// DOM Elements
const mainContent = document.getElementById('mainContent');
const tabs = document.querySelectorAll('.tab');
const billingToggle = document.getElementById('billingToggle');
const billingOptions = document.querySelectorAll('.billing-btn');
const comparisonToggle = document.getElementById('comparisonToggle');
const comparisonToggleContainer = document.getElementById('comparisonToggleContainer');
const comparisonTable = document.getElementById('comparisonTable');
const cliToolPromotion = document.getElementById('cliToolPromotion');

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.dataset.tab;
        updateActiveTab(tabType);
    });
});

billingOptions.forEach(option => {
    option.addEventListener('click', () => {
        const billingType = option.dataset.billing;
        updateBillingCycle(billingType);
    });
});

comparisonToggle.addEventListener('click', () => {
    state.showComparison = !state.showComparison;
    updateComparisonVisibility();
});

// Handle payment window
function handlePaymentClick(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const url = link.getAttribute(`data-${state.billingCycle}`);
    
    if (!url) {
        console.error('Payment URL not found');
        return;
    }

    const width = 1000;
    const height = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const paymentWindow = window.open(
        url,
        'payment_window',
        `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1`
    );

    if (paymentWindow) {
        const checkPayment = setInterval(() => {
            if (paymentWindow.closed) {
                clearInterval(checkPayment);
            }
        }, 1000);
    }
}

// Update Functions
function updateActiveTab(tabType) {
    state.activeTab = tabType;
    state.showComparison = false;
    state.showIncidentComparison = false;
    
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabType);
    });
    
    billingToggle.style.display = tabType === 'subscription' ? 'flex' : 'none';
    
    comparisonToggleContainer.style.display = 'block';
    comparisonTable.classList.add('hidden');
    comparisonToggle.textContent = 'Show Detailed Comparison ▼';
    
    renderMainContent();
}

function updateBillingCycle(billingType) {
    state.billingCycle = billingType;
    billingOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.billing === billingType);
        if (option.dataset.billing === billingType) {
            option.classList.add('active', 'bg-blue-600', 'text-white');
            option.classList.remove('text-gray-600');
        } else {
            option.classList.remove('active', 'bg-blue-600', 'text-white');
            option.classList.add('text-gray-600');
        }
    });
    renderMainContent();
}

function updateComparisonVisibility() {
    comparisonTable.classList.toggle('hidden', !state.showComparison);
    comparisonToggle.textContent = state.showComparison ? 
        'Hide Detailed Comparison ▲' : 
        'Show Detailed Comparison ▼';
}

// Data
const subscriptionTiers = [
    {
        name: 'Professional',
        tag: 'Most Popular',
        description: 'Professional-grade security for growing organizations',
        monthlyPrice: 7500,
        yearlyPrice: 'Custom',
        features: [
            'Advanced security monitoring',
            'Weekly vulnerability scanning',
            '4-hour response SLA',
            '$250,000 warranty protection',
            'Business hours support',
            'CLI Tool - Professional Edition',
            '15% off incident response',
            'Standard priority access'
        ],
        paymentLinks: {
            monthly: 'https://buy.stripe.com/3cs02y73D9PiaOceV0',
            yearly: 'contact.html'
        },
        highlight: false
    },
    {
        name: 'Premium',
        tag: 'Recommended',
        description: 'Enhanced protection for established businesses',
        monthlyPrice: 12500,
        yearlyPrice: 'Custom',
        features: [
            'Comprehensive security suite',
            'Daily vulnerability scanning',
            '2-hour response SLA',
            '$500,000 warranty protection',
            '24/7 support coverage',
            'CLI Tool - Premium Edition',
            '25% off incident response',
            'Priority access'
        ],
        paymentLinks: {
            monthly: 'https://buy.stripe.com/7sI2aGbjT5z24pObIL',
            yearly: 'contact.html'
        },
        highlight: true
    },
    {
        name: 'Enterprise',
        tag: 'Tailored Solution',
        description: 'Custom security solutions for large organizations',
        monthlyPrice: 'Starting at $25k/mo',
        yearlyPrice: 'Custom',
        features: [
            'Customized security architecture',
            'Real-time vulnerability scanning',
            '15-minute response SLA',
            'Custom warranty protection',
            'Dedicated support team',
            'CLI Tool - Enterprise Edition',
            'Custom pricing benefits',
            'Highest priority access'
        ],
        highlight: false
    }
];

const incidentPricing = {
    perMachine: [
        {
            title: 'Endpoint Investigation',
            tiers: [
                { range: '1-10 machines', price: '$2,500/machine' },
                { range: '11-50 machines', price: '$2,000/machine' },
                { range: '51-100 machines', price: '$1,500/machine' },
                { range: '100+ machines', price: 'Custom pricing' }
            ]
        },
        {
            title: 'Server Investigation',
            tiers: [
                { range: '1-5 servers', price: '$5,000/server' },
                { range: '6-20 servers', price: '$4,000/server' },
                { range: '21-50 servers', price: '$3,000/server' },
                { range: '50+ servers', price: 'Custom pricing' }
            ]
        }
    ],
    expertRates: [
        { role: 'IR Consultant', rate: '$500/hour' },
        { role: 'Senior IR Consultant', rate: '$600/hour' },
        { role: 'IR Manager', rate: '$700/hour' },
        { role: 'Practice Lead', rate: '$800/hour' }
    ],
    incidentTypes: [
        {
            type: 'Ransomware Response',
            tiers: [
                { size: 'Small Business (≤50 endpoints)', starting: '$50,000', range: '$50,000-$100,000' },
                { size: 'Medium Business (51-250 endpoints)', starting: '$100,000', range: '$100,000-$200,000' },
                { size: 'Enterprise (251+ endpoints)', starting: '$200,000', range: 'Custom' }
            ]
        },
        {
            type: 'Data Breach Investigation',
            tiers: [
                { size: 'Small Scale', starting: '$40,000', range: '$40,000-$75,000' },
                { size: 'Medium Scale', starting: '$75,000', range: '$75,000-$150,000' },
                { size: 'Large Scale', starting: '$150,000', range: 'Custom' }
            ]
        }
    ]
};

const comparisonFeatures = [
    {
        category: 'Security Monitoring',
        features: [
            {
                name: 'Vulnerability Scanning',
                professional: 'Weekly',
                premium: 'Daily',
                enterprise: 'Real-time'
            },
            {
                name: 'Security Monitoring',
                professional: 'Advanced',
                premium: 'Comprehensive',
                enterprise: 'Custom'
            },
            {
                name: 'Response SLA',
                professional: '4 hours',
                premium: '2 hours',
                enterprise: '15 minutes'
            }
        ]
    },
    {
        category: 'Incident Response',
        features: [
            {
                name: 'IR Team Access',
                professional: 'Standard',
                premium: 'Priority',
                enterprise: 'Dedicated'
            },
            {
                name: 'Warranty Protection',
                professional: '$250,000',
                premium: '$500,000',
                enterprise: 'Custom'
            },
            {
                name: 'IR Discount',
                professional: '15%',
                premium: '25%',
                enterprise: 'Custom'
            }
        ]
    }
];

// Render Functions
function renderSubscriptionPlans() {
    const html = `
        <div class="pricing-grid">
            ${subscriptionTiers.map(tier => `
                <div class="pricing-card ${tier.highlight ? 'highlight' : ''} ${tier.name === 'Enterprise' ? 'enterprise' : ''}">
                    <div class="tag">${tier.tag}</div>
                    <h3>${tier.name}</h3>
                    <p>${tier.description}</p>
                    <div class="price">
                        ${tier.name === 'Enterprise' 
                            ? (state.billingCycle === 'monthly' ? tier.monthlyPrice : 'Custom')
                            : state.billingCycle === 'monthly'
                                ? `$${tier.monthlyPrice.toLocaleString()}<span>/mo</span>`
                                : 'Custom'
                        }
                    </div>
                    <ul class="features">
                        ${tier.features.map(feature => `
                            <li class="feature-item">
                                <span class="feature-icon">✓</span>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                    ${tier.name === 'Enterprise'
                        ? `<a href="contact.html" class="button button-secondary" target="_blank">Let's Talk</a>`
                        : state.billingCycle === 'yearly'
                            ? `<a href="contact.html" class="button button-primary text-white" target="_blank">Let's Talk</a>`
                            : `<a href="#" class="button button-primary text-white payment-link" 
                                 data-monthly="${tier.paymentLinks.monthly}" 
                                 data-yearly="${tier.paymentLinks.yearly}">
                                 Buy Now
                               </a>`
                    }
                </div>
            `).join('')}
        </div>
    `;

    setTimeout(() => {
        document.querySelectorAll('.payment-link').forEach(link => {
            link.addEventListener('click', handlePaymentClick);
        });
    }, 0);

    return html;
}

function renderIncidentPricing() {
    return `
        <div class="incident-pricing">
            <div class="pricing-section">
                <h2>Per-Machine Pricing</h2>
                <div class="pricing-grid">
                    ${incidentPricing.perMachine.map(category => `
                        <div class="pricing-card">
                            <h3>${category.title}</h3>
                            ${category.tiers.map(tier => `
                                <div class="tier">
                                    <span class="tier-range">${tier.range}</span>
                                    <span class="tier-price">${tier.price}</span>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="pricing-section">
                <h2>Expert Rates</h2>
                <div class="rates-grid">
                    ${incidentPricing.expertRates.map(expert => `
                        <div class="rate-card">
                            <h4>${expert.role}</h4>
                            <span class="rate">${expert.rate}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="pricing-section">
                <h2>Incident Response Packages</h2>
                <div class="packages-grid">
                    ${incidentPricing.incidentTypes.map(type => `
                        <div class="package-card">
                            <h3>${type.type}</h3>
                            ${type.tiers.map(tier => `
                                <div class="package-tier">
                                    <div class="tier-size">${tier.size}</div>
                                    <div class="tier-details">
                                        <span>Starting at: ${tier.starting}</span>
                                        <span>Range: ${tier.range}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderComparisonTable() {
    return `
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Professional</th>
                    <th>Premium</th>
                    <th>Enterprise</th>
                </tr>
            </thead>
            <tbody>
                ${comparisonFeatures.map(category => `
                    <tr class="category-row">
                        <td colspan="4">${category.category}</td>
                    </tr>
                    ${category.features.map(feature => `
                        <tr>
                            <td>${feature.name}</td>
                            <td>${feature.professional}</td>
                            <td>${feature.premium}</td>
                            <td>${feature.enterprise}</td>
                        </tr>
                    `).join('')}
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderMainContent() {
    mainContent.innerHTML = state.activeTab === 'subscription'
        ? renderSubscriptionPlans()
        : renderIncidentPricing();
    
    comparisonTable.innerHTML = renderComparisonTable();
    
    const isSubscription = state.activeTab === 'subscription';
    
    billingToggle.style.display = isSubscription ? 'flex' : 'none';
    comparisonToggleContainer.style.display = 'block';
    comparisonTable.classList.toggle('hidden', !state.showComparison);
    cliToolPromotion.style.display = isSubscription ? 'block' : 'none';
    
    comparisonToggle.textContent = state.showComparison
        ? 'Hide Detailed Comparison ▲'
        : 'Show Detailed Comparison ▼';

    // Re-attach event listeners for payment links
    if (isSubscription) {
        document.querySelectorAll('.payment-link').forEach(link => {
            link.addEventListener('click', handlePaymentClick);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active states
    const defaultTab = document.querySelector('.tab[data-tab="subscription"]');
    if (defaultTab) {
        defaultTab.classList.add('active');
    }

    const defaultBillingOption = document.querySelector('.billing-btn[data-billing="monthly"]');
    if (defaultBillingOption) {
        defaultBillingOption.classList.add('active', 'bg-blue-600', 'text-white');
    }

    // Initial render
    renderMainContent();
    updateComparisonVisibility();

    // Add payment link event listeners
    document.querySelectorAll('.payment-link').forEach(link => {
        link.addEventListener('click', handlePaymentClick);
    });

    // Check URL parameters for pre-selecting options
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('billing')) {
        const billingType = urlParams.get('billing');
        if (['monthly', 'yearly'].includes(billingType)) {
            updateBillingCycle(billingType);
        }
    }
    
    if (urlParams.has('tab')) {
        const tabType = urlParams.get('tab');
        if (['subscription', 'incident'].includes(tabType)) {
            updateActiveTab(tabType);
        }
    }
});