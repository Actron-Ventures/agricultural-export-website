document.querySelector(".fa-bars").addEventListener('click', displayMobileMenu)
const hiddenNavItems = document.querySelectorAll(".noDisplay")

function displayMobileMenu() {
    document.querySelector("#menu").classList.add("mobMenu")
    hiddenNavItems.forEach((navItem) => {
        navItem.classList.remove("noDisplay")
    })
}

document.querySelector(".fa-xmark").addEventListener('click', removeMobileMenu)
function removeMobileMenu() {
    hiddenNavItems.forEach((navItem) => {
        navItem.classList.add("noDisplay")
    })
    document.querySelector("#menu").classList.toggle("mobMenu")
}

document.addEventListener("scroll", () => {
    document.querySelector('nav').style.background = "white"
})