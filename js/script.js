
let menuBtn = document.querySelector('.header-burger-btn');
let menu = document.querySelector('.header-nav-menu');
let body = document.querySelector('body');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock')
})