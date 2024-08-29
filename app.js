const menu = document.querySelector("header nav")
const menuBtn = document.querySelector(".menu-btn")
const menuBtnIcon = document.querySelector(".menu-btn span")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open")

    if (menu.classList.contains("open")) {
        menuBtnIcon.textContent = "close"
    }
    else {
        menuBtnIcon.textContent = "menu"
    }
})
