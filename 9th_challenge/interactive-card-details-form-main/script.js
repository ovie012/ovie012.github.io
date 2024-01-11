const frontCardNumbers = document.querySelectorAll('.span-num');
const frontCardNumberOne = document.querySelector('.span-num-1');
const frontCardNumberTwo = document.querySelector('.span-num-2');
const frontCardNumberThree = document.querySelector('.span-num-3');
const frontCardNumberFour = document.querySelector('.span-num-4');
const frontCardNumber = document.querySelector('.num');
const frontCardName = document.querySelector('.front-card-name');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const backCardNum = document.querySelector('.back-card-num');
const inputs = document.querySelectorAll('input');
const inputCardName = document.querySelector('.card-name');
const inputCardNumber = document.querySelector('.card-number');
const inputCardMonth = document.querySelector('.card-month');
const inputCardYear = document.querySelector('.card-year');
const inputCvc = document.querySelector('.cvc-number');
const blankErrors = document.querySelectorAll('.blank-error');
const blankErrorName = document.querySelector('.blank-error-name');
const blankErrorNumber = document.querySelector('.blank-error-num');
const blankErrorDate = document.querySelector('.blank-error-date');
const blankErrorCvc = document.querySelector('.blank-error-cvc');
const wrongFormat = document.querySelectorAll('.wrong-format');
const wrongFormatName = document.querySelector('.wrong-format-name');
const wrongFormatNumber = document.querySelector('.wrong-format-num');
const smallLength = document.querySelector('.small-length');
const lengthError = document.querySelector('.length-errors');
const twelveError = document.querySelector('.twelve-error');
const yearValidation = document.querySelector('.year-validation');
const cvcLengthError = document.querySelector('.cvc-length');
const submit = document.querySelector('.submit');
const submittedCard = document.querySelector('.submitted-card');
const formCard = document.querySelector('.form-card');
const dismisser = document.querySelector('.dismisser');



function submitted () {


    function isNumberWithSpaces(input) {
        // Use a regular expression to check if the input contains only numbers and spaces
        return /^[\d\s]+$/.test(input);
    }



    if (inputCardName.value.trim() === "") {
        blankErrorName.classList.add('active');
        wrongFormatName.classList.remove('active');
        inputCardName.classList.add('active');
    } else if (!isNaN(inputCardName.value)) {
        blankErrorName.classList.remove('active');
        wrongFormatName.classList.add('active');
        inputCardName.classList.add('active');
    } else if (/^[a-zA-Z]+$/.test(inputCardName.value) || (/^[a-zA-Z\s]+$/.test(inputCardName.value))) {
        blankErrorName.classList.remove('active');
        wrongFormatName.classList.remove('active');
        inputCardName.classList.remove('active'); 
    } else {
        blankErrorName.classList.remove('active');
        wrongFormatName.classList.add('active');
        inputCardName.classList.add('active');
    }
        
    // if (inputCardNumber.value.trim() === "") {
    //     blankErrorNumber.classList.add('active');
    //     wrongFormatNumber.classList.remove('active');
    //     smallLength.classList.remove('active');
    //     inputCardNumber.classList.add('active');
    // } else if(inputCardNumber.value.length !== 19) {
    //     smallLength.classList.add('active');
    //     inputCardNumber.classList.add('active');
    //     blankErrorNumber.classList.remove('active');
    //     wrongFormatNumber.classList.remove('active');
    // } else if (isNumberWithSpaces(inputCardNumber.value)) {
    //     blankErrorNumber.classList.remove('active');
    //     wrongFormatNumber.classList.remove('active');
    //     inputCardNumber.classList.remove('active');
    //     smallLength.classList.remove('active');
    // } else if (isNaN(inputCardNumber.value)) {
    //     blankErrorNumber.classList.remove('active');
    //     smallLength.classList.remove('active');
    //     wrongFormatNumber.classList.add('active');
    //     inputCardNumber.classList.add('active');
    // }


    // Conditions for inputCardNumber
if (inputCardNumber.value.trim() === "") {
    blankErrorNumber.classList.add('active');
    wrongFormatNumber.classList.remove('active');
    smallLength.classList.remove('active');
    inputCardNumber.classList.add('active');
} else if (inputCardNumber.value.length !== 19) {
    smallLength.classList.add('active');
    inputCardNumber.classList.add('active');
    blankErrorNumber.classList.remove('active');
    wrongFormatNumber.classList.remove('active');
} else if (isNaN(inputCardNumber.value) && !isNumberWithSpaces(inputCardNumber.value)) {
    blankErrorNumber.classList.remove('active');
    smallLength.classList.remove('active');
    wrongFormatNumber.classList.add('active');
    inputCardNumber.classList.add('active');
} else {
    blankErrorNumber.classList.remove('active');
    wrongFormatNumber.classList.remove('active');
    inputCardNumber.classList.remove('active');
    smallLength.classList.remove('active');
}


    if (inputCardMonth.value.trim() === "") {
        blankErrorDate.classList.add('active');
        inputCardMonth.classList.add('active');
        twelveError.classList.remove('active');
        lengthError.classList.remove('active');
        yearValidation.classList.remove('active');
    }  else if (inputCardMonth.value.length > 2 || inputCardMonth.value.length < 2) {
        lengthError.classList.add('active');
        blankErrorDate.classList.remove('active');
        inputCardMonth.classList.add('active');
        twelveError.classList.remove('active');
        yearValidation.classList.remove('active');
    } else if (inputCardMonth.value > 12 || inputCardMonth.value < 1) {
        twelveError.classList.add('active');
        blankErrorDate.classList.remove('active');
        lengthError.classList.remove('active');
        inputCardMonth.classList.add('active');
        yearValidation.classList.remove('active');
    } else {
        twelveError.classList.remove('active');
        blankErrorDate.classList.remove('active');
        lengthError.classList.remove('active');
        inputCardMonth.classList.remove('active');
        yearValidation.classList.remove('active');
    }



    if (inputCardYear.value.trim() === "") {
        blankErrorDate.classList.add('active');
        inputCardYear.classList.add('active');
        twelveError.classList.remove('active');
        lengthError.classList.remove('active');
        yearValidation.classList.remove('active');
    }  else if (inputCardYear.value.length > 2 || inputCardYear.value.length < 2) {
        lengthError.classList.add('active');
        blankErrorDate.classList.remove('active');
        inputCardYear.classList.add('active');
        twelveError.classList.remove('active');
        yearValidation.classList.remove('active');
    } else if (inputCardYear.value > 30 || inputCardYear.value < 24) {
        twelveError.classList.remove('active');
        blankErrorDate.classList.remove('active');
        lengthError.classList.remove('active');
        inputCardYear.classList.add('active');
        yearValidation.classList.add('active');
    } else {
        // twelveError.classList.remove('active');
        // blankErrorDate.classList.remove('active');
        // lengthError.classList.remove('active');
        inputCardYear.classList.remove('active');
        yearValidation.classList.remove('active');
    }



    if (inputCvc.value.trim() === "") {
        blankErrorCvc.classList.add('active');
        inputCvc.classList.add('active');
        cvcLengthError.classList.remove("active");
    } else if(inputCvc.value.length !== 3) {
        cvcLengthError.classList.add("active");
        inputCvc.classList.add('active');
        blankErrorCvc.classList.remove('active');
    } else {
        cvcLengthError.classList.remove("active");
        inputCvc.classList.remove('active');
        blankErrorCvc.classList.remove('active');
    }



    // function formatCardNumber(value) {
    //     // Remove existing spaces and store only digits
    //     const digitsOnly = value.replace(/\s/g, '');
    
    //     // Add spaces every four characters
    //     const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ');
    
    //     return formattedValue.trim(); // Trim to remove leading/trailing spaces
    // }

    // const formattedCardNumber = formatCardNumber(inputCardNumber.value);
    if (inputCardNumber.value.trim() !== "") {
        frontCardNumber.innerHTML = inputCardNumber.value;
    };
    
    if (inputCardName.value.trim() !== "") {
        frontCardName.innerHTML = inputCardName.value;
    };

    if (inputCardMonth.value.trim() !== "") {
        month.innerHTML = inputCardMonth.value;
    };

    if (inputCardYear.value.trim() !== "") {
        year.innerHTML = inputCardYear.value;
    };

    if (inputCvc.value.trim() !== "") {
        backCardNum.innerHTML = inputCvc.value;
    };

    // if (
    //     (inputCardName.value.trim() === "") ||
    //     (!isNaN(inputCardName.value)) ||
    //     // (/^[a-zA-Z]+$/.test(inputCardName.value) || (/^[a-zA-Z\s]+$/.test(inputCardName.value))) ||
    //     (inputCardNumber.value.trim() === "") ||
    //     (inputCardNumber.value.length !== 19) ||
    //     // (isNumberWithSpaces(inputCardNumber.value)) ||
    //     (isNaN(inputCardNumber.value)) ||
    //     (inputCardMonth.value.trim() === "") ||
    //     (inputCardMonth.value.length > 2 || inputCardMonth.value.length < 2) ||
    //     (inputCardMonth.value > 12 || inputCardMonth.value < 1) ||
    //     (inputCardYear.value.trim() === "") ||
    //     (inputCardYear.value.length > 2 || inputCardYear.value.length < 2) ||
    //     (inputCardYear.value > 30 || inputCardYear.value < 24) ||
    //     (inputCvc.value.trim() === "") ||
    //     (inputCvc.value.length !== 3)
    // ) {
    //     return;
    // }
    
    // formCard.classList.add('dismiss');
    // submittedCard.classList.remove('dismiss');
    
    // console.log('worked');
    // submittedCard.classList.remove('dismiss');
    // formCard.classList.add('dismiss');

    if (
        inputCardName.value.trim() === "" ||
        !/^[a-zA-Z\s]+$/.test(inputCardName.value) ||
        inputCardNumber.value.trim() === "" ||
        inputCardNumber.value.length !== 19 ||
        (isNaN(inputCardNumber.value) && !isNumberWithSpaces(inputCardNumber.value)) ||
        inputCardMonth.value.trim() === "" ||
        inputCardMonth.value.length !== 2 ||
        inputCardMonth.value > 12 ||
        inputCardMonth.value < 1 ||
        inputCardYear.value.trim() === "" ||
        inputCardYear.value.length !== 2 ||
        inputCardYear.value > 30 ||
        inputCardYear.value < 24 ||
        inputCvc.value.trim() === "" ||
        inputCvc.value.length !== 3
    ) {
        // If any condition is true, do not execute the command
        return;
    }

    console.log('worked');
    submittedCard.classList.remove('dismiss');
    formCard.classList.add('dismiss');
    
};

    

function formatCardNumber(value) {
    // Remove existing spaces and store only digits
    const digitsOnly = value.replace(/\s/g, '');

    // Add spaces every four characters
    const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ');

    return formattedValue.trim(); // Trim to remove leading/trailing spaces
}

// Function to update frontCardNumbers live
// function updateFrontCardNumbers(value) {
//     // Assuming frontCardNumbers is an array of span elements
//     frontCardNumbers.forEach((span, index) => {
//         // Update the innerHTML of each span with four characters
//         span.innerHTML = value.substr(index * 4, 4) || '';
//     });
// }

inputCardNumber.addEventListener('input', function () {
    // Get the current value of the input
    let inputValue = this.value;

    // Get the formatted value
    const formattedCardNumber = formatCardNumber(inputCardNumber.value);

    // Update the displayed value in the input field
    inputCardNumber.value = formattedCardNumber;

    // Update the input value with the formatted value
    // this.value = formattedValue.trim();
    this.value = formattedCardNumber.trim();

    // Update frontCardNumbers live
    // updateFrontCardNumbers(formattedValue);
    // frontCardNumber.innerHTML = inputCardNumber.value
});


function dismissed () {
    submittedCard.classList.add('dismiss');
    formCard.classList.remove('dismiss');
    inputCardName.value = "";
    inputCardNumber.value = "";
    inputCardMonth.value = "";
    inputCardYear.value = "";
    inputCvc.value = "";
}

submit.addEventListener('click', submitted);
dismisser.addEventListener('click', dismissed);
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         submitted;
//     };
// });

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         dismissed();
//     };
// });
    
        // if (
        //     (inputCardName.value.trim() === "") ||
        //     (!isNaN(inputCardName.value)) ||
        //     (/^[a-zA-Z]+$/.test(inputCardName.value) || (/^[a-zA-Z\s]+$/.test(inputCardName.value))) ||
        //     (inputCardNumber.value.trim() === "") ||
        //     (inputCardNumber.value.length !== 19) ||
        //     // (isNumberWithSpaces(inputCardNumber.value)) ||
        //     (isNaN(inputCardNumber.value)) ||
        //     (inputCardMonth.value.trim() === "") ||
        //     (inputCardMonth.value.length > 2 || inputCardMonth.value.length < 2) ||
        //     (inputCardMonth.value > 12 || inputCardMonth.value < 1) ||
        //     (inputCardYear.value.trim() === "") ||
        //     (inputCardYear.value.length > 2 || inputCardYear.value.length < 2) ||
        //     (inputCardYear.value > 30 || inputCardYear.value < 24) ||
        //     (inputCvc.value.trim() === "") ||
        //     (inputCvc.value.length !== 3) ||
        //     (isNaN(inputCardNumber.value) && !isNumberWithSpaces(inputCardNumber.value))
        // ) {
        //     return;
        // }