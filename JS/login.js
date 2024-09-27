document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phn-number').value;
        console.log(phoneNumber);
        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);

        if(phoneNumber === '017' && pinNumber === '1234'){
            console.log('youre are loged in')
            window.location.href = '/home.html'
        }
        else{
            alert('wrong phone number or pin')
        }
    })