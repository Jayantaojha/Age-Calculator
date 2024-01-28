const body = document.querySelector('body');
const principal = document.querySelector('#input-value');
const interest = document.querySelector('#interest');
let tenure = document.querySelector('#tenure');
const button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    principal.value = "";
    interest.value = "";
    tenure.value = "";
})


button.addEventListener('click', () => {
    let amount = parseInt(principal.value);
    let rate = parseInt(interest.value);
    let time = parseInt(tenure.value);

    if (isNaN(tenure.value)) {
        tenure.value = 1;
    }

    if (isNaN(amount) || isNaN(rate)) {
        return;
    }

    const {finalPrice, I} = calculateLoan(amount, rate, time);

    const finalDiv = document.createElement('div');
    finalDiv.id = 'test-div';

    finalDiv.innerHTML = `
    <i class="fa-solid fa-xmark" style="cursor: pointer; font-size: 25px;"></i>

    <div id="output-div">
        <p>Total payment</p>
        <h2>${finalPrice}</h2>

        <div id="output-bar"></div>

        <div id="division">

            <div id="principal-division" >
                <div class="both-division">
                    <i class="fa-solid fa-circle" style="color: #44BBA4;"></i>
                    <p style="font-size: 12px;">Total principal</p>
                </div>

                <h2>${amount}</h2>
            </div>

            <div id="interest-division">
                <div class="both-division">
                    <p style="font-size: 12px;">Total interest</p>
                    <i class="fa-solid fa-circle" style="color: #ff5d00;"></i>
                </div>
                <h2>${I}</h2>
            </div>


        </div>
    </div>
    `;

    body.appendChild(finalDiv);

    const xIcon = document.querySelector('.fa-xmark');
    xIcon.addEventListener('click', () => {
        body.removeChild(finalDiv);

    })
})

function calculateLoan(amount, rate, time) {
    const I = (amount * rate * time) / 100;
    const finalPrice = amount + I;
    return {finalPrice, I};
}