function periksaJawaban1() {
    var jawaban = document.getElementById("jawabanInput1").value;

    if (jawaban.toLowerCase() === "jakarta") {
        document.getElementById("hasilJawaban").innerHTML = "Jawaban Anda benar! Lanjut ke pertanyaan berikutnya.";
        document.getElementById("pertanyaan1").style.display = "none";
        document.getElementById("pertanyaan2").style.display = "block";
    } else {
        document.getElementById("hasilJawaban").innerHTML = "Jawaban Anda salah. Silakan coba lagi.";
    }
}

function periksaJawaban2() {
    var jawaban = document.getElementById("jawabanInput2").value;

    if (jawaban.toLowerCase() === "oranye") {
        document.getElementById("hasilJawaban").innerHTML = "Jawaban Anda benar! Selamat, Anda telah menyelesaikan pertanyaan.";
        document.getElementById("pertanyaan2").style.display = "none";
    } else {
        document.getElementById("hasilJawaban").innerHTML = "Jawaban Anda salah. Silakan coba lagi.";
    }
}
