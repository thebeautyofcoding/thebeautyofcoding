const hamburger = document.querySelector('#header .header .nav-bar .nav-list .hamburger');

const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')

const header = document.querySelector('.header.container')

const menu_item= document.querySelectorAll('.header .nav-bar .nav-list ul li a')

const wrapper = document.getElementsByClassName('wrapper')[0]
const wrapperMain = document.getElementsByClassName('wrapperMain')[0]

const loadingSpinnerAndLoadingDots = document.getElementsByClassName('loadingSpinnerAndLoadingDots')[0]
window.addEventListener("load", function() {
    wrapper.removeChild("loadingSpinnerAndLoadingDots")
 wrapperMain.style.setProperty("opacity", "1")
   
})
hamburger.addEventListener('click', () => {
   
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c"
        
    } else {
        header.style.backgroundColor = "transparent"
    }
})

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})