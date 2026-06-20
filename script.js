// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["Computer Science Student", "Full-Stack Developer", "Tech Enthusiast"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 80;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing animation after 1 second
        setTimeout(type, 1000);
    }
    
    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form Validation (Simple)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Message sent successfully!');
            this.reset();
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skills-box, .service-box, .portfolio-card, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1; // Trigger earlier
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.skills-box, .service-box, .portfolio-card, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    setTimeout(animateOnScroll, 100); 
});