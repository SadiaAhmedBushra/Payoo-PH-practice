// Log In Button Functionality

document.getElementById('logInButton').
    addEventListener('click', function(e) {
        e.preventDefault();
        const mobileNumber = 1234567891011;
        const pin = 1234;

        const userMobileNumber = document.getElementById('mobile-number').value;
        const userPin = document.getElementById('pin-number').value;

        const convertedMobileNumber = parseInt(userMobileNumber);
        const convertedPin = parseInt(userPin);

        if(convertedMobileNumber === mobileNumber && convertedPin === pin) {
            window.location.href = 'home.html';
        } else {
            alert('Invalid Mobile Number or Pin. Please try again.');
        }
    
});