# JavaScript Dasar: Sintaks, Statements, Comments, dan Variable

## 1. JavaScript Syntax

Syntax adalah aturan penulisan kode agar dapat dipahami dan dijalankan oleh JavaScript.

Contoh:

```javascript
console.log("Hello World");
```

Pada contoh di atas:

- `console.log()` adalah perintah untuk menampilkan output.
- `"Hello World"` adalah data yang ditampilkan.
- `;` (semicolon) digunakan untuk mengakhiri statement.

---

## 2. JavaScript Statements

Statement adalah instruksi atau perintah yang dijalankan oleh JavaScript.

Contoh:

```javascript
let nama = "Hammam";
console.log(nama);
```

Penjelasan:

1. Statement pertama menyimpan nilai ke dalam variabel.
2. Statement kedua menampilkan isi variabel ke console.

Satu file JavaScript biasanya terdiri dari banyak statement yang dieksekusi secara berurutan. :contentReference[oaicite:1]{index=1}

---

## 3. Semicolon (;)

Semicolon digunakan untuk memisahkan atau mengakhiri statement.

Contoh:

```javascript
let umur = 18;
console.log(umur);
```

JavaScript sebenarnya dapat menambahkan semicolon secara otomatis (Automatic Semicolon Insertion), tetapi penggunaan semicolon tetap disarankan agar kode lebih jelas dan mengurangi potensi error. :contentReference[oaicite:2]{index=2}

---

## 4. JavaScript Comments

Comment adalah catatan dalam kode yang tidak akan dijalankan oleh JavaScript.

### Single Line Comment

```javascript
// Ini adalah komentar
console.log("Hello");
```

### Multi Line Comment

```javascript
/*
Ini komentar
lebih dari satu baris
*/
console.log("Hello");
```

### Fungsi Comment

- Memberikan penjelasan kode.
- Mempermudah maintenance.
- Membantu kolaborasi dengan developer lain.
- Menonaktifkan sementara bagian kode saat debugging. :contentReference[oaicite:3]{index=3}

---

# Variable di JavaScript

## 1. Pengertian Variable

Variable adalah tempat untuk menyimpan data agar dapat digunakan kembali.

Contoh:

```javascript
let nama = "Hammam";
```

Pada contoh tersebut:

- `let` = keyword untuk membuat variable.
- `nama` = nama variable.
- `"Hammam"` = nilai yang disimpan.

---

## 2. Aturan Penamaan Variable

### Boleh

```javascript
let nama;
let umur18;
let _alamat;
let $harga;
```

### Tidak Boleh

```javascript
let 123nama;
let nama saya;
let let;
```

Aturan umum:

- Tidak boleh diawali angka.
- Tidak boleh mengandung spasi.
- Tidak boleh menggunakan keyword JavaScript.
- Bersifat case-sensitive.

Contoh:

```javascript
let nama = "Hammam";
let Nama = "Developer";
```

Kedua variable di atas dianggap berbeda. :contentReference[oaicite:4]{index=4}

---

## 3. Keyword Variable

### var

Cara lama untuk membuat variable.

```javascript
var nama = "Hammam";
```

Kekurangan:

- Scope kurang aman.
- Dapat menyebabkan bug pada program besar.

---

### let

Digunakan untuk variable yang nilainya dapat berubah.

```javascript
let umur = 18;

umur = 19;
```

Output:

```javascript
19
```

---

### const

Digunakan untuk variable yang nilainya tetap.

```javascript
const negara = "Indonesia";
```

Jika diubah:

```javascript
negara = "Malaysia";
```

Maka akan menghasilkan error. :contentReference[oaicite:5]{index=5}

---

## 4. Deklarasi dan Inisialisasi Variable

### Deklarasi

```javascript
let nama;
```

Variable dibuat tetapi belum memiliki nilai.

### Inisialisasi

```javascript
nama = "Hammam";
```

### Deklarasi + Inisialisasi

```javascript
let nama = "Hammam";
```

---

## 5. Menampilkan Isi Variable

```javascript
let nama = "Hammam";

console.log(nama);
```

Output:

```javascript
Hammam
```

---

## 6. Mengubah Nilai Variable

```javascript
let kota = "Jakarta";

kota = "Bekasi";

console.log(kota);
```

Output:

```javascript
Bekasi
```

---

# Kesimpulan

- Syntax adalah aturan penulisan kode JavaScript.
- Statement adalah instruksi yang dijalankan oleh JavaScript.
- Semicolon digunakan untuk mengakhiri statement.
- Comment digunakan untuk memberi catatan pada kode.
- Variable digunakan untuk menyimpan data.
- `let` digunakan untuk data yang dapat berubah.
- `const` digunakan untuk data yang tetap.
- `var` adalah cara lama yang sudah jarang digunakan.
- Nama variable harus mengikuti aturan penamaan yang benar.