// Pricing data
const plans = [
    {
        tier: "ENTRY",
        price: "Free",
        period: "forever",
        description: "Personal use",
        buttonText: "Contact us",
        buttonLink: "contact.html"
    },
    {
        tier: "PRO",
        price: "$1 050",
        period: "per month",
        billing: "$12 600 billed annually",
        description: "One professional use-case",
        buttonText: "Buy",
        buttonLink: "https://buy.stripe.com/bIYaHc0Ff9Pi09y7sA"
    },
    {
        tier: "ADVANCED",
        price: "$1 650",
        period: "per month",
        billing: "$19 800 billed annually",
        description: "Several advanced use-cases",
        buttonText: "Buy",
        buttonLink: "https://buy.stripe.com/14k5mS73DbXqg8w5kr",
        isHighlighted: true
    },
    {
        tier: "ENTERPRISE",
        price: "Custom",
        period: "Tailored pricing",
        description: "Large enterprise or custom use-case",
        buttonText: "Request price",
        buttonLink: "contact.html",
        isEnterprise: true
    }
];

// Handle payment window
function handlePaymentClick(url) {
    const width = 1000;
    const height = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const paymentWindow = window.open(
        url,
        'payment_window',
        `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1`
    );

    const checkPayment = setInterval(() => {
        if (paymentWindow.closed) {
            clearInterval(checkPayment);
        }
    }, 1000);
}

// Render pricing blocks
function renderPricingBlocks() {
    const container = document.createElement('div');
    container.className = 'pricing-grid';

    plans.forEach(plan => {
        const card = document.createElement('div');
        card.className = `pricing-card ${plan.isEnterprise ? 'enterprise' : ''} ${plan.isHighlighted ? 'highlight' : ''}`;

        const buttonHandler = plan.tier === 'PRO' || plan.tier === 'ADVANCED'
            ? `onclick="handlePaymentClick('${plan.buttonLink}')"`
            : `onclick="window.location.href='${plan.buttonLink}'"`;

        card.innerHTML = `
            <span class="tier-badge">${plan.tier}</span>
            
            <div class="price-container">
                <span class="price">${plan.price}</span>
                <span class="price-period">${plan.period}</span>
            </div>
            
            ${plan.billing ? `<div class="billing-cycle">${plan.billing}</div>` : ''}
            
            <div class="description">${plan.description}</div>
            
            <div class="button-container">
                <button class="primary-button" ${buttonHandler}>
                    ${plan.buttonText}
                </button>
                <button class="secondary-button">See all features ↓</button>
            </div>
        `;

        container.appendChild(card);
    });

    return container;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.appendChild(renderPricingBlocks());
    }

    // Add scroll to table functionality
    document.querySelectorAll('.secondary-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.comparison-table').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});