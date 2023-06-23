// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCASR8gaa3D1RHdnHKHEgig0EsBi3REVx0",
    authDomain: "mediaintegral-8f7a9.firebaseapp.com",
    databaseURL: "https://mediaintegral-8f7a9-default-rtdb.firebaseio.com",
    projectId: "mediaintegral-8f7a9",
    storageBucket: "mediaintegral-8f7a9.appspot.com",
    messagingSenderId: "386390463917",
    appId: "1:386390463917:web:e9107edca2463698f0fd24",
    measurementId: "G-VYFS16WK8H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError)

let loop1;
let kkm1 = 0;

function kkmSuccess(items1) {
    kkm1 = items1.val()[2]['kkm'];
}

function handleError(error) {
    console.log(error);
}

let jawabB = [];

// function aktif(){
//     if(namaS != null && kelasS != null){
//         const dataKuis1 = document.getElementById('dataKuis1');
//         dataKuis1.hidden = true;

//         const latihan1 = document.getElementById('kuis1');
//         latihan1.hidden = false;
//         listsoal1();
//     }
// }

// window.onload(aktif());

function mulai1() {
    let nama1 = document.getElementById('nama').value;
    let kelas1 = document.getElementById('kelas').value;
    let sekolah1 = document.getElementById('sekolah').value;

    //Local Storage
    localStorage.setItem("nama", nama1);
    localStorage.setItem('kelas', kelas1);
    localStorage.setItem('sekolah', sekolah1);

    const errNama = document.getElementById('errNama');
    const errKelas = document.getElementById('errKelas');
    if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "")) {
        errNama.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
    } else if ((nama1 == "") && (kelas1 == "")) {
        errNama.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = '';
    } else if ((nama1 == "") && (sekolah1 == "")) {
        errNama.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
    } else if ((sekolah1 == "") && (kelas1 == "")) {
        errSekolah.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
    } else if (nama1 == "") {
        errNama.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
    } else if (kelas1 == "") {
        errKelas.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errSekolah.innerHTML = '';
    } else if (sekolah1 == "") {
        errSekolah.innerHTML = `<div class="alert alert-primary" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
    } else {
        const dataKuis1 = document.getElementById('dataKuis1');
        dataKuis1.hidden = true;

        const latihan1 = document.getElementById('kuis1');
        latihan1.hidden = false;

        listsoal1();
    }
}

function listsoal1() {
    let noSoal = 1;

    function getSoal(url, success, error) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(xhr.response);
                } else if (XPathEvaluator.status === 404) {
                    error();
                }
            }
            MathJax.typeset();
        }
        xhr.open('get', url);
        xhr.send();
    }

    getSoal('../assets/js/kuis3.json', (results) => {
        const listSoalJson = JSON.parse(results);
        let soal = '';
        let soalRand = [];
        let soalRandom = [];
        let i = 0;

        while (i < listSoalJson.length) {
            let rand = Math.floor(Math.random() * listSoalJson.length);
            soalRand[i] = listSoalJson[rand];
            soalRandom = Array.from(new Set(soalRand));
            i = soalRandom.length;
        }

        soalRandom.forEach(s => {
            soal += tampilSoal(s);
        });

        const listSoal = document.querySelector('.list-soal');
        listSoal.innerHTML = soal;

        document.getElementById("id1").hidden = false;
        document.getElementById("id2").hidden = true;


    }, () => {

    });

    countDownDate = new Date().getTime();
    //waktu 15 menit
    countDownDate += 1802000;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Perhitungan waktu untuk menit dan detik
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("waktu").innerHTML = minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("waktu").innerHTML = "Waktu Selesai";
            nilaiwktu = 1;
            cekKuis1TO();
        }
    }, 1000);

    let idx = 0;
    function tampilSoal(s) {
        jawabB[idx++] = s.jawaban;
        return `<div id="id${idx}">
                <form>
                <p>${noSoal++}. ${s.soal}</p>
                <input type="radio" id="jA${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="A">
                <label for="A">${s.a}</label><br>
                <input type="radio" id="jB${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="B">
                <label for="B">${s.b}</label><br>
                <input type="radio" id="jC${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="C">
                <label for="C">${s.c}</label><br>
                <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="D">
                <label for="D">${s.d}</label><br>
                </form>
                </div>`
    }
}

let kuis1_1 = "";
let kuis1_2 = "";

let nilai = 0;
function cek1(pilih) {
    kuis1_1 = pilih;
    document.getElementById("soal1").classList.add('active', 'btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih) {
    kuis1_2 = pilih;
    document.getElementById("soal2").classList.add('active', 'btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}


$(function () {
    setInterval(cek, 1000);
});

let kuis1 = [];
function cek() {
    kuis1 = [kuis1_1, kuis1_2];
}

function cekKuis1TO() {
    const latihan1 = document.getElementById('kuis1');
    latihan1.hidden = true;
    const hasil1 = document.getElementById('hasilKuis1');
    hasil1.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis1[a] == jawabB[a]) {
            nilai = nilai + 10;
        }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem('nama');
    var kelasS = localStorage.getItem('kelas');
    var sekolahS = localStorage.getItem('sekolah');


    if (nilai < kkm1) {
        const namaHTL = document.getElementById('namaHTL');
        namaHTL.innerHTML = namaS;
        const kelasHTL = document.getElementById('kelasHTL');
        kelasHTL.innerHTML = kelasS;
        const sekolahHTL = document.getElementById('sekolahHTL');
        sekolahHTL.innerHTML = sekolahS;
        const nilaiHTL = document.getElementById('nilaiHTL');
        nilaiHTL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = false;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = true;
    } else {
        const namaHL = document.getElementById('namaHL');
        namaHL.innerHTML = namaS;
        const kelasHL = document.getElementById('kelasHL');
        kelasHL.innerHTML = kelasS;
        const sekolahHL = document.getElementById('sekolahHL');
        sekolahHL.innerHTML = sekolahS;
        const nilaiHL = document.getElementById('nilaiHL');
        nilaiHL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = true;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = false;
    }

    let harinya = hari();
    let waktunya = waktu();

    createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);

}

function cekKuis1() {
    if ((kuis1_1 == "") || (kuis1_2 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalSubmit1').modal('hide')
    } else {
        $('#ModalSubmit1').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (kuis1[a] == jawabB[a]) {
                const latihan1 = document.getElementById('kuis1');
                latihan1.hidden = true;
                const hasil1 = document.getElementById('hasilKuis1');
                hasil1.hidden = false;
                nilai = nilai + 20;
            }
        }

        localStorage.setItem("nkuis1", nilai);
        var namaS = localStorage.getItem('nama');
        var kelasS = localStorage.getItem('kelas');
        var sekolahS = localStorage.getItem('sekolah');


        if (nilai < kkm1) {
            const namaHTL = document.getElementById('namaHTL');
            namaHTL.innerHTML = namaS;
            const kelasHTL = document.getElementById('kelasHTL');
            kelasHTL.innerHTML = kelasS;
            const sekolahHTL = document.getElementById('sekolahHTL');
            sekolahHTL.innerHTML = sekolahS;
            const nilaiHTL = document.getElementById('nilaiHTL');
            nilaiHTL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = false;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = true;
        } else {
            const namaHL = document.getElementById('namaHL');
            namaHL.innerHTML = namaS;
            const kelasHL = document.getElementById('kelasHL');
            kelasHL.innerHTML = kelasS;
            const sekolahHL = document.getElementById('sekolahHL');
            sekolahHL.innerHTML = sekolahS;
            const nilaiHL = document.getElementById('nilaiHL');
            nilaiHL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = true;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = false;
        }

        let harinya = hari();
        let waktunya = waktu();

        createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
    }
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1() {
    indeks.innerHTML = 1;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal2();");
}

function soal2() {
    indeks.innerHTML = 2;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal1();");
}
