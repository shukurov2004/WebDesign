


//!Home section
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }


//!About section

// Optimize scroll listener with throttling
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function() {
            const navbar = document.querySelector('.navbar');
            // Close mobile menu on scroll
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            // Navbar scroll effect
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            scrollTimeout = null;
        }, 100);
    }
});

// Optimize menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    requestAnimationFrame(() => {
        navLinks.classList.toggle('active');
    });
}

// Use event delegation for menu links
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
    }
});