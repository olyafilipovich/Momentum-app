import * as t from './translate.js';
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const mistake  = document.querySelector('.weather-error')

const city = document.querySelector('.city');
let url = "";

/*function createUrl(cit, lang) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`

};*/



async function getWeather(lang) { 
  if (!city.value) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${town[lang]}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`;
  };
 try {
    let res = await fetch(url);
    const descript = {
      EN: {
        1 : 'Wind speed',
        2 : 'm/s',
        3: 'Humidity'
      },
      RU: {
        1 : 'Скорость ветра',
        2 : 'м/с',
        3 : 'Влажность'
      }
    };
      let data = await res.json();
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${descript[lang][1]}` + `: ${Math.round(data.wind.speed)}` + `${descript[lang][2]}`;
      humidity.textContent = `${descript[lang][3]}` + `: ${data.main.humidity}%`;
      mistake.textContent ="";
    } catch(error)  {
      console.log(error);
    };
  };
 
 const town  = {
  EN: 'Minsk',
  RU: 'Минск'
 };

function setCity (event) {
  if (event.code === 'Enter'){ 
     if (city.value === "") {
      city.value = town[t.language.textContent]};
      getWeather(t.language.textContent);
    city.blur();
     };
};



export {getWeather, setCity, city, town}