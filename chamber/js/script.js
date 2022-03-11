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
// console.log(now.getDay())