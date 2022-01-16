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