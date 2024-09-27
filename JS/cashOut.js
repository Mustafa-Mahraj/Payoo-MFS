document.getElementById('cash-out')
    .addEventListener('click', function (event){
        event.preventDefault();

        const cashOutAmount = getInputFieldValueById('cash-out-amount');
        const pinNumber = getInputFieldValueById('cash-out-pin');
        if(pinNumber === 1234){
            const currentBalance = getTextFieldById('current-amount');
            const newBalance = currentBalance - cashOutAmount;
            document.getElementById('current-amount').innerText = newBalance;           
        }
        else{
            console.log('wrong pin number, try again');
            
        }
        
    })

document.getElementById('show-cash-out')
    .addEventListener('click', function(){
        toggleButtonById('cash-out-form', 'add-money-form');
    })