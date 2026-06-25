<div align="center">
  
# 🧮 Kalkulator Sederhana (Vanilla JS)
  
Sebuah aplikasi kalkulator berbasis web interaktif yang dibangun menggunakan **HTML**, **CSS**, dan **JavaScript Vanilla** dengan menerapkan arsitektur **ES6 Modules**.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ✨ Fitur Utama

- **➕➖✖️➗ Operasi Dasar Matematika**: Mendukung penjumlahan, pengurangan, perkalian, dan pembagian.
- **🛡️ Validasi Pintar**: 
  - Mencegah perhitungan jika ada input angka yang kosong (dilengkapi notifikasi visual).
  - Menangani error logika seperti **Pembagian dengan Nol** (`0`).
- **🔄 Fitur Reset Satu Klik**: Membersihkan semua form input dan mengembalikan kalkulator ke kondisi awal.
- **📦 Arsitektur Modular (ES6)**: Pemisahan antara manipulasi DOM (Antarmuka) dan Logika Matematika menggunakan sistem `import`/`export` sehingga kode lebih *clean* dan mudah di-maintenance.

---

## 📂 Struktur Direktori

```text
📁 day4/
├── 📄 index.html          # Kerangka antarmuka pengguna (UI)
├── 🎨 style.css           # Styling visual dan tata letak kalkulator
├── ⚙️ main.js             # Skrip utama: menangani event listener & manipulasi DOM
└── 📁 js/
    └── 🧮 matchOperator.js # Modul ES6: fungsi-fungsi matematika dasar (tambah, kurang, dll)
```

---

## 🚀 Cara Menjalankan Proyek

⚠️ **PENTING:** Proyek ini menggunakan **ES6 Modules** (`<script type="module">`). Oleh karena itu, file tidak bisa dijalankan hanya dengan klik dua kali (protokol `file://`) karena akan terblokir oleh *CORS Policy* di browser. Anda **wajib** menggunakan Local Web Server.

Pilih salah satu cara di bawah ini untuk menjalankan:

### Opsi 1: Menggunakan VS Code (Rekomendasi)
1. Buka folder proyek di **Visual Studio Code**.
2. Instal ekstensi **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.
3. Buka file `index.html`.
4. Klik tombol **"Go Live"** di pojok kanan bawah jendela VS Code, atau klik kanan pada kode dan pilih **"Open with Live Server"**.

### Opsi 2: Menggunakan Python
Jika Anda telah menginstal Python di komputer Anda:
1. Buka Terminal atau Command Prompt.
2. Arahkan ke direktori proyek (`cd path/ke/folder/day4`).
3. Jalankan perintah berikut:
   ```bash
   python -m http.server 8000
   ```
4. Buka browser dan akses: `http://localhost:8000`

### Opsi 3: Menggunakan Node.js
Jika Anda telah menginstal Node.js:
1. Instal `http-server` secara global (jika belum):
   ```bash
   npm install -g http-server
   ```
2. Jalankan perintah di terminal pada folder proyek:
   ```bash
   http-server
   ```
3. Buka browser sesuai dengan *localhost port* yang diberikan (misalnya `http://127.0.0.1:8080`).

---

## 💻 Cuplikan Kode (ES6 Modules)

Contoh bagaimana fungsi matematika dipisahkan dan dipanggil:

**`js/matchOperator.js` (Export)**
```javascript
export function tambah(a, b) {
    return a + b;
}
// fungsi lainnya...
```

**`main.js` (Import)**
```javascript
import { tambah, kurang, kali, bagi } from './js/matchOperator.js';

// Penggunaan di dalam event listener...
let hasil = tambah(num1, num2);
```

---
<div align="center">
  <i>Dibuat untuk tugas pembelajaran JavaScript Modular</i>
</div>
