const toggleMenu = document.getElementById('toggle-menu');
const navList = document.getElementById('nav-list');


toggleMenu.addEventListener('click', function(){
    
    navList.classList.toggle('active')
})