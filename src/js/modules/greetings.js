/* Greetings */


const greetings = document.querySelector('.greeting');
const greetingTranslation = {
    EN: {
        morning: 'Good morning,',
        afternoon: 'Good afternoon,',
        evening: 'Good evening,',
        night: 'Good night,'
    },
    RU: {
        morning: 'Доброе утро,',
        afternoon: 'Добрый день,',
        evening: 'Добрый вечер,',
        night: 'Доброй ночи,'
    }
};

function getTimeOfDay() {
    const date = new Date ();
    const hours  = date.getHours();
    if (hours >= 6 && hours < 12) {
        return "morning"
    } else if (hours >= 12 && hours < 18) {
        return "afternoon"
    } else if (hours >= 18 && hours < 24) {
        return "evening"
    } else if (hours >= 0 && hours < 6) {
        return "night"
    };
}

function showGreeting (lang) {
    const timeOfDay = getTimeOfDay();
   /* const greetingText = `Good ${timeOfDay},`;*/
  /*  greetings.textContent = greetingText;*/
    greetings.textContent = greetingTranslation[lang][timeOfDay];
};





export {showGreeting, getTimeOfDay, greetingTranslation};