# 🧮 Kalkulator Sederhana
  
Sebuah aplikasi kalkulator berbasis web interaktif yang dibangun menggunakan **HTML**, **CSS**, dan **JavaScript**.

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
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
    └── 🧮 matchOperator.js : fungsi-fungsi matematika dasar (tambah, kurang, dll)
```

---

## 🚀 Cara Menjalankan Proyek

⚠️ **PENTING:** Proyek ini menggunakan **ES6 Modules** (`<script type="module">`). Oleh karena itu, file tidak bisa dijalankan hanya dengan klik dua kali (protokol `file://`) pada file manager, karena akan terblokir oleh *CORS Policy* di browser. Anda **wajib** menggunakan Local Web Server.

Pilih salah satu cara di bawah ini untuk menjalankan:

### Menggunakan VS Code
1. Buka folder proyek di **Visual Studio Code**.
2. Instal ekstensi **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.
3. Buka file `index.html`.
4. Klik tombol **"Go Live"** di pojok kanan bawah jendela VS Code, atau klik kanan pada kode dan pilih **"Open with Live Server"**.

---

## 💻 Cuplikan Kode

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

## 🌐 Demo Website
url : https://calculator-mam.netlify.app

---
<div align="center">
  <i>Dibuat untuk tugas pembelajaran JavaScript Modular</i>
</div>
