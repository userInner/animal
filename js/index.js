var navbarActive = document.getElementById("navbar-active")

window.onscroll = function () {
    let navbarTop = document.scrollingElement.scrollTop
    if (navbarTop < 132) {
        navbarActive.classList.remove("bg-dark")
        navbarActive.classList.add("text-light")
    } else {
        navbarActive.classList.add("bg-dark")
    }
}