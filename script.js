function validateEmail(){
    let email = document.querySelector('#email-input');
    let error = document.querySelector('#error-email');
    if(!email.checkValidity()){
        error.innerHTML = "Please enter a valid email address";
    }
}

function redefineMsg(){
    let error = document.querySelector('#error-email');
    if(error.innerHTML == "Please enter a valid email address"){
        error.innerHTML = "";
    }
}