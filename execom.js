/*document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});*/


document.addEventListener("DOMContentLoaded", function() {
            const menu = document.getElementById('menu-icon');
            const cls = document.getElementsByClassName('navbar');

            menu.onclick = function() {
                for (let i = 0; i < cls.length; i++) {
                    cls[i].style.display = cls[i].style.display === 'block' ? 'none' : 'block';
                }
               
            };
        });


document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false // Whether elements should animate out while scrolling past them
    });
});

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
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});

