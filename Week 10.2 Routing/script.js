// handle error no input
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("signin");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validate() {
    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";
    emailInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");

    if (emailInput.value === "") {
        emailError.textContent = "Masukkan Email yang Benar....!";
        emailInput.classList.add("invalid");
        valid = false;
    }

    if (passwordInput.value === "") {
        passwordError.textContent = "Masukkan Password yang Benar....!";
        passwordInput.classList.add("invalid");
        valid = false;
    }

    return valid;
}

loginButton.addEventListener("click", function () {
    if (!validate()) {
        return;
    }
});