const button = document.querySelectorAll('button');
const box = document.querySelector('.box');

function addwidth() {
    box.classList.add('width');
}

function addheight() {
    box.classList.add('height');
}
function removewidth() {
    box.classList.remove('width');
}

function removeheight() {
    box.classList.remove('height');
}

button[0].addEventListener('click', addwidth);
button[0].addEventListener('click', addheight);
button[1].addEventListener('click', removewidth);
button[1].addEventListener('click', removeheight);