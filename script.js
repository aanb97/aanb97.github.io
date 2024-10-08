// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.nav-menu .dropdown');

    // Toggle Navigation Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Toggle Dropdowns on Mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent the default link behavior
                dropdown.classList.toggle('active');
            }
        });
    });

    // Optional: Close the menu when clicking outside
    window.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Optional: Handle window resize to remove active classes
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});
