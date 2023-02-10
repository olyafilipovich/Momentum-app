/* time */
const time = document.querySelector('.time');
const day = document.querySelector('.date');
function showDate (lang) {
    const date = new Date ();
    var options = { EN: { weekday: 'long', month: 'long', day: 'numeric'},
                    RU: { weekday: 'long', day: 'numeric', month: 'long'}
                };
    var code = {
        EN: 'en-US',
        RU: 'ru-RU'
    };        
    const currentDate = date.toLocaleDateString(code[lang], options[lang]);
    day.textContent = currentDate;
}; 


function showTime () {
    const date = new Date ();
    const currentTime = date.toLocaleTimeString('en-GB');
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}; 

export { showDate, showTime, day }