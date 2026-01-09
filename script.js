// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = menuBtn.querySelector('i');

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.classList.add('open');
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.remove('open');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // Re-render icon
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });
}

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight Active Link (Simple implementation based on URL)
const path = window.location.pathname;
const page = path.split("/").pop() || "index.html"; // Get filename or default to index.html

const links = document.querySelectorAll('.nav-btn, .mobile-link');

links.forEach(link => {
    const href = link.getAttribute('href');
    // Check if the current page matches the link's href
    if (href === page) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
