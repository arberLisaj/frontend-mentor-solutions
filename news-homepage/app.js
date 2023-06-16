const menuToggle = document.querySelector("[data-menu]");
const asideMenu = document.querySelector("aside");

const closeAsideMenu = document.querySelector("[data-close]");

menuToggle.addEventListener("click", () => {
  asideMenu.classList.add("open-aside");
});
closeAsideMenu.addEventListener("click", () => {
  asideMenu.classList.remove("open-aside");
});
