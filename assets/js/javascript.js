const header = document.querySelector(".nav-wrapper");
const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');
const searchButton = document.querySelectorAll('#search-button')
const searchIcon = document.querySelector('.search-icon')
const searchArea = document.querySelector('.search-area')
const searchSubmit = document.querySelector('.search-submit')

//For ddding background adter scroll in navbar

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};




for(i = 0; i < searchButton.length; i++){
    searchButton[i].addEventListener('click', () => {

        searchArea.classList.add('active')
        document.querySelector('body').style.overflow = 'hidden'
    })
}

searchIcon.addEventListener('click', () => {
    searchArea.classList.remove('active')
    document.querySelector('body').style.overflow = 'auto'
})


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

