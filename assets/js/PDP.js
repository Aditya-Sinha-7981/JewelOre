const tabs = document.querySelectorAll('.tab-ul > li')
const tabContent = document.querySelectorAll('.tab-content')
const defaultContent = document.querySelector('#default-open')
const accordianBtn = document.querySelectorAll('#accordian-button')
const accordianContent = document.querySelectorAll('.accordian-content')

const slider = tns({
    container: ".bottom",
    nav: false,
    controls: false,
    autuplayButton: false,
    autoplayButtonOutput: false,
    items: 3,
    mouseDrag: true,
    gutter: 30,
    autoplay: true
})

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





defaultContent.click()

