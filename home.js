// Add money button event listener

document.getElementById('add-amount-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const accountNumber = 12345678910;
        const pin = 1234;
        const amountToAdd = 1000;

        const userBank = document.getElementById('bank').value;
        const userAccountNumber = document.getElementById('account-number').value;
        const userPin = document.getElementById('pin-number-2add').value;
        const userAmountToAdd = document.getElementById('amount-number').value;

        const convertedPin = parseInt(userPin);
        const convertedAmountToAdd = parseInt(userAmountToAdd);

        if(userAccountNumber.length !== 11) {
            alert('Account number must be 11 digits long. Please try again with a valid account number.');
            return;
        }

        if(convertedPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // console.log(availableBalance);

        const updatedBalance = availableBalance + convertedAmountToAdd;
        document.getElementById('available-balance').innerText = updatedBalance;
    });

    // Toggle down menu

    document.getElementById('Add-money-Button').addEventListener('click', function() {
        document.getElementById('Cash-Out-Section').style.display = 'none';
        document.getElementById('Add-money-Section').style.display = 'block';
    });

    document.getElementById('Cash-Out-Button').addEventListener('click', function() {
        document.getElementById('Add-money-Section').style.display = 'none';
        document.getElementById('Cash-Out-Section').style.display = 'block';
    });

    // Withdraw money button event listener

    document.getElementById('withdraw-amount-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const agentNumber = 12345678910;
        const pin = 1234;
        const amountToWithdraw = 1000;

        const userAgentNumber = document.getElementById('agent-number').value;
        const userPin = document.getElementById('pin-number-4withdraw').value;
        const userAmountToWithdraw = document.getElementById('withdraw-amount').value;

        const convertedPin = parseInt(userPin);
        const convertedAmountToWithdraw = parseInt(userAmountToWithdraw);

        if(userAgentNumber.length !== 11) {
            alert('Agent number must be 11 digits long. Please try again with a valid agent number.');
            return;
        }

        if(convertedPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // console.log(availableBalance);

        const updatedBalance = availableBalance - convertedAmountToWithdraw;
        document.getElementById('available-balance').innerText = updatedBalance;
    });