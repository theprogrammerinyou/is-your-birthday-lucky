const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const output = document.querySelector('#output');

const calculateSum = (db) => {
    db = db.replaceAll('-', ' ');
    let sum = 0;
    for (let index = 0; index < db.length; index++) {
        sum = sum + Number(db[index]);
    }
    return sum;
}

const compareValues = (sumOfNumbers,luckyNumber) => {
    if (sumOfNumbers % luckyNumber === 0) {
        output.innerHTML = 'You are lucky enough, but do work hard to achieve your dreams!';
    } else {
        output.innerHTML = 'You are not lucky enough, try to work hard to achieve your dreams.';
    }
}

const checkBirthDateLucky = () => {
    const dob = dateOfBirth.value;
    const luckyNumberValue = luckyNumber.value;
    const sum = calculateSum(dob);
    if (sum && luckyNumberValue) compareValues(sum, luckyNumberValue);
    else "Please enter a valid date of birth and lucky number."
    
}

checkButton.addEventListener('click', checkBirthDateLucky);