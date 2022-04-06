// instagram posts

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const post0 = document.querySelector('.post1');
const post1 = document.querySelector('.post2');
const post2 = document.querySelector('.post3');
const posts = [post0, post1, post2];

let clickNum = 0;
let displayedPost = posts[0];
displayedPost.style.display = 'block';




leftBtn.addEventListener('click', () => {
    clickNum--;
    let postNum = Math.abs((clickNum % 3)) ;

    let oldDisplay;
    oldDisplay = displayedPost;
    oldDisplay.style.display = 'none';
    displayedPost = posts[postNum];
    displayedPost.style.display = 'block';


})

rightBtn.addEventListener('click', () => {
    clickNum++;
    let postNum = Math.abs((clickNum % 3));

    let oldDisplay;
    oldDisplay = displayedPost;
    oldDisplay.style.display = 'none';
    displayedPost = posts[postNum];
    displayedPost.style.display = 'block';
})
