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

// ===== Hero Subtitle Typing Effect =====
const roles = [
    "Aspiring Software Engineer 🚀",
    "Software Tester 🔍"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
    const fullText = roles[roleIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, charIndex--);
    } else {
        currentText = fullText.substring(0, charIndex++);
    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullText.length) {
        speed = 1500; // pause
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
