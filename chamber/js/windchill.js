let temp = parseFloat(document.querySelector('#temp').textContent);
let windspeed = parseFloat(document.querySelector('#windspeed-span').textContent);
let windchillTemp, roundedTemp;
if (temp <= 50 && windspeed >= 3) {
    windchillTemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * Math.pow(windspeed, 0.16) * temp);
    roundedTemp = Math.round(windchillTemp * 100) / 100;
    document.querySelector('#windchill-span').textContent = roundedTemp;
}