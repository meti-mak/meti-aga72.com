function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let btnm = document.getElementById("btnm");

btnm.onclick = function(){
  document.body.classList.toggle("dark-theme");
}
