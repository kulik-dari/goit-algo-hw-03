document.addEventListener('DOMContentLoaded', function() {
    // Initialize all elements
    const elements = {
        form: document.getElementById('contact-form'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        message: document.querySelector('textarea[name="message"]'),
        modal: document.getElementById('privacy-modal'),
        privacyLink: document.querySelector('.privacy-link'),
        privacyBtn: document.querySelector('.privacy-policy-btn'),
        closeModal: document.querySelector('.close-modal'),
        closeButton: document.querySelector('.close-button'),
        emailError: document.getElementById('email-error'),
        phoneError: document.getElementById('phone-error'),
        interestsError: document.getElementById('interests-error'),
        osSelect: document.getElementById('os')
    };

    // Initialize phone input with intl-tel-input
    const iti = window.intlTelInput(elements.phone, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: true,
        autoPlaceholder: "aggressive",
        preferredCountries: ["us", "gb", "ca"],
        customContainer: "phone-input-wrapper"
    });

    // Validation functions
    const validators = {
        email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase()),
        phone: (phone) => iti.isValidNumber(),
        interests: () => document.querySelectorAll('input[name="interests"]:checked').length > 0
    };

    // Message counter setup
    function setupMessageCounter() {
        if (elements.message) {
            const counterContainer = document.createElement('span');
            counterContainer.className = 'character-counter';
            elements.message.parentNode.appendChild(counterContainer);

            elements.message.addEventListener('input', function() {
                counterContainer.textContent = `${this.value.length} characters`;
            });
        }
    }

    // Modal functions
    function openModal(e) {
        e.preventDefault();
        elements.modal.style.display = 'block';
        setTimeout(() => elements.modal.classList.add('show'), 10);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        elements.modal.classList.remove('show');
        setTimeout(() => {
            elements.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Form validation
    function validateForm() {
        let isValid = true;

        // Email validation
        if (!validators.email(elements.email.value)) {
            elements.emailError.textContent = 'Please enter a valid email address';
            elements.email.classList.add('error');
            isValid = false;
        } else {
            elements.emailError.textContent = '';
            elements.email.classList.remove('error');
        }

        // Phone validation (if provided)
        if (elements.phone.value.trim() && !validators.phone(elements.phone.value)) {
            elements.phoneError.textContent = 'Please enter a valid phone number';
            elements.phone.classList.add('error');
            isValid = false;
        } else {
            elements.phoneError.textContent = '';
            elements.phone.classList.remove('error');
        }

        // Interests validation
        if (!validators.interests()) {
            elements.interestsError.textContent = 'Please select at least one interest';
            isValid = false;
        } else {
            elements.interestsError.textContent = '';
        }

        return isValid;
    }

    // Form submission handler
    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const formData = {
                interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(input => input.value),
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                email: elements.email.value,
                phone: iti.getNumber(),
                os: elements.osSelect.value,
                company_size: document.getElementById('company_size').value,
                privacy: document.getElementById('privacy').checked,
                message: elements.message.value
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Submission failed');
            }

            alert('Thank you for your submission!');
            elements.form.reset();
            
        } catch (error) {
            console.error('Submission error:', error);
            alert(error.message || 'An error occurred. Please try again.');
        }
    }

    // Event listeners setup
    function setupEventListeners() {
        // Form submission
        elements.form.addEventListener('submit', handleSubmit);

        // Modal events
        elements.privacyLink?.addEventListener('click', openModal);
        elements.privacyBtn?.addEventListener('click', openModal);
        elements.closeModal?.addEventListener('click', closeModal);
        elements.closeButton?.addEventListener('click', closeModal);

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.modal.style.display === 'block') closeModal();
        });

        // Real-time email validation
        elements.email.addEventListener('input', function() {
            if (this.value) {
                if (validators.email(this.value)) {
                    this.classList.remove('error');
                    elements.emailError.textContent = '';
                } else {
                    this.classList.add('error');
                    elements.emailError.textContent = 'Please enter a valid email address';
                }
            }
        });

        // Phone validation on blur
        elements.phone.addEventListener('blur', function() {
            if (this.value.trim() && !validators.phone(this.value)) {
                this.classList.add('error');
                elements.phoneError.textContent = 'Invalid phone number';
            } else {
                this.classList.remove('error');
                elements.phoneError.textContent = '';
            }
        });

        // OS select styling
        elements.osSelect.addEventListener('focus', () => {
            elements.osSelect.parentElement.classList.add('focused');
        });

        elements.osSelect.addEventListener('blur', () => {
            elements.osSelect.parentElement.classList.remove('focused');
        });
    }

    // Initialize everything
    setupMessageCounter();
    setupEventListeners();
});