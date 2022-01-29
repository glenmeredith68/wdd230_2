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

const hambutton = document.getElementsByClassName('hambutton')[0];
hambutton.addEventListener('click', () => document.getElementsByClassName('nav')[0].classList.toggle('responsive'));

const datefield = document.getElementById('todaydate');
const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(now);
datefield.innerHTML = fulldate;