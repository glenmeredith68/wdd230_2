// footer functions for the bottom

function getDate() {
    let d = new Date().getFullYear();
    document.getElementById('outputspan').innerText = d;
}
getDate();
// () => {
//     let m = document.lastModified;
//     document.getElementById('lastmod').innerHTML = m;
// }
function getModified() {
    let m = document.lastModified;
    document.getElementById('lastmod').innerText = m;
}
getModified();

// hamburger menu

const hambutton = document.getElementsByClassName('hambutton')[0];
hambutton.addEventListener('click', () => document.getElementsByClassName('nav')[0].classList.toggle('responsive'));

// get date for date box

const datefield = document.getElementById('todaydate');
const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
}).format(now);
datefield.innerHTML = fulldate;

// add banner at the top on Mondays and Tuesdays
console.log(now.getDay())
if (now.getDay() == 1 || now.getDay() == 2) {
    let body = document.querySelector('body');
    let banner = document.createElement('div');
    let bannerText = document.createElement('h3');
    let xButton = document.createElement('a');
    let nav = document.querySelector('.nav');

    banner.style.display = 'flex';
    banner.style.justifyContent = 'center';
    banner.style.height = 'auto';
    banner.style.alignContent = 'center';
    banner.style.padding = '1.5em 10%';
    banner.style.textAlign = 'center';
    banner.style.backgroundColor = '#083d77';
    bannerText.style.backgroundColor = '#083d77';
    xButton.style.backgroundColor = '#083d77';
    bannerText.style.color = '#EEE9E5';
    xButton.style.color = '#EEE9E5';
    xButton.style.fontSize = 'calc(1.5em + 1vw)';
    xButton.style.cursor = 'pointer';

    nav.style.top = '9%';

    xButton.textContent = '✕';
    bannerText.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    banner.appendChild(xButton);
    banner.appendChild(bannerText);
    body.insertBefore(banner, body.childNodes[0]);

    xButton.addEventListener('click', () => {
        banner.style.display = 'none';
        nav.style.top = '3.5%';
    });
}