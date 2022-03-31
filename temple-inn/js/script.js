// menu dropdown 

let services = document.querySelector('.services');
let dropdown = document.querySelector('.drop');
services.addEventListener('mouseover', () => {
    dropdown.style.display = 'flex';
    dropdown.style.opacity = '1';
})
services.addEventListener('mouseout', () => {
    dropdown.style.display = 'none';
    dropdown.style.opacity = '0';
})