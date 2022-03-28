//  Menu: Desde HTML copiamos las class:
// nav-toggle
// navbar--list
// navbar--visible

const navToggle = document.querySelector(".nav-toggle");
const navBarList = document.querySelector(".navbar--list");

navToggle.addEventListener("click", () => {
  navBarList.classList.toggle("navbar--visible");

  if (navBarList.classList.contains("navbar--visible")) {
    navToggle.setAttribute("arial-label", "Close Sidebar");
  } else {
    navToggle.setAttribute("arial-label", "Open Sidebar");
  }
});