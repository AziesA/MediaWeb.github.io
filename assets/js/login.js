

function loginguru() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "guru1" && password.value === "guru1") {
        window.location.href = "dashboard.html"
    } else {
        alert("masukan id dan password")
    }
}