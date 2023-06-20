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
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
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
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
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
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: empat();");
    document.getElementById("prev").setAttribute("onClick", "javascript: dua();");

    // Hapus kelas "active" dari semua elemen <li>
    const listItems = document.querySelectorAll('.page-item');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman tiga
    document.getElementById('btntiga').parentElement.classList.add('active');

}

function empat() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('active');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("prev").setAttribute("onClick", "javascript: tiga();");
    document.getElementById("mnext").hidden = false;

    // Hapus kelas "active" dari semua elemen <li>
    const listItems = document.querySelectorAll('.page-item');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman empat
    document.getElementById('btnempat').parentElement.classList.add('active');


}


//Tahapan mari mengamati
let bgny = document.querySelectorAll('.mm1');
let bgny1 = document.querySelectorAll('.mm2');
let bgny2 = document.querySelectorAll('.mm3');
let jad = document.querySelectorAll('.auu');
let tmblny = document.querySelector('.tmb_mm1');
let tmblny1 = document.querySelector('.tmb_mm2');
let tmblny2 = document.querySelector('.tmb_mm3');
let kond1 = 0;
let kond2 = 0;
let kond3 = 0;
tmblny.addEventListener('click', function () {
    if (kond1 == 0) {
        kond1 += 1;
        bgny[0].className = bgny[0].className.replace('hilang1', '');
        tmblny.innerText = "Jawab";
    } else if (kond1 == 1) {
        kond1 += 1;
        bgny[1].className = bgny[1].className.replace('hilang1', '');
        tmblny.innerText = "Jawab";
    } else if (kond1 == 2) {
        kond1 += 1;
        bgny[2].className = bgny[2].className.replace('hilang1', '');
        tmblny.innerText = "Hasil";
    } else if (kond1 == 3) {
        bgny[3].className = bgny[3].className.replace('hilang1', '');
        tmblny.className += ' hilang1';
        jad[4].className = jad[4].className.replace('hilang1', '');
    }
})

tmblny1.addEventListener('click', function () {
    if (kond2 == 0) {
        kond2 += 1;
        bgny1[0].className = bgny1[0].className.replace('hilang1', '');
        tmblny1.innerText = "Jawab";
    } else if (kond2 == 1) {
        kond2 += 1;
        bgny1[1].className = bgny1[1].className.replace('hilang1', '');
        tmblny1.innerText = "Jawab";
    } else if (kond2 == 2) {
        kond2 += 1;
        bgny1[2].className = bgny1[2].className.replace('hilang1', '');
        tmblny1.innerText = "Hasil";
    } else if (kond2 == 3) {
        bgny1[3].className = bgny1[3].className.replace('hilang1', '');
        tmblny1.className += ' hilang1';
        jad[4].className = jad[4].className.replace('hilang1', '');
    }
})

tmblny2.addEventListener('click', function () {
    if (kond3 == 0) {
        kond3 += 1;
        bgny2[0].className = bgny2[0].className.replace('hilang1', '');
        tmblny2.innerText = "Jawab";
    } else if (kond3 == 1) {
        kond3 += 1;
        bgny2[1].className = bgny2[1].className.replace('hilang1', '');
        tmblny2.innerText = "Jawab";
    } else if (kond3 == 2) {
        kond3 += 1;
        bgny2[2].className = bgny2[2].className.replace('hilang1', '');
        tmblny2.innerText = "Hasil";
    } else if (kond3 == 3) {
        bgny2[3].className = bgny2[3].className.replace('hilang1', '');
        tmblny2.className += ' hilang1';
        jad[4].className = jad[4].className.replace('hilang1', '');
    }
})



// tahapan contoh soal
let bgnya = document.querySelectorAll('.cth1');
let bgnya1 = document.querySelectorAll('.cth2');
let bgnya2 = document.querySelectorAll('.cth3');
let jadi = document.querySelectorAll('.aau');
let tmblnya = document.querySelector('.tmb_cth1');
let tmblnya1 = document.querySelector('.tmb_cth2');
let tmblnya2 = document.querySelector('.tmb_cth3');
let kondisi1 = 0;
let kondisi2 = 0;
let kondisi3 = 0;
tmblnya.addEventListener('click', function () {
    if (kondisi1 == 0) {
        kondisi1 += 1;
        bgnya[0].className = bgnya[0].className.replace('hilang1', '');
        tmblnya.innerText = "Jawab";
    } else if (kondisi1 == 1) {
        kondisi1 += 1;
        bgnya[1].className = bgnya[1].className.replace('hilang1', '');
        tmblnya.innerText = "Hasil";
    } else if (kondisi1 == 2) {
        bgnya[2].className = bgnya[2].className.replace('hilang1', '');
        tmblnya.className += ' hilang1';
        jadi[3].className = jadi[3].className.replace('hilang1', '');
    }
})

tmblnya1.addEventListener('click', function () {
    if (kondisi2 == 0) {
        kondisi2 += 1;
        bgnya1[0].className = bgnya1[0].className.replace('hilang1', '');
        tmblnya1.innerText = "Jawab";
    } else if (kondisi2 == 1) {
        kondisi2 += 1;
        bgnya1[1].className = bgnya1[1].className.replace('hilang1', '');
        tmblnya1.innerText = "Jawab";
    } else if (kondisi2 == 2) {
        kondisi2 += 1;
        bgnya1[2].className = bgnya1[2].className.replace('hilang1', '');
        tmblnya1.innerText = "Hasil";
    } else if (kondisi2 == 3) {
        bgnya1[3].className = bgnya1[3].className.replace('hilang1', '');
        tmblnya1.className += ' hilang1';
        jadi[4].className = jadi[4].className.replace('hilang1', '');
    }
})


tmblnya2.addEventListener('click', function () {
    if (kondisi3 == 0) {
        kondisi3 += 1;
        bgnya2[0].className = bgnya2[0].className.replace('hilang1', '');
        tmblnya2.innerText = "Jawab";
    } else if (kondisi3 == 1) {
        kondisi3 += 1;
        bgnya2[1].className = bgnya2[1].className.replace('hilang1', '');
        tmblnya2.innerText = "Jawab";
    } else if (kondisi3 == 2) {
        kondisi3 += 1;
        bgnya2[2].className = bgnya2[2].className.replace('hilang1', '');
        tmblnya2.innerText = "Jawab";
    } else if (kondisi3 == 3) {
        kondisi3 += 1;
        bgnya2[3].className = bgnya2[3].className.replace('hilang1', '');
        tmblnya2.innerText = "Jawab";
    } else if (kondisi3 == 4) {
        kondisi3 += 1;
        bgnya2[4].className = bgnya2[4].className.replace('hilang1', '');
        tmblnya2.innerText = "Hasil";
    } else if (kondisi3 == 5) {
        bgnya2[5].className = bgnya2[5].className.replace('hilang1', '');
        tmblnya2.className += ' hilang1';
        jadi[5].className = jadi[5].className.replace('hilang1', '');
    }
})



//mari mencoba latihan 1
var benar = 0
function cekmm1() {
    var soal = document.getElementById("smm1");

    if (soal.value == "4") {
        document.getElementById("smm1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_1() {
    var soal1 = document.getElementById("mm1_1");
    if (soal1.value == "4") {
        document.getElementById("mm1_1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_2() {
    var soal1_1 = document.getElementById("mm1_2");
    if (soal1_1.value == "3") {
        document.getElementById("mm1_2").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_2").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_3() {
    var soal1_2 = document.getElementById("mm1_3");
    if (soal1_2.value == "1") {
        document.getElementById("mm1_3").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_3").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm1_4() {
    var soal1_3 = document.getElementById("mm1_4");
    if (soal1_3.value == "4") {
        document.getElementById("mm1_4").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_4").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_5() {
    var soal1_4 = document.getElementById("mm1_5");
    if (soal1_4.value == "4") {
        document.getElementById("mm1_5").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_5").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_6() {
    var soal1_5 = document.getElementById("mm1_6");
    if (soal1_5.value == "4") {
        document.getElementById("mm1_6").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_6").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_7() {
    var soal1_6 = document.getElementById("mm1_7");
    if (soal1_6.value == "1") {
        document.getElementById("mm1_7").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_7").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_8() {
    var soal1_7 = document.getElementById("mm1_8");
    if (soal1_7.value == "4") {
        document.getElementById("mm1_8").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_8").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_9() {
    var soal1_8 = document.getElementById("mm1_9");
    if (soal1_8.value == "4") {
        document.getElementById("mm1_9").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_9").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_10() {
    var soal1_9 = document.getElementById("mm1_10");
    if (soal1_9.value == "3") {
        document.getElementById("mm1_10").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_10").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_11() {
    var soal1_10 = document.getElementById("mm1_11");
    if (soal1_10.value == "1") {
        document.getElementById("mm1_11").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_11").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_12() {
    var soal1_11 = document.getElementById("mm1_12");
    if (soal1_11.value == "4") {
        document.getElementById("mm1_12").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1_12").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekhasil1() {
    var hasil = document.getElementById("hasil1");

    if (hasil.value == "4") {
        document.getElementById("hasil1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{1}{4}x^4$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil").innerHTML = '<span class="alert alert-danger text-hitam"><b>Jawaban Salah</b></span>';
    }

}

function hapusdisabled1() {
    if (benar == 0) {
        document.getElementById("hasil1").classList.remove('inputdisabled');
    }
}


//mari mencoba 2
var benar = 0
function cekmm2() {
    var soal2 = document.getElementById("smm2");

    if (soal2.value == "6") {
        document.getElementById("smm2").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_1() {
    var soal2_1 = document.getElementById("smm2_1");

    if (soal2_1.value == "6") {
        document.getElementById("smm2_1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_2() {
    var soal2_2 = document.getElementById("smm2_2");

    if (soal2_2.value == "5") {
        document.getElementById("smm2_2").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_2").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_3() {
    var soal2_3 = document.getElementById("smm2_3");

    if (soal2_3.value == "1") {
        document.getElementById("smm2_3").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_3").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_4() {
    var soal2_4 = document.getElementById("smm2_4");

    if (soal2_4.value == "6") {
        document.getElementById("smm2_4").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_4").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_5() {
    var soal2_5 = document.getElementById("smm2_5");

    if (soal2_5.value == "6") {
        document.getElementById("smm2_5").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_5").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_6() {
    var soal2_6 = document.getElementById("smm2_6");

    if (soal2_6.value == "1") {
        document.getElementById("smm2_6").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_6").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_7() {
    var soal2_7 = document.getElementById("smm2_7");

    if (soal2_7.value == "6") {
        document.getElementById("smm2_7").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_7").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_8() {
    var soal2_8 = document.getElementById("smm2_8");

    if (soal2_8.value == "6") {
        document.getElementById("smm2_8").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_8").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_8_1() {
    var soal2_8_1 = document.getElementById("smm2_8_1");

    if (soal2_8_1.value == "5") {
        document.getElementById("smm2_8_1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_8_1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_9() {
    var soal2_9 = document.getElementById("smm2_9");

    if (soal2_9.value == "1") {
        document.getElementById("smm2_9").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_9").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_10() {
    var soal2_10 = document.getElementById("smm2_10");

    if (soal2_10.value == "6") {
        document.getElementById("smm2_10").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_10").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil2() {
    var hasil2 = document.getElementById("hasil2");

    if (hasil2.value == "6") {
        document.getElementById("hasil2").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil2").innerHTML = "<span>$\\frac{1}{6}x^{6}$</span>";

        MathJax.typeset();
    }
    else {
        document.getElementById("hasil2").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_11() {
    var soal2_11 = document.getElementById("smm2_11");

    if (soal2_11.value == "3") {
        document.getElementById("smm2_11").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_11").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_12() {
    var soal2_12 = document.getElementById("smm2_12");

    if (soal2_12.value == "3") {
        document.getElementById("smm2_12").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_12").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_13() {
    var soal2_13 = document.getElementById("smm2_13");

    if (soal2_13.value == "1") {
        document.getElementById("smm2_13").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_13").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_14() {
    var soal2_14 = document.getElementById("smm2_14");

    if (soal2_14.value == "6") {
        document.getElementById("smm2_14").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_14").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_15() {
    var soal2_15 = document.getElementById("smm2_15");

    if (soal2_15.value == "6") {
        document.getElementById("smm2_15").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_15").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_16() {
    var soal2_16 = document.getElementById("smm2_16");

    if (soal2_16.value == "3") {
        document.getElementById("smm2_16").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_16").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_17() {
    var soal2_17 = document.getElementById("smm2_17");

    if (soal2_17.value == "6") {
        document.getElementById("smm2_17").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_17").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_18() {
    var soal2_18 = document.getElementById("smm2_18");

    if (soal2_18.value == "6") {
        document.getElementById("smm2_18").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_18").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_19() {
    var soal2_19 = document.getElementById("smm2_19");

    if (soal2_19.value == "1") {
        document.getElementById("smm2_19").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_19").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_20() {
    var soal2_20 = document.getElementById("smm2_20");

    if (soal2_20.value == "2") {
        document.getElementById("smm2_20").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_20").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekhasil2_1() {
    var hasil2_1 = document.getElementById("hasil2_1");

    if (hasil2_1.value == "6") {
        document.getElementById("hasil2_1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil2_1").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{1}{2}x^6$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil2_1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil2_1").innerHTML = '<span class="alert alert-danger text-hitam"><b>Jawaban Salah</b></span>';
    }
}



function hapusdisabled2() {
    if (benar == 0) {
        document.getElementById("hasil2").classList.remove('inputdisabled');
        document.getElementById("hasil2_1").classList.remove('inputdisabled');
    }
}

//mari mencoba latihan 3
var benar = 0;
function cekmm3() {
    var soal3 = document.getElementById("smm3");

    if (soal3.value == "5") {
        document.getElementById("smm3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_1() {
    var soal3_1 = document.getElementById("smm3_1");

    if (soal3_1.value == "1") {
        document.getElementById("smm3_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3() {
    var hasil3 = document.getElementById("hasil3");

    if (hasil3.value == "2") {
        document.getElementById("hasil3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3").innerHTML = '<span><b>$x^{-\\frac{1}{2}}$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_2() {
    var soal3_2 = document.getElementById("smm3_2");

    if (soal3_2.value == "1") {
        document.getElementById("smm3_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekhasil3_1() {
    var hasil3_1 = document.getElementById("hasil3_1");

    if (hasil3_1.value == "2") {
        document.getElementById("hasil3_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3_1").innerHTML = '<span><b>$x^{\\frac{1}{2}}$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}



function cekmm3_3() {
    var soal3_3 = document.getElementById("smm3_3");

    if (soal3_3.value == "1") {
        document.getElementById("smm3_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_4() {
    var soal3_4 = document.getElementById("smm3_4");

    if (soal3_4.value == "2") {
        document.getElementById("smm3_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_5() {
    var soal3_5 = document.getElementById("smm3_5");

    if (soal3_5.value == "1") {
        document.getElementById("smm3_5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_6() {
    var soal3_6 = document.getElementById("smm3_6");

    if (soal3_6.value == "2") {
        document.getElementById("smm3_6").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_6").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_7() {
    var soal3_7 = document.getElementById("smm3_7");

    if (soal3_7.value == "1") {
        document.getElementById("smm3_7").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_7").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_8() {
    var soal3_8 = document.getElementById("smm3_8");

    if (soal3_8.value == "2") {
        document.getElementById("smm3_8").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_8").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_9() {
    var soal3_9 = document.getElementById("smm3_9");

    if (soal3_9.value == "2") {
        document.getElementById("smm3_9").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_9").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_10() {
    var soal3_10 = document.getElementById("smm3_10");

    if (soal3_10.value == "1") {
        document.getElementById("smm3_10").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_10").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_11() {
    var soal3_11 = document.getElementById("smm3_11");

    if (soal3_11.value == "2") {
        document.getElementById("smm3_11").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_11").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_12() {
    var soal3_12 = document.getElementById("smm3_12");

    if (soal3_12.value == "2") {
        document.getElementById("smm3_12").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_12").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_13() {
    var soal3_13 = document.getElementById("smm3_13");

    if (soal3_13.value == "1") {
        document.getElementById("smm3_13").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_13").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_14() {
    var soal3_14 = document.getElementById("smm3_14");

    if (soal3_14.value == "2") {
        document.getElementById("smm3_14").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_14").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_15() {
    var soal3_15 = document.getElementById("smm3_15");

    if (soal3_15.value == "1") {
        document.getElementById("smm3_15").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_15").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_16() {
    var soal3_16 = document.getElementById("smm3_16");

    if (soal3_16.value == "2") {
        document.getElementById("smm3_16").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_16").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_17() {
    var soal3_17 = document.getElementById("smm3_17");

    if (soal3_17.value == "2") {
        document.getElementById("smm3_17").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_17").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_18() {
    var soal3_18 = document.getElementById("smm3_18");

    if (soal3_18.value == "1") {
        document.getElementById("smm3_18").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_18").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3_2() {
    var hasil3_2 = document.getElementById("hasil3_2");

    if (hasil3_2.value == "2") {
        document.getElementById("hasil3_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3_2").innerHTML = '<span><b>$x^{-\\frac{1}{2}}$</b></span>';
        document.getElementById("fixhasil3_2_1").innerHTML = '<spa><b>$2x^{\\frac{1}{2}}$</b></spa>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_19() {
    var soal3_19 = document.getElementById("smm3_19");

    if (soal3_19.value == "5") {
        document.getElementById("smm3_19").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_19").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3_3() {
    var hasil3_3 = document.getElementById("hasil3_3");

    if (hasil3_3.value == "5") {
        document.getElementById("hasil3_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3_3").innerHTML = '<span><b>$2x^{\\frac{1}{2}}$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_20() {
    var soal3_20 = document.getElementById("smm3_20");

    if (soal3_20.value == "10") {
        document.getElementById("smm3_20").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_20").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_21() {
    var soal3_21 = document.getElementById("smm3_21");

    if (soal3_21.value == "1") {
        document.getElementById("smm3_21").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_21").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3_4() {
    var hasil3_4 = document.getElementById("hasil3_4");

    if (hasil3_4.value == "2") {
        document.getElementById("hasil3_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3_4").innerHTML = ' <span><b>$10x^{\\frac{1}{2}}$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_22() {
    var soal3_22 = document.getElementById("smm3_22");

    if (soal3_22.value == "10") {
        document.getElementById("smm3_22").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_22").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3_5() {
    var hasil3_5 = document.getElementById("hasil3_5");

    if (hasil3_5.value == "x") {
        document.getElementById("hasil3_5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3_5").innerHTML = ' <span class="alert alert-success text-hitam"><b>$10\\sqrt{x}$</b></span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3_5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}



function hapusdisabled3() {
    if (benar == 0) {
        document.getElementById("hasil2").classList.remove('inputdisabled');
        document.getElementById("hasil2_1").classList.remove('inputdisabled');
    }
}