// open close sidebar

// let sidebarExpand = document.querySelector(".sidebar__expand");
// let sidebar = document.querySelector(".sidebar");
// let sidebarListItem = document.querySelectorAll(".sidebar__listitem");

// sidebarExpand.addEventListener("click", () => {
//   sidebar.classList.toggle("sidebar-closed");
// })


// video
let sidebarExpand = document.querySelector(".sidebar__expand");
let sidebar = document.querySelector(".sidebar");
let navListItem = document.querySelectorAll(".sidebar__listitem");

sidebarExpand.addEventListener("click", () => {
  sidebar.classList.toggle("nav-closed");
});

