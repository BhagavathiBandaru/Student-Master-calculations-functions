const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let signupBtn = document.getElementById("signUpForm");
let containerEl = document.createElement("div");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        signupBtn.onclick = function() {
            form.classList.add("d-none");



        }

    }

};











let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let userInputElement2 = document.getElementById("userInput2");
let userInputElement3 = document.getElementById("userInput3");
let userInputElement4 = document.getElementById("userInput4");

function checkOption() {
    let firstNumberEleVal = parseInt(firstNumberElement.value);
    let secondNumberEleVal = parseInt(secondNumberElement.value);
    let inputVal = parseInt(userInputElement.value);

    let totalSum = firstNumberEleVal + secondNumberEleVal;
    let subtraction = firstNumberEleVal - secondNumberEleVal;
    let multiplication = firstNumberEleVal * secondNumberEleVal;
    let division = firstNumberEleVal / secondNumberEleVal;


    userInputElement.value = parseInt(totalSum);
    userInputElement2.value = parseInt(subtraction)
    userInputElement3.value = parseInt(multiplication)
    userInputElement4.value = parseInt(division)


}

checkOption()
firstNumberElement.value = "";
secondNumberElement.value = "";
userInputElement.value = "";
userInputElement2.value = "";
userInputElement3.value = "";
userInputElement4.value = "";
