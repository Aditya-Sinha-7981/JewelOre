const header = document.querySelector(".nav-wrapper");
const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');
const counters = document.querySelectorAll('.counter');

//For ddding background adter scroll in navbar

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};



//Functions

//Testimonial carousel
// const slider = tns({
//     container: "#carousel",
//     loop: true,
//     items: 1,
//     mouseDrag: true,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false,
//     autoplayButtonOutput: false,
//     responsive: {
//         426:{
//             items: 1
//         }
//     }
// });



//Hamburger Function

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


//Number Counter
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 100000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}



hamburgerButton.addEventListener('click', hamburgerClassLogic);