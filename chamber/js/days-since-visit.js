const daysSinceOutput = document.querySelector('.days-since-visit');

let lastVisit = Number(localStorage.getItem('days-since-visit'));
let getDaysSince = (lastVisit) => {
    let now = Date.now()
    let daysSince = Math.floor((now - lastVisit) / 86400000)
    return daysSince;
}
let daysSince = getDaysSince(lastVisit)

if (daysSince !== 0) {
    daysSinceOutput.textContent = `It's been ${daysSince} days since you visited. Welcome back!`
} else {
    daysSinceOutput.textContent = 'This is your first visit. Welcome!'
}
lastVisit = Date.now()
localStorage.setItem('days-since-visit', lastVisit)