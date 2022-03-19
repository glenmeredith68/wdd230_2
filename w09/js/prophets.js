const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const prophets = data['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let portrait = document.createElement('img');
            let bday = document.createElement('p');
            let bplace = document.createElement('p');

            h2.textContent = `${prophet.name} ${prophet.lastname}`;

            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - Latter-day President #${prophet.order}.`);
            portrait.setAttribute('loading', 'lazy');

            bday.textContent = `${prophet.name} ${prophet.lastname} was born on ${prophet.birthdate}.`;
            bplace.textContent = `President ${prophet.lastname} was born in ${prophet.birthplace}`;

            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(bday);
            card.appendChild(bplace)

            document.querySelector('.cards').appendChild(card);

        });
    });