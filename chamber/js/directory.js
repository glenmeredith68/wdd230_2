const path = 'js/directory.json';
fetch(path)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const businesses = data['businesses'];
        businesses.forEach(business => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let imgdiv = document.createElement('div');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let status = document.createElement('p');

            h2.textContent = business.name;

            img.setAttribute('src', business.img);
            img.setAttribute('alt', `${business.name}'s logo`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', 150);
            img.setAttribute('height', 150);
            imgdiv.appendChild(img);

            address.textContent = business.address;

            phone.textContent = business.phone;

            website.setAttribute('href', business.website);
            website.textContent = `${business.website}`;

            status.textContent = `Status: ${business.status}`;

            card.appendChild(h2);
            card.appendChild(imgdiv);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(status);
            card.classList.add('card')

            document.querySelector('.dir-cards').appendChild(card);


            // let listEntry = document.createElement('div');

            // listEntry.appendChild(h2);
            // listEntry.appendChild(address);
            // listEntry.appendChild(phone);
            // listEntry.appendChild(website);

            // document.querySelector('.dir-list').appendChild(listEntry);

        });
    });

fetch(path)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const businesses = data['businesses'];
        businesses.forEach(business => {
            let listEntry = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let imgdiv = document.createElement('div');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let status = document.createElement('p');

            h2.textContent = business.name;

            img.setAttribute('src', business.img);
            img.setAttribute('alt', `${business.name}'s logo`);
            img.setAttribute('loading', 'lazy');

            address.textContent = business.address;
            address.classList.add('address');

            phone.textContent = business.phone;

            website.setAttribute('href', business.website);
            website.textContent = `${business.name}`;

            status.textContent = `Status: ${business.status}`;

            listEntry.appendChild(h2);
            listEntry.appendChild(address);
            listEntry.appendChild(phone);
            listEntry.appendChild(website);
            listEntry.classList.add('card')

            document.querySelector('.dir-list').appendChild(listEntry);
        });
    });

const cardBtn = document.querySelector('#card-view');
const listBtn = document.querySelector('#list-view');
const cards = document.querySelector('.dir-cards');
const list = document.querySelector('.dir-list');


let width = window.innerWidth;
console.log(width);
if (width > 688 && width < 868) {
    list.classList.toggle('hide');
    cards.classList.toggle('hide');
}


cardBtn.addEventListener('click', () => {
    list.classList.toggle('hide');
    cards.classList.toggle('hide');
    let cButton = document.querySelector('.card-button');
    cButton.textContent = '🔳';
    let lButton = document.querySelector('.list-button');
    lButton.textContent = '🔲';
});

listBtn.addEventListener('click', () => {
    cards.classList.toggle('hide');
    list.classList.toggle('hide');
    let button = document.querySelector('.list-button');
    button.textContent = '🔳';
    let cButton = document.querySelector('.card-button');
    cButton.textContent = '🔲';
})