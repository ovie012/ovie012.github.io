const input = document.querySelectorAll('.input');
const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');
const dayDate = document.querySelector('.day-dates');
const monthDate = document.querySelector('.month-dates');
const yearDate = document.querySelector('.year-dates');
const emptyDay = document.querySelector('.empty-day');
const invalidDay = document.querySelector('.invalid-day');
const emptyMonth = document.querySelector('.empty-month');
const invalidMonth = document.querySelector('.invalid-month');
const emptyYear = document.querySelector('.empty-year');
const invalidYear = document.querySelector('.invalid-year');
const displayYear = document.querySelector('.display-year');
const displayMonth = document.querySelector('.display-month');
const displayDay = document.querySelector('.display-day');
const submit = document.querySelector('.img');

function submitted() {
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };


    const day = new Date().getDate();
    // const day = 10;
    // const month = 9;
    const month = new Date().getMonth() + 1; // Months are zero-indexed, so we add 1;
    const year = new Date().getFullYear();
    // const year = 2024;
    // const leapYear = isLeapYear(year);

    // Check for inputDay
    if (inputDay.value > 31 || inputDay.value < 0) {
        invalidDay.classList.add('active');
        dayDate.classList.add('active');
        emptyDay.classList.remove('active');
    } else if (inputDay.value.trim() === "") {
        emptyDay.classList.add('active');
        dayDate.classList.add('active');
        invalidDay.classList.remove('active');
    } else {
        invalidDay.classList.remove('active');
        // dayDate.classList.remove('active');
        emptyDay.classList.remove('active');
        // displayDay.innerHTML = day - inputDay.value;
    }

    // Check for inputMonth
    if (inputMonth.value > 12 || inputMonth.value < 0) {
        invalidMonth.classList.add('active');
        monthDate.classList.add('active');
        emptyMonth.classList.remove('active');
    } else if (inputMonth.value.trim() === "") {
        emptyMonth.classList.add('active');
        monthDate.classList.add('active');
        invalidMonth.classList.remove('active');
    } else if (
        (inputMonth.value == '4' || inputMonth.value == '6' || inputMonth.value == '9' || inputMonth.value == '11') &&
        inputDay.value > 30
    ) {
        invalidDay.classList.add('active');
        dayDate.classList.add('active');
        emptyDay.classList.remove('active');
    } else if (inputMonth.value == '2' && inputDay.value > 29 && isLeapYear(inputYear.value)) {
        invalidDay.classList.add('active');
        dayDate.classList.add('active');
        emptyDay.classList.remove('active');
        return;
    } else if (inputMonth.value == '2' && inputDay.value > 28 && !isLeapYear(inputYear.value)) {
        invalidDay.classList.add('active');
        dayDate.classList.add('active');
        emptyDay.classList.remove('active');
    } else {
        invalidMonth.classList.remove('active');
        // monthDate.classList.remove('active');
        emptyMonth.classList.remove('active');
        // displayMonth.innerHTML = month - inputMonth.value;
    }

    // Check for inputYear
    if (inputYear.value > year || inputYear.value < 0) {
        invalidYear.classList.add('active');
        yearDate.classList.add('active');
        emptyYear.classList.remove('active');
    } else if (inputYear.value.trim() === "") {
        emptyYear.classList.add('active');
        yearDate.classList.add('active');
        invalidYear.classList.remove('active');
    } else {
        invalidYear.classList.remove('active');
        // yearDate.classList.remove('active');
        emptyYear.classList.remove('active');
        // displayYear.innerHTML = year - inputYear.value;
    }

    // Check if all fields are complete and valid
    if (
        inputDay.value.trim() === "" ||
        inputMonth.value.trim() === "" ||
        inputYear.value.trim() === "" ||
        inputDay.value > 31 ||
        inputDay.value < 0 ||
        inputMonth.value > 12 ||
        inputMonth.value < 1 ||
        inputYear.value < 0 ||
        (inputDay.value > 31 || inputDay.value < 0) ||
        (inputMonth.value > 12 || inputMonth.value < 0) ||
        (inputYear.value > year || inputYear.value < 0) ||
        (inputMonth.value == '2' && inputDay.value > 29 && isLeapYear(inputYear.value)) ||
        (inputMonth.value == '2' && inputDay.value > 28 && !isLeapYear(inputYear.value)) ||
        ((inputMonth.value == '4' || inputMonth.value == '6' || inputMonth.value == '9' || inputMonth.value == '11') && inputDay.value > 30)
        // inputYear.value.length !== 4
    ) {
        return;
    }

    
    dayDate.classList.remove('active');
    monthDate.classList.remove('active');
    yearDate.classList.remove('active');
    // displayMonth.innerHTML = month - inputMonth.value;
    if(inputMonth.value > month) {
        displayMonth.innerHTML = (month + 12) -  inputMonth.value - 1;
    } else {
        displayMonth.innerHTML = month - inputMonth.value;
    }
    // displayDay.innerHTML = day - inputDay.value;
    if(inputDay.value > day) {
        displayDay.innerHTML = inputDay.value - day
    } else {
        displayDay.innerHTML = day - inputDay.value;
        displayMonth.innerHTML++
    }

    displayYear.innerHTML = year - 1 - inputYear.value;
}

submit.addEventListener('click', submitted);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitted();
    };
});