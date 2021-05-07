let animation = document.getElementById('main-animation'),
btnM = document.getElementById('btn'),
nav = document.getElementById('nav'),
links = document.querySelectorAll('.header .nav .menu-links')

btnM.addEventListener('click', () => {
    nav.classList.toggle('active');
});

animation.addEventListener('animationend', (e) => {
    if (e.animationName === 'opening') {
        setInterval(() => {
            animation.remove();
        }, 3000);
    }
});

links.forEach(link => {
    link.style.animation = 'hide ' + Math.random()*3 + 's ' + 8 + 's alternate both';
});