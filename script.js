// Toggle the 'active' class on the navbar when the menu icon is clicked
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

/**
 * Navbar toggle functionality
 */

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

// Function to handle slide navigation
var sliderNav = function(manual) {
    // Remove 'active' class from all buttons, slides, and content
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    // Add 'active' class to the current button, slide, and content
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

// Add click event listeners to all buttons for slide navigation
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Initialize Swiper with custom settings
var swiper;
swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
        invert: false,
    },
});
'use strict';

// Automatic slide change
let currentSlide = 0;
const totalSlides = btns.length;

// Function to automatically change slides
function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    sliderNav(currentSlide);
}

// Set interval to change slides every 7 seconds
setInterval(autoSlide, 7000);

// DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const memberCount = document.getElementById("member-counter");
    let count = 0;
    const target = 131; // Target count for the counter
    let interval;

    // Function to start the counter
    function startCounter() {
        interval = setInterval(() => {
            if (count < target) {
                count++;
                memberCount.textContent = count;
            } else {
                clearInterval(interval);
                triggerConfetti();
            }
        }, 50); // Interval time in milliseconds
    }

    // Function to trigger confetti animation
    function triggerConfetti() {
        const duration = 5 * 1000; // Confetti duration
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0
        };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: randomInRange(0.1, 0.3),
                    y: Math.random() - 0.2
                }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: randomInRange(0.7, 0.9),
                    y: Math.random() - 0.2
                }
            }));
        }, 250);
    }

    const aboutUsImage = document.getElementById("about-us-image");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Threshold for triggering the observer
    };

    // Function to handle intersection observer entries
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                observer.unobserve(aboutUsImage); // Stop observing once the counter starts
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(aboutUsImage); // Observe the about us image
});

// Initialize AOS (Animate On Scroll) library
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false // Whether elements should animate out while scrolling past them
    });
});

// Reveal elements on scroll
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Threshold for triggering the observer
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal); // Observe each reveal element
    });
});

/**
 * Activate header and go-top button when scrolling down 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
