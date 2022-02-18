


// add total input value 
function addTotalInput(inputValue){
    const input=document.getElementById(inputValue);
    const newInput=parseFloat(input.value);
    input.value=''
    return newInput;
}

// add value total 
// function addTotalValue(val){
//     const depositeBlance=document.getElementById(val);
//     const newDepositeBlance=parseFloat(depositeBlance.innerText);
//     depositeBlance.innerText=totalDeposite;
// }

// add deposite balance 
document.getElementById('deposite-btn').addEventListener('click',function(){
    
    const total=addTotalInput('deposite-input');
    // total deposite 
    const depositeBlance=document.getElementById('deposite-blance');
    const newDepositeBlance=parseFloat(depositeBlance.innerText);
    
    const totalDeposite=(total + newDepositeBlance);
    depositeBlance.innerText=totalDeposite;
    // const newDepositeBlance=addTotalValue('deposite-blance')
    
    //  addidng total balance 
    const totalBlance=document.getElementById('total-blance');
    const newTotalBlance=parseFloat(totalBlance.innerText);
    totalBlance.innerText=(newTotalBlance+total);
    
})

// adding withdraw 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // const withdrawInput=document.getElementById('withdraw-input');
    // const newWithdrawInput=parseFloat(withdrawInput.value);
    const total=addTotalInput('withdraw-input')
    const withdrawBlance=document.getElementById('withdraw-blance');
    const newWithdrawBlance=parseFloat(withdrawBlance.innerText);
    const totalWithDraw=(total + newWithdrawBlance);
    withdrawBlance.innerText=totalWithDraw;
    //  addidng total balance 
    const totalBlance=document.getElementById('total-blance');
    const newTotalBlance=parseFloat(totalBlance.innerText);
    totalBlance.innerText=(newTotalBlance-total);
    
})









