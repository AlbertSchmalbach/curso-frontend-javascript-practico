const menuEmail = document.querySelector(".navbar-email");
const deskMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggloeDesktopMenu)

function toggloeDesktopMenu() {
    deskMenu.classList.toggle('inactive')
}