const url ='https://api.openweathermap.org/data/2.5/onecall?lat=45.401&lon=-122.744&appid=33e2cecc8554b0c274a39f67cb50d0db&units=imperial';

fetch(url)
    .then(response => response.json()
        .then(weather => {
            console.log(weather);
            console.table(weather);
            let day1Img = document.querySelector('.day1-img');
            let day1Temp = document.querySelector('.day1-temp');
            let day1Hum = document.querySelector('.day1-hum');


            let icon1 = weather.current.weather[0].icon;
            let iconSource1 = `http2://openweathermap.org/img/wn/${icon1}@2x.png`;
            day1Img.setAttribute('src', iconSource1);
            day1Img.setAttribute('alt', weather.current.weather[0].description);

            let currTemp = weather.current.temp;
            let roundedTemp = Math.round(currTemp);
            day1Temp.textContent = roundedTemp + '° F';

            day1Hum.textContent = weather.current.humidity + '%';


        }))