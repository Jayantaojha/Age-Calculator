const body = document.querySelector('body');
const ageCalculator = document.querySelector('#age-calculator');
const ageComparison = document.querySelector('#age-comparison');
const nextBirthday = document.querySelector('#next-birthday');

ageCalculator.addEventListener('click', () => {
    window.location.href = 'age-cal.html';
})

ageComparison.addEventListener('click', () => {
    window.location.href = 'age-com.html';
})

nextBirthday.addEventListener('click', () => {
    window.location.href = 'next-birthday.html';
})
