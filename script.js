// ==========================
// STEP 2: SELECT ELEMENTS
// ==========================

const form = document.getElementById("signup-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirm-password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");
const confirmPassError = document.getElementById("confirm-password-error");



// STEP 4: UI HELPERS
// (Class Toggling)
// ==========================

function showError(input, errorEl, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    errorEl.textContent = message;
}

function showSuccess(input, errorEl) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorEl.textContent = "";
}


// ==========================
// STEP 3 + 4: VALIDATION LOGIC
// ==========================

// NAME
function validateName() {
    const name = nameInput.value.trim();

    if (name.length < 3) {
        showError(nameInput, nameError, "Name must be at least 3 characters");
        return false;
    }

    showSuccess(nameInput, nameError);
    return true;
}


// EMAIL
function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = emailInput.value.trim();

    if (!emailPattern.test(email)) {
        showError(emailInput, emailError, "Enter a valid email");
        return false;
    }

    showSuccess(emailInput, emailError);
    return true;
}


// PASSWORD
function validatePassword() {
    const password = passInput.value;

    if (password.length < 6) {
        showError(passInput, passError, "Password must be at least 6 characters");
        return false;
    }

    showSuccess(passInput, passError);
    return true;
}


// CONFIRM PASSWORD
function validateConfirmPassword() {
    const password = passInput.value;
    const confirmPassword = confirmPassInput.value;

    if (confirmPassword !== password) {
        showError(confirmPassInput, confirmPassError, "Passwords do not match");
        return false;
    }

    showSuccess(confirmPassInput, confirmPassError);
    return true;
}


// ==========================
// REAL-TIME VALIDATION
// ==========================

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passInput.addEventListener("blur", validatePassword);
confirmPassInput.addEventListener("blur", validateConfirmPassword);


// ==========================
// FORM SUBMIT
// ==========================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Registration Successful!");
        form.reset();
        nameInput.style.border = "";
emailInput.style.border = "";
passInput.style.border = "";
confirmPassInput.style.border = "";

nameError.textContent = "";
emailError.textContent = "";
passError.textContent = "";
confirmPassError.textContent = "";
    }
});