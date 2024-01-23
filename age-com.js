const body = document.querySelector('body');

const inputdob1 = document.querySelector('#input-date1');
const inputdob2 = document.querySelector('#input-date2');

const calculateBtn = document.querySelector('#calculate-btn');

const result = document.querySelector('#result');

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');


h1.addEventListener('click', () => {
    window.location.href = 'index.html';
})


calculateBtn.addEventListener('click', () => {
    const dobValue1 = inputdob1.value;
    const dobValue2 = inputdob2.value;

    if (dobValue1 !== "" && dobValue2 !== "") {
        const dob1 = new Date(dobValue1);
        const dob2 = new Date(dobValue2);

        function calculateAge() {

            const birthYear = dob1.getFullYear();
            const birthMonth = dob1.getMonth();
            const birthDay = dob1.getDate();

            const currentYear = dob2.getFullYear();
            const currentMonth = dob2.getMonth();
            const currentDay = dob2.getDate();

            let ageYears = currentYear - birthYear;

            // check for years
            if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
                ageYears--;
            }

            // check for months
            let ageMonths = currentMonth - birthMonth;
            if (ageMonths < 0) {
                ageMonths = ageMonths + 12;
            }

            // check for days
            let ageDays = currentDay - birthDay;
            if (ageDays < 0) {
                const lastMonthDate = new Date(currentYear, currentMonth, 0).getDate();
                ageDays = ageDays + lastMonthDate;
                ageMonths--;
            }

            return {
                finalYears: ageYears,
                finalMonths: ageMonths,
                finalDays: ageDays
            }

        }


        // Display the result
        const ageMessage = document.querySelector('#age-Message');
        const ddmmyy = document.querySelector('#ddmmyy');
        const years = document.querySelector('#years');
        const months = document.querySelector('#months');
        const days = document.querySelector('#days');

        const ageDetails = calculateAge(); // returns an object - years, months, days

        if (ageDetails.finalDays !== -1 && ageDetails.finalMonths !== -1) 
        {
            ageMessage.innerText = "Age Difference";
            ageMessage.style.textAlign = "start";
            ddmmyy.style.opacity = "1";

            years.innerText = ageDetails.finalYears;
            months.innerText = ageDetails.finalMonths;
            days.innerText = ageDetails.finalDays;

            result.classList.remove('hidden');
            result.style.background = 'linear-gradient(to right, #36D1DC, #5B86E5)';

            // checking for larger screens
            if (screen.width < 600) {
                result.style.height = "15vh";
            }
            else {
                ageMessage.style.fontSize = "18px";
                ageMessage.style.paddingLeft = "4px";
                result.style.height = "25vh";
                result.style.paddingTop = "35px";
            }
        }
        else {
            ageMessage.innerText = "You are not born yet !!!";
            ageMessage.style.textAlign = "center";
            ddmmyy.style.opacity = "0";
            result.classList.remove('hidden');
            result.style.background = 'linear-gradient(to right, #FFB6C1, #FF69B4)';
            result.style.height = "30px";
        }
    }
});
