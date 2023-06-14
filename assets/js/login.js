function loginguru() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "guru1" && password === "guru1") {
        location.href = "halamanguru/dashboard.html";
    } else {
        alert("Masukkan ID dan password yang benar.");
    }
}
