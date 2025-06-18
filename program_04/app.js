// Register the Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker Registered', reg))
        .catch(err => console.error('Service Worker Registration Failed', err));
}

// Save credentials to localStorage
localStorage.setItem("username", "rvce");
localStorage.setItem("passme1", "rvce");

// Function to verify the credentials
function verify() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("passme1");

    if (username === storedUsername && password === storedPassword) {
        alert("Authentication Successful");
    } else {
        alert("Authentication Failed");
    }
}
