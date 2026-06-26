# Cari Indeks Al-Qur'an

Aplikasi web sederhana untuk mencari informasi surat Al-Qur'an berdasarkan nomor atau nama surat.

## Deskripsi

Pengguna dapat memasukkan nomor surat (1-114) atau nama surat untuk menampilkan:

- jumlah ayat
- nomor juz
- halaman awal surat

Aplikasi ini menggunakan data surat dari API publik `https://equran.id/api/v2/surat` dan menyimpan riwayat pencarian ke `localStorage`.

## Fitur

- pencarian surat berdasarkan nomor atau nama
- tampilan hasil dalam tabel
- riwayat pencarian terbaru disimpan di browser
- tombol untuk menghapus riwayat satu per satu atau semua
- dukungan input dengan kata depan `surat`

## Cara Pakai

1. Buka `index.html` di browser.
2. Ketik nomor surat (misal `10`).
3. Klik tombol `Cari`.
4. Hasil akan muncul di tabel dan riwayat pencarian akan tersimpan.

## Struktur File

- `index.html` — tampilan utama aplikasi.
- `main.js` — logika pencarian, pemanggilan API, dan riwayat.
- `style.css` — gaya tampilan halaman.

## Catatan

- Pastikan koneksi internet aktif karena aplikasi mengambil data dari API.
- Riwayat hanya tersimpan di browser yang sama dan bisa dihapus kapan saja.
