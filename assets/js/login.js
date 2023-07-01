function loginguru() {
    let username1 = document.getElementById("username").value;
    let password1 = document.getElementById("password").value;

    if (username1 === "guru1" && password1 === "guru1") {
        console.log("oke");
        window.location.href = "halamanguru/hasil_belajar.html";
    } else {
        alert("Masukkan ID dan password yang benar.");
    }
}
