// accessing elements

const body = document.querySelector('body');
const male = document.querySelector('#male-img')
const female = document.querySelector('#female-img')
const bothGenders = Array.from(document.querySelectorAll('.img-div'));
let age = document.querySelector('#age-select input');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
const button = document.querySelector('button');
let result;

// person details to calculate BMI
let personDetails = {
    sex: undefined,
    currentAge: undefined,
    currentHeight: undefined,
    currentWeight: undefined
}

// for gender selection

bothGenders.forEach((gender) => {
    gender.addEventListener('click', () => {
        if (gender.id === "male-img") {
            male.style.background = 'linear-gradient(to right, #94fae6, #abeda6)';
            male.style.color = '#202020';
            female.style.background = "#202020";
            female.style.color = "#fff";

            personDetails.sex = 'male';
        }
        else {
            female.style.background = 'linear-gradient(to right, #94fae6, #abeda6)';
            female.style.color = '#202020';
            male.style.background = "#202020";
            male.style.color = "#fff";

            personDetails.sex = 'female';

        }

    })
})

// for age selection
age.addEventListener('input', () => {
    if (age.value >= 0 && age.value < 140) {
        personDetails.currentAge = age.value;
    }
});

// for height 
height.addEventListener('input', () => {
    if (height.value >= 0 && height.value < 600) {
        personDetails.currentHeight = height.value * 0.01; // Convert centimeters to meters
    }
});

// for weight 
weight.addEventListener('input', () => {
    if (weight.value >= 0 && weight.value < 600) {
        personDetails.currentWeight = weight.value;
    }
});

// function to calculate BMI
function calculateBMI() {
    if (parseFloat(personDetails.currentHeight) === 0) { // Use parseFloat for decimal values
        alert('Height must be greater than zero for BMI calculation.');
        return;
    }

    result = parseFloat(personDetails.currentWeight) / (parseFloat(personDetails.currentHeight) * parseFloat(personDetails.currentHeight));
    return result.toFixed(2); // Round to 2 decimal places
}

button.addEventListener('click', () => {
    if (personDetails.sex === undefined || personDetails.currentAge === undefined || personDetails.currentHeight === undefined || personDetails.currentWeight === undefined) {
        alert('Provide All The Required Details!');
    } else {

        const div = document.createElement('div');
        div.style.position = "absolute";
        div.style.width = "84vw";
        div.style.height = "84vh";
        div.style.zIndex = "10";
        div.style.marginLeft = "8vw";
        div.style.top = "4vh";
        div.style.borderRadius = "12px";
        div.style.color = 'white';
        div.style.background = 'linear-gradient(to bottom right, #323232 50%, #363636 50%)';
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.rowGap = "30px";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif';

        div.innerHTML = `<p style="color: #cacaca">Your BMI</p> 
                <h1 style="font-size: 65px">${calculateBMI()}</h1> 
                <p style="color: #53f0ce; font-size: 18px; font-weight: 500">You Have Normal Body Weight !</p>
                <button class="btn">Back</button>
                `;

        body.appendChild(div);

        const resultBtn = document.querySelector('.btn');
        resultBtn.addEventListener('click', () => {
            body.removeChild(div);
        })

    }
});

