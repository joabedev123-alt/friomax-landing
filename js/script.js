// Snow Effect
function createSnow() {
    const container = document.getElementById('snow-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.2;

        snowflake.style.cssText = `
            position: absolute;
            top: -10px;
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            filter: blur(1px);
            opacity: ${opacity};
            animation: fall ${duration}s linear infinite;
            animation-delay: -${delay}s;
        `;

        container.appendChild(snowflake);
    }
}

// Add falling animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
            transform: translateY(25vh) translateX(15px) rotate(90deg);
        }
        50% {
            transform: translateY(50vh) translateX(-15px) rotate(180deg);
        }
        75% {
            transform: translateY(75vh) translateX(15px) rotate(270deg);
        }
        100% {
            transform: translateY(105vh) translateX(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Header Hide on Scroll Down / Show on Scroll Up
function handleHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 10) {
            header.classList.remove('scrolled', 'header-hidden');
        } else if (currentScrollY > lastScrollY) {
            // Rolando para baixo — esconder
            header.classList.add('header-hidden');
            header.classList.add('scrolled');
        } else {
            // Rolando para cima — mostrar
            header.classList.remove('header-hidden');
            header.classList.add('scrolled');
        }

        lastScrollY = currentScrollY;
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = toggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        // Close menu when link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
}

// Scroll Reveal Initialization
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.hero-content', { delay: 300 });
    sr.reveal('.hero-image', { delay: 500, origin: 'right' });
    sr.reveal('.service-card', { interval: 200 });
    sr.reveal('.section-header', {});
    sr.reveal('.diff-content', { origin: 'left' });
    sr.reveal('.diff-stats', { origin: 'right' });
    sr.reveal('.area-atendimento .glass', { scale: 0.9 });
    sr.reveal('.insta-box', { delay: 300 });
    sr.reveal('.expertise-item', { interval: 200, origin: 'bottom' });
    sr.reveal('.cta-box', { delay: 400 });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    createSnow();
    handleHeaderScroll();
    initMobileMenu();
    
    if (typeof ScrollReveal !== 'undefined') {
        initScrollReveal();
    }
});
