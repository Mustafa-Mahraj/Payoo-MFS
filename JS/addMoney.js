// console.log('add money file loaded');


document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('add money button clicked');
    

    // const addAmount = getInputFieldValueById();
    // console.log('add money value:', addAmount);

    const addAmount = getInputFieldValueById('add-amount');    
    const pinNumber = getInputFieldValueById('pin-number');
    if(pinNumber === 1234){
        const currentBalance = getTextFieldById('current-amount');
        const newBalance = currentBalance + addAmount;
        document.getElementById('current-amount').innerText = newBalance;

        const p = document.createElement('p')
        p.innerText = `New Added Amount: ${addAmount} TK. & New Balance in your acoount is: ${newBalance} TK`
        document.getElementById('history-container').appendChild(p);
    }
    else{
        alert('wrong pin number, try again')
    }   
})



// document.getElementById('show-add-money')
//     .addEventListener('click', function(){
//         document.getElementById('add-money-form').classList.remove('hidden');
//         document.getElementById('cash-out-form').classList.add('hidden');
//     })