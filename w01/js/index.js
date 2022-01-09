function getDate() {
    let d = new Date().getFullYear();
    document.getElementById('outputspan').innerHTML = d;
}
getDate();
// () => {
//     let m = document.lastModified;
//     document.getElementById('lastmod').innerHTML = m;
// }
function getModified() {
    let m = document.lastModified;
    document.getElementById('lastmod').innerHTML = m;
}
getModified();