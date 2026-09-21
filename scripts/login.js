const container = document.querySelector(".container");
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const errorContainer = document.querySelector(".error-container");
const overlay = document.querySelector(".overlay");
const cancelButton = document.querySelector(".cancel");
const signUpButton = document.querySelector(".sign-up");
const loginConfirmation = document.querySelector(".login-confirmation");

const userData = JSON.parse(localStorage.getItem("user"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userData) {
    errorContainer.classList.toggle("active");
    overlay.classList.toggle("active");
    container.classList.toggle("hierarchy");
    return;
  } else {
    const validEmail = email.value.trim() === userData.email;
    const validPassword = password.value.trim() === userData.password;

    email.value = "";
    password.value = "";

    const hasAccount = validEmail && validPassword;

    if (hasAccount) {
      showSuccess();
      loginButton.disabled = true;
      loginButton.textContent = "Logging in...";
      loginButton.style.opacity = "0.6";
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

localStorage.removeItem("user");
