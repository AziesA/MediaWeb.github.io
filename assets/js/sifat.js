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
}


// mari menboca 1 latihan 1

var benar = 0;
function cekhasil1() {
    var hasil1 = document.getElementById("hasil1");

    if (hasil1.value == "12x") {
        document.getElementById("hasil1").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil1").value;
        document.getElementById("fixhasil1").innerHTML = '<span class="alert alert-success text-hitam">$12x + c $ </span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
        document.getElementById("fixhasil1").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';

    }
}


function hapusdisabled1() {
    if (benar == 0) {
        document.getElementById("hasil1").classList.remove('inputdisabled');
    }
}

//mari mencoba 1 latihan 2

function cekmm2() {
    var soal2 = document.getElementById("smm2");

    if (soal2.value == "1") {
        document.getElementById("smm2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_1() {
    var soal2_1 = document.getElementById("smm2_1");

    if (soal2_1.value == "-5+1" || soal2_1.value == "-5 + 1") {
        document.getElementById("smm2_1").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_1").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}


function cekmm2_2() {
    var soal2_2 = document.getElementById("smm2_2");

    if (soal2_2.value == "-5+1" || soal2_2.value == "-5 + 1") {
        document.getElementById("smm2_2").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_2").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekmm2_3() {
    var soal2_3 = document.getElementById("smm2_3");

    if (soal2_3.value == "1") {
        document.getElementById("smm2_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_4() {
    var soal2_4 = document.getElementById("smm2_4");

    if (soal2_4.value == "-4") {
        document.getElementById("smm2_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil2() {
    var hasil2 = document.getElementById("hasil2");

    if (hasil2.value == "-4") {
        document.getElementById("hasil2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        var hasil2 = document.getElementById("hasil2").value;
        document.getElementById("fixhasil2").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{1}{-4}x^{-4} + c$</b> </span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil2").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';

    }
}


function hapusdisabled2() {
    if (benar == 0) {
        document.getElementById("hasil2").classList.remove('inputdisabled');
    }
}

//mari mencoba 1 latihan 3
var benar = 0;
function cekmm3() {
    var soal3 = document.getElementById("smm3");

    if (soal3.value == "9") {
        document.getElementById("smm3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm3_1() {
    var soal3_1 = document.getElementById("smm3_1");

    if (soal3_1.value == "-4+1" || soal3_1.value == "-4 + 1") {
        document.getElementById("smm3_1").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_1").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekmm3_2() {
    var soal3_2 = document.getElementById("smm3_2");

    if (soal3_2.value == "-4+1" || soal3_2.value == "-4 + 1") {
        document.getElementById("smm3_2").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_2").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekmm3_3() {
    var soal3_3 = document.getElementById("smm3_3");

    if (soal3_3.value == "9") {
        document.getElementById("smm3_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_4() {
    var soal3_4 = document.getElementById("smm3_4");

    if (soal3_4.value == "-3") {
        document.getElementById("smm3_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_5() {
    var soal3_5 = document.getElementById("smm3_5");

    if (soal3_5.value == "-3") {
        document.getElementById("smm3_5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm3_6() {
    var soal3_6 = document.getElementById("smm3_6");

    if (soal3_6.value == "-3") {
        document.getElementById("smm3_6").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3_6").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3() {
    var hasil3 = document.getElementById("hasil3");

    if (hasil3.value == "-3") {
        document.getElementById("hasil3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        var hasil3 = document.getElementById("hasil3").value;
        document.getElementById("fixhasil3").innerHTML = '<span class="alert alert-success text-hitam"><b>$-3x^{-3} + c$</b> </span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil3").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';

    }
}


function hapusdisabled3() {
    if (benar == 0) {
        document.getElementById("hasil3").classList.remove('inputdisabled');
    }
}

//mari mencobna  latihan 4
function cekmm4() {
    var soal4 = document.getElementById("smm4");

    if (soal4.value == "6") {
        document.getElementById("smm4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
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

    if (soal4_2.value == "2") {
        document.getElementById("smm4_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_3() {
    var soal4_3 = document.getElementById("smm4_3");

    if (soal4_3.value == "6") {
        document.getElementById("smm4_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_4() {
    var soal4_4 = document.getElementById("smm4_4");

    if (soal4_4.value == "2") {
        document.getElementById("smm4_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_5() {
    var soal4_5 = document.getElementById("smm4_5");

    if (soal4_5.value == "6") {
        document.getElementById("smm4_5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm4_6() {
    var soal4_6 = document.getElementById("smm4_6");

    if (soal4_6.value == "2+1" || soal4_6.value == "2 + 1") {
        document.getElementById("smm4_6").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_6").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekmm4_7() {
    var soal4_7 = document.getElementById("smm4_7");

    if (soal4_7.value == "2+1" || soal4_7.value == "2 + 1") {
        document.getElementById("smm4_7").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_7").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}


function cekmm4_8() {
    var soal4_8 = document.getElementById("smm4_8");

    if (soal4_8.value == "6") {
        document.getElementById("smm4_8").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_8").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_9() {
    var soal4_9 = document.getElementById("smm4_9");

    if (soal4_9.value == "3") {
        document.getElementById("smm4_9").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_9").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4_10() {
    var soal4_10 = document.getElementById("smm4_10");

    if (soal4_10.value == "3") {
        document.getElementById("smm4_10").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_10").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm4_11() {
    var soal4_11 = document.getElementById("smm4_11");

    if (soal4_11.value == "3") {
        document.getElementById("smm4_11").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4_11").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekhasil4() {
    var hasil4 = document.getElementById("hasil4");

    if (hasil4.value == "3") {
        document.getElementById("hasil4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        var hasil4 = document.getElementById("hasil4").value;
        document.getElementById("fixhasil4").innerHTML = '<span class="alert alert-success text-hitam"><b>$3x^{3} + c$</b> </span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
        document.getElementById("fixhasil4").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';

    }
}



function hapusdisabled4() {
    if (benar == 0) {
        document.getElementById("hasil3").classList.remove('inputdisabled');
    }
}



