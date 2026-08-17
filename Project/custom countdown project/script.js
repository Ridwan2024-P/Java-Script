const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const titleEl = document.getElementById('title');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const timeElements = document.querySelectorAll('.countdown li span');
const countdownButton = document.getElementById('countdown-button');
const completeEl = document.getElementById('complete');
const completeInfo = document.getElementById('complete-info');
const completeButton = document.getElementById('complete-button');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = 0;
let countdownInterval;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);


function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('Distance:', distance);

    if (distance <= 0) {
        clearInterval(countdownInterval);
        inputContainer.hidden = true;
        countdownEl.hidden = true;
        completeEl.hidden = false;
        completeInfo.textContent =
            `Countdown Finished on ${countdownDate}`;
        localStorage.removeItem('countdownTitle');
        localStorage.removeItem('countdownDate');
        localStorage.removeItem('countdownValue');
        return;
    }

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    console.log(days, hours, minutes, seconds);
    countdownElTitle.textContent = countdownTitle;
    timeElements[0].textContent = days;
    timeElements[1].textContent = hours;
    timeElements[2].textContent = minutes;
    timeElements[3].textContent = seconds;
}


function updateCountdown(e) {

    e.preventDefault();


    countdownTitle = titleEl.value.trim();

    countdownDate = dateEl.value;


    console.log('Title:', countdownTitle);

    console.log('Date:', countdownDate);



    if (!countdownTitle || !countdownDate) {

        alert('Please enter a title and select a date.');

        return;
    }


 

    countdownValue = new Date(countdownDate).getTime();

    console.log('Countdown value:', countdownValue);


    localStorage.setItem(
        'countdownTitle',
        countdownTitle
    );

    localStorage.setItem(
        'countdownDate',
        countdownDate
    );

    localStorage.setItem(
        'countdownValue',
        countdownValue
    );

    inputContainer.hidden = true;
    countdownEl.hidden = false;
    completeEl.hidden = true;

    clearInterval(countdownInterval);
    updateDOM();
    countdownInterval = setInterval(updateDOM, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    localStorage.removeItem('countdownTitle');
    localStorage.removeItem('countdownDate');
    localStorage.removeItem('countdownValue');
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    completeEl.hidden = true;
    titleEl.value = '';
    dateEl.value = '';
}


function newCountdown() {
    clearInterval(countdownInterval);
    localStorage.removeItem('countdownTitle');
    localStorage.removeItem('countdownDate');
    localStorage.removeItem('countdownValue');
    completeEl.hidden = true;
    inputContainer.hidden = false;
    titleEl.value = '';

    dateEl.value = '';
}

function restoreCountdown() {

    const savedTitle =
        localStorage.getItem('countdownTitle');
    const savedDate =
        localStorage.getItem('countdownDate');

    const savedValue =
        localStorage.getItem('countdownValue');

    if (!savedTitle || !savedDate || !savedValue) {

        inputContainer.hidden = false;
        countdownEl.hidden = true;
        completeEl.hidden = true;

        return;
    }

    countdownTitle = savedTitle;
    countdownDate = savedDate;
    countdownValue = Number(savedValue);
    console.log('Restored Title:', countdownTitle);
    console.log('Restored Date:', countdownDate);
    console.log('Restored Value:', countdownValue);
    inputContainer.hidden = true;
    countdownEl.hidden = false;
    completeEl.hidden = true;

    updateDOM();




    clearInterval(countdownInterval);

    countdownInterval = setInterval(updateDOM, 1000);
}

countdownForm.addEventListener(
    'submit',
    updateCountdown
);

countdownButton.addEventListener(
    'click',
    resetCountdown
);

completeButton.addEventListener(
    'click',
    newCountdown
);

restoreCountdown();