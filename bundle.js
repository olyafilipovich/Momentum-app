/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/owfont-regular.css":
/*!************************************!*\
  !*** ./src/css/owfont-regular.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/css/owfont-regular.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/css/style.css?");

/***/ }),

/***/ "./src/js/modules/audioplayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/audioplayer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"audio\": () => (/* binding */ audio),\n/* harmony export */   \"isPlay\": () => (/* binding */ isPlay),\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"nextButton\": () => (/* binding */ nextButton),\n/* harmony export */   \"onVolume\": () => (/* binding */ onVolume),\n/* harmony export */   \"playAudio\": () => (/* binding */ playAudio),\n/* harmony export */   \"playButton\": () => (/* binding */ playButton),\n/* harmony export */   \"playNext\": () => (/* binding */ playNext),\n/* harmony export */   \"playNum\": () => (/* binding */ playNum),\n/* harmony export */   \"playPrev\": () => (/* binding */ playPrev),\n/* harmony export */   \"prevButton\": () => (/* binding */ prevButton),\n/* harmony export */   \"progressBar\": () => (/* binding */ progressBar),\n/* harmony export */   \"progressBarUpdate\": () => (/* binding */ progressBarUpdate),\n/* harmony export */   \"setProgress\": () => (/* binding */ setProgress),\n/* harmony export */   \"setVolume\": () => (/* binding */ setVolume),\n/* harmony export */   \"volumeBar\": () => (/* binding */ volumeBar),\n/* harmony export */   \"volumeButton\": () => (/* binding */ volumeButton)\n/* harmony export */ });\n/* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ \"./src/js/modules/playList.js\");\n\r\n\r\n\r\nconst audio = new Audio();\r\nlet isPlay = false;\r\nconst playButton = document.querySelector('.play');\r\nconst nextButton = document.querySelector('.play-next');\r\nconst prevButton= document.querySelector('.play-prev');\r\nconst nameSong = document.querySelector('.name-song');\r\nconst barColor = document.querySelector('.bar-color');\r\nconst progressBar = document.querySelector('.progress-bar');\r\nconst volumeBar = document.querySelector('.volume-bar');\r\nconst volumeColorBar = document.querySelector('.volume-color-bar');\r\nconst volumeButton = document.querySelector('.volume-img');\r\nconst songDuration = document.querySelector('.length');\r\nconst songCurrentTime = document.querySelector('.current');\r\n\r\nlet playNum = 0;\r\nconst playListContainer = document.querySelector('.play-list');\r\nconst rowPlaySmall = document.querySelector('.play-row-small')\r\n\r\n_playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.forEach(el => {\r\n    const li = document.createElement('li');\r\n    const play  = document.createElement('button');\r\n    li.classList.add('play-item');\r\n    play.classList.add('play-button');\r\n    li.textContent = el.title + \" | \" + el.duration;\r\n    playListContainer.append(li);\r\n    rowPlaySmall.append(play);\r\n});\r\n\r\nfunction load () { \r\n    songDuration.textContent = getTimeCodeFromNum(audio.duration);\r\n    audio.volume = .75;\r\n};\r\n\r\nfunction getTimeCodeFromNum (num) {\r\n    let seconds = parseInt(num);\r\n    let minutes = parseInt(seconds/60);\r\n    seconds -= minutes*60;\r\n    return `${minutes}:${String(seconds % 60).padStart(2, 0)}`\r\n}\r\n\r\n\r\n\r\n\r\nfunction playAudio () {\r\n    if (!isPlay) {\r\n        audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList[playNum].src;\r\n        audio.currentTime = 0;\r\n        audio.play();\r\n        isPlay = true;\r\n        playButton.classList.add('pause');\r\n        playButton.addEventListener('click', playListContainer.childNodes[playNum].classList.add('item-active'));\r\n        nameSong.innerHTML = _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList[playNum].title;\r\n      \r\n        } else { \r\n        audio.pause();\r\n        isPlay = false;\r\n        playButton.classList.remove('pause');\r\n    };\r\n\r\n};\r\n\r\n\r\n \r\nfunction playNext () {\r\n    playNum ++;\r\n    if (playNum > _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1) {\r\n        playNum = 0;\r\n        playListContainer.childNodes[(_playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1)].classList.remove('item-active');\r\n    };\r\n    console.log(playNum);\r\n    isPlay = false;\r\n    if (playNum <= _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1 && playNum > 0) {\r\n    playListContainer.childNodes[(playNum-1)].classList.remove('item-active');\r\n    } else if (playNum === 0) {\r\n    playListContainer.childNodes[(_playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1)].classList.remove('item-active');\r\n    };\r\n    playAudio ();\r\n};\r\n\r\nfunction playPrev () {\r\n    playNum --;\r\n    if (playNum < 0) {\r\n        playNum = _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1;\r\n        playListContainer.childNodes[0].classList.remove('item-active');\r\n    };\r\n    console.log(playNum);\r\n    isPlay = false;\r\n    if (playNum >= 0 && playNum < _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1) {\r\n    playListContainer.childNodes[(playNum+1)].classList.remove('item-active');\r\n    } else if (playNum = _playList_js__WEBPACK_IMPORTED_MODULE_0__.playList.length - 1 ) {\r\n        playListContainer.childNodes[0].classList.remove('item-active');\r\n    }\r\n    playAudio ();\r\n};\r\n\r\n// прогресс бар заставить двигаться\r\nfunction progressBarUpdate (e) {\r\n    const {duration, currentTime} = e.srcElement; // получили данные о треке (продолжительность, и сколько уже играет)\r\n    const progressPercent  = (currentTime/duration)*100; // определяем сколько должно быть закрашено на прогресс-баре\r\n    barColor.style.width = `${progressPercent}%`;\r\n    songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);\r\n};\r\n\r\n// нажимать на бар и менять место проигрывания песни\r\nfunction setProgress (e) {\r\n     const width = this.clientWidth; // определяем ширину прогресс бара\r\n     const clickX = e.offsetX; // определеяем координаты точки во время клика по прогресс-бару \r\n     const duration = audio.duration;\r\n     audio.currentTime = (clickX/width) * duration;\r\n     songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);\r\n};\r\n\r\n// менять звук \r\nfunction setVolume (e) {\r\n    const widthVolume = this.clientWidth; // определяем ширину звукового бара\r\n    const volumeClickX = e.offsetX; // определеяем координаты точки во время клика по звукоковому-бару \r\n    const newVolume = volumeClickX/widthVolume;\r\n    audio.volume = newVolume;\r\n    volumeColorBar.style.width = newVolume*100 +'%'; \r\n};\r\n\r\n// вкл/выкл звук\r\nfunction onVolume () {\r\n    audio.muted = !audio.muted;\r\n    if (audio.muted) {\r\n        volumeButton.classList.add('volume-stop');\r\n    } else { \r\n        volumeButton.classList.remove('volume-stop');\r\n    };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/audioplayer.js?");

/***/ }),

/***/ "./src/js/modules/greetings.js":
/*!*************************************!*\
  !*** ./src/js/modules/greetings.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimeOfDay\": () => (/* binding */ getTimeOfDay),\n/* harmony export */   \"greetingTranslation\": () => (/* binding */ greetingTranslation),\n/* harmony export */   \"showGreeting\": () => (/* binding */ showGreeting)\n/* harmony export */ });\n/* Greetings */\r\n\r\n\r\nconst greetings = document.querySelector('.greeting');\r\nconst greetingTranslation = {\r\n    EN: {\r\n        morning: 'Good morning,',\r\n        afternoon: 'Good afternoon,',\r\n        evening: 'Good evening,',\r\n        night: 'Good night,'\r\n    },\r\n    RU: {\r\n        morning: 'Доброе утро,',\r\n        afternoon: 'Добрый день,',\r\n        evening: 'Добрый вечер,',\r\n        night: 'Доброй ночи,'\r\n    }\r\n};\r\n\r\nfunction getTimeOfDay() {\r\n    const date = new Date ();\r\n    const hours  = date.getHours();\r\n    if (hours >= 6 && hours < 12) {\r\n        return \"morning\"\r\n    } else if (hours >= 12 && hours < 18) {\r\n        return \"afternoon\"\r\n    } else if (hours >= 18 && hours < 24) {\r\n        return \"evening\"\r\n    } else if (hours >= 0 && hours < 6) {\r\n        return \"night\"\r\n    };\r\n}\r\n\r\nfunction showGreeting (lang) {\r\n    const timeOfDay = getTimeOfDay();\r\n   /* const greetingText = `Good ${timeOfDay},`;*/\r\n  /*  greetings.textContent = greetingText;*/\r\n    greetings.textContent = greetingTranslation[lang][timeOfDay];\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/greetings.js?");

/***/ }),

/***/ "./src/js/modules/localStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/js/modules/weather.js\");\n/* harmony import */ var _translate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.js */ \"./src/js/modules/translate.js\");\n/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greetings.js */ \"./src/js/modules/greetings.js\");\n/* harmony import */ var _timeDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeDate.js */ \"./src/js/modules/timeDate.js\");\n/* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes.js */ \"./src/js/modules/quotes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst name = document.querySelector('.name'); \r\n;\r\n\r\nfunction setLocalStorage () {\r\n    localStorage.setItem('city', _weather_js__WEBPACK_IMPORTED_MODULE_0__.city.value);\r\n    localStorage.setItem('name', name.value);\r\n    localStorage.setItem('language', _translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent);\r\n    localStorage.setItem('placeholder', _translate_js__WEBPACK_IMPORTED_MODULE_1__.pHolder.placeholder);\r\n    localStorage.setItem('date', _timeDate_js__WEBPACK_IMPORTED_MODULE_3__.day.textContent);\r\n};\r\n\r\nfunction getLocalStorage () {\r\n    if (localStorage.getItem('language')) {\r\n        _translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent = localStorage.getItem('language') \r\n    } else {\r\n        _translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent = 'EN';\r\n    }\r\n    _greetings_js__WEBPACK_IMPORTED_MODULE_2__.showGreeting(_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent);\r\n    (0,_quotes_js__WEBPACK_IMPORTED_MODULE_4__.getQuotes)(_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent);\r\n    document.querySelector('.gr').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][1];\r\n    document.querySelector('.dt').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][2];\r\n    document.querySelector('.tm').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][3];\r\n    document.querySelector('.wr').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][4];\r\n    document.querySelector('.qu').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][5];\r\n    document.querySelector('.ap').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][6];\r\n    document.querySelector('.ph').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][7];\r\n    document.querySelector('.ln').textContent = _translate_js__WEBPACK_IMPORTED_MODULE_1__.setText[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent][8];\r\n    if (localStorage.getItem('name')) {\r\n        name.value = localStorage.getItem('name')\r\n    };\r\n    if (localStorage.getItem('city')) {\r\n        _weather_js__WEBPACK_IMPORTED_MODULE_0__.city.value = localStorage.getItem('city')\r\n    } else {\r\n        _weather_js__WEBPACK_IMPORTED_MODULE_0__.city.value = _weather_js__WEBPACK_IMPORTED_MODULE_0__.town[_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent];\r\n    };\r\n    _weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather(_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent);\r\n   \r\n\r\n    if (localStorage.getItem('placeholder')) {\r\n        _translate_js__WEBPACK_IMPORTED_MODULE_1__.pHolder.placeholder = localStorage.getItem('placeholder') \r\n    } else {\r\n        _translate_js__WEBPACK_IMPORTED_MODULE_1__.pHolder.placeholder = \"[Enter name]\";\r\n    };\r\n\r\n    if (localStorage.getItem('date')) {\r\n        _timeDate_js__WEBPACK_IMPORTED_MODULE_3__.day.textContent = localStorage.getItem('date') \r\n    } else {\r\n        _timeDate_js__WEBPACK_IMPORTED_MODULE_3__.showDate(_translate_js__WEBPACK_IMPORTED_MODULE_1__.language.textContent);\r\n    };\r\n\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/localStorage.js?");

/***/ }),

/***/ "./src/js/modules/playList.js":
/*!************************************!*\
  !*** ./src/js/modules/playList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playList\": () => (/* binding */ playList)\n/* harmony export */ });\nconst playList = [\r\n    {      \r\n        title: 'Aqua Caelestis',\r\n        src: './assets/Aqua Caelestis.mp3',\r\n        duration: '00:39'\r\n    },  \r\n    {      \r\n        title: 'Ritm Melody',\r\n        src: './assets/ritm melody.mp3',\r\n        duration: '00:34'\r\n    },\r\n    {      \r\n        title: 'River Flows In You',\r\n        src: './assets/River Flows In You.mp3',\r\n        duration: '01:37'\r\n    },\r\n    {      \r\n        title: 'Summer Wind',\r\n        src: './assets/Summer Wind.mp3',\r\n        duration: '01:50'\r\n    }\r\n    \r\n  ]\r\n  \r\n  \n\n//# sourceURL=webpack://momentum/./src/js/modules/playList.js?");

/***/ }),

/***/ "./src/js/modules/quotes.js":
/*!**********************************!*\
  !*** ./src/js/modules/quotes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enterQuotes\": () => (/* binding */ enterQuotes),\n/* harmony export */   \"getQuotes\": () => (/* binding */ getQuotes)\n/* harmony export */ });\n\r\nconst enterQuotes = document.querySelector('.change-quote');\r\nconst quotation = document.querySelector('.quote');\r\nconst author = document.querySelector('.author');\r\n\r\n\r\n\r\nasync function getQuotes(lang) {  \r\n  if (lang === 'EN') {\r\n    //let quotes = './assets/quotes/en-quotes.json'; \r\n    const res = await fetch('./assets/en-quotes.json', {\r\n      method: 'GET',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n    try {\r\n      const data = await res.json(); \r\n      let random = data[Math.floor(Math.random() * data.length)];\r\n      quotation.innerText = `“${random.text}.”`;\r\n      author.innerText = random.author;\r\n      console.log('response data?', data);\r\n    } catch(error) {\r\n      console.log('Error happened here!')\r\n      console.error(error)\r\n    };\r\n\r\n  } else {\r\n    //let quotes = './assets/quotes/Ru-quotes.json';\r\n    const res = await fetch('./assets/Ru-quotes.json', {\r\n      method: 'GET',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n    try {\r\n    const data = await res.json(); \r\n    let random = data[Math.floor(Math.random() * data.length)];\r\n    quotation.innerText = `“${random.text}.”`;\r\n    author.innerText = random.author;\r\n    console.log('response data?', data);\r\n  } catch(error) {\r\n    console.log('Error happened here!')\r\n    console.error(error)\r\n  };\r\n  };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/quotes.js?");

/***/ }),

/***/ "./src/js/modules/settings.js":
/*!************************************!*\
  !*** ./src/js/modules/settings.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blockAp\": () => (/* binding */ blockAp),\n/* harmony export */   \"blockDt\": () => (/* binding */ blockDt),\n/* harmony export */   \"blockGr\": () => (/* binding */ blockGr),\n/* harmony export */   \"blockQu\": () => (/* binding */ blockQu),\n/* harmony export */   \"blockTm\": () => (/* binding */ blockTm),\n/* harmony export */   \"blockWr\": () => (/* binding */ blockWr),\n/* harmony export */   \"settings\": () => (/* binding */ settings),\n/* harmony export */   \"settingsBlock\": () => (/* binding */ settingsBlock),\n/* harmony export */   \"switcherAp\": () => (/* binding */ switcherAp),\n/* harmony export */   \"switcherDt\": () => (/* binding */ switcherDt),\n/* harmony export */   \"switcherGr\": () => (/* binding */ switcherGr),\n/* harmony export */   \"switcherQu\": () => (/* binding */ switcherQu),\n/* harmony export */   \"switcherTm\": () => (/* binding */ switcherTm),\n/* harmony export */   \"switcherWr\": () => (/* binding */ switcherWr)\n/* harmony export */ });\nconst switcherGr = document.querySelector('.switch-btn-gr');\r\nconst blockGr =  document.querySelector('.greeting-container');\r\n\r\nconst switcherDt = document.querySelector('.switch-btn-dt');\r\nconst blockDt =  document.querySelector('.date');\r\n\r\n\r\nconst switcherTm = document.querySelector('.switch-btn-tm');\r\nconst blockTm =  document.querySelector('.time');\r\n\r\n\r\nconst switcherWr = document.querySelector('.switch-btn-wr');\r\nconst blockWr =  document.querySelector('.weather');\r\n\r\n\r\nconst switcherQu = document.querySelector('.switch-btn-qu');\r\nconst blockQu =  document.querySelector('.quotes');\r\n\r\n\r\nconst switcherAp = document.querySelector('.switch-btn-ap');\r\nconst blockAp =  document.querySelector('.player');\r\n\r\n\r\nconst settingsBlock = document.querySelector('.settings_block');\r\nconst settings = document.querySelector('.settings-icon');\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/settings.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"getSlideNext\": () => (/* binding */ getSlideNext),\n/* harmony export */   \"getSlidePrev\": () => (/* binding */ getSlidePrev),\n/* harmony export */   \"picNext\": () => (/* binding */ picNext),\n/* harmony export */   \"picPrev\": () => (/* binding */ picPrev),\n/* harmony export */   \"setBg\": () => (/* binding */ setBg)\n/* harmony export */ });\n/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greetings.js */ \"./src/js/modules/greetings.js\");\n\r\n\r\n/* Slider */\r\n\r\nconst body = document.querySelector('body');\r\nconst picNext = document.querySelector('.slide-next');\r\nconst picPrev = document.querySelector('.slide-prev');\r\nlet randomNum;\r\nlet bgNum;\r\nlet timeOfDay = _greetings_js__WEBPACK_IMPORTED_MODULE_0__.getTimeOfDay();\r\n\r\nfunction getRandomNum (min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\n \r\nfunction setBg () {\r\n    randomNum = getRandomNum(1, 20);\r\n    bgNum = String(randomNum).padStart(2, \"0\");\r\n    const img = new Image();\r\n    img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\r\n    img.onload = () => {  \r\n        body.style.backgroundImage = `url(${img.src})`;\r\n        console.log(body.style.backgroundImage);\r\n    };\r\n};\r\n\r\nfunction getSlideNext() {\r\n    if (randomNum < 20) {\r\n        randomNum = randomNum + 1;\r\n        bgNum = String(randomNum).padStart(2, \"0\");\r\n        const img = new Image();\r\n            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\r\n            img.onload = () => {  \r\n        body.style.backgroundImage = `url(${img.src})`;\r\n    };  \r\n    } else if (randomNum === 20) {\r\n        randomNum = 1;\r\n        bgNum = String(randomNum).padStart(2, \"0\");\r\n        const img = new Image();\r\n            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\r\n            img.onload = () => {  \r\n        body.style.backgroundImage = `url(${img.src})`;\r\n    };  \r\n};\r\n};\r\n\r\nfunction getSlidePrev () {\r\n    if (randomNum > 1) {\r\n        randomNum = randomNum - 1;\r\n        bgNum = String(randomNum).padStart(2, \"0\");\r\n        const img = new Image();\r\n            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\r\n            img.onload = () => {  \r\n        body.style.backgroundImage = `url(${img.src})`;\r\n    };  \r\n    } else if (randomNum === 1) {\r\n        randomNum = 20;\r\n        bgNum = String(randomNum).padStart(2, \"0\");\r\n        const img = new Image();\r\n            img.src = `https://raw.githubusercontent.com/olyafilipovich/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\r\n            img.onload = () => {  \r\n            body.style.backgroundImage = `url(${img.src})`;\r\n        };  \r\n    };\r\n};\r\n\r\n//picNext.addEventListener('click', getSlideNext);\r\n//picPrev.addEventListener('click', getSlidePrev);\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/timeDate.js":
/*!************************************!*\
  !*** ./src/js/modules/timeDate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"day\": () => (/* binding */ day),\n/* harmony export */   \"showDate\": () => (/* binding */ showDate),\n/* harmony export */   \"showTime\": () => (/* binding */ showTime)\n/* harmony export */ });\n/* time */\r\nconst time = document.querySelector('.time');\r\nconst day = document.querySelector('.date');\r\nfunction showDate (lang) {\r\n    const date = new Date ();\r\n    var options = { EN: { weekday: 'long', month: 'long', day: 'numeric'},\r\n                    RU: { weekday: 'long', day: 'numeric', month: 'long'}\r\n                };\r\n    var code = {\r\n        EN: 'en-US',\r\n        RU: 'ru-RU'\r\n    };        \r\n    const currentDate = date.toLocaleDateString(code[lang], options[lang]);\r\n    day.textContent = currentDate;\r\n}; \r\n\r\n\r\nfunction showTime () {\r\n    const date = new Date ();\r\n    const currentTime = date.toLocaleTimeString('en-GB');\r\n    time.textContent = currentTime;\r\n    setTimeout(showTime, 1000);\r\n}; \r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/timeDate.js?");

/***/ }),

/***/ "./src/js/modules/translate.js":
/*!*************************************!*\
  !*** ./src/js/modules/translate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": () => (/* binding */ changeLang),\n/* harmony export */   \"language\": () => (/* binding */ language),\n/* harmony export */   \"pHolder\": () => (/* binding */ pHolder),\n/* harmony export */   \"setText\": () => (/* binding */ setText)\n/* harmony export */ });\n/* harmony import */ var _greetings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greetings.js */ \"./src/js/modules/greetings.js\");\n/* harmony import */ var _timeDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeDate.js */ \"./src/js/modules/timeDate.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ \"./src/js/modules/weather.js\");\n/* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.js */ \"./src/js/modules/quotes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst language = document.querySelector('.language');\r\nconst pHolder = document.getElementById('enter');\r\n\r\nconst setText = {\r\n    EN: {\r\n        1: 'Greetings',\r\n        2: 'Date',\r\n        3: 'Time',\r\n        4: 'Weather',\r\n        5: 'Quotes',\r\n        6: 'Audioplayer',\r\n        7: 'Photo Source',\r\n        8: 'Language'\r\n    },\r\n    RU: {\r\n        1: 'Приветствие',\r\n        2: 'Дата',\r\n        3: 'Время',\r\n        4: 'Погода',\r\n        5: 'Цитаты',\r\n        6: 'Аудиоплеер',\r\n        7: 'Источник фото',\r\n        8: 'Язык'\r\n    }\r\n};\r\n\r\nfunction changeLang () {\r\n    if (language.textContent === \"EN\") {\r\n        language.textContent = \"RU\";\r\n        pHolder.placeholder = \"[Введите имя]\";\r\n        (0,_greetings_js__WEBPACK_IMPORTED_MODULE_0__.showGreeting)(language.textContent);\r\n        (0,_timeDate_js__WEBPACK_IMPORTED_MODULE_1__.showDate)(language.textContent);\r\n        (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(language.textContent);\r\n        (0,_quotes_js__WEBPACK_IMPORTED_MODULE_3__.getQuotes)(language.textContent);\r\n        document.querySelector('.gr').textContent = setText[language.textContent][1];\r\n        document.querySelector('.dt').textContent = setText[language.textContent][2];\r\n        document.querySelector('.tm').textContent = setText[language.textContent][3];\r\n        document.querySelector('.wr').textContent = setText[language.textContent][4];\r\n        document.querySelector('.qu').textContent = setText[language.textContent][5];\r\n        document.querySelector('.ap').textContent = setText[language.textContent][6];\r\n        document.querySelector('.ph').textContent = setText[language.textContent][7];\r\n        document.querySelector('.ln').textContent = setText[language.textContent][8];\r\n        \r\n    } else {\r\n        language.textContent = \"EN\";\r\n        pHolder.placeholder = \"[Enter name]\";\r\n        (0,_greetings_js__WEBPACK_IMPORTED_MODULE_0__.showGreeting)(language.textContent);\r\n        (0,_timeDate_js__WEBPACK_IMPORTED_MODULE_1__.showDate)(language.textContent);\r\n        (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(language.textContent);\r\n        (0,_quotes_js__WEBPACK_IMPORTED_MODULE_3__.getQuotes)(language.textContent);\r\n        document.querySelector('.gr').textContent = setText[language.textContent][1];\r\n        document.querySelector('.dt').textContent = setText[language.textContent][2];\r\n        document.querySelector('.tm').textContent = setText[language.textContent][3];\r\n        document.querySelector('.wr').textContent = setText[language.textContent][4];\r\n        document.querySelector('.qu').textContent = setText[language.textContent][5];\r\n        document.querySelector('.ap').textContent = setText[language.textContent][6];\r\n        document.querySelector('.ph').textContent = setText[language.textContent][7];\r\n        document.querySelector('.ln').textContent = setText[language.textContent][8];\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/translate.js?");

/***/ }),

/***/ "./src/js/modules/weather.js":
/*!***********************************!*\
  !*** ./src/js/modules/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"city\": () => (/* binding */ city),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather),\n/* harmony export */   \"setCity\": () => (/* binding */ setCity),\n/* harmony export */   \"town\": () => (/* binding */ town)\n/* harmony export */ });\n/* harmony import */ var _translate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate.js */ \"./src/js/modules/translate.js\");\n\r\nconst weatherIcon = document.querySelector('.weather-icon');\r\nconst temperature = document.querySelector('.temperature');\r\nconst weatherDescription = document.querySelector('.weather-description');\r\nconst wind = document.querySelector('.wind');\r\nconst humidity = document.querySelector('.humidity');\r\nconst mistake  = document.querySelector('.weather-error')\r\n\r\nconst city = document.querySelector('.city');\r\nlet url = \"\";\r\n\r\n/*function createUrl(cit, lang) {\r\n  return `https://api.openweathermap.org/data/2.5/weather?q=${cit}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`\r\n\r\n};*/\r\n\r\n\r\n\r\nasync function getWeather(lang) { \r\n  if (!city.value) {\r\n    url = `https://api.openweathermap.org/data/2.5/weather?q=${town[lang]}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`;\r\n  } else {\r\n    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=8f90f7f250967bd5775ff2177fa2d7c7&units=metric`;\r\n  };\r\n try {\r\n    let res = await fetch(url);\r\n    const descript = {\r\n      EN: {\r\n        1 : 'Wind speed',\r\n        2 : 'm/s',\r\n        3: 'Humidity'\r\n      },\r\n      RU: {\r\n        1 : 'Скорость ветра',\r\n        2 : 'м/с',\r\n        3 : 'Влажность'\r\n      }\r\n    };\r\n      let data = await res.json();\r\n      weatherIcon.className = 'weather-icon owf';\r\n      weatherIcon.classList.add(`owf-${data.weather[0].id}`);\r\n      temperature.textContent = `${Math.round(data.main.temp)}°C`;\r\n      weatherDescription.textContent = data.weather[0].description;\r\n      wind.textContent = `${descript[lang][1]}` + `: ${Math.round(data.wind.speed)}` + `${descript[lang][2]}`;\r\n      humidity.textContent = `${descript[lang][3]}` + `: ${data.main.humidity}%`;\r\n      mistake.textContent =\"\";\r\n    } catch(error)  {\r\n      console.log(error);\r\n    };\r\n  };\r\n \r\n const town  = {\r\n  EN: 'Minsk',\r\n  RU: 'Минск'\r\n };\r\n\r\nfunction setCity (event) {\r\n  if (event.code === 'Enter'){ \r\n     if (city.value === \"\") {\r\n      city.value = town[_translate_js__WEBPACK_IMPORTED_MODULE_0__.language.textContent]};\r\n      getWeather(_translate_js__WEBPACK_IMPORTED_MODULE_0__.language.textContent);\r\n    city.blur();\r\n     };\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/weather.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/favicon.ico */ \"./src/assets/favicon.ico\");\n/* harmony import */ var _css_owfont_regular_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/owfont-regular.css */ \"./src/css/owfont-regular.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _assets_sounds_Aqua_Caelestis_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/Aqua Caelestis.mp3 */ \"./src/assets/sounds/Aqua Caelestis.mp3\");\n/* harmony import */ var _assets_sounds_Ritm_Melody_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sounds/Ritm Melody.mp3 */ \"./src/assets/sounds/Ritm Melody.mp3\");\n/* harmony import */ var _assets_sounds_River_Flows_In_You_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/River Flows In You.mp3 */ \"./src/assets/sounds/River Flows In You.mp3\");\n/* harmony import */ var _assets_sounds_Summer_Wind_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/sounds/Summer Wind.mp3 */ \"./src/assets/sounds/Summer Wind.mp3\");\n/* harmony import */ var _assets_quotes_Ru_quotes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/quotes/Ru-quotes.json */ \"./src/assets/quotes/Ru-quotes.json\");\n/* harmony import */ var _assets_quotes_en_quotes_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/quotes/en-quotes.json */ \"./src/assets/quotes/en-quotes.json\");\n/* harmony import */ var _modules_playList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/playList.js */ \"./src/js/modules/playList.js\");\n/* harmony import */ var _modules_greetings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/greetings.js */ \"./src/js/modules/greetings.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/js/modules/weather.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/js/modules/localStorage.js\");\n/* harmony import */ var _modules_quotes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/quotes.js */ \"./src/js/modules/quotes.js\");\n/* harmony import */ var _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/audioplayer.js */ \"./src/js/modules/audioplayer.js\");\n/* harmony import */ var _modules_translate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/translate.js */ \"./src/js/modules/translate.js\");\n/* harmony import */ var _modules_timeDate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/timeDate.js */ \"./src/js/modules/timeDate.js\");\n/* harmony import */ var _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/settings.js */ \"./src/js/modules/settings.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_modules_timeDate_js__WEBPACK_IMPORTED_MODULE_17__.showDate(_modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.language.textContent);\r\n_modules_timeDate_js__WEBPACK_IMPORTED_MODULE_17__.showTime();\r\n\r\nwindow.addEventListener('beforeunload', _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_13__.setLocalStorage);\r\nwindow.addEventListener('load', _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_13__.getLocalStorage);\r\n\r\n\r\n\r\n_modules_slider_js__WEBPACK_IMPORTED_MODULE_11__.setBg();\r\n\r\n_modules_slider_js__WEBPACK_IMPORTED_MODULE_11__.picNext.addEventListener('click', _modules_slider_js__WEBPACK_IMPORTED_MODULE_11__.getSlideNext);\r\n_modules_slider_js__WEBPACK_IMPORTED_MODULE_11__.picPrev.addEventListener('click', _modules_slider_js__WEBPACK_IMPORTED_MODULE_11__.getSlidePrev);\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _modules_weather_js__WEBPACK_IMPORTED_MODULE_12__.getWeather(_modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.language.textContent));\r\n_modules_weather_js__WEBPACK_IMPORTED_MODULE_12__.city.addEventListener('keypress', _modules_weather_js__WEBPACK_IMPORTED_MODULE_12__.setCity);\r\n\r\ndocument.addEventListener('DOMContentLoaded', _modules_quotes_js__WEBPACK_IMPORTED_MODULE_14__.getQuotes(_modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.language.textContent));\r\n_modules_quotes_js__WEBPACK_IMPORTED_MODULE_14__.enterQuotes.addEventListener('click', () => {\r\n    _modules_quotes_js__WEBPACK_IMPORTED_MODULE_14__.getQuotes(_modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.language.textContent);\r\n    console.log('click')});\r\n\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.playButton.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.playAudio);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.nextButton.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.playNext);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.prevButton.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.playPrev);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.audio.addEventListener('ended', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.playNext);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.audio.addEventListener('timeupdate', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.progressBarUpdate);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.progressBar.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.setProgress);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.volumeBar.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.setVolume); \r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.volumeButton.addEventListener('click', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.onVolume);\r\n_modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.audio.addEventListener('loadeddata', _modules_audioplayer_js__WEBPACK_IMPORTED_MODULE_15__.load);\r\n\r\n/* settings */\r\n\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherGr.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherGr.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockGr.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherDt.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherDt.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockDt.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherTm.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherTm.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockTm.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherWr.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherWr.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockWr.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherQu.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherQu.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockQu.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherAp.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.switcherAp.classList.toggle('switch-on');\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.blockAp.classList.toggle('off');\r\n});\r\n\r\n_modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.settings.addEventListener('click', () => {\r\n    _modules_settings_js__WEBPACK_IMPORTED_MODULE_18__.settingsBlock.classList.toggle('off');\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* translate */\r\n\r\n\r\n_modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.language.addEventListener('click', _modules_translate_js__WEBPACK_IMPORTED_MODULE_16__.changeLang);\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/script.js?");

/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/favicon.ico\";\n\n//# sourceURL=webpack://momentum/./src/assets/favicon.ico?");

/***/ }),

/***/ "./src/assets/quotes/Ru-quotes.json":
/*!******************************************!*\
  !*** ./src/assets/quotes/Ru-quotes.json ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Ru-quotes.json\";\n\n//# sourceURL=webpack://momentum/./src/assets/quotes/Ru-quotes.json?");

/***/ }),

/***/ "./src/assets/quotes/en-quotes.json":
/*!******************************************!*\
  !*** ./src/assets/quotes/en-quotes.json ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/en-quotes.json\";\n\n//# sourceURL=webpack://momentum/./src/assets/quotes/en-quotes.json?");

/***/ }),

/***/ "./src/assets/sounds/Aqua Caelestis.mp3":
/*!**********************************************!*\
  !*** ./src/assets/sounds/Aqua Caelestis.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Aqua Caelestis.mp3\";\n\n//# sourceURL=webpack://momentum/./src/assets/sounds/Aqua_Caelestis.mp3?");

/***/ }),

/***/ "./src/assets/sounds/Ritm Melody.mp3":
/*!*******************************************!*\
  !*** ./src/assets/sounds/Ritm Melody.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Ritm Melody.mp3\";\n\n//# sourceURL=webpack://momentum/./src/assets/sounds/Ritm_Melody.mp3?");

/***/ }),

/***/ "./src/assets/sounds/River Flows In You.mp3":
/*!**************************************************!*\
  !*** ./src/assets/sounds/River Flows In You.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/River Flows In You.mp3\";\n\n//# sourceURL=webpack://momentum/./src/assets/sounds/River_Flows_In_You.mp3?");

/***/ }),

/***/ "./src/assets/sounds/Summer Wind.mp3":
/*!*******************************************!*\
  !*** ./src/assets/sounds/Summer Wind.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Summer Wind.mp3\";\n\n//# sourceURL=webpack://momentum/./src/assets/sounds/Summer_Wind.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;