import * as calc from './greetings.js';

/* Slider */

const body = document.querySelector('body');
const picNext = document.querySelector('.slide-next');
const picPrev = document.querySelector('.slide-prev');
let randomNum;
let bgNum;
let timeOfDay = calc.getTimeOfDay();

function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
 
function setBg () {
    randomNum = getRandomNum(1, 20);
    bgNum = String(randomNum).padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {  
        body.style.backgroundImage = `url(${img.src})`;
        console.log(body.style.backgroundImage);
    };
};

function getSlideNext() {
    if (randomNum < 20) {
        randomNum = randomNum + 1;
        bgNum = String(randomNum).padStart(2, "0");
        const img = new Image();
            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
            img.onload = () => {  
        body.style.backgroundImage = `url(${img.src})`;
    };  
    } else if (randomNum === 20) {
        randomNum = 1;
        bgNum = String(randomNum).padStart(2, "0");
        const img = new Image();
            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
            img.onload = () => {  
        body.style.backgroundImage = `url(${img.src})`;
    };  
};
};

function getSlidePrev () {
    if (randomNum > 1) {
        randomNum = randomNum - 1;
        bgNum = String(randomNum).padStart(2, "0");
        const img = new Image();
            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
            img.onload = () => {  
        body.style.backgroundImage = `url(${img.src})`;
    };  
    } else if (randomNum === 1) {
        randomNum = 20;
        bgNum = String(randomNum).padStart(2, "0");
        const img = new Image();
            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
            img.onload = () => {  
            body.style.backgroundImage = `url(${img.src})`;
        };  
    };
};

//picNext.addEventListener('click', getSlideNext);
//picPrev.addEventListener('click', getSlidePrev);

export {setBg, body, picNext, picPrev, getSlidePrev, getSlideNext};
