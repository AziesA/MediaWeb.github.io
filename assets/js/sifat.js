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

let cnth_soal0 = ['<p>Carilah antiturunan berikut: $\\int{\\frac{3}{4}}dx$</p> <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar Integral $\\int{a}&ensp;dx = ax + c$, maka kita memperoleh:</p> <p>$\\int{\\frac{3}{4}}dx$</p> <p>$=\\frac{3}{4}x + c$</p>', '<p>Carilah antiturunan berikut:$\\int{5}&ensp; dx $</p>  <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar integral $\\int{a}&ensp;dx =ax+ c$, maka kita memperoleh: </p> <p><p>$\\int{5}&ensp; dx$ </p> <p>$= 5x + c$</p></p>'];

let cnth_soal1 = ['<p>Carilah antiturunan berikut: $\\int{\\frac{1}{x^{2}}}dx$</p> <p><b>Penyelesaian:</b></p> <p>Dengan menerapkan rumus dasar integral $\\int{x^n} dx =\\frac{ 1 } { n + 1 } x ^ { n+ 1} + c, n &ne; -1$, maka kita memperoleh:</p> <p> $\\int{\\frac{1}{x^{2}}}dx$</p> <p>$=\\frac{1}{-2}x^{-2+1} +c$</p> <p>$=-x^{-1} + c$</p> <p>$=-\\frac{1}{x} + c$</p>'];

let cnth_soal2 = ['<p>\\[=y^2 \\times y^2\\]</p> <p> \\[ = y ^ {2 + 2}\\] </p> <p > \\[ = y ^ 4\\] </p>', '<p>\\[=x^5 \\times x^3\\]</p> <p> \\[ = x ^ {5 + 3}\\] </p> <p > \\[ = x ^ 8\\] </p>', '<p>\\[=x^3 \\times x\\]</p> <p> \\[ = x ^ {3 + 1}\\] </p> <p > \\[ = x ^ 4\\] </p>', '<p>\\[=x \\times x^2\\]</p> <p> \\[ = x ^ {1 + 2}\\] </p> <p > \\[ = x ^ 3\\] </p>', '<p>\\[=y \\times y\\]</p> <p> \\[ = y ^ {1 + 1}\\] </p> <p > \\[ = y ^ 2\\] </p>'];

let cnth_soal3 = ['<p>\\[=(x^3)^3\\]</p> <p> \\[ = x ^ {3 \\times 3}\\] </p> <p > \\[ = x ^ 9\\] </p>', '<p>\\[=(y)^3\\]</p> <p> \\[ = y ^ {1 \\times 3}\\] </p> <p > \\[ = y ^ 3\\] </p>', '<p>\\[=(x^2)^2\\]</p> <p> \\[ = x ^ {2 \\times 2}\\] </p> <p > \\[ = x ^ 4\\] </p>', '<p>\\[=(y^2)^3\\]</p> <p> \\[ = y ^ {2 \\times 3}\\] </p> <p > \\[ = y^6\\] </p>', '<p>\\[=(x^2)^4\\]</p> <p> \\[ = x^ {2 \\times 4}\\] </p> <p > \\[ = x^8\\] </p>'];

let cnth_soal4 = ['<p>\\[=(x \\times y)^2\\]</p> <p> \\[ = x ^ 2 \\times y^2\\] </p>', '<p>\\[=(y \\times x)^4\\]</p> <p> \\[ = y ^ 4 \\times x^4\\] </p>', '<p>\\[=(x \\times y)^3\\]</p> <p> \\[ = x ^ 3 \\times y^3\\] </p>', '<p>\\[=(y^2 \\times x)^4\\]</p> <p> \\[ = y ^ 8 \\times x^4\\] </p>', '<p>\\[=(y^2 \\times x)^4\\]</p> <p> \\[ = y ^ 8 \\times x^4\\] </p>', '<p>\\[=(y^2 \\times x^3)^2\\]</p> <p> \\[ = y ^4 \\times x^6\\] </p>'];

let cnth_soal5 = ['<p>\\[=x^2 \\times 3x^3\\]</p> <p> \\[ = (1 \\times 3) x ^ {2 + 3}\\] </p> <p> \\[ = 3x ^ 5\\] </p>', '<p>\\[=5x^3 \\times 3x^4\\]</p> <p> \\[ = (5 \\times 3) x ^ {3 + 4}\\] </p> <p> \\[ = 15x ^ 7\\] </p>', '<p>\\[=y^2 \\times 5y^4\\]</p> <p> \\[ = (1 \\times 5) y ^ {2 + 4}\\] </p> <p> \\[ = 5x ^ 6\\] </p>', '<p>\\[=7y^2 \\times 5y^3\\]</p> <p> \\[ = (7 \\times 5) y ^ {2 + 3}\\] </p> <p> \\[ = 35x ^ 5\\] </p>'];


let kondisi0, kondisi1, kondisi2, kondisi3, kondisi4, kondisi5 = 100;

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

        if (i == 3) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal3.length);
            if (acang_angka != kondisi3) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal3[acang_angka];
                kondisi3 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal3.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal3[acang_angka];
                kondisi3 = acang_angka;
            }
        }

        if (i == 4) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal4.length);
            if (acang_angka != kondisi4) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal4[acang_angka];
                kondisi4 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal4.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal4[acang_angka];
                kondisi4 = acang_angka;
            }
        }

        if (i == 5) {
            // console.log(Math.floor(Math.random() * cnth_soal0.length));
            let acang_angka = Math.floor(Math.random() * cnth_soal5.length);
            if (acang_angka != kondisi5) {
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal5[acang_angka];
                kondisi5 = acang_angka;
            } else {
                let acang_angka = Math.floor(Math.random() * cnth_soal5.length);
                console.log(acang_angka);
                isinya_soal[i].innerHTML = cnth_soal5[acang_angka];
                kondisi5 = acang_angka;
            }
        }


        MathJax.typeset();
    })

}