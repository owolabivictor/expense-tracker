import { users } from "./users.js";

const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const inputErrorMessage = document.querySelectorAll(".input-error-message");
const signUpButton = document.getElementById("sign-up-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    inputErrorMessage[1].style.visibility = "visible";
    confirmPassword.classList.add("inputError");
    return;
  }

  let emailExist;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailValue) {
      emailExist = true;
      break;
    }
  }

  if (emailExist) {
    inputErrorMessage[0].style.visibility = "visible";
    email.classList.add("inputError");
  } else {
    const userData = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    };

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    signUpButton.textContent = "Signing up...";
    signUpButton.disabled = true;
    signUpButton.style.opacity = "0.8";

    setTimeout(() => {
      signUpButton.textContent = "Signed up!";
      signUpButton.disabled = false;
      signUpButton.style.opacity = "1";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    }, 2000);
  }
});
