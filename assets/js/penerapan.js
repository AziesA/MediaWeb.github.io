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
