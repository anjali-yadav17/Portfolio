// ===== Mobile Navigation =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    const isLight = body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});


// ===== Scroll Reveal Animation & Progress Bars =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Remove progress bar animation handling as they are deleted
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-right');
revealElements.forEach(el => observer.observe(el));




// Form Submission handling
const form = document.getElementById('portfolio-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
            submitBtn.classList.replace('btn-primary', 'btn-outline');
            submitBtn.style.color = '#10b981'; // green-500
            submitBtn.style.borderColor = '#10b981';
            form.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.replace('btn-outline', 'btn-primary');
                submitBtn.style.color = '';
                submitBtn.style.borderColor = '';
            }, 3000);
        }, 1500);
    });
}
