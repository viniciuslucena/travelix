const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.hamburger-menu')

window.addEventListener('scroll', (e) => {
    let windowPosition = window.scrollY > 100
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('menu-open')
})