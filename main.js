let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px', 
    duration: 2500, 
    delay: 400, 
    reset: true
})

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("txtDate")[0].setAttribute('min', today);

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("rtnDate")[0].setAttribute('min', today);

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 400, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 1000, origin: 'right'})
sr.reveal('.services-container .box',{delay: 1000, origin: 'left'})
sr.reveal('.about-container',{delay: 1000, origin: 'right'})
sr.reveal('.reviews-container',{delay: 1000, origin: 'left'})
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'})