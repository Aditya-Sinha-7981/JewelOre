const leftBar = document.querySelector('#leftBar');
const hideBar = document.querySelector('.hide');
const leftHamburger = document.querySelector('#category-icon');

leftHamburger.addEventListener('click', () => {
    leftBar.classList.add('active');
})

hideBar.addEventListener('click', () => {
    leftBar.classList.remove('active');
})