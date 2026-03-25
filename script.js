document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade Up Animation using IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const fadeObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const statsSection = document.getElementById('stats-counter');
    let counted = false;

    const runCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
            runCounters();
            counted = true;
        }
    });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Close other items
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.maxHeight = null;
            }
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

});