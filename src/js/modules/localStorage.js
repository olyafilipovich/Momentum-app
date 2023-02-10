import * as w from './weather.js';
import * as t from './translate.js';
import * as calc from './greetings.js';
import * as time from './timeDate.js';
import { getQuotes } from './quotes.js';

const name = document.querySelector('.name'); 
;

function setLocalStorage () {
    localStorage.setItem('city', w.city.value);
    localStorage.setItem('name', name.value);
    localStorage.setItem('language', t.language.textContent);
    localStorage.setItem('placeholder', t.pHolder.placeholder);
    localStorage.setItem('date', time.day.textContent);
};

function getLocalStorage () {
    if (localStorage.getItem('language')) {
        t.language.textContent = localStorage.getItem('language') 
    } else {
        t.language.textContent = 'EN';
    }
    calc.showGreeting(t.language.textContent);
    getQuotes(t.language.textContent);
    document.querySelector('.gr').textContent = t.setText[t.language.textContent][1];
    document.querySelector('.dt').textContent = t.setText[t.language.textContent][2];
    document.querySelector('.tm').textContent = t.setText[t.language.textContent][3];
    document.querySelector('.wr').textContent = t.setText[t.language.textContent][4];
    document.querySelector('.qu').textContent = t.setText[t.language.textContent][5];
    document.querySelector('.ap').textContent = t.setText[t.language.textContent][6];
    document.querySelector('.ph').textContent = t.setText[t.language.textContent][7];
    document.querySelector('.ln').textContent = t.setText[t.language.textContent][8];
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name')
    };
    if (localStorage.getItem('city')) {
        w.city.value = localStorage.getItem('city')
    } else {
        w.city.value = w.town[t.language.textContent];
    };
    w.getWeather(t.language.textContent);
   

    if (localStorage.getItem('placeholder')) {
        t.pHolder.placeholder = localStorage.getItem('placeholder') 
    } else {
        t.pHolder.placeholder = "[Enter name]";
    };

    if (localStorage.getItem('date')) {
        time.day.textContent = localStorage.getItem('date') 
    } else {
        time.showDate(t.language.textContent);
    };

};


export {setLocalStorage, getLocalStorage, name};