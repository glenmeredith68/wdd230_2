const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.8417&lon=-112.4823&appid=33e2cecc8554b0c274a39f67cb50d0db&units=imperial';

fetch(url)
    .then(response => response.json()
        .then(weather => {
            // console.log(weather);

            let icon = document.querySelector('#weathericon');
            let temp = document.querySelector('#temp');
            let windSpeed = document.querySelector('#windspeed-span');
            let currCond = document.querySelector('#forecast');

            let iconId = weather.weather[0].icon;
            let iconSource = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
            icon.setAttribute('src', iconSource);
            icon.setAttribute('alt', weather.weather[0].description);


            let currTemp = weather.main.temp;
            let roundedTemp = Math.round(currTemp);
            temp.textContent = roundedTemp + '°F';

            windSpeed.textContent = weather.wind.speed + ' m/h';


            if (currTemp <= 50 && weather.wind.speed >= 3) {
                let windchillTemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(weather.wind.speed, 0.16)) + (0.4275 * Math.pow(weather.wind.speed, 0.16) * temp);
                let roundWindTemp = Math.round(windchillTemp * 100) / 100;
                document.querySelector('#windchill-span').textContent = roundWindTemp;
            }



            let words = weather.weather[0].description;
            wordsList = words.split(' ');
            for (let i = 0; i < wordsList.length; i++) {
                wordsList[i] = wordsList[i][0].toUpperCase() + wordsList[i].substring(1);
            }
            wordsList = wordsList.join(" ");
            currCond.textContent = wordsList;
        })



    )



// let temp = parseFloat(document.querySelector('#temp').textContent);
// let windspeed = parseFloat(document.querySelector('#windspeed-span').textContent);
// let windchillTemp, roundedTemp;
// if (temp <= 50 && windspeed >= 3) {
//     windchillTemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * Math.pow(windspeed, 0.16) * temp);
//     roundedTemp = Math.round(windchillTemp * 100) / 100;
//     document.querySelector('#windchill-span').textContent = roundedTemp;
// }