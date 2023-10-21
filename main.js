const nav = document.querySelector('nav');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 60){
        nav.classList.add('scroll');
        mobileNav.classList.add('scroll');

    } else{
        nav.classList.remove('scroll');
        mobileNav.classList.remove('scroll');

    }
})

// for mobile menu toggle section
const menuIcon = document.querySelector('.menu-icon')
const MobileMenuContainer = document.querySelector('.mobile-menu-container')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () => {
    MobileMenuContainer.classList.add('active');
})
closeIcon.addEventListener('click', () => {
    MobileMenuContainer.classList.remove('active');
})