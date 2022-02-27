const fields = document.querySelectorAll('.required')
const submit = document.querySelector('.submit-button')





submit.addEventListener('click', () => {

    // Creating a "p" element to use it later

    let txt = document.createElement('p')
    txt.textContent = "Please input something"
    txt.setAttribute('class', 'error_text')

    // looping through all input to check for empty value

    for(i = 0; i < fields.length; i++){


        if(fields[i].value === ''){
            fields[i].classList.add('error')
        }else if(fields[i].value !== ''){

            //Looping to change error fields to normal if value is inputted
            if(fields[i].classList.contains('error')){
                fields[i].classList.remove('error')
            }
        }
    }
})
