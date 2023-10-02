document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("input", function () {
        if (emailInput.validity.valid) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }
    });

    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        if (!emailInput.validity.valid) {
            event.preventDefault();
        }
    });
});