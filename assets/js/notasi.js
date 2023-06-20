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
function cekhasil1() {
    var hasil1 = document.getElementById("hasil1");

    if (hasil1.value == "10") {
        document.getElementById("hasil1").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil1").value;
        document.getElementById("fixhasil1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{10}{10}x^{10}$</span>';
        document.getElementById("fixhasil1_1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{10}{9+1}x^{9+1}$</span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}

var benar = 0
function cekmm2_0() {
    var soal2_0 = document.getElementById("smm2_0");

    if (soal2_0.value == "-36") {
        document.getElementById("smm2_0").style = "border:3px solid green; width:35px;height: 35px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_0").style = "border:3px solid red; width:35px;height: 35px; text-align:center";
    }
}

function cekhasil2() {
    var hasil2 = document.getElementById("hasil2");

    if (hasil2.value == "11") {
        document.getElementById("hasil2").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil2 = document.getElementById("hasil2").value;
        document.getElementById("fixhasil2").innerHTML = '<span class="alert alert-success text-hitam">$-36x^{11}$</span>';
        document.getElementById("fixhasil2_1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{-36}{12}x^{12}$</span>';
        document.getElementById("fixhasil2_2").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{-36}{11+1}x^{1+1}$</span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil2").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}



function cekmm2() {
    var soal2 = document.getElementById("smm2");

    if (soal2.value == "-36") {
        document.getElementById("smm2").style = "border:3px solid green; width:35px;height: 35px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2").style = "border:3px solid red; width:35px;height: 35px; text-align:center";
    }
}

function cekmm2_1() {
    var soal2_1 = document.getElementById("smm2_1");

    if (soal2_1.value == "11") {
        document.getElementById("smm2_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_2() {
    var soal2_2 = document.getElementById("smm2_2");

    if (soal2_2.value == "1") {
        document.getElementById("smm2_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_3() {
    var soal2_3 = document.getElementById("smm2_3");

    if (soal2_3.value == "11") {
        document.getElementById("smm2_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_4() {
    var soal2_4 = document.getElementById("smm2_4");

    if (soal2_4.value == "1") {
        document.getElementById("smm2_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}



function cekmm3() {
    var soal3 = document.getElementById("smm3");

    if (soal3.value == "4") {
        document.getElementById("smm3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3() {
    var hasil3 = document.getElementById("hasil3");

    if (hasil3.value == "3") {
        document.getElementById("hasil3").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil3 = document.getElementById("hasil3").value;
        document.getElementById("fixhasil3").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{12}{3}x^{3}$</span>';
        document.getElementById("fixhasil3_1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{12}{2+1}x^{2+1}$</span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}


function cekmm4() {
    var soal4 = document.getElementById("smm4");

    if (soal4.value == "-15") {
        document.getElementById("smm4").style = "border:3px solid green; width:35px;height: 35px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4").style = "border:3px solid red; width:35px;height: 35px; text-align:center";
    }
}

function cekmm4_1() {
    var soal4_1 = document.getElementById("smm4_1");

    if (soal4_1.value == "4") {
        document.getElementById("smm4_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_2() {
    var soal4_2 = document.getElementById("smm4_2");

    if (soal4_2.value == "20") {
        document.getElementById("smm4_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil4() {
    var hasil4 = document.getElementById("hasil4");

    if (hasil4.value == "4") {
        document.getElementById("hasil4").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil4 = document.getElementById("hasil4").value;
        document.getElementById("fixhasil4").innerHTML = '<span class="alert alert-success text-hitam">$20x^4 $ </span>';
        document.getElementById("fixhasil4_1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{20}{5}x^{5}$</span>';
        document.getElementById("fixhasil4_2").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{20}{4+1}x^{4+1}$</span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil4").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }
}

function cekmm4_3() {
    var soal4_3 = document.getElementById("smm4_3");

    if (soal4_3.value == "20") {
        document.getElementById("smm4_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_4() {
    var soal4_4 = document.getElementById("smm4_4");

    if (soal4_4.value == "4") {
        document.getElementById("smm4_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_5() {
    var soal4_5 = document.getElementById("smm4_5");

    if (soal4_5.value == "1") {
        document.getElementById("smm4_5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_6() {
    var soal4_6 = document.getElementById("smm4_6");

    if (soal4_6.value == "4") {
        document.getElementById("smm4_6").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_6").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_7() {
    var soal4_7 = document.getElementById("smm4_7");

    if (soal4_7.value == "1") {
        document.getElementById("smm4_7").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_7").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_7() {
    var soal4_7 = document.getElementById("smm4_7");

    if (soal4_7.value == "1") {
        document.getElementById("smm4_7").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_7").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm5() {
    var soal5 = document.getElementById("smm5");

    if (soal5.value == "2") {
        document.getElementById("smm5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm5_1() {
    var soal5_1 = document.getElementById("smm5_1");

    if (soal5_1.value == "1") {
        document.getElementById("smm5_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm5_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil5() {
    var hasil5 = document.getElementById("hasil5");

    if (hasil5.value == "3") {
        document.getElementById("hasil5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        var hasil5 = document.getElementById("hasil5").value;
        document.getElementById("fixhasil5").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{2}{3}x^{-\\frac{2}{3}} $ </span>';
        document.getElementById("fixhasil5_1").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{6}{3}x^{\\frac{1}{3}} $ </span>';
        document.getElementById("fixhasil5_2").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{\\frac{2}{3}}{\\frac{1}{3}}x^{\\frac{1}{3}} $ </span>';
        document.getElementById("fixhasil5_3").innerHTML = '<span class="alert alert-success text-hitam">$\\frac{\\frac{2}{3}}{-\\frac{2}{3}+1}x^{\\frac{2}{3}+1} $ </span>';

        MathJax.typeset();
    }
    else {
        document.getElementById("hasil5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}
