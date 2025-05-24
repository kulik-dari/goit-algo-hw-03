const checkbox = document.getElementById("checkbox");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const basicPeriod = document.getElementById("basic-period");
const professionalPeriod = document.getElementById("professional-period");

// Function to remove dollar sign when getting price and add it when setting price
function formatPrice(price) {
    return price.startsWith('$') ? price : `$${price}`;
}

function getPrice(element) {
    return element.textContent.replace('$', '');
}

checkbox.addEventListener("click", () => {
    // Basic price toggle
    const currentBasicPrice = getPrice(basic);
    basic.textContent = formatPrice(
        currentBasicPrice === "199.99" ? "19.99" : "199.99"
    );
    
    // Professional price toggle
    const currentProfessionalPrice = getPrice(professional);
    professional.textContent = formatPrice(
        currentProfessionalPrice === "249.99" ? "24.99" : "249.99"
    );
    
    // Period text toggle
    if (basicPeriod) {
        basicPeriod.textContent = 
            basicPeriod.textContent === "/Annually" ? "/Monthly" : "/Annually";
    }
    
    if (professionalPeriod) {
        professionalPeriod.textContent = 
            professionalPeriod.textContent === "/Annually" ? "/Monthly" : "/Annually";
    }
});