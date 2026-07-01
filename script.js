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


// ==========================
// STEP 3: VALIDATION LOGIC
// ==========================

// NAME
function validateName() {

    const name = nameInput.value.trim();

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// EMAIL
function validateEmail() {

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = emailInput.value.trim();

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// PASSWORD
function validatePassword() {

    const password = passInput.value;

    if (password.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        return false;
    }

    passError.textContent = "";
    return true;
}

// CONFIRM PASSWORD
function validateConfirmPassword() {

    const password = passInput.value;
    const confirmPassword = confirmPassInput.value;

    if (confirmPassword !== password) {
        confirmPassError.textContent = "Passwords do not match";
        return false;
    }

    confirmPassError.textContent = "";
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
// FORM SUBMIT CHECK
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
    }
});