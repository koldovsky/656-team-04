const MenuIcon = document.querySelector('.page-nav__toggle');
const navbar = document.querySelector('.navbar') 
MenuIcon.addEventListener('click', () => {
navbar.classList.toggle('change')
})
