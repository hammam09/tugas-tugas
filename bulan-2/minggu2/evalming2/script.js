// LATIHAN JAVASCRIPT (SINTAKS, STATMENTS, COMMANTS, VARIABLE, TIPE DATA,
// OPERATOR, CONTROL FLOW, DAN LOOPING


// 1. Tipe Data 

let number = 75;
let string = "75";
let boolean = true;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

// 2. Penjelasan dari kode berikut

let q = 10;
let h = "5";
console.log(q+h);

// Penjelasan = Karena b bertipe string, operator + akan melakukan penggabungan (concatenation), bukan penjumlahan.

// 3. Operator penjumlahan

let x = 10;
let y = 4;
let hasil = ((x + y) * 2) / 4 % 3;
console.log("Hasil =", hasil);
console.log("Apakah hasil sama dengan 1?", hasil == 1);

// 4. Tentukan hasil kode di bawah

let g = 8;
g += 4;
g *= 2;
g -= 6;
console.log(g);

// 5. Genap dan Ganjil
let Angka = 3;
if (Angka % 2 === 0) {
    if (Angka > 0) {
        console.log("Genap Positif");
    } else {
        console.log("Genap Negatif");
    }
} else {
    if (Angka > 0) {
        console.log("Ganjil Positif");
    } else {
        console.log("Ganjil Negatif");
    }
}

// 6. Sistem Penilaian

let nilai = 82;
if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else if (nilai >= 60) {
    console.log("D");
} else {
    console.log("E");
}

// 7. Menentukan 3 angka terbesar

let A = 25;
let B = 40;
let C = 90;

if (A >= B && A >= C) {
    console.log("Angka terbesar:", A);
} else if (B >= A && B >= C) {
    console.log("Angka terbesar:", B);
} else {
    console.log("Angka terbesar:", C);
}

// 8. Tentukan output dari kode berikut

let X = 5;
let Y = 10;
let Z = (X > 3 && Y < 15) || X === 8;
console.log(Z);

// 9. Menentukan tahun

let tahun = 2026;

if ((tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0)) {
    console.log(tahun + " adalah tahun kabisat");
} else {
    console.log(tahun + " bukan tahun kabisat");
}

// 10. Program FizzBuzz

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 11. Menghitung nilai z dan d

let z = 4;
let d = z++ + ++z;
console.log(d);

// 12. Menghitung total bilangan ganjil dari 1-100

let total = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        total += i;
    }
}
console.log("Total bilangan ganjil:", total);

// 13. Membuat Program dari gambar berikut
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += "*";
    }
    console.log(baris);
}

// 14. Menghitung seluruh jumlah elemen yag lebih dari 10

let angka = [12, 5, 18, 7, 21, 30, 2];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
    if (angka[i] > 10) {
        jumlah += angka[i];
    }
}
console.log(jumlah);

// 15. Mencari bilangan prima dari 1-100

for (let angka = 2; angka <= 100; angka++) {
    let prima = true;
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            prima = false;
            break;
        }
    }
    if (prima) {
        console.log(angka);
    }
}

// 16. Menentukan output dari kode di bawah

let a = 2;
let b = 3;
let c = 4;
    if (a < b) {
        if (b > c) {
            console.log("a");
        } else {
            console.log("b");
        }
    } else {
        console.log("c");
    }

// 17. Membuat login sederhana

let userName = prompt('Masukkan username Anda:');
let Password = prompt('Masukkan password Anda:');
if (userName == 'admin' && Password == '123') {
    alert("Anda berhasil login");
} else {
    alert("Anda gagal login");
}

// 18. Menentukan Hari dalam 1 bulan selama 1 Tahun

let bulan = 2;
switch (bulan) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Jumlah hari: 31");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Jumlah hari: 30");
    break;

  case 2:
    console.log("Jumlah hari: 28 atau 29 (tahun kabisat)");
    break;

  default:
    console.log("Nomor bulan tidak valid");
}

// 19. Menampilan deret angka menggunakan looping

let deret = 1;
for (let i = 1; i <= 7; i++) {
  console.log(deret);
  deret = deret * 2;
}

// 20. Menentukan nilai akhir beserta penjelasan

let totalNilai = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    totalNilai += i;
  } else {
    totalNilai -= i;
  }
}

console.log(totalNilai);