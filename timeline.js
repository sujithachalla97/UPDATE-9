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
