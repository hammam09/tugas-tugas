// 1. VARIABLE & DATATYPE
let namaLengkap = "Hammam"; // Menyimpan nama lengkap (String)
let umur = 19; // Menyimpan umur (Number)
let tinggiBadan = 170; // Menyimpan tinggi badan dalam cm (Number)
let isProgrammer = true; // Menyimpan status sebagai programmer (Boolean)
let hobiFavorit = "Coding"; // Menyimpan hobi favorit (String)

// Menampilkan seluruh nilai variabel ke console
console.log(namaLengkap);
console.log(umur);
console.log(tinggiBadan + " cm");
console.log(isProgrammer);
console.log(hobiFavorit);

// 2. MEMAHAMI SINTAKS JAVASCRIPT
let nama = "Hammam"; // Definisi variable untuk menyimpan nilai nama
let asalKota = "Bekasi"; // Definisi variable untuk menyimpan nilai kota
let tanggalLahir = "09 Januari 2007"; // Definisi variable untuk menyimpan nilai tanggal lahir
console.log(nama); // Menampilkan nilai dari variable 'nama' ke console
console.log(asalKota); // Menampilkan nilai dari variable 'kota' ke console
console.log(tanggalLahir); // Menampilkan nilai dari variable 'tanggalLahir' ke console

// 3. STATMENTS
let name = "Hammam"; // Statement 1: Deklarasi sekaligus inisialisasi variabel nama
let age = 40; // Statement 2: Deklarasi sekaligus inisialisasi variabel umur
age = 19; // Statement 3: Assignment (mengubah nilai variabel umur)
let tahunLahir = 2026 - age; // Statement 4: Operasi perhitungan yang hasilnya disimpan ke variabel
console.log(name); // Statement 5: Menampilkan nilai variabel nama ke console
console.log(age); // Statement 6: Menampilkan nilai variabel umur ke console
console.log(tahunLahir); // Statement 7: Menampilkan hasil perhitungan tahun lahir ke console

// 4. EXPRESSIONS
console.log("10 + 5 =", 10 + 5); // Arithmetic Expression (Penjumlahan)
console.log('"Hello" + " World" =', "Hello" + " World"); // String Expression (Penggabungan String)
console.log("20 > 10 =", 20 > 10); // Comparison Expression (Perbandingan)
console.log("true && true =", true && true); // Logical Expression (Logika AND)

// 5. JAVASCRIPT OPERATOR
// Arithmetic Operator
console.log("10 + 5 =", 10 + 5); // Penjumlahan
console.log("10 - 5 =", 10 - 5); // Pengurangan
console.log("10 * 5 =", 10 * 5); // Perkalian
console.log("10 / 5 =", 10 / 5); // Pembagian
console.log("10 % 3 =", 10 % 3); // Modulus (sisa bagi)

// Assignment Operator
let angka = 10; // Assignment (=)
console.log("Nilai awal angka =", angka);
angka += 5; // Menambah nilai angka dengan 5
console.log("Setelah += 5 =", angka);
angka -= 3; // Mengurangi nilai angka dengan 3
console.log("Setelah -= 3 =", angka);

// Comparison Operator
console.log("10 == '10' =", 10 == "10");   // Membandingkan nilai saja
console.log("10 === '10' =", 10 === "10"); // Membandingkan nilai dan tipe data
console.log("10 != 5 =", 10 != 5);         // Tidak sama dengan
console.log("10 > 5 =", 10 > 5);           // Lebih besar dari
console.log("10 < 5 =", 10 < 5);           // Lebih kecil dari

// Logical Operator
console.log("true && true =", true && true);   // AND
console.log("true || false =", true || false); // OR
console.log("!true =", !true);                 // NOT

// 6. PROGRAM KALKULATOR SEDERHANA
let angka1 = 10;
let angka2 = 5;

console.log("Penjumlahan: ", angka1 + angka2); 
console.log("Pengurangan: ", angka1 - angka2); 
console.log("Perkalian: ", angka1 * angka2); 
console.log("Pembagian: ", angka1 / angka2); 
console.log("Modulus: ", angka1 % angka2); 

// BONUS

// BIODATA DIGITAL
let namaSaya = "Hammam";
let umurSaya = 19;
let kotaAsal = "Bekasi";
let hobi = "Coding";
let bahasaFavorit = "JavaScript";

// Menampilkan biodata
console.log("BIODATA DIGITAL");
console.log("Nama:", namaSaya);
console.log("Umur:", umurSaya);
console.log("Kota Asal:", kotaAsal);
console.log("Hobi:", hobi);
console.log("Bahasa Pemrograman Favorit:", bahasaFavorit);

// Expressions
let perkenalan = "Halo, nama saya " + nama;
let asal = namaSaya + " berasal dari " + kotaAsal;
let minat = "Saya memiliki hobi " + hobi + " dan menyukai bahasa " + bahasaFavorit;

// Menampilkan hasil expression
console.log("");
console.log("=== BIODATA SAYA ===");
console.log(perkenalan);
console.log(asal);
console.log(minat);