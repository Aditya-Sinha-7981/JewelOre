const header = document.querySelector(".nav-wrapper");
const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');

//For ddding background adter scroll in navbar

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};



hamburgerButton.addEventListener('click', () => {
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
});

