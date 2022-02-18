/* 
// adding deposit 

function getInputValue(input){
    const inputValue=document.getElementById(input);
    const newInput=parseFloat(inputValue.value);
    inputValue.value='';
    return newInput;
}
// adding deposite value 
function addingValue(getTotal,getInputValue){
    const getValue=document.getElementById(getTotal);
    const newValue=parseFloat(getValue.innerText);
    // const total=newValue + getInputValue;
    getValue.innerText=newValue + getInputValue
    return newValue; 
}
// update total balance 
function getTotalBalance(inpValue,isAdd){
    debugger;
    const total=document.getElementById('total-blance');
    const newTotal=parseFloat(total.innerText);
    if(isAdd == true){
        return total.innerText=newTotal + inpValue;
    }
    else{
        return total.innerText=newTotal - inpValue;
    }
}

// update deposite value 
document.getElementById('deposite-btn').addEventListener('click',function(){
    const getInput=getInputValue('deposite-input');
    const updateValue=addingValue('deposite-blance',getInput);
    const updateTotalBlance=getTotalBalance(getInput,true);
})
// update withdraw value 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getInput=getInputValue('withdraw-input');
    const updateValue=addingValue('withdraw-blance',getInput);
    const updateTotalBlance=getTotalBalance(getInput,false);
})

 */

// get value 
function getValue(input){
    const inputValue=document.getElementById(input);
    const newInputValue=parseFloat(inputValue.value);
    inputValue.value='';
    return newInputValue;
}
// update deposite balance 
function updateBlance(balance,value){
    const getBalance=document.getElementById(balance);
    const newGetBalance=parseFloat(getBalance.innerText);
    return getBalance.innerText=newGetBalance + value;
}
// update total balance 
function updateTotalBalance(value,isAdd){
    const total=document.getElementById('total-blance');
    const newTotal=parseFloat(total.innerText);
    if(isAdd == true){ 
        return total.innerText=newTotal + value;
    }
    else {
        return total.innerText=newTotal - value;
    }
}
// update deposite balance 
document.getElementById('deposite-btn').addEventListener('click',function(){
    const getInput=getValue('deposite-input');
    const update=updateBlance('deposite-blance',getInput);
    updateTotalBalance(getInput,true)
})

// update withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getInput=getValue('withdraw-input');
    const update=updateBlance('withdraw-blance',getInput);
    updateTotalBalance(getInput,false)
    
})






