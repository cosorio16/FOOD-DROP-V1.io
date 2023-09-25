document.addEventListener('DOMContentLoaded', () => {
    const closeMenu = document.querySelector('.fa-x');
    const openMenu = document.querySelector('.fa-bars');
    const menu = document.querySelector('nav');
    
    const linksMenu = menu.querySelectorAll('a');
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        })
    })

    closeMenu.addEventListener('click', () => {
        menu.classList.add('hidden');
    });

    openMenu.addEventListener('click', () => {
        menu.classList.remove('hidden');
    });
})