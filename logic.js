const burgerMenuButton = document.getElementById("burger-menu");
const navbarMenu = document.getElementById("navbar-default");

burgerMenuButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
    navbarMenu.classList.toggle("block");
});