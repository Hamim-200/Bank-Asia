
//step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    // Step-2 : get the email address inside the email input field
    // Always remember to use  .value to get text from an inpput field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 3 Get password
    //3.a set id on the html element
    //3.b get the element 
    //3.c get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)

    // step-4 : verify email and pass
    if (email === 'hamim@gmail.com' && password === 'Hello') {
        window.location.href = 'bank.html';

    }
    else {
        alert('Wrong Password!! Try Again')
    }
})