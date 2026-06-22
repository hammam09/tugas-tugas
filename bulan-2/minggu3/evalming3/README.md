# Tugas Evaluasi Minggu 3

Proyek ini merupakan tugas evaluasi pembelajaran JavaScript minggu 3 yang berisi solusi untuk 20 soal (termasuk soal bonus) mengenai manipulasi array, fungsi, dan object dalam JavaScript.

## 📋 Daftar Soal

### 1. Menghitung Angka Genap pada Indeks Ganjil
Menghitung jumlah angka genap yang berada pada indeks ganjil dari array bilangan 1-20.

### 2. Membuat Array Baru (Unique Values)
Membuat array baru yang hanya berisi nilai unik (menghapus duplikat).

### 3. Reverse Array Tanpa Menggunakan .reverse()
Membalik urutan elemen array tanpa menggunakan method bawaan `.reverse()`.

### 4. Menghitung Rata-rata Nilai di Atas 70
Menghitung rata-rata dari angka dalam array yang bernilai lebih besar dari 70.

### 5. Mencari Nilai Terbesar Kedua
Menemukan nilai terbesar kedua dalam sebuah array tanpa menggunakan sort bawaan.

### 6. Filter String dengan Panjang ≥ 5 Karakter
Membuat array baru yang berisi hanya string dengan panjang minimal 5 karakter.

### 7. Fungsi Pencari Bilangan Prima
Membuat fungsi untuk menemukan semua bilangan prima dari sebuah array.

### 8. Mencari Persamaan Antar Array (Intersection)
Menemukan elemen yang sama dari dua array yang berbeda.

### 9. Hitung Jumlah Karakter (Character Frequency)
Membuat fungsi untuk menghitung berapa kali setiap karakter muncul dalam sebuah string menggunakan object.

### 10. Sorting Array Secara Manual
Mengurutkan array angka acak dari yang terbesar ke terkecil menggunakan algoritma secara manual.

### 11. Menghitung Rata-rata Nilai Siswa
Menghitung rata-rata nilai dari sebuah object siswa yang memiliki properti array berisi sekumpulan nilai.

### 12. Simulasi Rekening Bank dengan Method `this`
Membuat object rekening dengan properti saldo, dan method untuk menabung, menarik uang, serta melihat saldo saat ini.

### 13. Mencari Siswa dengan Nilai Tertinggi
Membuat fungsi yang menerima array of object (data siswa) dan mengembalikan nama siswa dengan nilai tertinggi.

### 14. Mengubah Object Menjadi Array
Mengonversi sebuah object data produk menjadi array 2D yang berisi pasangan `[key, value]`.

### 15. Bonus: Pangkat Rekursif
Membuat fungsi rekursif untuk menghitung hasil pangkat dari suatu basis dan eksponen tanpa menggunakan `Math.pow()`.

### 16. Grouping Data Mahasiswa Berdasarkan Jurusan
Mengelompokkan array of object data mahasiswa ke dalam kategori (object) berdasarkan nama jurusan.

### 17. Menghitung Total Angka pada Object Bersarang (Nested Object)
Membuat fungsi rekursif yang dapat menelusuri dan menjumlahkan semua angka di dalam object bersarang, sedalam apa pun strukturnya.

### 18. Menghitung Saldo Akhir Berdasarkan Transaksi
Menghitung saldo akhir berdasarkan array of object yang berisi daftar transaksi dengan tipe 'income' dan 'expense'.

### 19. Sistem Inventaris Barang
Membuat object inventaris yang memiliki array untuk menyimpan data barang beserta method untuk menambah, menghapus, mencari, dan menampilkannya.

### 20. Bonus: Sistem Manajemen Siswa
Membuat object sistem yang dapat menyimpan data array siswa, serta melakukan operasi CRUD (Create, Read, Update, Delete), menghitung rata-rata keseluruhan, dan mencari siswa dengan nilai terbaik/terendah.

## 🚀 Cara Menjalankan

### Requirements
- **Node.js** (versi 12 atau lebih tinggi) atau Browser Modern.

### Menjalankan Melalui Node.js
Buka terminal dan jalankan perintah berikut:
```bash
node script.js
```
*Output akan ditampilkan secara langsung di layar console/terminal.*

### Menjalankan Melalui Browser
Buka file `index.html` di browser Anda, klik kanan halaman web, pilih **"Inspect"** (atau tekan `F12`), kemudian masuk ke tab **Console** untuk melihat hasil dari setiap soal yang ada.

## 📁 Struktur File
```
evalming3/
├── index.html      # File HTML untuk menjalankan script di browser
├── script.js       # Solusi lengkap untuk 20 soal evaluasi (termasuk bonus)
└── README.md       # Dokumentasi (file ini)
```

## 💡 Konsep yang Digunakan
- **Array & Looping**: `for` loop biasa, `for...in` untuk iterasi properties dari sebuah Object, dan manipulasi elemen-elemen secara manual.
- **Conditional Statement**: `if`, `else if`, `else`.
- **Functions**: Deklarasi fungsi, return statement, dan **Fungsi Rekursif** (Recursive Function).
- **Objects**: Pembuatan object literal, properti object, method object, `this` keyword, serta *nested object* (object bersarang).
- **Algoritma Dasar**: Teknik *swapping*, manipulasi string, *grouping*, serta pencarian nilai max/min.

## ✅ Status
Proyek telah selesai. Semua 20 soal beserta soal bonus sudah berhasil dikerjakan dan diuji dengan baik.

---
**Tujuan**: Menjadikan latihan ini untuk belajar dan berkembang
