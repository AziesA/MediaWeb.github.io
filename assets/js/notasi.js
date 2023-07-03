//tombol selanjut dan sebelum
function satu() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua();");

    const listItems = document.querySelectorAll('.page-item');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman satu
    document.getElementById('btnsatu').parentElement.classList.add('active');


}

function dua() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: tiga();");
    document.getElementById("prev").setAttribute("onClick", "javascript: satu();");

    // Hapus kelas "active" dari semua elemen <li>
    const listItems = document.querySelectorAll('.page-item');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman dua
    document.getElementById('btndua').parentElement.classList.add('active');


}

function tiga() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
    document.getElementById("mnext").hidden = false;

    // Hapus kelas "active" dari semua elemen <li>
    const listItems = document.querySelectorAll('.page-item');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman tiga
    document.getElementById('btntiga').parentElement.classList.add('active');



}

/*-----------------------------------------------------------------------------------------------------------------------------*/
//mari mencoba latihan
//mari mencoba latihan 3

function cekmm1() {

    var soal1 = document.getElementById("mm1");

    if (soal1.value === "10") {
        document.getElementById("mm1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil1").innerHTML = '<span class="alert alert-success text-hitam">Jawaban Benar</span>';
    }
    else {
        document.getElementById("mm1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil1").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah</span>';

    }
}


function cekmm2() {
    var soal1 = document.getElementById("mm2");
    var soal2 = document.getElementById("mm2_1");
    var soal3 = document.getElementById("mm2_2");
    var fixhasil2 = document.getElementById("fixhasil2");

    if (soal1.value === "-36" && soal2.value === "11" && soal3.value === "11") {
        soal1.style.border = "3px solid green";
        soal2.style.border = "3px solid green";
        soal3.style.border = "3px solid green";
        fixhasil2.innerHTML = '<span class="alert alert-success text-hitam"> Jawaban Benar </span>';
    } else if (soal1.value !== "" && soal2.value !== "" && soal3.value !== "") {
        soal1.style.border = "3px solid red";
        soal2.style.border = "3px solid red";
        soal3.style.border = "3px solid red";
        fixhasil2.innerHTML = '<span class="alert alert-danger text-hitam"> Jawaban Salah </span>';
    }
}

function cekmm3() {
    var soal1 = document.getElementById("mm3");
    var soal2 = document.getElementById("mm3_1");
    var fixhasil3 = document.getElementById("fixhasil3");

    if (soal1.value === "4" && soal2.value === "3") {
        soal1.style.border = "3px solid green";
        soal2.style.border = "3px solid green";
        fixhasil3.innerHTML = '<span class="alert alert-success text-hitam"> Jawaban Benar </span>';
    } else if (soal1.value !== "" && soal2.value !== "") {
        soal1.style.border = "3px solid red";
        soal2.style.border = "3px solid red";
        fixhasil3.innerHTML = '<span class="alert alert-danger text-hitam"> Jawaban Salah </span>';
    }
}

function cekmm4() {
    var soal1 = document.getElementById("mm4");
    var soal2 = document.getElementById("mm4_1");
    var soal3 = document.getElementById("mm4_2");
    var soal4 = document.getElementById("mm4_3");
    var soal5 = document.getElementById("mm4_4");
    var fixhasil4 = document.getElementById("fixhasil4");

    if (soal1.value === "20" && soal2.value === "4" && soal3.value === "1" && soal4.value === "4" && soal5.value === "1") {
        soal1.style.border = "3px solid green";
        soal2.style.border = "3px solid green";
        soal3.style.border = "3px solid green";
        soal4.style.border = "3px solid green";
        soal5.style.border = "3px solid green";
        fixhasil4.innerHTML = '<span class="alert alert-success text-hitam"> Jawaban Benar </span>';
    } else if (soal1.value !== "" && soal2.value !== "" && soal3.value !== "" && soal4.value !== "" && soal5.value !== "") {
        soal1.style.border = "3px solid red";
        soal2.style.border = "3px solid red";
        soal3.style.border = "3px solid green";
        soal4.style.border = "3px solid green";
        soal5.style.border = "3px solid green";
        fixhasil4.innerHTML = '<span class="alert alert-danger text-hitam"> Jawaban Salah </span>';
    }
}

function cekmm5() {
    var soal1 = document.getElementById("mm5");
    var soal2 = document.getElementById("mm5_1");
    var soal3 = document.getElementById("mm5_2");
    var fixhasil5 = document.getElementById("fixhasil5");

    if (soal1.value === "2" && soal2.value === "1" && soal3.value === "3") {
        soal1.style.border = "3px solid green";
        soal2.style.border = "3px solid green";
        soal3.style.border = "3px solid green";
        fixhasil5.innerHTML = '<span class="alert alert-success text-hitam"> Jawaban Benar </span>';
    } else if (soal1.value !== "" && soal2.value !== "" && soal3.value !== "") {
        soal1.style.border = "3px solid red";
        soal2.style.border = "3px solid red";
        soal3.style.border = "3px solid red";
        fixhasil5.innerHTML = '<span class="alert alert-danger text-hitam"> Jawaban Salah </span>';
    }
}



function resetForm() {
    var inputs = document.getElementsByTagName('input');
    var fixhasil = document.getElementsByClassName('fixhasil');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].style.border = '1px solid black';
    }

    for (var j = 0; j < fixhasil.length; j++) {
        fixhasil[j].innerHTML = '<span><input class="input3" disabled></span>';
    }
}

// Tombol reset semua
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetForm);