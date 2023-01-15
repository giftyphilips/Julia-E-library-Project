const rmCheck = document.getElementById("rememberMe"),
    passwordInput = document.getElementById("password");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  passwordInput.value = localStorage.password;
} else {
  rmCheck.removeAttribute("checked");
  passwordInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && passwordInput.value !== "") {
    localStorage.password = passwordInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.password = "";
    localStorage.checkbox = "";
  }
}