const hamburger = document.querySelector('#header .header .nav-bar .nav-list .hamburger');

const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')

const header = document.querySelector('.header.container')

const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')

const loadingSpinnerAndLoadingDots = document.getElementsByClassName('loadingSpinnerAndLoadingDots')[0]
const wrapperMain = document.getElementsByClassName('wrapperMain')[0]


window.addEventListener("load", function () {
    loadingSpinnerAndLoadingDots.style.setProperty("opacity", "0")

    wrapperMain.style.setProperty("opacity", "1")

})


if (hamburger.addEventListener) {
    hamburger.addEventListener("click", function() {

        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })

} 

document.addEventListener('scroll', function() {
    var scroll_position = window.scrollY
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c"

    } else {
        header.style.backgroundColor = "transparent"
    }
})

menu_item.forEach(function(item) {

    if (item.addEventListener) {
        item.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
    } 

})