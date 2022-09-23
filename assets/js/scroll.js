var header = document.querySelector('header')
var whats = document.querySelector(".whats__box")
var imgHeader = document.querySelector("#imgHeader")
var headerFixul = document.getElementById("headerFixul")
var headerFixli = document.querySelector('.header__li')

console.log(imgHeader.value)

window.onscroll = function headerFix(){
    if(window.pageYOffset > 0 && window.innerWidth < 798){
    
    header.className ='header__fix'
    whats.style.visibility = 'visible'
    imgHeader.innerHTML = `<img src="assets/imagens/icones/menu-hamburguer.png" class='header__logo' alt="Ferri advocacia"></img>`
        
    } else {
        
        header.className = 'header'
        whats.style.visibility = 'hidden'
        imgHeader.innerHTML = `<img src="assets/imagens/Ferri__1_-removebg-preview.png" class='header__logo' alt="Ferri advocacia">`
    }
}

function menuBurguer(){
    imgHeader.addEventListener("click", function() {
        headerFixul.style.visibility = 'visible'
        headerFixli.style.position ='relative'
    })
}



const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
        target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length) {
window.addEventListener('scroll', debounce(function(){
    animeScroll()
}, 100))
}