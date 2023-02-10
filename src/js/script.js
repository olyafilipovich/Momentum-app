import '../assets/favicon.ico';
import '../css/owfont-regular.css';
import '../css/style.css';
import '../assets/sounds/Aqua Caelestis.mp3';
import '../assets/sounds/Ritm Melody.mp3';
import '../assets/sounds/River Flows In You.mp3';
import '../assets/sounds/Summer Wind.mp3';
import '../assets/quotes/Ru-quotes.json';
import '../assets/quotes/en-quotes.json';
import playList from './modules/playList.js';
import * as calc from './modules/greetings.js';
import * as sl from './modules/slider.js';
import * as w from './modules/weather.js';
import * as loc from './modules/localStorage.js';
import * as q from './modules/quotes.js';
import * as audio from './modules/audioplayer.js';
import * as t from './modules/translate.js';
import * as time from './modules/timeDate.js';
import * as s from './modules/settings.js';


time.showDate(t.language.textContent);
time.showTime();

window.addEventListener('beforeunload', loc.setLocalStorage);
window.addEventListener('load', loc.getLocalStorage);



sl.setBg();

sl.picNext.addEventListener('click', sl.getSlideNext);
sl.picPrev.addEventListener('click', sl.getSlidePrev);



document.addEventListener('DOMContentLoaded', w.getWeather(t.language.textContent));
w.city.addEventListener('keypress', w.setCity);

document.addEventListener('DOMContentLoaded', q.getQuotes(t.language.textContent));
q.enterQuotes.addEventListener('click', () => {
    q.getQuotes(t.language.textContent);
    console.log('click')});

audio.playButton.addEventListener('click', audio.playAudio);
audio.nextButton.addEventListener('click', audio.playNext);
audio.prevButton.addEventListener('click', audio.playPrev);
audio.audio.addEventListener('ended', audio.playNext);
audio.audio.addEventListener('timeupdate', audio.progressBarUpdate);
audio.progressBar.addEventListener('click', audio.setProgress);
audio.volumeBar.addEventListener('click', audio.setVolume); 
audio.volumeButton.addEventListener('click', audio.onVolume);
audio.audio.addEventListener('loadeddata', audio.load);

/* settings */


s.switcherGr.addEventListener('click', () => {
    s.switcherGr.classList.toggle('switch-on');
    s.blockGr.classList.toggle('off');
});

s.switcherDt.addEventListener('click', () => {
    s.switcherDt.classList.toggle('switch-on');
    s.blockDt.classList.toggle('off');
});

s.switcherTm.addEventListener('click', () => {
    s.switcherTm.classList.toggle('switch-on');
    s.blockTm.classList.toggle('off');
});

s.switcherWr.addEventListener('click', () => {
    s.switcherWr.classList.toggle('switch-on');
    s.blockWr.classList.toggle('off');
});

s.switcherQu.addEventListener('click', () => {
    s.switcherQu.classList.toggle('switch-on');
    s.blockQu.classList.toggle('off');
});

s.switcherAp.addEventListener('click', () => {
    s.switcherAp.classList.toggle('switch-on');
    s.blockAp.classList.toggle('off');
});

s.settings.addEventListener('click', () => {
    s.settingsBlock.classList.toggle('off');
})






/* translate */


t.language.addEventListener('click', t.changeLang);


