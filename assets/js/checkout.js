const fields = document.querySelectorAll('.required')
const textArea = document.querySelectorAll('.text-area')
const submit = document.querySelector('.submit-button')
const checkoutDiv = document.querySelector('.inputs')
const checkoutFirstName = document.querySelector('#checkout_first_name')
const checkoutLastName = document.querySelector('#checkout_last_name')
const checkoutStreet = document.querySelector('#checkout_street')
const checkoutTown = document.querySelector('#checkout_town')
const checkoutState = document.querySelector('#checkout_state')
const checkoutPinCode = document.querySelector('#checkout_pin_code')
const checkoutNumber = document.querySelector('#checkout_number')
const checkoutEmail = document.querySelector('#checkout_email')



//Validation function

const checkFirstUsername = () => {
    
    const name = checkoutFirstName.value.trim()
    const min = 3 
    const max = 10

    //Valdiation var

    let valid = false

    if(!isRequired(name)){
        displayError(checkoutFirstName, 'Username cannot be blank')
    }else if(!isTextValid(name)){
        displayError(checkoutFirstName, `Username cannot be a special character`)
    }else if(!isBetween(name.length, min, max)){
        displayError(checkoutFirstName, `Username must be between ${min} and ${max} characters`)
    }else{
        displaySuccess(checkoutFirstName)
        valid = true
    }

    return valid
}

const checkLastUsername = () => {
    
    const name = checkoutLastName.value.trim()
    const min = 3 
    const max = 10

    //Valdiation var

    let valid = false

    if(!isRequired(name)){
        displayError(checkoutLastName, 'Username cannot be blank')
    }else if(!isTextValid(name)){
        displayError(checkoutLastName, `Username cannot be a special character`)
    }else if(!isBetween(name.length, min, max)){
        displayError(checkoutLastName, `Username must be between ${min} and ${max} characters`)
    }else{
        displaySuccess(checkoutLastName)
        valid = true
    }

    return valid
}

const checkStreet = () => {

    const street = checkoutStreet.value.trim()

    let valid = false

    if(!isRequired(street)){
        displayError(checkoutStreet, `Street address cannot be blank`)
    }else if(!isTextValid(street)){
        displayError(checkoutStreet, `Street address cannot contain special characters`)
    }else{
        displaySuccess(checkoutStreet)
        valid = true
    }

    return valid
}

const checkTown = () => {

    const town = checkoutTown.value.trim()

    let valid = false

    if(!isRequired(town)){
        displayError(checkoutTown, `Town address cannot be blank`)
    }else if(!isTextValid(town)){
        displayError(checkoutTown, `Town address cannot contain special characters`)
    }else{
        displaySuccess(checkoutTown)
        valid = true
    }

    return valid
}

const checkState = () => {

    const state = checkoutState.value.trim()

    let valid = false

    if(!isRequired(state)){
        displayError(checkoutState, `State cannot be blank`)
    }else if(!isTextValid(state)){
        displayError(checkoutState, `State cannot contain special characters`)
    }else{
        displaySuccess(checkoutState)
        valid = true
    }

    return valid
}

const checkPincode = () => {

    const min = 5
    const max = 12
    const pinCode = checkoutPinCode.value.trim()
    
    let valid = false

    if(!isRequired(pinCode)){
        displayError(checkoutPinCode, `Pin Code cannot be blank`)
    }else if(!isBetween(pinCode.length, min, max)){
        displayError(checkoutPinCode, `Pin code must be between ${min} and ${max} characters`)
    }else if(!isPhoneValid(checkPincode)){
        displayError(checkoutPinCode, `Pincode must be a number`)
    }else{
        displaySuccess(checkoutPinCode)
        valid = true
    }

    return valid
}

const checkNumber = () => {

    const number = checkoutNumber.value.trim()
    const min = 10 
    const max = 10

    //Valdiation var

    let valid = false

    if(!isRequired(number)){
        displayError(checkoutNumber, 'Phone cannot be blank')
    }else if(number.length !== min){
        displayError(checkoutNumber, `Phone must be ${max} characters`)
    }else if(!isPhoneValid(number)){
        displayError(checkoutNumber, `Only numbers are allowed`)
    }else{
        displaySuccess(checkoutNumber)
        valid = true
    }

    return valid
}

const checkEmail = () => {

    const email = checkoutEmail.value.trim()

    //Valdiation var

    let valid = false

    if(!isRequired(email)){
        displayError(checkoutEmail, 'Email cannot be blank')
    }else if(!isEmailValid(email)){
        displayError(checkoutEmail, 'Email is not valid')
    }else{
        displaySuccess(checkoutEmail)
        valid = true
    }

    return valid
}

//Pre-requiste functions

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPhoneValid = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
};

const isTextValid = (string) => {
    const re = /^[a-zA-Z0-9]/;
    return re.test(string);
}

const displayError = (input, msg) => {

    //Add error class
    input.classList.remove('success')
    input.classList.add('error')

    //Change <small> text
    const parentField = input.parentElement
    const small = parentField.querySelector('small')
    small.textContent = msg
}

const displaySuccess = (input) => {

    //Remove error class
    input.classList.remove('error')
    input.classList.add('success')

    //Change <small> text
    const parentField = input.parentElement
    const small = parentField.querySelector('small')
    small.textContent = ''
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

checkoutDiv.addEventListener('input', debounce(function (e) {

    switch (e.target.id) {
        case 'checkout_first_name':
            checkFirstUsername();
            break;
        case 'checkout_last_name':
            checkLastUsername();
            break;
        case 'checkout_street':
            checkStreet();
            break;
        case 'checkout_town':
            checkTown();
            break;
        case 'checkout_state':
            checkState()
            break;
        case 'checkout_pin_code':
            checkPincode()
            break;
        case 'checkout_number':
            checkNumber()
            break;
        case 'checkout_email':
            checkEmail()
            break;
    }
}));

































// submit.addEventListener('click', () => {

//     // looping through all input to check for empty value

//     for(i = 0; i < fields.length; i++){

//         //Creating <small> text element

//         const element = document.createElement("small")
//         const text = document.createTextNode("Field cannot be empty")
//         element.className = 'error-text'
//         element.appendChild(text)


//         if(fields[i].value === ''){

//             fields[i].classList.add('error')

//             let smallId = textArea[i].querySelector('.error-text')

//             if(textArea[i].contains(smallId)){
//                 // This field is empty because is the user does not enter anything, instead of stacking <small> text it stops at one
//             }else{
//                 textArea[i].appendChild(element)
//             }
//         }else if(fields[i].value !== ''){

//             //Looping to change error fields to normal if value is inputted
//             if(fields[i].classList.contains('error')){
//                 fields[i].classList.remove('error')

//                 let smallId = textArea[i].querySelector('.error-text')

//                 fields[i].parentNode.removeChild(smallId)
//             }
//         }
//     }
// })
