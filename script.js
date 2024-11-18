// Initialize Lucide icons
lucide.createIcons();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Interactive project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});

// Typing effect for the main title
const titleElement = document.querySelector('h1');
const titleText = "Welcome to My Creative World";
titleElement.textContent = '';

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        titleElement.innerHTML = text.substring(0, i+1) + '<span class="cursor" aria-hidden="true"></span>';

        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function startTypingEffect() {
    titleElement.textContent = '';
    typeWriter(titleText, 0, function() {
        titleElement.classList.add('end-cursor');
    });
}

// Initial typing effect
startTypingEffect();

// Add click event listener to home icon
const homeIcon = document.querySelector('nav ul li a[href="#home"]');
homeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
    startTypingEffect();
});

// Animate profile picture
const profilePic = document.querySelector('.profile-pic');
profilePic.classList.add('animate-float');

// Animate skill tags
const skillTags = document.querySelectorAll('.skills span');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-pulse');
});

// Particle background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
function scrollAnimate() {
    const elements = document.querySelectorAll('.scroll-animate');
    const staggerElements = document.querySelectorAll('.stagger-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    staggerElements.forEach(staggerElement => {
        const children = staggerElement.children;
        Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(child);
        });
    });
}

// Call the scrollAnimate function
scrollAnimate();


// ... (rest of the JavaScript code remains unchanged) ...
