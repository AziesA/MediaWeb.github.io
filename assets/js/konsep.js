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



//mari mencoba
var benar = 0
function cekmm1() {
    var soal = document.getElementById("mm1");

    if (soal.value == "4") {
        document.getElementById("mm1").style = "border:2px solid green; width:30px;height: 30px; text-align:center";
        benar = 0;
    }
    else {
        document.getElementById("mm1").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
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
        document.getElementById("mm1_9").style = "border:2px solid red; width:30px;height: 30px; text-align:center";
    }
}

var png1 = document.getElementById("pngk1")



function hapusdisabled1() {
    if (benar == 0) {
        document.getElementById("t3").classList.remove('inputdisabled');
    }
}

