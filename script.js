const text = document.getElementById('text');
const leaf = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');
const hamburger = document.querySelector('.hamburgerMenu');
const menuItems = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuItems.classList.toggle('active');
})

window.addEventListener('scroll', ()=> {
   let value = window.scrollY;
   const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--headerHeight'));
   
   text.style.marginTop = value * 1.5 + 'px';
   if (value > headerHeight) {
    leaf.style.top = value * -1.5 + 'px';
   } else {
    leaf.style.top = (headerHeight) + 'px';
   }
   leaf.style.right = value * -1.5 + 'px';
   hill5.style.left = value * 1.5 + 'px';
   hill4.style.left = value * -1.5 + 'px';
   hill1.style.top = value * 1 + 'px';
});