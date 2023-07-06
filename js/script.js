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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sliderItem");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}