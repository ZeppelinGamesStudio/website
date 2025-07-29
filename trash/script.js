// Smooth scrolling animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Mobile navigation toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navigationBar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Loading animation for game cards
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.loading').forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('loading');
                card.style.opacity = '1';
            }, index * 200);
        });
    }, 500);
});

// Game card click handlers
document.querySelectorAll('.play-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Replace with actual game navigation
        const games = ['math-adventures', 'reading-quest', 'science-lab'];
        
        // For now, show an alert - replace this with actual navigation
        alert(`Navigating to ${games[index]} - Replace this with actual game navigation!`);
        
        // Example of how you might navigate to different games:
        // window.location.href = `games/${games[index]}.html`;
        // or
        // window.open(`games/${games[index]}.html`, '_blank');
    });
});

// Enhanced hover effects for game cards
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        // Parallax background
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Fade out hero content as user scrolls
        const fadeStart = 0;
        const fadeEnd = window.innerHeight;
        const opacity = Math.max(0, 1 - (scrolled - fadeStart) / (fadeEnd - fadeStart));
        heroContent.style.opacity = opacity;
    }
});

// Add loading spinner for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a small loading indicator
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
        
        // Reset after a short delay
        setTimeout(() => {
            this.innerHTML = originalText;
        }, 1000);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navLinks && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Your scroll handling code here
    // This prevents excessive scroll event firing
}, 16)); // ~60fps