const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function (){
    if(myCheckBox.checked){
        subResult.textContent = `You're subscribed`;

    }else{
        subResult.textContent =`You're not subscribed `;
    }

    if(visaBtn.checked){
        paymentResult.textContent=`You're paying with visa`;

    }else if(masterCardBtn.checked){
        paymentResult.textContent=`You're paying with Mastercard`;
    }else if(payPalBtn.checked){
        paymentResult.textContent=`You're paying with PayPal`;
    }else {
        paymentResult.textContent=`You must select a payment type`;
    }
}

