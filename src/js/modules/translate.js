import { showGreeting } from "./greetings.js";
import { showDate } from "./timeDate.js";
import { getWeather } from "./weather.js";
import { getQuotes } from "./quotes.js";



const language = document.querySelector('.language');
const pHolder = document.getElementById('enter');

const setText = {
    EN: {
        1: 'Greetings',
        2: 'Date',
        3: 'Time',
        4: 'Weather',
        5: 'Quotes',
        6: 'Audioplayer',
        7: 'Photo Source',
        8: 'Language'
    },
    RU: {
        1: 'Приветствие',
        2: 'Дата',
        3: 'Время',
        4: 'Погода',
        5: 'Цитаты',
        6: 'Аудиоплеер',
        7: 'Источник фото',
        8: 'Язык'
    }
};

function changeLang () {
    if (language.textContent === "EN") {
        language.textContent = "RU";
        pHolder.placeholder = "[Введите имя]";
        showGreeting(language.textContent);
        showDate(language.textContent);
        getWeather(language.textContent);
        getQuotes(language.textContent);
        document.querySelector('.gr').textContent = setText[language.textContent][1];
        document.querySelector('.dt').textContent = setText[language.textContent][2];
        document.querySelector('.tm').textContent = setText[language.textContent][3];
        document.querySelector('.wr').textContent = setText[language.textContent][4];
        document.querySelector('.qu').textContent = setText[language.textContent][5];
        document.querySelector('.ap').textContent = setText[language.textContent][6];
        document.querySelector('.ph').textContent = setText[language.textContent][7];
        document.querySelector('.ln').textContent = setText[language.textContent][8];
        
    } else {
        language.textContent = "EN";
        pHolder.placeholder = "[Enter name]";
        showGreeting(language.textContent);
        showDate(language.textContent);
        getWeather(language.textContent);
        getQuotes(language.textContent);
        document.querySelector('.gr').textContent = setText[language.textContent][1];
        document.querySelector('.dt').textContent = setText[language.textContent][2];
        document.querySelector('.tm').textContent = setText[language.textContent][3];
        document.querySelector('.wr').textContent = setText[language.textContent][4];
        document.querySelector('.qu').textContent = setText[language.textContent][5];
        document.querySelector('.ap').textContent = setText[language.textContent][6];
        document.querySelector('.ph').textContent = setText[language.textContent][7];
        document.querySelector('.ln').textContent = setText[language.textContent][8];

    }
}





export {language, changeLang, pHolder, setText}











