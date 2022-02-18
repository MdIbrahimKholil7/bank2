
// creating function 
function getInput(inputField) {
    const input = document.getElementById(inputField);
    console.log(input)
    const newInput = parseFloat(input.value);
    input.value = '';
    return newInput;
}
// get innerText 
function getInnerText(input) {
    const innerTxt = document.getElementById(input);
    const newInnerText = parseFloat(innerTxt.innerText);
    return newInnerText;
}
// update deposite and withdraw balance 
function getBalance(input, innerValue) {
    // debugger;
    // const innerVal=document.getElementById(innerValue);
    // const newInnerVal=parseFloat(innerVal.innerText);
    const total = (getInnerText(innerValue) + input);
    return document.getElementById(innerValue).innerText = total;
}

// update total balance 
function updateBalance(input, isAdd) {
    // debugger
    console.log(getInnerText('deposite-blance'))
    // debugger
    // const total=document.getElementById('total-blance');
    // const newTotal=parseFloat(total.innerText);
    if (isAdd == false) {
        const total = (getInnerText('total-blance') - input);
        document.getElementById('total-blance').innerText = total
    } else {
        const fullTotal = (getInnerText('total-blance') + input);
        document.getElementById('total-blance').innerText = fullTotal
    }
}
// adding deposite  
document.getElementById('deposite-btn').addEventListener('click', function () {
    const input = getInput('deposite-input');
    // debugger
    if (input < 0 || isNaN(input)) {
        return alert('Please input positive value');
    } else {
        const balance = getBalance(input, 'deposite-blance');
        updateBalance(input);
    }
})
// adding withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //    debugger;
    const input = getInput('withdraw-input');
    if (isNaN(input) || (input < 0)) {
        return alert('Please enter positive number');
     } else if (((input > 0) && (input <= getInnerText('total-blance')))) {
         updateBalance(input, false);
     }
    const balance = getBalance(input, 'withdraw-blance');
   

})



