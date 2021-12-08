const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');

$(navbar).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 100){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
    })
})

//Functions

function hamburgerClassLogic(){
    //Removal or addition of "active" class for hamburger

    let x = hamburgerClass
    
    if(x.classList.contains('active')){
        x.classList.remove('active');
    }else{
        x.classList.add('active');
    }

    let y = hamburgerIcon

    if(y.classList.contains('fa-bars')){
        y.classList.remove('fa-bars');
        y.classList.add('fa-times');
    }else{
        y.classList.remove('fa-times');
        y.classList.add('fa-bars');
    }
}

hamburgerButton.addEventListener('click', hamburgerClassLogic);