const tabs = document.querySelectorAll('.tab-ul > li')
const tabContent = document.querySelectorAll('.tab-content')
const defaultContent = document.querySelector('#default-open')
const accordianBtn = document.querySelectorAll('#accordian-button')
const accordianContent = document.querySelectorAll('.accordian-content')
const thumbnailImage = document.querySelectorAll('.thumbnail')
const buttonLeft = document.querySelector('#arrowLeft')
const buttonRight = document.querySelector('#arrowRight')

for(i = 0; i < tabs.length; i++){
    // Assigning it to a variable so that it does not return "undefined"
    let x = tabs[i]

    tabs[i].addEventListener('click', () => {
        
        // looping through all of them again to remove "active" from default class
        for(k = 0; k < tabs.length; k++){
            tabs[k].classList.remove('active')
        }
        x.classList.toggle('active')
    })

    noTabContent()
}

function noTabContent(){

    for(z = 0; z < tabContent.length; z++){

        let x = tabContent[z]
        x.style.display = "none"
    }
}

function tabContentDisplay(tab){

    noTabContent()

    document.getElementById(tab).style.display = "flex"
}

for(i = 0; i < accordianBtn.length; i++){
    // Assigning it to a variable so that it does not return "undefined"
    let x = accordianBtn[i]

    accordianBtn[i].addEventListener('click', () => {

        //fetching the content of the accordian
        let a = x.nextElementSibling

        for(z = 0; z < accordianContent.length; z++){
            accordianContent[z].style.display = 'none'
        }

        // checking is the button is already active, if it's already active then deactivate it

        if(x.classList.contains('active')){

            x.classList.remove('active')

        }else{

            //checking if any other button is active, if it is then deactivate them and activate the button that has been clicked

            for(k = 0; k < accordianBtn.length; k++){

                if(accordianBtn[k].classList.contains('active')){
                    accordianBtn[k].classList.remove('active')
                }

            }
            x.classList.toggle('active')
            a.style.display = 'flex'
        }

        
    })
}

for(i = 0; i < thumbnailImage.length; i++){

    let x = thumbnailImage[i]

    thumbnailImage[i].addEventListener('click', () => {

        const activeImage = document.querySelectorAll('.active')

        if(activeImage.length > 0){
            activeImage[0].classList.remove('active')
        }
        
        
        x.classList.add('active')
        document.getElementById('featured').src = x.src

    })
}

buttonLeft.addEventListener('click', () => {
    document.querySelector('.bottom__slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', () => {
    document.querySelector('.bottom__slider').scrollLeft += 180
})

defaultContent.click()

