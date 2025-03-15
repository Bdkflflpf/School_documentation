document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");

    // Dark Mode Toggle
    const darkModeBtn = document.getElementById("dark-mode-toggle");
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Sign In & Log In Modal
    const modal = document.getElementById("auth-modal");
    const closeBtn = document.querySelector(".close");

    document.getElementById("signin-btn").addEventListener("click", () => {
        openModal("Sign In");
    });

    document.getElementById("login-btn").addEventListener("click", () => {
        openModal("Log In");
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    function openModal(title) {
        document.getElementById("modal-title").textContent = title;
        modal.style.display = "flex";
    }
});
 
