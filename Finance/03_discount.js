const body = document.querySelector('body');
const price = document.querySelector('#price-value');
const discount = document.querySelector('#discount-value');
const button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    price.value = "";
    discount.value = "";
})


button.addEventListener('click', () => {
    let amount = parseInt(price.value);
    let rate = parseInt(discount.value);

    if (isNaN(amount) || isNaN(rate)) {
        return;
    }

    if(rate > 100 || rate < 0){
        return;
    }

    const finalPrice = calculateDiscount(amount, rate);

    const finalDiv = document.createElement('div');
    finalDiv.id = 'test-div';

    finalDiv.innerHTML = `
    <i class="fa-solid fa-xmark" style="cursor: pointer; font-size: 25px;"></i>

    <div id="output-div">
        <p>Final Price</p>
        <h2>${finalPrice}</h2>
    </div>
    `;

    body.appendChild(finalDiv);

    const xIcon = document.querySelector('.fa-xmark');

    xIcon.addEventListener('click', () => {
        body.removeChild(finalDiv);
    })
})

function calculateDiscount(amount, rate) {
    const finalPrice = amount * (100 - rate) / 100;
    return finalPrice;
}