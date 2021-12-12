const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');
const counters = document.querySelectorAll('.counter');

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