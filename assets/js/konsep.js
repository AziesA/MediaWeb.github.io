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

// tahapan contoh soal
let bgnya = document.querySelectorAll('.cth1');
let bgnya1 = document.querySelectorAll('.krng');
let jadi = document.querySelectorAll('.aau');
let tmblnya = document.querySelector('.tmb_cth1');
let tmblnya1 = document.querySelector('.tmb_pngrangan');
let kondisi1 = 0;
let kondisi2 = 0;
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
        tmblnya1.innerText = "Kumpulkan Suku Sejenis";
    } else if (kondisi2 == 1) {
        kondisi2 += 1;
        bgnya1[1].className = bgnya1[1].className.replace('hilang1', '');
        tmblnya1.innerText = "Operasikan Suku Sejenis";
    } else if (kondisi2 == 2) {
        bgnya1[2].className = bgnya1[2].className.replace('hilang1', '');
        bgnya1[3].className = bgnya1[3].className.replace('hilang1', '');
        tmblnya1.className += ' hilang1';
        jadi[3].className = jadi[3].className.replace('hilang1', '');
    }
})