const increment_button = document.querySelectorAll('#quantity_increment')
const decrement_button = document.querySelectorAll('#quantity_decrement')
const quantity_value = document.querySelectorAll('#quantity_value')

for(let i = 0; i < increment_button.length; i++){
    increment_button[i].addEventListener('click', () => {
        let current_value = quantity_value[i].innerHTML
        current_value++
        quantity_value[i].innerHTML = current_value
    })
}

for(let i = 0; i < decrement_button.length; i++){
    decrement_button[i].addEventListener('click', () => {
        let current_value = quantity_value[i].innerHTML
        if(current_value > 1){
            current_value--
        }
        quantity_value[i].innerHTML = current_value
    })
}