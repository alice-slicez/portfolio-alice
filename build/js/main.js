const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('#navbar');
const navItemsList = document.querySelector('.nav-items-list');
const badge = document.querySelector('.name-badge');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        navbar.classList.add('show');
        navItemsList.classList.add('show');
        badge.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        navbar.classList.remove('show');
        navItemsList.classList.remove('show');
        badge.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}

