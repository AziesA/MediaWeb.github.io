// Hapus kelas "active" dari semua elemen <li>
const listItems = document.querySelectorAll('.frame');
listItems.forEach(function (item) {
    item.classList.remove('active');
});

// Tambahkan kelas "active" pada elemen <li> yang terkait dengan halaman tiga
document.getElementById('btninfo').parentElement.classList.add('active');
