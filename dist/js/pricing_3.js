document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const checkbox = document.getElementById("checkbox");
    const basic = document.getElementById("basic");
    const professional = document.getElementById("professional");
    const basicPeriod = document.getElementById("basic-period");
    const professionalPeriod = document.getElementById("professional-period");
    const paymentLinks = document.querySelectorAll('.payment-link');

    // Initialize prices
    const prices = {
        monthly: {
            basic: "19.99",
            professional: "24.99"
        },
        annual: {
            basic: "199.99",
            professional: "249.99"
        }
    };

    // Price toggle handler
    checkbox.addEventListener("click", () => {
        const isAnnual = checkbox.checked;

        // Update prices
        basic.textContent = isAnnual ? `$${prices.annual.basic}` : `$${prices.monthly.basic}`;
        professional.textContent = isAnnual ? `$${prices.annual.professional}` : `$${prices.monthly.professional}`;
        
        // Update period text
        const periodText = isAnnual ? "/Annually" : "/Monthly";
        basicPeriod.textContent = periodText;
        professionalPeriod.textContent = periodText;
    });

    // Payment link handler with centered popup
    paymentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const isAnnual = checkbox.checked;
            const stripeUrl = isAnnual ? this.dataset.annual : this.dataset.monthly;

            // Calculate centered position for popup
            const width = 600;
            const height = 700;
            const left = (window.innerWidth - width) / 2 + window.screenX;
            const top = (window.innerHeight - height) / 2 + window.screenY;

            // Open centered popup
            window.open(
                stripeUrl,
                'stripe_checkout',
                `width=${width},height=${height},left=${left},top=${top},location=yes,resizable=yes,scrollbars=yes,status=yes`
            );
        });
    });
});