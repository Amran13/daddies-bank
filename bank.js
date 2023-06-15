const gettingValue = (inputId) => {
    const input = document.getElementById(inputId);
    const inputValue = parseInt(input.value);
    return input, inputValue;
}


document.getElementById('deposit-btn').addEventListener('click', () => {


    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = parseInt(depositInput.value);

    if (isNaN(depositInputValue)) {
        alert("Not a Number.")
    }
    else {
        const deposit = document.getElementById('deposit-amount');
        const depositAmount = deposit.innerText;
        deposit.innerText = parseInt(depositAmount) + parseInt(depositInputValue);

        const total = document.getElementById('total-amount');
        const totalAmount = total.innerText;

        total.innerText = parseInt(totalAmount) + parseInt(depositInputValue);
        depositInput.value = '';
        console.log("i am at else")

    }

})


document.getElementById('withdraw-btn').addEventListener('click', () => {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = parseInt(withdrawInput.value);

    if (isNaN(withdrawInputValue)) {
        alert("Not a Number.")
    }
    else {

        const withdraw = document.getElementById('withdraw-amount');
        const withdrawAmount = withdraw.innerText;

        withdraw.innerText = parseInt(withdrawInputValue) + parseInt(withdrawAmount);

        const total = document.getElementById('total-amount');
        const totalAmount = total.innerText;

        total.innerText = parseInt(totalAmount) - parseInt(withdrawInputValue);
        withdrawInput.value = '';

    }

})



