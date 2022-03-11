if (now.getDay() == 1 || now.getDay() == 2) {
    let body = document.querySelector('body');
    let banner = document.createElement('div');
    let bannerText = document.createElement('h3');
    let xButton = document.createElement('a');
    let nav = document.querySelector('.nav');

    banner.style.display = 'flex';
    banner.style.justifyContent = 'center';
    banner.style.height = 'auto';
    banner.style.alignContent = 'center';
    banner.style.padding = '1.5em 10%';
    banner.style.textAlign = 'center';
    banner.style.backgroundColor = '#083d77';
    bannerText.style.backgroundColor = '#083d77';
    xButton.style.backgroundColor = '#083d77';
    bannerText.style.color = '#EEE9E5';
    xButton.style.color = '#EEE9E5';
    xButton.style.fontSize = 'calc(1.5em + 1vw)';
    xButton.style.cursor = 'pointer';

    nav.style.top = '9%';

    xButton.textContent = '✕';
    bannerText.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    banner.appendChild(xButton);
    banner.appendChild(bannerText);
    body.insertBefore(banner, body.childNodes[0]);

    xButton.addEventListener('click', () => {
        banner.style.display = 'none';
        nav.style.top = '3.5%';
    });
}