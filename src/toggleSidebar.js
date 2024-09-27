import { getElement } from "./utils.js";

const toggleNav = document.getElement(".toggle-nav");
const sidebarOverlay = document.getElement(".sidebar-overlay");
const closeBtn = document.getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  console.log("shift");
  sidebarOverlay.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  console.log("shift8");
  sidebarOverlay.classList.remove("show");
});
