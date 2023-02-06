export{}

const menuBtn = document.querySelector('.menu-header') as HTMLElement
const menuItems = document.querySelector('.nav-menu') as HTMLElement

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menuItems.classList.toggle('none')
})