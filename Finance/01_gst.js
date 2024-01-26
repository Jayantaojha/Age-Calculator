const body = document.querySelector('body');
const amount = document.querySelector('#input-value');
const gstSelect = document.querySelector('#gst');
const button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    amount.value = "";
})

let gstRate = 18; // Default GST rate

gstSelect.addEventListener('change', () => {
    gstRate = parseInt(gstSelect.value);
})

button.addEventListener('click', () => {
    let principal = parseInt(amount.value);

    if (isNaN(principal)) {
        return;
    }

    const finalAmount = calculateGST(principal, gstRate);

    const div = document.createElement('div');
    div.innerHTML = `
        <i class="fa-solid fa-xmark" style="cursor: pointer; font-size: 25px;"></i>

        <div id="result-div">
            <p>Final Price</p>
            <p id="result-message">${finalAmount}</p>
        </div>

        <div id="information-div">
            <p id="information">CGST/SGST: ${gstRate / 2}</p>
        </div>
    `;

    if (screen.width > 600) {
        div.style.position = 'absolute';
        div.style.top = "9vh";
        div.style.backgroundColor = '#38444f';
        div.style.color = '#ecf0f1';
        div.style.width = "50vw";
        div.style.height = "70vh";
        div.style.borderRadius = "12px";
        div.style.padding = "10px 20px";
    }
    else {
        div.style.position = 'absolute';
        div.style.top = "3vh";
        div.style.backgroundColor = '#38444f';
        div.style.color = '#ecf0f1';
        div.style.width = "78vw";
        div.style.height = "80vh";
        div.style.borderRadius = "12px";
        div.style.padding = "10px 20px";
    }

    body.appendChild(div);

    const xIcon = document.querySelector('.fa-xmark');
    xIcon.addEventListener('click', () => {
        body.removeChild(div);
    })
})

function calculateGST(principal, rate) {
    const gstAmount = principal * rate / 100;
    const finalPrice = principal + gstAmount;
    return finalPrice;
}
