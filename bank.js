document.getElementById('login-btn').addEventListener('click', ()=> {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    console.log(typeof(email))
    console.log(password)

    if(email == 'baap@gmail.com' && password == '123'){
        console.log("you have access");
    }
    else{
        console.log("access denied");
    }
})