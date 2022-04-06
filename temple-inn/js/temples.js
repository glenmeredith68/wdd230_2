const path = 'js/temples.json';
fetch(path)
    .then(response => response.json())
    .then(data => {
        const temples = data['temples'];
        temples.forEach(temple => {
            let card = document.createElement('section');
            let title = document.createElement('div');
            let heart = document.createElement('img');
            let h3 = document.createElement('h3');
            let img = document.createElement('img');
            let imgDiv = document.createElement('div');
            let address1 = document.createElement('a');
            let address2 = document.createElement('a');
            let addressDiv = document.createElement('div');
            let phone = document.createElement('a');
            let detailsBtn = document.createElement('p');
            let details = document.createElement('div');

            let history = document.createElement('div');
            let services = document.createElement('div');
            let ordSched = document.createElement('p');
            let sessSched = document.createElement('p');
            let closures = document.createElement('div');

            h3.textContent = temple.name;
            title.appendChild(h3);

            // heart button
            // let unliked = true;
            // // function like() {
            // //     if (unliked) {
            // //         heart.setAttribute('src', '../images/social/heart-full.png')
            // //         heart.setAttribute('alt', 'You like this temple');
            // //         localStorage.setItem(`${temple.name} liked src`, '../images/social/heart-full.png');
            // //         localStorage.setItem(`${temple.name} liked alt`, 'You like this temple');
            // //     }
            // //     else {
            // //         heart.setAttribute('src', '../images/social/heart-empty.png');
            // //         heart.setAttribute('alt', 'You can like this temple');
            // //         localStorage.setItem(`${temple.name} liked src`, '../images/social/heart-empty.png');
            // //         localStorage.setItem(`${temple.name} liked alt`, 'You can like this temple');
            // //     }
            // //     unliked = !unliked;
            // // }
            // let likedInPast = localStorage.getItem(`${temple.name} liked`);
            // console.log(likedInPast);
            // window.addEventListener('load', () => {
            //     console.log('loaded');
            //     if (likedInPast != null) {
            //         heart.setAttribute('src', localStorage.getItem(`${temple.name} liked src`));
            //         heart.setAttribute('alt', `${temple.name} liked alt`);
            //     }
            //     else {
            //         console.log('it\'s null');
            //         heart.setAttribute('src', 'images/social/heart-empty.png');
            //         heart.setAttribute('alt', 'You can like this temple');
            //     }
            // })
            // heart.addEventListener('click', () => {
            //     if (unliked) {
            //         heart.setAttribute('src', 'images/social/heart-full.png');
            //         heart.setAttribute('alt', 'You like this temple');
            //         localStorage.setItem(`${temple.name} liked`, 'yes');
            //         localStorage.setItem(`${temple.name} liked src`, 'images/social/heart-full.png');
            //         localStorage.setItem(`${temple.name} liked alt`, 'You like this temple');
            //     }
            //     else {
            //         heart.setAttribute('src', '../images/social/heart-empty.png');
            //         heart.setAttribute('alt', 'You can like this temple');
            //         localStorage.setItem(`${temple.name} liked`, 'no');
            //         localStorage.setItem(`${temple.name} liked src`, 'images/social/heart-empty.png');
            //         localStorage.setItem(`${temple.name} liked alt`, 'You can like this temple');
            //     }
            //     unliked = !unliked;
            // })
            title.appendChild(heart);
            title.setAttribute('class', 'card-title');

            // end heart button

            img.setAttribute('src', temple.img);
            img.setAttribute('alt', temple.name);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', 350),
                img.setAttribute('height', 233),
                imgDiv.appendChild(img);

            address1.textContent = temple.address1;
            address1.setAttribute('href', temple.addressurl);
            address2.textContent = temple.address2;
            address2.setAttribute('href', temple.addressurl);
            addressDiv.appendChild(address1);
            addressDiv.appendChild(address2);
            addressDiv.setAttribute('class', 'address');

            phone.textContent = temple.phone;
            phone.setAttribute('href', `tel:+${temple.phone}`);
            phone.setAttribute('class', 'phone');

            history.textContent = 'History';
            historyArray = temple.history;
            historyArray.forEach(element => {
                let line = document.createElement('p');
                line.textContent = element;
                history.appendChild(line);
            });

            services.textContent = 'Services';
            servicesArray = ['clothing', 'cafeteria', 'distribution'];
            servicesObj = temple.services;
            servicesArray.forEach(service => {
                let line = document.createElement('p')
                line.textContent = `Are ${service} services available? ${servicesObj[service]}`
                services.appendChild(line);
            });

            ordSched.textContent = `Ordinance Schedule: ${temple.ordinance}`;

            sessSched.textContent = `Session Schedule: ${temple.session}`;

            closures.textContent = 'Closures';
            closuresArray = temple.closures;
            closuresArray.forEach(closure => {
                let line = document.createElement('p');
                line.textContent = closure;
                closures.appendChild(line);
            });

            details.appendChild(history);
            details.appendChild(services);
            details.appendChild(ordSched);
            details.appendChild(sessSched);
            details.appendChild(closures);
            details.setAttribute('class', 'details')

            detailsBtn.innerHTML = 'Details &#8675;';
            detailsBtn.setAttribute('class', 'details-btn');
            detailsBtn.addEventListener('click', () => {
                details.classList.toggle('show');
                card.classList.toggle('outline');
                detailsBtn.classList.toggle('heavy');
            })

            card.appendChild(title);
            card.appendChild(imgDiv);
            card.appendChild(addressDiv);
            card.appendChild(phone)
            card.appendChild(detailsBtn);
            card.appendChild(details);

            document.querySelector('.temples').appendChild(card);

            // heart btn
            let unliked = true;
            let likedInPast = localStorage.getItem(`${temple.name} liked`);
            console.log(likedInPast);
            window.addEventListener('load', () => {
                console.log('loaded');
                if (likedInPast != null) {
                    heart.setAttribute('src', localStorage.getItem(`${temple.name} liked src`));
                    heart.setAttribute('alt', `${temple.name} liked alt`);
                }
                else {
                    console.log('it\'s null');
                    heart.setAttribute('src', 'images/social/heart-empty.png');
                    heart.setAttribute('alt', 'You can like this temple');
                }
            })
            heart.addEventListener('click', () => {
                if (unliked) {
                    heart.setAttribute('src', 'images/social/heart-full.png');
                    heart.setAttribute('alt', 'You like this temple');
                    localStorage.setItem(`${temple.name} liked`, 'yes');
                    localStorage.setItem(`${temple.name} liked src`, 'images/social/heart-full.png');
                    localStorage.setItem(`${temple.name} liked alt`, 'You like this temple');
                }
                else {
                    heart.setAttribute('src', '../images/social/heart-empty.png');
                    heart.setAttribute('alt', 'You can like this temple');
                    localStorage.setItem(`${temple.name} liked`, 'no');
                    localStorage.setItem(`${temple.name} liked src`, 'images/social/heart-empty.png');
                    localStorage.setItem(`${temple.name} liked alt`, 'You can like this temple');
                }
                unliked = !unliked;
            })
        });
        
    })

// let details = document.querySelector('.details');
// details.addEventListener('click', () => {
//     details.children.classList.toggle('show');
// })