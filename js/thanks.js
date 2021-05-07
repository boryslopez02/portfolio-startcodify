let thanksPage = document.querySelector('.thanks')

thanksPage.addEventListener('animationend', (e) => {
    if (e.animationName === 'opening') {
        setInterval(() => {
            window.location.replace("../index.html");
        }, 4000);
    }
});