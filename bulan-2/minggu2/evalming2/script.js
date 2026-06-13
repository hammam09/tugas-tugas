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

let a = 10;
let b = "5";
console.log(a+b);

// Penjelasan = Karena b bertipe string, operator + akan melakukan penggabungan (concatenation), bukan penjumlahan.

// 3. Operator penjumlahan

let x = 10;
let y = 4;
let hasil = ((x + y) * 2) / 4 % 3;
console.log("Hasil =", hasil);
console.log("Apakah hasil sama dengan 1?", hasil == 1);

// 4. Tentukan hasil kode di bawah

let c = 8;
c += 4;
c *= 2;
c -= 6;
console.log(c);

// 5. Genap dan Ganjil
let angka = 3;
if (angka % 2 === 0) {
    if (angka > 0) {
        console.log("Genap Positif");
    } else {
        console.log("Genap Negatif");
    }
} else {
    if (angka > 0) {
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