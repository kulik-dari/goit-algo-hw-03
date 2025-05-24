document.addEventListener('DOMContentLoaded', function() {
    // Initialize phone input
    const phoneInput = document.querySelector("#phone");
    const iti = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: true,
        autoPlaceholder: "aggressive",
        preferredCountries: ["us", "gb", "ca"],
        customContainer: "phone-input-wrapper"
    });

    // Form elements
    const form = document.querySelector("#contact-form");
    const emailInput = document.querySelector("#email");
    const emailError = document.querySelector("#email-error");
    const interestsError = document.querySelector("#interests-error");
    const phoneError = document.querySelector("#phone-error");
    const modal = document.getElementById('privacy-modal');
    const privacyBtn = document.querySelector('.privacy-policy-btn');
    const closeModal = document.querySelector('.close-modal');
    const closeButton = document.querySelector('.close-button');

    // Email validation function
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    };

    // Phone validation
    phoneInput.addEventListener('blur', function() {
        if (phoneInput.value.trim()) {
            if (iti.isValidNumber()) {
                phoneInput.classList.remove('error');
                phoneError.textContent = '';
            } else {
                phoneInput.classList.add('error');
                phoneError.textContent = 'Invalid phone number';
            }
        }
    });

    // Email validation on input
    emailInput.addEventListener('input', function() {
        if (this.value) {
            if (validateEmail(this.value)) {
                this.classList.remove('error');
                emailError.textContent = '';
            } else {
                this.classList.add('error');
                emailError.textContent = 'Please enter a valid email address';
            }
        }
    });

    // Modal functionality
    function openModal(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModalFunction() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners for modal
    privacyBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunction);
    closeButton.addEventListener('click', closeModalFunction);

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate interests
        const interests = document.querySelectorAll('input[name="interests"]:checked');
        if (interests.length === 0) {
            interestsError.textContent = 'Please select at least one interest';
            isValid = false;
        } else {
            interestsError.textContent = '';
        }

        // Validate email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate phone if provided
        if (phoneInput.value.trim() && !iti.isValidNumber()) {
            phoneError.textContent = 'Please enter a valid phone number';
            isValid = false;
        }

        if (isValid) {
            // Prepare form data
            const formData = new FormData(form);
            formData.append('phone', iti.getNumber());

            // Convert FormData to object for easier viewing
            const formObject = {};
            formData.forEach((value, key) => {
                if (formObject[key]) {
                    if (!Array.isArray(formObject[key])) {
                        formObject[key] = [formObject[key]];
                    }
                    formObject[key].push(value);
                } else {
                    formObject[key] = value;
                }
            });

     
        }
    });
    
});
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const modal = document.getElementById('privacy-modal');
    const privacyLink = document.querySelector('.privacy-link');
    const closeModal = document.querySelector('.close-modal');
    const closeButton = document.querySelector('.close-button');
    const form = document.getElementById('contact-form');

    // Function to open privacy popup
    function openPrivacyPopup(e) {
        e.preventDefault();
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    // Function to close privacy popup
    function closePrivacyPopup() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Function to validate form
    function validateForm(e) {
        let isValid = true;
        const interests = document.querySelectorAll('input[name="interests"]:checked');
        const interestsError = document.getElementById('interests-error');
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');

        // Validate interests
        if (interests.length === 0) {
            interestsError.textContent = 'Please select at least one interest';
            isValid = false;
        } else {
            interestsError.textContent = '';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate phone (optional)
        if (phoneInput.value) {
            const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                phoneError.textContent = 'Please use format: 123-456-7890';
                isValid = false;
            } else {
                phoneError.textContent = '';
            }
        } else {
            phoneError.textContent = '';
        }

        if (!isValid) {
            e.preventDefault();
        }
    }

    // Phone number formatting
    function formatPhoneNumber(e) {
        const input = e.target;
        const value = input.value.replace(/\D/g, '');
        if (value.length >= 10) {
            input.value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
    }

    // Event listeners
    privacyLink.addEventListener('click', openPrivacyPopup);
    closeModal.addEventListener('click', closePrivacyPopup);
    closeButton.addEventListener('click', closePrivacyPopup);
    form.addEventListener('submit', validateForm);
    document.getElementById('phone').addEventListener('input', formatPhoneNumber);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closePrivacyPopup();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closePrivacyPopup();
        }
    });
});



     document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(input => input.value),
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            os: document.getElementById('os').value,
            company_size: document.querySelector('input[name="company_size"]:checked').value,
            privacy: document.getElementById('privacy').checked,
            message: document.querySelector('textarea[name="message"]').value // Collecting the message value
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Message counter functionality
        const messageArea = document.querySelector('textarea[name="message"]');
        const counterContainer = document.createElement('span');
        counterContainer.className = 'character-counter';
        messageArea.parentNode.appendChild(counterContainer);
    
        messageArea.addEventListener('input', function() {
            const count = this.value.length;
            counterContainer.textContent = `${count} characters`;
        });
    
        // Enhanced OS select styling
        const osSelect = document.querySelector('#os');
        osSelect.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
    
        osSelect.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    
        // Enhanced modal functionality
        const modal = document.getElementById('privacy-modal');
        const privacyLink = document.querySelector('.privacy-link');
    
        function openModal(e) {
            e.preventDefault();
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    
        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    
        privacyLink.addEventListener('click', openModal);
    
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
        
    });
    