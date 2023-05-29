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

/*-----------------------------------------------------------------------------------------------------------------------------*/
//mari mencoba latihan
function cekhasil1() {
    var hasil = document.getElementById("hasil1");

    if (hasil.value == "9") {
        document.getElementById("hasil1").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil1").value;
        document.getElementById("fixhasil").innerHTML = "<span>$x^{9}&rarr;\\frac{10}{10}x^{9}&rarr;\\frac{10}{9+1}x^{9+1}$</span>";
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil1").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}

var benar = 0
function cekmm1() {
    var soal = document.getElementById("smm1");

    if (soal.value == "-36") {
        document.getElementById("smm1").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm1").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil2() {
    var hasil1 = document.getElementById("hasil2");

    if (hasil1.value == "11") {
        document.getElementById("hasil2").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil2").value;
        document.getElementById("fixhasil1").innerHTML = "<span>$-36^{11} &rarr; \\frac{-36}{12}x^{12} &rarr; \\frac{-36}{11+1}x^{11+1}$</span>";
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil2").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}

function cekmm2() {
    var soal = document.getElementById("smm2");

    if (soal.value == "12") {
        document.getElementById("smm2").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm2").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil3() {
    var hasil1 = document.getElementById("hasil3");

    if (hasil1.value == "2") {
        document.getElementById("hasil3").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil3").value;
        document.getElementById("fixhasil2").innerHTML = "<span>$12x^{3} &rarr; \\frac{12}{3}x^{3} &rarr; \\frac{12}{2+1}x^{2+1}$</span>";
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil3").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}

function cekmm3() {
    var soal1 = document.getElementById("smm3");

    if (soal1.value == "-15") {
        document.getElementById("smm3").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm3").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm4() {
    var soal2 = document.getElementById("smm4");

    if (soal2.value == "4") {
        document.getElementById("smm4").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm4").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekmm5() {
    var soal3 = document.getElementById("smm5");

    if (soal3.value == "20") {
        document.getElementById("smm5").style = "border:3px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("smm5").style = "border:3px solid red; width:30px;height: 30px; text-align:center";
    }
}

function cekhasil4() {
    var hasil1 = document.getElementById("hasil4");

    if (hasil1.value == "4") {
        document.getElementById("hasil4").style = "border:3px solid green; width:35px;height: 30px; text-align:center";
        var hasil1 = document.getElementById("hasil3").value;
        document.getElementById("fixhasil3").innerHTML = "<span>$-15^{4} + 20x^{4} &rarr; \\frac{-15}x^{5} + \\frac{20}{5}x^{5} &rarr; \\frac{-15}{4+1}x^{4+1} + \\frac{20}{4+1}x^{4+1}$</span>";
        MathJax.typeset();
    }
    else {
        document.getElementById("hasil4").style = "border:3px solid red; width:35px;height: 30px; text-align:center";
    }

}
