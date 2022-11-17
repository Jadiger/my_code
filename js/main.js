const menuBtn = document.querySelector('.menu_btn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close_btn');
menuBtn.addEventListener('click', ()=> {
    navbar.style = 'transform:translate(0,0);';
    overlay.style = 'display:block;';
});
closeBtn.addEventListener('click',()=> {
    navbar.style = 'transform:translate(100%,0);';
    overlay.style = 'display:none;';
});
overlay.addEventListener('click',()=> {
    navbar.style = 'transform:translate(100%,0);';
    overlay.style = 'display:none;';
});
document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape') {
        navbar.style = 'transform:translate(100%,0);';
        overlay.style = 'display:none;';   
    }
});