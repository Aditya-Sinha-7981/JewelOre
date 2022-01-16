const header = document.querySelector(".nav-wrapper");
const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('#icon');
const hamburgerClass = document.querySelector('.hamburger-menu');
const counters = document.querySelectorAll('.counter');
const leftBar = document.querySelector('#leftBar');
const hideBar = document.querySelector('.hide');
const leftHamburger = document.querySelector('#category-icon');

//For ddding background adter scroll in navbar

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};





// Number Counter
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

// leftHamburger.addEventListener('click', () => {
//   leftBar.classList.add('active');
// })

// hideBar.addEventListener('click', () => {
//   leftBar.classList.remove('active');
// })