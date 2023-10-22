let display = document.getElementById('display_time');
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = false;
let intervalId;

function stopwatcher() {
    if (timer) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        const sec = seconds < 10 ? '0' + seconds : seconds;
        const min = minutes < 10 ? '0' + minutes : minutes;
        const hr = hours < 10 ? '0' + hours : hours;

        display.innerHTML = `${hr}:${min}:${sec}`;
    }
}

function startwatch() {
    timer = true;
    intervalId = setInterval(stopwatcher, 1000);
    document.querySelector('.startw').disabled = true;
    document.querySelector('.stopw').disabled = false;
}

function stopwatch() {
    timer = !timer;
    if (timer) {
        document.querySelector('.stopw').innerText = 'Pause';
    } else {
        document.querySelector('.stopw').innerText = 'Resume';
    }
}

function resetwatch() {
    timer = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(intervalId);
    document.querySelector('.stopw').innerText = 'Pause';
    document.querySelector('.startw').disabled = false;
    document.querySelector('.stopw').disabled = true;
    display.innerHTML = '00:00:00';
}