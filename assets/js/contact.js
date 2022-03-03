const required = document.querySelectorAll('.required')
const inputArea = document.querySelectorAll('.input-area')
const submitButton = document.querySelector('#submit-button')

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


submitButton.addEventListener('click', () => {
    for(i = 0; i < required.length; i++){

        const element = document.createElement("small")
        const text = document.createTextNode("Field cannot be empty")
        element.className = 'error-text'
        element.appendChild(text)

        if(required[i].value === ''){

            required[i].classList.add('error')

            let smallId = inputArea[i].querySelector('.error-text')

            if(inputArea[i].contains(smallId)){
                // This field is empty because is the user does not enter anything, instead of stacking <small> text it stops at one
            }else{
                inputArea[i].appendChild(element)
            }

        }else{


            if(required[i].classList.contains('error')){
                
                required[i].classList.remove('error')

                let smallId = inputArea[i].querySelector('.error-text')

                required[i].parentNode.removeChild(smallId)
            }
        }
    }
})