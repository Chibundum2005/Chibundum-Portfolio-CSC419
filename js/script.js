/**
 * Final Year Frontend Project - JavaScript
 * Purpose: Handle simple UI interactions (Mobile Navigation Toggle)
 * Requirements: JavaScript only where necessary (navigation, interactions, etc.)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Selectors for both index.html and project-details.html (for multi-page consistency)
    const menuToggle = document.getElementById('menu-toggle') || document.getElementById('menu-toggle-details');
    const navMenu = document.getElementById('nav-menu') || document.getElementById('nav-menu-details');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the menu list
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes for accessibility (mandatory for professional code)
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Optional: Close menu when a link is clicked (useful on mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently active before attempting to close
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Add other necessary JavaScript interactions below ---
    // e.g., Modal pop-ups, dynamic content loading, subtle animations, etc.
});