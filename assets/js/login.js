function loginguru() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "guru1" && password === "guru1") {
        window.location.href = "http://127.0.0.1:5500/halamanguru/dashboard.html";
    } else {
        alert("Masukkan ID dan password yang benar.");
    }
}
