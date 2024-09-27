// console.log('utilities file loaded');


// function getInputFieldValueById(){
//     console.log('we will get the value by Id');

//     const addAmount = document.getElementById('add-amount').value;
//     const addAmountNumber = parseFloat(addAmount)
//     return addAmountNumber;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldById(id){
    const textFieldValue = document.getElementById(id).innerText;
    const textFieldValueNumber = parseFloat(textFieldValue);
    return textFieldValueNumber;
}

function showSectionById (id){
    // first step hide all section
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')
    // second step only show the called id section
    document.getElementById(id).classList.remove('hidden');
}