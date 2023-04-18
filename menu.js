openMenu.addEventListerner('click', () => {
    menu.style.display = 'flex'

    menu.style.rigth = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style,rigth = '0'
    }, 10)

})
closeMenu.addEventListerner('click', () => {
    menu.style.opacity = '0'

    menu.style.rigth = (menu.offsetWidth * -1) + 'px'

    setTimeout(() => {
        menu.removeAtribute('style')
        openMenu.removeAtribute('style')
    }, 200)
    
})