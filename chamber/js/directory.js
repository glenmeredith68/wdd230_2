const path = 'js/directory.json';
fetch(path)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const businesses = data['businesses'];
        businesses.forEach(business => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let status = document.createElement('p');

            h2.textContent = business.name;

            img.setAttribute('src', business.img);
            img.setAttribute('alt', `${business.name}'s logo`);
            img.setAttribute('loading', 'lazy');

            address.textContent = business.address;

            phone.textContent = business.phone;

            website.setAttribute('href', business.website);

            status.textContent = business.status;

            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(status);

            document.querySelector('.dir-cards').appendChild(card);


            // let listEntry = document.createElement('div');

            // listEntry.appendChild(h2);
            // listEntry.appendChild(address);
            // listEntry.appendChild(phone);
            // listEntry.appendChild(website);

            // document.querySelector('.dir-list').appendChild(listEntry);

        });
    });

const cardBtn = document.querySelector('#card-view');
const listBtn = document.querySelector('#list-view');
const cards = document.querySelector('.dir-cards');
const list = document.querySelector('.dir-list');


cardBtn.addEventListener('click', () => {
    list.
})