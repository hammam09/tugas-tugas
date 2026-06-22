# 📚 Rangkuman Materi Hari Senin

Repositori ini berisi rangkuman komprehensif mengenai konsep fundamental JavaScript beserta contoh implementasi kodenya: **Iterable & Non-Iterable**, **Built-in Functions untuk String & Number**, serta **Scope, Hoisting, & Closure**. 

---

## 📖 Bab 11: Iterable & Non-Iterable

Kemampuan tipe data untuk disisir (diiterasi) secara berurutan. Memilih jenis perulangan yang tepat akan meminimalisir *bug* dalam pengolahan data.

### 1. Iterable (Bisa Diiterasi)
Data yang memiliki urutan dan bisa diakses satu per satu (contoh: String, Array, Map, Set). Iterasi terbaik menggunakan `for...of` karena tidak memerlukan pengelolaan index manual.

```javascript
// Iterasi pada Array
const daftarTools = ["Git", "Vscode", "Terminal"];
for (let tool of daftarTools) {
  console.log("Membuka:", tool); 
}
// Output: Membuka: Git, Membuka: Vscode, Membuka: Terminal

// Iterasi pada String
const kata = "CODE";
for (let huruf of kata) {
  console.log(huruf); 
}
// Output: C, O, D, E
```

### 2. Non-Iterable & Iterasi Object
Tipe data seperti Number, Boolean, dan Object tidak memiliki urutan indeks pasti, sehingga akan *error* jika menggunakan `for...of`. Khusus untuk Object, kita bisa menyisir **kunci (key)** dari propertinya menggunakan `for...in`.

```javascript
const userProfile = { 
  username: "programmer123", 
  role: "admin", 
  level: 10 
};

// Mengambil kunci dan nilainya
for (let key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}
// Output:
// username: programmer123
// role: admin
// level: 10
```

---

## 🛠️ Bab 12: String & Number Built-in Functions

### 1. String Methods
Method bawaan untuk memanipulasi teks. Sangat berguna untuk membersihkan input user atau validasi.

```javascript
const emailInput = "  User.Name@Email.com  ";

// Membersihkan spasi di ujung dan mengubah ke huruf kecil
const emailBersih = emailInput.trim().toLowerCase(); 
console.log(emailBersih); // "user.name@email.com"

const kalimat = "Belajar JS itu seru";
console.log(kalimat.includes("JS"));      // true (Mengecek keberadaan kata)
console.log(kalimat.replace("JS", "TS")); // "Belajar TS itu seru"

// Memecah string menjadi array
const tags = "html,css,javascript";
console.log(tags.split(","));             // ["html", "css", "javascript"]
```

### 2. Number Methods
Method bawaan untuk format angka dan konversi tipe data dari String ke Number.

```javascript
const hargaStr = "150000.75";

// parseFloat: Konversi ke desimal
const hargaAngka = parseFloat(hargaStr); 
console.log(hargaAngka); // 150000.75

// parseInt: Konversi ke bilangan bulat (mengabaikan karakter non-angka di belakang)
console.log(parseInt("42px")); // 42

// toFixed: Membulatkan angka di belakang koma (Hasilnya dikembalikan sebagai STRING)
const diskon = 15.6789;
console.log(diskon.toFixed(2)); // "15.68"
```

---

## 🧠 Bab 13: Scope, Hoisting, & Closure

### 1. Scope (Cakupan Akses)
Menentukan dari mana sebuah variabel bisa diakses. 

```javascript
const globalVar = "Akses dari mana saja"; // Global Scope

function cekScope() {
  const functionVar = "Hanya di dalam fungsi ini"; // Local/Function Scope
  
  if (true) {
    let blockVar = "Hanya di dalam blok if ini"; // Block Scope (let/const)
    console.log(blockVar); // Berhasil
  }
  // console.log(blockVar); // ReferenceError: blockVar is not defined
}
```

### 2. Hoisting (Pengangkatan)
Sifat JavaScript yang secara internal "mengangkat" deklarasi ke bagian teratas *scope* sebelum kode dieksekusi.

```javascript
// Function Declaration: Bisa dipanggil sebelum baris pembuatannya
sapa(); // Output: "Halo, Dev!"
function sapa() {
  console.log("Halo, Dev!");
}

// var Hoisting: Deklarasinya naik, tapi isinya (nilainya) tertinggal (menjadi undefined)
console.log(skor); // undefined
var skor = 100;

// let/const Hoisting: Terkena Temporal Dead Zone. 
// Tidak bernilai undefined, melainkan melempar Error jika dipanggil lebih dulu.
// console.log(poin); // ReferenceError
let poin = 50;
```

### 3. Closure
Kemampuan sebuah fungsi untuk "mengingat" dan mengakses variabel dari lingkungan (scope) tempat ia diciptakan, meskipun fungsi luarnya sudah selesai dijalankan. Sering dimanfaatkan untuk enkapsulasi (membuat variabel *private*).

```javascript
function buatCounter() {
  let hitungan = 0; // Variabel private, tidak bisa diubah langsung dari luar

  return function tambah() {
    hitungan++;
    console.log("Hitungan saat ini:", hitungan);
  };
}

const klik = buatCounter(); // Fungsi luar selesai di sini
klik(); // Hitungan saat ini: 1
klik(); // Hitungan saat ini: 2

// Nilai 'hitungan' aman. 
// Jika kita paksa: klik.hitungan = 10, itu tidak akan mengubah hitungan aslinya.
```