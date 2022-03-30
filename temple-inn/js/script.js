// menu dropdown 

let services = document.querySelector('.services');
let dropdown = document.querySelector('.drop');
services.addEventListener('mouseover', () => {
    dropdown.style.display = 'flex';
})
services.addEventListener('mouseout', () => {
    dropdown.style.display = 'none';
})