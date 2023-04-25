const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const mainNav = document.getElementsByClassName('main-nav')[0];
const bodyTag = document.getElementsByTagName('body');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    mainNav.classList.toggle('mb-75vw')
})