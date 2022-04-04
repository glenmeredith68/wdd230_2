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


// instagram posts

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const post1 = document.querySelector('.post1');
const post2 = document.querySelector('.post2');
const post3 = document.querySelector('.post3');
const posts = [post1, post2, post3];

let clickNum = 1;
let displayedPost = posts[1];
displayedPost.style.display = 'block';




leftBtn.addEventListener('click', () => {
    
    let postNum = Math.abs((clickNum % 3)) + 1;
    clickNum++;
    console.log(postNum);

    displayedPost = posts[postNum];


})