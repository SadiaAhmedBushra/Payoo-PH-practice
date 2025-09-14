
const pin = 1234;
const transactionData=[];









// Reusable Function for getting input values in number format
function getInputValueNumber(inputId) {
    const inputValue = document.getElementById(inputId).value;
    const convertedInput = parseFloat(inputValue);

    return convertedInput;
};

// Reusable Function for getting input values only
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId).value;

    return inputValue;
};

// Reusable Function for getting innertext values in number format
function getInnerTextNumber(inputId) {
    const innerText = document.getElementById(inputId).innerText;
    const convertedInnerText = parseFloat(innerText);

    return convertedInnerText;
};

// Reusable Function for getting innertext values only
function getInnerText(inputId) {
    const innerText = document.getElementById(inputId).innerText;

    return innerText;
};

// Reusable Function for setting innertext values
function setInnerText(inputId, value) {
    document.getElementById(inputId).innerText = value;
}

// Reusable Function for toggling display property
function handleToggleDisplay(showId) {
    const forms = document.getElementsByClassName('form');
    for(const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(showId).style.display = 'block';
}

// Reusable Function for toggle active buttons
function handleToggleActiveButton(activeButtonId) {
    const allCardButtons = document.getElementsByClassName('card-button');
    for (const cardButton of allCardButtons) {
        cardButton.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        cardButton.classList.add('border-gray-300');
}

document.getElementById(activeButtonId).classList.remove('border-gray-300');
document.getElementById(activeButtonId).classList.add('border-blue-500', 'bg-[#0874f20d]');
};

// Add money button event listener

document.getElementById('add-amount-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const accountNumber = 12345678910;

        const userBank = getInputValue('bank');
        const userAccountNumber = getInputValue('account-number');
        
        const userPin = getInputValueNumber('pin-number-2add');
        const userAmountToAdd = getInputValueNumber('amount-number');

        if(userAccountNumber.length !== 11) {
            alert('Account number must be 11 digits long. Please try again with a valid account number.');
            return;
        }

        if(userPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = getInnerTextNumber('available-balance');

        // console.log(availableBalance);

        const updatedBalance = availableBalance + userAmountToAdd;
        setInnerText('available-balance', updatedBalance);

        const data = {
            name:"Add Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    });


    // Withdraw money button event listener

    document.getElementById('withdraw-amount-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const agentNumber = 12345678910;

        const userAgentNumber = getInputValue('agent-number');

        const userPin = getInputValueNumber('pin-number-4withdraw');
        const userAmountToWithdraw = getInputValueNumber('withdraw-amount');


        if(userAgentNumber.length !== 11) {
            alert('Agent number must be 11 digits long. Please try again with a valid agent number.');
            return;
        }

        if(userPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = getInnerTextNumber('available-balance');

        // console.log(availableBalance);

        const updatedBalance = availableBalance - userAmountToWithdraw;
        setInnerText('available-balance', updatedBalance);

        const data = {
            name:"Withdraw Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    });

    // transfer money button event listener

    document.getElementById('send-now-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const accountNumber = 12345678910;

        const userAccountNumber = getInputValue('account-number-2transfer');

        const userPin = getInputValueNumber('pin-number-2transfer');
        const userAmountToTransfer= getInputValueNumber('transfer-amount');


        if(userAccountNumber.length !== 11) {
            alert('Account number must be 11 digits long. Please try again with a valid account number.');
            return;
        }

        if(userPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = getInnerTextNumber('available-balance');

        // console.log(availableBalance);

        const updatedBalance = availableBalance - userAmountToTransfer;
        setInnerText('available-balance', updatedBalance);

        const data = {
            name:"Transfer Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    });

    // transfer money button event listener

    document.getElementById('get-now-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const userCoupon = getInputValue('bonus-coupon');

        const coupon = 'D10';
        const bonus = 100;

        if(userCoupon !== coupon) {
            alert('Incorrect coupon. Please try again.');
            return;
        }

        const availableBalance = getInnerTextNumber('available-balance');

        // console.log(availableBalance);

        const updatedBalance = availableBalance + bonus;
        setInnerText('available-balance', updatedBalance);
        alert('Congratulations! You have received 100 taka bonus.');

        const data = {
            name:"Get Bonus",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    });

    // Pay Bill button event listener

document.getElementById('pay-now-button').
    addEventListener('click', function(e) {
        e.preventDefault();

        const accountNumber = 12345678910;

        const userBank = getInputValue('bank2pay');
        const userAccountNumber = getInputValue('biller-account-number');
        
        const userPin = getInputValueNumber('pin-number-2pay');
        const userAmountToPay = getInputValueNumber('billing-amount-number');

        if(userAccountNumber.length !== 11) {
            alert('Account number must be 11 digits long. Please try again with a valid account number.');
            return;
        }

        if(userPin !== pin) {
            alert('Incorrect pin number. Please try again.');
            return;
        }

        const availableBalance = getInnerTextNumber('available-balance');

        // console.log(availableBalance);

        const updatedBalance = availableBalance - userAmountToPay;
        setInnerText('available-balance', updatedBalance);

        const data = {
            name:"Pay Bill",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    });

    // Transaction button event listener
    // document.getElementById('Transactions-Button').
    // addEventListener('click', function(){
        

    // });

    // Toggle down menu

    document.getElementById('Add-money-Button').addEventListener('click', function() {
        handleToggleDisplay('Add-money-Section');
        handleToggleActiveButton('Add-money-Button');
    });

    document.getElementById('Cash-Out-Button').addEventListener('click', function() {
        handleToggleDisplay('Cash-Out-Section');
        handleToggleActiveButton('Cash-Out-Button');

    });

    document.getElementById('Transfer-Money-Button').addEventListener('click', function() {
        handleToggleDisplay('Transfer-Money-Section');
        handleToggleActiveButton('Transfer-Money-Button');

    });

    document.getElementById('Get-Bonus-Button').addEventListener('click', function() {
        handleToggleDisplay('Get-Bonus-Section');
        handleToggleActiveButton('Get-Bonus-Button');

    });

    document.getElementById('Pay-Bill-Button').addEventListener('click', function() {
        handleToggleDisplay('Pay-Bill-Section');
        handleToggleActiveButton('Pay-Bill-Button');

    });

    document.getElementById('Transactions-Button').addEventListener('click', function() {
        handleToggleDisplay('Transactions-Section');
        handleToggleActiveButton('Transactions-Button');

        const transactionContainer = document.getElementById('transaction-container');
        transactionContainer.innerHTML = "";

         if (transactionData.length === 0) {
        transactionContainer.innerHTML = `
            <p class="text-gray-500 text-center">No transactions yet.</p>
        `;
        return;
    }

        for (const data of transactionData){
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center ">
                    <div class="bg-[#f4f5f7] border-2 border-gray-200 rounded-full p-3">
                        <img src="assets/wallet1.png" alt="add money logo" class="mx-auto">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            `

            transactionContainer.appendChild(div);
        }

    });