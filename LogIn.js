document.getElementById('login-btn').addEventListener('click', ()=> {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    console.log(typeof(email))
    console.log(password)

    if(email == 'baap@gmail.com' && password == '123'){
        location.href = 'bank.html';
    }
    else{
        alert("Your Password is Incorrect!");
    }
})