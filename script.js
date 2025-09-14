// Reusable Function for getting input values
function getInputValueNumber(inputId) {
    const inputValue = document.getElementById(inputId).value;
    const convertedInput = parseFloat(inputValue);

    return convertedInput;
};

// Log In Button Functionality

document.getElementById('logInButton').
    addEventListener('click', function(e) {
        e.preventDefault();
        const mobileNumber = 1234567891011;
        const pin = 1234;

        const userMobileNumber = getInputValueNumber('mobile-number');
        const userPin = getInputValueNumber('pin-number');

        if(userMobileNumber === mobileNumber && userPin === pin) {
            window.location.href = 'home.html';
        } else {
            alert('Invalid Mobile Number or Pin. Please try again.');
        }
    
});