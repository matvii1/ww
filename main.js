

const menu = document.querySelector('.header__menu--open')
const close = document.querySelector('.header__menu--close')

const sideBar = document.querySelector('.sidebar')

menu.addEventListener('click', ()=> {
    const menu = document.querySelector('.header__menu--open')

    sideBar.classList.toggle('active')
    close.classList.toggle('active')

    menu.classList.toggle('not-visible')
})

close.addEventListener('click', ()=> {
    sideBar.classList.toggle('active')
    close.classList.toggle('active')
    
    menu.classList.toggle('not-visible')
})