const url ='https://api.openweathermap.org/data/2.5/onecall?lat=45.401&lon=-122.744&appid=33e2cecc8554b0c274a39f67cb50d0db&units=imperial';

fetch(url)
    .then(response => response.json()
        .then(weather => {
            console.log(weather);
            console.table(weather);

            // this is for the 5 day forecast
            let day1Img = document.querySelector('.day1-img');
            let day1Temp = document.querySelector('.day1-temp');
            let day1Hum = document.querySelector('.day1-hum');


            let icon1 = weather.current.weather[0].icon;
            let iconSource1 = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
            day1Img.setAttribute('src', iconSource1);
            day1Img.setAttribute('alt', weather.current.weather[0].description);

            let currTemp = weather.current.temp;
            let roundedTemp = Math.round(currTemp);
            day1Temp.textContent = roundedTemp + '° F';

            day1Hum.textContent = weather.current.humidity + '%';

            for (let i = 1; i < 5; i++) {
                let daily = weather.daily[i];
                let img = document.querySelector(`.day${i + 1}-img`);
                let temp = document.querySelector(`.day${i + 1}-temp`);
                let hum = document.querySelector(`.day${i + 1}-hum`);
                let now = new Date();
                const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let dayName = weekday[(now.getDay() + i) % 7];
                let dayNameP = document.querySelector(`.day${i + 1}`);

                let icon = daily.weather[0].icon;
                let source = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                img.setAttribute('src', source);
                img.setAttribute('alt', daily.weather[0].descriotion);

                let dailyTemp = daily.temp.day;
                let roundedTemp = Math.round(dailyTemp);
                temp.textContent = roundedTemp + '° F';

                hum.textContent = daily.humidity + '%';

                dayNameP.textContent = dayName;
            }

            // this is for the banner alerts

            

        }))