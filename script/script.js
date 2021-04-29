const header = document.getElementsByTagName("header")[0];
const hamburguerBtn = document.getElementById("hamburguer-button");
const closeBtn = document.getElementById("close-button");
const menuOptions = document.getElementsByTagName("ul")[0];

hamburguerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuOptions.addEventListener("click", closeMenu);

function openMenu() {
  header.className = "menu-active";
  hamburguerBtn.style.display = "none";
  closeBtn.style.display = "initial";
}

function closeMenu() {
  header.className = "header";
  hamburguerBtn.style.display = "initial";
  closeBtn.style.display = "none";
}
