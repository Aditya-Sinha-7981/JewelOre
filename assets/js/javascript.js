const navbar = document.querySelector('.navbar');

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