const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordMatchError = document.querySelector(".password-match-error");
const signUpButton = document.getElementById("sign-up-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    passwordMatchError.style.visibility = "visible";
    confirmPassword.classList.add("mismatch-password");
    return;
  } else {
    const userData = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    };

    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    signUpButton.textContent = "Signing up...";
    signUpButton.disabled = true;
    signUpButton.style.opacity = "0.6";

    localStorage.setItem("user", JSON.stringify(userData));

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
