const fields = document.querySelectorAll('.required')
const textArea = document.querySelectorAll('.text-area')
const submit = document.querySelector('.submit-button')





submit.addEventListener('click', () => {

    // looping through all input to check for empty value

    for(i = 0; i < fields.length; i++){

        //Creating <small> text element

        const element = document.createElement("small")
        const text = document.createTextNode("Field cannot be empty")
        element.className = 'error-text'
        element.appendChild(text)


        if(fields[i].value === ''){

            fields[i].classList.add('error')

            let smallId = textArea[i].querySelector('.error-text')

            if(textArea[i].contains(smallId)){
                // This field is empty because is the user does not enter anything, instead of stacking <small> text it stops at one
            }else{
                textArea[i].appendChild(element)
            }
        }else if(fields[i].value !== ''){

            //Looping to change error fields to normal if value is inputted
            if(fields[i].classList.contains('error')){
                fields[i].classList.remove('error')

                let smallId = textArea[i].querySelector('.error-text')

                fields[i].parentNode.removeChild(smallId)
            }
        }
    }
})
