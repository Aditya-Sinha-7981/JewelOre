const required = document.querySelectorAll('.required')
const inputArea = document.querySelectorAll('.input-area')
const submitButton = document.querySelector('#submit-button')
const contactForm = document.querySelector('#contact-form')
const contactName = document.querySelector('#contact_name')
const contactEmail = document.querySelector('#contact_email')
const contactNumber = document.querySelector('#contact_number')
const contactQuery = document.querySelector('#contact_query')

const slider = tns({
    container: ".carousel-connect",
    nav: false,
    items: 1,
    controls: false,
    mouseDrag: true,
    autoplayButton: false,
    loop: true,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {
        426: {
            items: 2
        },
        769: {
            items: 3
            
        }
    }
})

//Validation function

const checkUsername = () => {
    
    const name = contactName.value.trim()
    const min = 4 
    const max = 25

    //Valdiation var

    let valid = false

    if(!isRequired(name)){
        displayError(contactName, 'Username cannot be blank')
    }else if(!isTextValid(name)){
        displayError(contactName, `USername cannot contain special characters`)
    }else if(!isBetween(name.length, min, max)){
        displayError(contactName, `Username must be between ${min} and ${max} characters`)
    }else{
        displaySuccess(contactName)
        valid = true
    }

    return valid
}

const checkEmail = () => {

    const email = contactEmail.value.trim()

    //Valdiation var

    let valid = false

    if(!isRequired(email)){
        displayError(contactEmail, 'Email cannot be blank')
    }else if(!isEmailValid(email)){
        displayError(contactEmail, 'Email is not valid')
    }else{
        displaySuccess(contactEmail)
        valid = true
    }

    return valid
}

const checkNumber = () => {

    const number = contactNumber.value.trim()
    const min = 10 
    const max = 10

    //Valdiation var

    let valid = false

    if(!isRequired(number)){
        displayError(contactNumber, 'Phone cannot be blank')
    }else if(number.length !== min){
        displayError(contactNumber, `Phone must be ${max} characters`)
    }else if(!isPhoneValid(number)){
        displayError(contactNumber, `Only numbers are allowed`)
    }else{
        displaySuccess(contactNumber)
        valid = true
    }

    return valid
}

const checkQuery = () => {

    const query = contactQuery.value.trim()

    let valid = false

    if(!isRequired(query)){
        displayError(contactQuery, `Query cannot be empty`)
    }else if(!isTextValid(query)){
        displayError(contactQuery, `Query cannot contain special characters`)
    }else{
        displaySuccess(contactQuery)
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

contactForm.addEventListener('input', debounce(function (e) {

    switch (e.target.id) {
        case 'contact_name':
            checkUsername();
            break;
        case 'contact_email':
            checkEmail();
            break;
        case 'contact_number':
            checkNumber();
            break;
        case 'contact_query':
            checkQuery()
            break;
    }
}));




// submitButton.addEventListener('click', () => {
//     for(i = 0; i < required.length; i++){

//         const element = document.createElement("small")
//         const text = document.createTextNode("Field cannot be empty")
//         element.className = 'error-text'
//         element.appendChild(text)

//         if(required[i].value === ''){

//             required[i].classList.add('error')

//             let smallId = inputArea[i].querySelector('.error-text')

//             if(inputArea[i].contains(smallId)){
//                 // This field is empty because is the user does not enter anything, instead of stacking <small> text it stops at one
//             }else{
//                 inputArea[i].appendChild(element)
//             }

//         }else{


//             if(required[i].classList.contains('error')){
                
//                 required[i].classList.remove('error')

//                 let smallId = inputArea[i].querySelector('.error-text')

//                 required[i].parentNode.removeChild(smallId)
//             }
//         }
//     }
// })