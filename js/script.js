const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click', (e) => {
    header.classList.toggle('menu-open')
})