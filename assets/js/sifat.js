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



//mari mencoba 2 
//latihan1
function cekjwb1() {
    var a = document.getElementById("a1");
    var b = document.getElementById("b2");
    var c = document.getElementById("c3");
    var d = document.getElementById("c4");
    var e = document.getElementById("a5");

    if (a.checked) {
        document.getElementById("step1").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\int 2x^{4} dx -\\int 4x^{6} dx + \\int 1dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("step1").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (b.checked) {
        document.getElementById("step2").innerHTML = '<span class="alert alert-success text-hitam"><b>$2\\int x^{4}dx - 4\\int x^{6} dx + \\int 1 dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("step2").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (c.checked) {
        document.getElementById("step3").innerHTML = '<span class="alert alert-success text-hitam"><b>$2[\\frac{1}{4+1}x^{4+1}] -  4[\\frac{ 1 } { 6 + 1 } x ^ { 6+1 }]+ x + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("step3").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (d.checked) {
        document.getElementById("step4").innerHTML = '<span class="alert alert-success text-hitam"><b>$2[\\frac{1}{5}x^{5}] - 4[\\frac{ 1 } { 7 } x ^ { 7}]+ x + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("step4").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }
    if (e.checked) {
        document.getElementById("step5").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{2}{5}x^{5} - \\frac{ 4 } { 7 } x ^ { 7}+ x + c$</b > </span > ';
        document.getElementById("step5_1").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{2}{5}x^{5} - \\frac{ 4 } { 7 } x ^ { 7}+ x + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("step5").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

}

//latihan2
function cekjwb2() {
    var a1 = document.getElementById("1b");
    var b1 = document.getElementById("2a");
    var c1 = document.getElementById("3a");
    var d1 = document.getElementById("4c");
    var e1 = document.getElementById("5c");
    var f1 = document.getElementById("6b");
    var g1 = document.getElementById("7a");
    var h1 = document.getElementById("8c");


    if (a1.checked) {
        document.getElementById("1step").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\int3x^2 dx + \\int7\\sqrt{x^{5}} &ensp;dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("1step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (b1.checked) {
        document.getElementById("2step").innerHTML = '<span class="alert alert-success text-hitam"><b>$3\\int x^2 dx + 7\\int\\sqrt{ x ^ { 5} } dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("2step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (c1.checked) {
        document.getElementById("3step").innerHTML = '<span class="alert alert-success text-hitam"><b>$3\\int x^2 dx + 7\\int x^{\\frac{5}{2}} dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("3step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (d1.checked) {
        document.getElementById("4step").innerHTML = '<span class="alert alert-success text-hitam"><b>$3[\\frac{1}{2+1}x^{2+1}] + 7[\\frac{1}{\\frac{5}{2}+1}x^{\\frac{5}{2}+1}] + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("4step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (e1.checked) {
        document.getElementById("5step").innerHTML = '<span class="alert alert-success text-hitam"><b>$3[\\frac{1}{3}x^{3}] + 7[\\frac{1}{\\frac{7}{2}}x^{\\frac{7}{2}}] + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("5step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (f1.checked) {
        document.getElementById("6step").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{3}{3}x^{3} + \\frac{7}{\\frac{7}{2}}x^{\\frac{7}{2}} + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("6step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (g1.checked) {
        document.getElementById("7step").innerHTML = '<span class="alert alert-success text-hitam"><b>$3x^{3} + \\frac{7}{\\frac{7}{2}}x^{\\frac{7}{2}} + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("7step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (h1.checked) {
        document.getElementById("8step").innerHTML = '<span class="alert alert-success text-hitam"><b>$x^{3} + 7x^{3}\\sqrt{x} + c$</b > </span > ';
        document.getElementById("8_1step").innerHTML = '<span class="alert alert-success text-hitam"><b>$x^{3} + 7x^{3}\\sqrt{x} +c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("8step").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

}

//Latihan 3
function cekjwb3() {
    var a_1 = document.getElementById("a_1");
    var b_1 = document.getElementById("c_2");
    var c_1 = document.getElementById("b_3");
    var d_1 = document.getElementById("b_4");
    var e_1 = document.getElementById("a_5");
    var f_1 = document.getElementById("a_6");
    var g_1 = document.getElementById("a_7");

    if (a_1.checked) {
        document.getElementById("stp1").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\int (2x-5)(2x-5)dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp1").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (b_1.checked) {
        document.getElementById("stp2").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\int (4x^2 - 20x + 25)dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp2").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (c_1.checked) {
        document.getElementById("stp3").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\int 4x^2 dx - \\int 20x dx + \\int 25 dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp3").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (d_1.checked) {
        document.getElementById("stp4").innerHTML = '<span class="alert alert-success text-hitam"><b>$4\\int x^2 dx - 20\\int x&ensp; dx + \\int 25 dx$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp4").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (e_1.checked) {
        document.getElementById("stp5").innerHTML = '<span class="alert alert-success text-hitam"><b>$4[\\frac{1}{2+1}x^{2+1}] - 20[\\frac{1}{1+1}x^{1+1}] + 25x +c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp5").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (f_1.checked) {
        document.getElementById("stp6").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{4}{3}x^{3} - \\frac{20}{2}x^{2} + 25x + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp6").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }

    if (g_1.checked) {
        document.getElementById("stp7").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{4}{3} - 10x^{2} + 25x + c$</b > </span > ';
        document.getElementById("stp7_1").innerHTML = '<span class="alert alert-success text-hitam"><b>$\\frac{4}{3} - 10x^{2} + 25x + c$</b > </span > ';
        MathJax.typeset();
    }
    else {
        document.getElementById("stp7").innerHTML = '<span class="alert alert-danger text-hitam">Jawaban Salah </span>';
    }
}