const body = document.querySelector('body');
const inputdob = document.querySelector('#input-date');
const calculateBtn = document.querySelector('#calculate-btn');
const result = document.querySelector('#result');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');


h1.addEventListener('click', () => {
    window.location.href = 'index.html';
})


calculateBtn.addEventListener('click', () => {
    const dobValue = inputdob.value;

    if (dobValue !== "") {
        const dob = new Date(dobValue);
        const today = new Date();

        const calculatedAge = calculateAge(dob, today);


        function calculateAge() {
            const birthYear = dob.getFullYear();
            const currentYear = today.getFullYear();
            const age = currentYear - birthYear;

            // Check if the birthday has occurred this year
            if (
                today.getMonth() < dob.getMonth() ||
                (today.getMonth() === dob.getMonth() &&
                    today.getDate() < dob.getDate())
            ) {
                return age - 1; // Subtract 1 if the birthday hasn't occurred yet
            }

            return age;
        }


        // Display the result
        if (calculateAge() !== -1) {
            p.innerText = "Your Age: ";
            h2.innerText = calculateAge();
            result.classList.remove('hidden');
            result.style.background = 'linear-gradient(to right, #36D1DC, #5B86E5)';
            result.style.height = "15vh";
        }
        else if(calculateAge() === -1){
            p.innerText = "You are not born yet !!!";
            h2.innerText = "";
            result.classList.remove('hidden');
            result.style.background = 'linear-gradient(to right, #FFB6C1, #FF69B4)';
            result.style.height = "30px";
        }
    }
});
