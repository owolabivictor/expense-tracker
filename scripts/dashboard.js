const nav = document.querySelector("nav");
const pageTitle = document.querySelector(".page-title");
const profileButton = document.querySelector(".profile-button");
const menuIcon = document.getElementById("menu-icon");

const userData = JSON.parse(localStorage.getItem("user"));

if (userData) {
  pageTitle.textContent = `Welcome back, ${userData.username} 👋`;
  const username = userData.username;
  profileButton.textContent = username.charAt(0).toUpperCase();
} else {
  window.location.href = "index.html";
}

menuIcon.addEventListener("click", showMenu);

function showMenu() {
  nav.classList.toggle("open")
}
