let gridItems = document.querySelectorAll('.project-views .grid a'),
closeModal = document.getElementById('close'),
modal = document.getElementById('modal'),
modalImg = document.getElementById('modal-img')

gridItems.forEach(element => {
    element.addEventListener('click', () => {
        ShowModal(element.childNodes[1].getAttribute('src'))
    });
});

const ShowModal = (item) => {
    modalImg.src = item;
    modal.classList.add('active')
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
});