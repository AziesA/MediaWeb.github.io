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


//ganti2 contoh soal

// ganti soal
let ganti_soal = document.querySelectorAll('.button');
let isinya_soal = document.querySelectorAll('.bgisi');

let cnth_soal0 = ['<p>Carilah antiturunan berikut: $\\int{\\frac{3}{4}}dx$</p> <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar Integral $\\int{a}&ensp;dx = ax + c$, maka kita memperoleh:</p> <p>$\\int{\\frac{3}{4}}dx$</p> <p>$=\\frac{3}{4}x + c$</p>'];

let cnth_soal1 = ['<p>Carilah antiturunan berikut: $\\int{\\frac{1}{x^{2}}}dx$</p> <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar integral $\\int{x^n} dx =\\frac{ 1 } { n + 1 } x ^ { n+ 1} + c, n &ne; -1$, maka kita memperoleh:</p> <p> $\\int{\\frac{1}{x^{2}}}dx$</p> <p>$=\\frac{1}{-2}x^{-2+1} +c$</p> <p>$=-x^{-1} + c$</p> <p>$=-\\frac{1}{x} + c$</p>'];

let cnth_soal2 = ['<p><p>Carilah antiturunan berikut: $\\int 3x^{2}$</p> <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar integral $\\int ax^{n}dx=\\frac{1}{n+1}x^{n+1} + c, n &ne; -1$ dan manipulasi aljabar, maka diperoleh:</p> <p>$\\int3x^2$</p> <p>$=\\frac{3}{2+1}x^{2+1} + c$</p> <p>$=\\frac{3}{3}x^{3}$</p> <p>$=x^{3} + c$'];


let kondisi0, kondisi1, kondisi2 = 100;

for (let i = 0; i < ganti_soal.length; i++) {
    ganti_soal[i].addEventListener('click', function () {

        if (i == 0) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal0.length);
            if (acang_angka != kondisi0) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal0[acang_angka];
                kondisi0 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal0.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal0[acang_angka];
                kondisi0 = acang_angka;
            }

        }

        if (i == 1) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal1.length);
            if (acang_angka != kondisi1) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal1[acang_angka];
                kondisi1 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal1.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal1[acang_angka];
                kondisi1 = acang_angka;
            }
        }

        if (i == 2) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal2.length);
            if (acang_angka != kondisi2) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal2[acang_angka];
                kondisi2 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal2.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal2[acang_angka];
                kondisi2 = acang_angka;
            }
        }


        MathJax.typeset();
    })

}