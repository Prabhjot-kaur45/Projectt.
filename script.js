let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onescroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-icon').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-icon').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centerSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});