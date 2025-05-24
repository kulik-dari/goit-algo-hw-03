// main.js - New file to handle all imports
import { initializeMenu } from './menu.js';
import { initializeTimeline } from './timeline.js';
import { initializeBlackhole } from './blackhole.js';
import { initializeStars } from './stars.js';
import { initializePopup } from './popup.js';
import { initializeFooter } from './footer.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeTimeline();
    initializeBlackhole();
    initializeStars();
    initializePopup();
    initializeFooter();
});

// footer.js
export const initializeFooter = () => {
    // Replace the unload handler with this safer version
    const hasUnsavedChanges = () => {
        // Add your logic to check for unsaved changes
        return false;
    };

    window.addEventListener('beforeunload', (event) => {
        if (hasUnsavedChanges()) {
            event.preventDefault();
            return event.returnValue = 'Are you sure you want to leave?';
        }
    });

    // Your other footer initialization code
};

// blackhole.js
export const initializeBlackhole = () => {
    const blackholeElement = document.getElementById('blackhole');
    if (blackholeElement) {
        blackholeElement.style.display = 'block';
        // Your existing blackhole initialization code
    }
};

// popup.js
export const initializePopup = () => {
    const openPopup = (popupId) => {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('active');
        }
    };

    const closePopup = (popupId) => {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('active');
        }
    };

    // Expose these functions to the global scope if needed
    window.openPopup = openPopup;
    window.closePopup = closePopup;
};