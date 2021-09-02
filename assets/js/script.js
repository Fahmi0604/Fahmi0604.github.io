const btnMenu = document.querySelector(".btn-menu");
const ulMenu = document.querySelector(".ul-menu");
const linkMenu = document.querySelectorAll(".link-menu");

btnMenu.addEventListener("click", mobileMenu);
linkMenu.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    btnMenu.classList.toggle("active");
    ulMenu.classList.toggle("active");
}

function closeMenu() {
    btnMenu.classList.remove("active");
    ulMenu.classList.remove("active");
}