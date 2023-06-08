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
}

//mari mencoba latihan 1
function cekmm1() {
    var soal1 = document.getElementById("smm1");

    if (soal1.value == "9") {
        document.getElementById("smm1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_1() {
    var soal1_1 = document.getElementById("smm1_1");

    if (soal1_1.value == "2") {
        document.getElementById("smm1_1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_2() {
    var soal1_2 = document.getElementById("smm1_2");

    if (soal1_2.value == "6") {
        document.getElementById("smm1_2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_3() {
    var soal1_3 = document.getElementById("smm1_3");

    if (soal1_3.value == "12") {
        document.getElementById("smm1_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_4() {
    var soal1_4 = document.getElementById("smm1_4");

    if (soal1_4.value == "1000" || soal1_4.value == "1.000") {
        document.getElementById("smm1_4").style = "border:3px solid green; width:120px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_4").style = "border:3px solid red; width:120px;height: 30px; text-align:center";
    }
}

function cekmm1_5() {
    var soal1_5 = document.getElementById("smm1_5");

    if (soal1_5.value == "3002988112" || soal1_5.value == "3.002.988.112") {
        document.getElementById("smm1_5").style = "border:3px solid green; width:130px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_5").style = "border:3px solid red; width:130px;height: 30px; text-align:center";
    }
}

function cekmm1_6() {
    var soal1_6 = document.getElementById("smm1_6");

    if (soal1_6.value == "9") {
        document.getElementById("smm1_6").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_6").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_7() {
    var soal1_7 = document.getElementById("smm1_7");

    if (soal1_7.value == "2") {
        document.getElementById("smm1_7").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_7").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_8() {
    var soal1_8 = document.getElementById("smm1_8");

    if (soal1_8.value == "6") {
        document.getElementById("smm1_8").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_8").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_9() {
    var soal1_9 = document.getElementById("smm1_9");

    if (soal1_9.value == "12") {
        document.getElementById("smm1_9").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_9").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_10() {
    var soal1_10 = document.getElementById("smm1_10");

    if (soal1_10.value == "3") {
        document.getElementById("smm1_10").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_10").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_11() {
    var soal1_11 = document.getElementById("smm1_11");

    if (soal1_11.value == "3") {
        document.getElementById("smm1_11").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_11").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_12() {
    var soal1_12 = document.getElementById("smm1_12");

    if (soal1_12.value == "3") {
        document.getElementById("smm1_12").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_12").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_13() {
    var soal1_13 = document.getElementById("smm1_13");

    if (soal1_13.value == "2") {
        document.getElementById("smm1_13").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_13").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

var benar = 0;
function cekhasil1() {
    var hasil1 = document.getElementById("hasil1");

    if (hasil1.value == "12") {
        document.getElementById("hasil1").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil1").value;
        document.getElementById("fixhasil1").innerHTML = '<span> $ 3Q^{3} + 3Q^{2} - 12Q + k $ </span>';
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekhasil1_1() {
    var hasil1_1 = document.getElementById("hasil1_1");

    if (hasil1_1.value == "1000" || hasil1_1.value == "1.000") {
        document.getElementById("hasil1_1").style = "border:3px solid green; width:140px;height: 30px; text-align:center";
        var hasil1_1 = document.getElementById("hasil1_1").value;
        document.getElementById("fixhasil1_1").innerHTML = '<span> $ 1.000 $ </span>';
        document.getElementById("fixhasil1_1_1").innerHTML = '<span> $ 1.000 $ </span>';
        document.getElementById("fixhasil1_1_2").innerHTML = '<span> $ 1.000 $ </span>';

        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1_1").style = "border:3px solid red; width:140px;height: 30px; text-align:center";
    }
}

function hapusdisabled1() {
    if (benar == 0) {
        document.getElementById("hasil1").classList.remove('inputdisabled');
        document.getElementById("hasil1_1").classList.remove('inputdisabled');
    }
}

function cekmm1_14() {
    var soal1_14 = document.getElementById("smm1_14");

    if (soal1_14.value == "3002988112" || soal1_14.value == "3.002.988.112") {
        document.getElementById("smm1_14").style = "border:3px solid green; width:140px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_14").style = "border:3px solid red; width:140px;height: 30px; text-align:center";
    }
}

function cekmm1_15() {
    var soal1_15 = document.getElementById("smm1_15");

    if (soal1_15.value == "3") {
        document.getElementById("smm1_15").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_15").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_16() {
    var soal1_16 = document.getElementById("smm1_16");

    if (soal1_16.value == "3") {
        document.getElementById("smm1_16").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_16").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_17() {
    var soal1_17 = document.getElementById("smm1_17");

    if (soal1_17.value == "3") {
        document.getElementById("smm1_17").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_17").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_18() {
    var soal1_18 = document.getElementById("smm1_18");

    if (soal1_18.value == "2") {
        document.getElementById("smm1_18").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_18").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm1_19() {
    var soal1_19 = document.getElementById("smm1_19");

    if (soal1_19.value == "12") {
        document.getElementById("smm1_19").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1_19").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil1_2() {
    var hasil1_2 = document.getElementById("hasil1_2");

    if (hasil1_2.value == "112") {
        document.getElementById("hasil1_2").style = "border:3px solid green; width:140px;height: 30px; text-align:center";
        var hasil1_2 = document.getElementById("hasil1_2").value;
        document.getElementById("fixhasil1_2").innerHTML = '<span> $ 3Q^{3} + 3Q^{2} - 12Q + 112 $ </span>';

        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1_2").style = "border:3px solid red; width:140px;height: 30px; text-align:center";
    }
}