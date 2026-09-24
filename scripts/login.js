const container = document.querySelector(".container");
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const errorContainer = document.querySelector(".error-container");
const overlay = document.querySelector(".overlay");
const cancelButton = document.querySelector(".cancel");
const signUpButton = document.querySelector(".sign-up-alert");
const loginConfirmation = document.querySelector(".login-confirmation");

const users = JSON.parse(localStorage.getItem("users"));

let currentUserEmail;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hasAccount = confirmLoginCredentials(
    email.value.trim(),
    password.value.trim(),
  );

  if (hasAccount) {
    showSuccess();
    currentUserEmail = email.value.trim();
    localStorage.setItem("currentUserEmail", currentUserEmail);
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";
    loginButton.style.opacity = "0.8";
    setTimeout(() => {
      loginButton.style.opacity = "1";
      loginButton.disabled = false;
      loginButton.textContent = "Login";
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    errorContainer.classList.toggle("active");
    overlay.classList.toggle("active");
    container.classList.toggle("hierarchy");
  }
});

cancelButton.addEventListener("click", () => {
  errorContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  container.classList.toggle("hierarchy");
});

signUpButton.addEventListener("click", () => {
  window.location.href = "sign-up.html";
});

function showSuccess() {
  loginConfirmation.style.top = "20px";

  setTimeout(() => {
    loginConfirmation.style.top = "-100%";
  }, 2000);
}

function confirmLoginCredentials(userEmail, userPassword) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === userEmail && users[i].password === userPassword) {
      return true;
    } else {
      continue;
    }
  }

  return false;
}
