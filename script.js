document.addEventListener("DOMContentLoaded", () => {
    // Name Setup
    const videoOverlay = document.getElementById("videoOverlay");
    const saveNameBtn = document.getElementById("saveName");

    saveNameBtn.addEventListener("click", () => {
        const userName = document.getElementById("userName").value;
        if (userName) {
            localStorage.setItem("userName", userName);
            videoOverlay.style.display = "none";
        }
    });

    // Load Active Users (Mock Data)
    const activeUsersTable = document.getElementById("activeUsers");
    const users = [
        { name: "John", posts: 10 },
        { name: "Alice", posts: 8 },
        { name: "Bob", posts: 6 }
    ];

    users.forEach((user, index) => {
        const row = `<tr><td>${index + 1}</td><td>${user.name}</td><td>${user.posts}</td></tr>`;
        activeUsersTable.innerHTML += row;
    });

    // Button Actions
    document.getElementById("adminChat").addEventListener("click", () => {
        alert("Opening admin chat...");
    });

    document.getElementById("groupChat").addEventListener("click", () => {
        alert("Opening group chat...");
    });

    document.getElementById("whatHappenedBtn").addEventListener("click", () => {
        alert("Redirecting to today's updates...");
    });
});
