let now = new Date();
let button = document.querySelector('.submit');
button.addEventListener('click', (now) => {
    button.setAttribute('value', now);
})