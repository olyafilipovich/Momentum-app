import { playList } from './playList.js';


const audio = new Audio();
let isPlay = false;
const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.play-next');
const prevButton= document.querySelector('.play-prev');
const nameSong = document.querySelector('.name-song');
const barColor = document.querySelector('.bar-color');
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const volumeColorBar = document.querySelector('.volume-color-bar');
const volumeButton = document.querySelector('.volume-img');
const songDuration = document.querySelector('.length');
const songCurrentTime = document.querySelector('.current');

let playNum = 0;
const playListContainer = document.querySelector('.play-list');
const rowPlaySmall = document.querySelector('.play-row-small')

playList.forEach(el => {
    const li = document.createElement('li');
    const play  = document.createElement('button');
    li.classList.add('play-item');
    play.classList.add('play-button');
    li.textContent = el.title + " | " + el.duration;
    playListContainer.append(li);
    rowPlaySmall.append(play);
});

function load () { 
    songDuration.textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
};

function getTimeCodeFromNum (num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds/60);
    seconds -= minutes*60;
    return `${minutes}:${String(seconds % 60).padStart(2, 0)}`
}




function playAudio () {
    if (!isPlay) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        playButton.classList.add('pause');
        playButton.addEventListener('click', playListContainer.childNodes[playNum].classList.add('item-active'));
        nameSong.innerHTML = playList[playNum].title;
      
        } else { 
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
    };

};


 
function playNext () {
    playNum ++;
    if (playNum > playList.length - 1) {
        playNum = 0;
        playListContainer.childNodes[(playList.length - 1)].classList.remove('item-active');
    };
    console.log(playNum);
    isPlay = false;
    if (playNum <= playList.length - 1 && playNum > 0) {
    playListContainer.childNodes[(playNum-1)].classList.remove('item-active');
    } else if (playNum === 0) {
    playListContainer.childNodes[(playList.length - 1)].classList.remove('item-active');
    };
    playAudio ();
};

function playPrev () {
    playNum --;
    if (playNum < 0) {
        playNum = playList.length - 1;
        playListContainer.childNodes[0].classList.remove('item-active');
    };
    console.log(playNum);
    isPlay = false;
    if (playNum >= 0 && playNum < playList.length - 1) {
    playListContainer.childNodes[(playNum+1)].classList.remove('item-active');
    } else if (playNum = playList.length - 1 ) {
        playListContainer.childNodes[0].classList.remove('item-active');
    }
    playAudio ();
};

// прогресс бар заставить двигаться
function progressBarUpdate (e) {
    const {duration, currentTime} = e.srcElement; // получили данные о треке (продолжительность, и сколько уже играет)
    const progressPercent  = (currentTime/duration)*100; // определяем сколько должно быть закрашено на прогресс-баре
    barColor.style.width = `${progressPercent}%`;
    songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);
};

// нажимать на бар и менять место проигрывания песни
function setProgress (e) {
     const width = this.clientWidth; // определяем ширину прогресс бара
     const clickX = e.offsetX; // определеяем координаты точки во время клика по прогресс-бару 
     const duration = audio.duration;
     audio.currentTime = (clickX/width) * duration;
     songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);
};

// менять звук 
function setVolume (e) {
    const widthVolume = this.clientWidth; // определяем ширину звукового бара
    const volumeClickX = e.offsetX; // определеяем координаты точки во время клика по звукоковому-бару 
    const newVolume = volumeClickX/widthVolume;
    audio.volume = newVolume;
    volumeColorBar.style.width = newVolume*100 +'%'; 
};

// вкл/выкл звук
function onVolume () {
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeButton.classList.add('volume-stop');
    } else { 
        volumeButton.classList.remove('volume-stop');
    };
};







export {playAudio, audio, isPlay, playButton, playPrev, playNext, playNum, prevButton, nextButton, progressBarUpdate, progressBar, setProgress, volumeBar, setVolume, onVolume, volumeButton, load};