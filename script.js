const body = document.querySelector('body');

// lifestyle
const mathCalculator = document.querySelector('#math-calculator');
const ageCalculator = document.querySelector('#age-calculator');
const ageComparison = document.querySelector('#age-comparison');
const nextBirthday = document.querySelector('#next-birthday');
const bmi = document.querySelector('#bmi');


mathCalculator.addEventListener('click', () => {
    window.location.href = 'https://jayantaojha.github.io/Calculator/disc/index.html';
})

ageCalculator.addEventListener('click', () => {
    window.location.href = 'age-cal.html';
})

ageComparison.addEventListener('click', () => {
    window.location.href = 'age-com.html';
})

nextBirthday.addEventListener('click', () => {
    window.location.href = 'next-birthday.html';
})

bmi.addEventListener('click', () => {
    window.location.href = 'bmi.html';
})


// finance 

const currency = document.querySelector('#currency');


currency.addEventListener('click', () => {
    window.location.href = 'https://jayantaojha.github.io/Currency-Converter/';
})
