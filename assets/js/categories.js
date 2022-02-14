const leftBar = document.querySelector('#leftBar');
const hideBar = document.querySelector('.hide');
const leftHamburger = document.querySelector('#category-icon');
const body = document.querySelector('body')

leftHamburger.addEventListener('click', () => {
    leftBar.classList.add('active');
    body.style.overflow = 'hidden'
})

hideBar.addEventListener('click', () => {
    leftBar.classList.remove('active');
    body.style.overflow = 'auto'
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}