
// get input value 
function getInputValue(input){
    const inputValue=document.getElementById(input);
    const newInputValue=parseFloat(inputValue.value);
    inputValue.value='';
    return newInputValue;
}

// add input value 
function addValue(total,valueInput){
    const totalValue=document.getElementById(total);
    const newTotalValue=parseFloat(totalValue.innerText);
    return totalValue.innerText=newTotalValue+valueInput;
}

// get total balance 
function getTotal(){
    const totalBlance=document.getElementById('total-blance');
    const newTotalBalance=parseFloat(totalBlance.innerText);
    return newTotalBalance
}


// adding total balance 
function addTotalBalance(inputValue,isAdd){
    const totalBlance=document.getElementById('total-blance');
    const totalBalanceUpdate=getTotal()
    if(isAdd){
        return totalBlance.innerText=totalBalanceUpdate + inputValue;
    }
   else{
    return totalBlance.innerText=totalBalanceUpdate - inputValue;
   }
}
// adding deposite balance 
document.getElementById('deposite-btn').addEventListener('click',function(){
    const valueInput=getInputValue('deposite-input');
    if(valueInput > 0){
        addValue('deposite-blance',valueInput);
        addTotalBalance(valueInput,true);
        console.log(valueInput);
    }
    else{
        return alert("you cant add negative value");
    }
})
// adding withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    debugger;
    const valueInput=getInputValue('withdraw-input');
    const fullTotal=parseFloat(valueInput.innerText);
    if(valueInput > 0 && valueInput < fullTotal){
        addValue('withdraw-blance',valueInput);
        addTotalBalance(valueInput,false);
    }
    else{
       return alert('you cant withdraw more than that you have');
    }
    console.log(valueInput)
})