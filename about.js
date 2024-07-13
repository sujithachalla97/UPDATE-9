// Toggle the navigation bar on clicking the menu icon
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Define card and card container elements by their IDs
const card0 = document.getElementById('card0');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');

const cardContainer0 = document.getElementById('cardContainer0');
const cardContainer1 = document.getElementById('cardContainer1');
const cardContainer2 = document.getElementById('cardContainer2');
const cardContainer3 = document.getElementById('cardContainer3');
const cardContainer4 = document.getElementById('cardContainer4');
const cardContainer5 = document.getElementById('cardContainer5');

// Function to handle 3D rotation effect on card
function handleMouseMove(e, card, cardContainer) {
    const rect = cardContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

// Function to reset card's transform on mouse leave
function handleMouseLeave(card) {
    card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

// Function to remove transition on card's mouse enter
function handleMouseEnter(card) {
    card.style.transition = 'none';
}

// Function to add transition on card's mouse leave
function handleCardMouseLeave(card) {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
}

// Add event listeners for card0
cardContainer0.addEventListener('mousemove', (e) => handleMouseMove(e, card0, cardContainer0));
cardContainer0.addEventListener('mouseleave', () => handleMouseLeave(card0));
card0.addEventListener('mouseenter', () => handleMouseEnter(card0));
card0.addEventListener('mouseleave', () => handleCardMouseLeave(card0));

// Add event listeners for card1
cardContainer1.addEventListener('mousemove', (e) => handleMouseMove(e, card1, cardContainer1));
cardContainer1.addEventListener('mouseleave', () => handleMouseLeave(card1));
card1.addEventListener('mouseenter', () => handleMouseEnter(card1));
card1.addEventListener('mouseleave', () => handleCardMouseLeave(card1));

// Add event listeners for card2
cardContainer2.addEventListener('mousemove', (e) => handleMouseMove(e, card2, cardContainer2));
cardContainer2.addEventListener('mouseleave', () => handleMouseLeave(card2));
card2.addEventListener('mouseenter', () => handleMouseEnter(card2));
card2.addEventListener('mouseleave', () => handleCardMouseLeave(card2));

// Add event listeners for card3
cardContainer3.addEventListener('mousemove', (e) => handleMouseMove(e, card3, cardContainer3));
cardContainer3.addEventListener('mouseleave', () => handleMouseLeave(card3));
card3.addEventListener('mouseenter', () => handleMouseEnter(card3));
card3.addEventListener('mouseleave', () => handleCardMouseLeave(card3));

// Add event listeners for card4
cardContainer4.addEventListener('mousemove', (e) => handleMouseMove(e, card4, cardContainer4));
cardContainer4.addEventListener('mouseleave', () => handleMouseLeave(card4));
card4.addEventListener('mouseenter', () => handleMouseEnter(card4));
card4.addEventListener('mouseleave', () => handleCardMouseLeave(card4));

// Add event listeners for card5
cardContainer5.addEventListener('mousemove', (e) => handleMouseMove(e, card5, cardContainer5));
cardContainer5.addEventListener('mouseleave', () => handleMouseLeave(card5));
card5.addEventListener('mouseenter', () => handleMouseEnter(card5));
card5.addEventListener('mouseleave', () => handleCardMouseLeave(card5));

// Initialize AOS (Animate On Scroll) library when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Animation happens only once
        mirror: false // Elements do not animate out while scrolling past them
    });
});

// Intersection Observer for reveal animations
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
        threshold: 0.1 // Reveal when 10% of the element is visible
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});

// Handle header and go-top button visibility on scroll
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
