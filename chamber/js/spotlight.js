const path = 'js/directory.json';
fetch(path)
    .then(response => response.json()
        .then(data => {
            const businesses = data['businesses'];
            let busList = [];
            businesses.forEach(business => {
                if (business.status == "Gold" || business.status == "Silver") {
                    busList.push(business);
                }
            });
            console.log(busList);

            let slOneH3 = document.querySelector(".spotlight-1-h3");
            let slTwoH3 = document.querySelector(".spotlight-2-h3");
            let slThreeH3 = document.querySelector(".spotlight-3-h3");
            let slOneImg = document.querySelector(".spotlight-1-img");
            let slTwoPic = document.createElement('img');
            let slTwoImg = document.createElement('div');
            slTwoImg.appendChild(slTwoPic);
            let slThreeImg = document.querySelector(".spotlight-3-img");
            let slOneP = document.querySelector('.spotlight-1-p');
            let slTwoP = document.querySelector('.spotlight-2-p');
            let slthreeP = document.querySelector('.spotlight-3-p');

            listLength = busList.length;
            console.log(listLength);
            let a = Math.floor(Math.random() * (listLength + 1));

            let bus1 = busList[a];
            let b = Math.floor(Math.random() * (listLength + 1));
            while (b == a) {
                b = Math.floor(Math.random() * (listLength + 1));
            }
            let bus2 = busList[b];
            let c = Math.floor(Math.random() * (listLength + 1));
            while (c == a || c == b) {
                c = Math.floor(Math.random() * (listLength + 1));
            }
            let bus3 = busList[c];

            console.log(bus1);

            slOneH3.textContent = bus1.name;
            slOneImg.setAttribute('src', bus1.img);
            slOneP.textContent = bus1.snippet;

            if (bus2.name == "CVM Studios") {
                return
            } else {
                slTwoH3.textContent = bus2.name;
                // have to take out the iframe and put in the picture
                let iframe = document.querySelector('iframe');
                iframe.remove();
                slTwoPic.setAttribute('src', bus2.img);
                document.querySelector('.spotlight-2').insertBefore(slTwoImg, slTwoP);
                slTwoP.textContent = bus2.snippet;
            }
            slThreeH3.textContent = bus3.name;
            slThreeImg.setAttribute('src', bus3.img);
            slthreeP.textContent = bus3.snippet;

        })

    )