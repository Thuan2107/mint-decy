const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
function countDate(){
    const beginDate = new Date(2022, 1, 18, 23, 14, 0, 0);
    const currentDate = new Date();

    const totalSeconds = (currentDate - beginDate)/1000;
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, minutes, seconds )
    
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


countDate();

setInterval(countDate, 1000);