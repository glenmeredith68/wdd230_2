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

// footer year

let outputSpan = document.querySelector('#outputspan');
let year = new Date().getFullYear();
outputSpan.textContent = year;




// last modified 

function getModified() {
    let m = document.lastModified;
    document.querySelector('#last-mod').innerText = m;
}
getModified();