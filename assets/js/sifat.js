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

    if (soal2.value == "5") {
        document.getElementById("smm2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm2_1() {
    var soal2_1 = document.getElementById("smm2_1");

    if (soal2_1.value == "1+1" || soal2_1.value == "1 + 1") {
        document.getElementById("smm2_1").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_1").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}


function cekmm2_2() {
    var soal2_2 = document.getElementById("smm2_2");

    if (soal2_2.value == "1+1" || soal2_2.value == "1 + 1") {
        document.getElementById("smm2_2").style = "border:3px solid green; width:40px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_2").style = "border:3px solid red; width:40px;height: 30px; text-align:center";
    }
}

function cekmm2_3() {
    var soal2_3 = document.getElementById("smm2_3");

    if (soal2_3.value == "5") {
        document.getElementById("smm2_3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}


function cekmm2_4() {
    var soal2_4 = document.getElementById("smm2_4");

    if (soal2_4.value == "2") {
        document.getElementById("smm2_4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2_4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil2() {
    var hasil2 = document.getElementById("hasil2");

    if (hasil2.value == "2") {
        document.getElementById("hasil2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        var hasil2 = document.getElementById("hasil2").value;
        document.getElementById("fixhasil2").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{5}{2}x^{2} + c$</b> </span>';
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
