const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const inputdob = document.querySelector('#input-date');
const calculateBtn = document.querySelector('#calculate-btn');
const result = document.querySelector('#result');
const h3 = document.querySelector('#ddmmyy h3');
const p = document.querySelector('#ddmmyy p');
const ageMessage = document.querySelector('#age-message');
const pText = document.querySelector('#next-birth-text');
const pData = document.querySelector('#next-birth-data');
const ddmmyy = document.querySelector('#ddmmyy');


h1.addEventListener('click', () => {
    window.location.href = 'index.html';
});

calculateBtn.addEventListener('click', () => {
    const dobValue = inputdob.value;

    if (dobValue !== "") {
        const dob = new Date(dobValue);
        const today = new Date();

        if (dob > today) {
            pText.innerText = "You are not born yet !!!";
            pText.style.textAlign = "center";
            pText.style.marginLeft = "21%";
            pData.style.display = "none";
            ddmmyy.style.opacity = "0";
            result.classList.remove('hidden');
            result.style.background = 'linear-gradient(to right, #FFB6C1, #FF69B4)';
            result.style.height = "30px";
        }
        else {
            function calculateNextBirthday() {
                const birthYear = dob.getFullYear();
                const birthMonth = dob.getMonth();
                const birthDay = dob.getDate();

                const currentYear = today.getFullYear();
                const currentMonth = today.getMonth();
                const currentDay = today.getDate();

                let nextBirthday = new Date(currentYear, birthMonth, birthDay);

                // check if the birthday has already occurred this year
                if (today > nextBirthday) {
                    nextBirthday.setFullYear(currentYear + 1);
                }

                // calculate the days until the next birthday
                const daysUntilBirthday = Math.ceil((nextBirthday - today) / (24 * 60 * 60 * 1000));


                let leftMonths = birthMonth - currentMonth;

                // calculation the months and days left
                if(leftMonths < 0){
                    leftMonths += 12;
                }

                let leftDays = currentDay - birthDay;
                if (leftDays < 0) {
                    const lastMonthDate = new Date(currentYear, currentMonth, 0).getDate();
                    leftDays = leftDays + lastMonthDate;
                    leftMonths--;
                }

                return {
                    nextBirthday: nextBirthday,
                    daysUntilBirthday: daysUntilBirthday,
                    leftMonths: leftMonths,
                    leftDays: leftDays,
                };
            }

            // Display the result

            pData.style.color = "#333333";
            pData.style.paddingLeft = "30px";

            const birthdayDetails = calculateNextBirthday();

            if (birthdayDetails.daysUntilBirthday !== -1) {
                pText.innerText = `Next Birthday:`;
                pData.innerText = birthdayDetails.nextBirthday.toDateString();

                pText.style.textAlign = "start";
                ddmmyy.style.opacity = "1";

                p.innerText = `Days Until Next Birthday: `;
                h3.innerText = `${birthdayDetails.leftMonths} Months ${birthdayDetails.leftDays} Days`;
                h3.style.color = "#333333";

                result.classList.remove('hidden');
                pText.style.marginLeft = "0px";
                ddmmyy.style.opacity = "1";
                pData.style.display = "inline";
                
                result.style.background = 'linear-gradient(to right, #36D1DC, #5B86E5)';

                // checking for larger screens
                if (screen.width < 600) {
                    result.style.height = "15vh";
                } else {
                    ageMessage.style.fontSize = "18px";
                    ageMessage.style.paddingLeft = "4px";
                    result.style.height = "25vh";
                    result.style.paddingTop = "35px";
                }
            } else {
                ageMessage.innerText = "You are not born yet !!!";
                ageMessage.style.textAlign = "center";
                ddmmyy.style.opacity = "0";
                result.classList.remove('hidden');
                result.style.background = 'linear-gradient(to right, #FFB6C1, #FF69B4)';
                result.style.height = "30px";
            }
        }
    }
});
