const nav = document.querySelector("nav");
const pageTitle = document.querySelector(".page-title");
const profileButton = document.querySelector(".profile-button");
const menuIcon = document.getElementById("menu-icon");

const users = JSON.parse(localStorage.getItem("users"));
const currentUserEmail = localStorage.getItem("currentUserEmail");

const currentUser = getCurrentUserObject();

if (users) {
  pageTitle.textContent = `Welcome back, ${currentUser.username} 👋`;
  const username = currentUser.username;
  profileButton.textContent = username.charAt(0).toUpperCase();
} else {
  window.location.href = "index.html";
}

menuIcon.addEventListener("click", showMenu);

function showMenu() {
  nav.classList.toggle("open");
}

function getCurrentUserObject() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === currentUserEmail) {
      return users[i];
    }
  }

}