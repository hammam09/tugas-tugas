// 1. Menghitung angka genap pada indeks ganjil dari bilangan 1-20

console.log("Soal Nomor 1");
let angka = [2, 12, 10, 19, 18, 4, 6, 17, 8, 20, 16, 15, 1, 14, 11, 5, 3, 9, 7, 13,];
let total = 0;
for (let i = 0; i < angka.length; i++) {
  if (i % 2 !== 0) {
    if (angka[i] % 2 === 0) {
      console.log(angka[i]);
      total += angka[i];
    }
  }
}
console.log("Hasil :" + total);

// 2. Membuat Array baru

console.log("Soal Nomor 2");
let data = [12, 5, 18, 5, 7, 12, 20, 18, 25];
let newData = [];
for (let i = 0; i < data.length; i++) {
  if (!newData.includes(data[i])) {
    newData.push(data[i]);
  }
}
console.log(newData);

// 3. Mengembalikan suatu nilai array  tanpa menggunakan .reverse

console.log("Soal Nomor 3");
let angka1 = [1, 2, 3, 4, 5];
let angka2 = [];
for (let i = angka1.length - 1; i >= 0; i--) {
  angka2.push(angka1[i]);
}
console.log(angka2);

// 4. Menghitung rata-rata

console.log("Soal Nomor 4");
let nilai = [75, 90, 45, 88, 60, 92, 77];
let total4 = 0;
let hasil = 0;
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] > 70) {
    console.log(nilai[i]);
    total4 += nilai[i];
    hasil++;
  }
}
//=== MENGHITUNG RATA-RATA YANG DI ATAS 70 ===//
let rataRata = total4 / hasil;
console.log("Rata-rata:", rataRata);

// 5. Mencari niai terbesar kedua pada sebuah array

console.log("Soal Nommor 5");
let bilangan = [21, 19, 35, 10, 20];
let besar1 = 0;
let besar2 = 0;
for (let i = 0; i < bilangan.length; i++) {
  let n = bilangan[i];
  if (n > besar1) {
    besar2 = besar1;
    besar1 = n;
  } else if (n > besar2 && n < besar1) {
    besar2 = n;
  }
}

console.log(besar2);

// 6. Membuat array baru yang berisi lebih dari 5 karakter

console.log("Soal Nomor 6");
let kata = ["javascript", "html", "css", "react", "nodejs"];
let newKata = [];
for (let i = 0; i < kata.length; i++) {
  let kata2 = kata[i];

  if (kata2.length >= 5) {
    newKata.push(kata2);
  }
}

console.log(newKata);

// 7. Membuat fungsi dan mengembalikannya

console.log("Soal Nomor 7");
function cariPrima(daftar) {
  let wadah = [];
  let indexWadah = 0;
  for (let i = 0; i < daftar.length; i++) {
    let n2 = daftar[i];
    if (n2 >= 2) {
      let prima = true;
      for (let j = 2; j * j <= n2; j++) {
        if (n2 % j === 0) {
          prima = false;
          break;
        }
      }
      if (prima) {
        wadah[indexWadah] = n2;
        indexWadah++;
      }
    }
  }
  return wadah;
}
let daftarAngka = [2, 3, 4, 5, 10, 11, 13, 16, 17];
let primaSaja = cariPrima(daftarAngka);

console.log(primaSaja);

// 8. Mencari persamaan pada sebuah array yang berbeda

console.log("Soal Nomor 8");
function gender(nama1, nama2) {
  let hasil1 = [];
  for (let i = 0; i < nama1.length; i++) {
    let namaLaki = nama1[i];
    if (nama2.includes(namaLaki)) {
      hasil1[hasil1.length] = namaLaki;
    }
  }
  return hasil1;
}
let nama1 = ["Budi", "Fajar", "Andi", "Angga", "Nopal"];
let nama2 = ["Siti", "Dewi", "Nopal", "Yuda", "Budi"];

console.log(gender(nama1, nama2));

// 9. Mmebuat fungsi untuk menerima string dan mengembalikan jumlah karakter

console.log("Soal Nomor 9");
function hitungKarakter(kata) {
  let catatan = {};
  for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i];
    // Cek apakah huruf sudah ada di dalam objek 'catatan'
    if (catatan[huruf]) {
      // Jika sudah ada, tambahkan 1 ke nilai yang lama
      catatan[huruf] = catatan[huruf] + 1;
    } else {
      // Jika belum ada, buat entri baru dan beri nilai 1
      catatan[huruf] = 1;
    }
  }
  return catatan;
}

console.log(hitungKarakter("hallo"));

// 10. Mengurutkan array angka acak dari terbesar ke terkecil

console.log("Soal Nomor 10");
let angka3 = [5, 2, 9, 1, 7, 10, 8, 6, 3, 4];
// Perulangan luar untuk memastikan pengecekan dilakukan berulang kali
for (let i = 0; i < angka3.length; i++) {
  // Perulangan dalam untuk membandingkan angka yang bersebelahan
  for (let j = 0; j < angka3.length - 1; j++) {
    // Logika utama: Jika angka di kiri (j) lebih kecil dari angka di kanan (j+1)
    if (angka3[j] < angka3[j + 1]) {
      // Maka tukar posisi (SWAP)
      let temp = angka3[j]; // Simpan sementara angka kiri
      angka3[j] = angka3[j + 1]; // Geser angka kanan ke kiri
      angka3[j + 1] = temp; // Pindahkan angka kiri ke kanan
    }
  }
}

console.log(angka3);

// 11. Menghitung nilai siswa

console.log("Soal Nomor 11");
const student = {
  name: "Ahmad",
  age: 17,
  scores: [80, 75, 90, 88],
};
let nilai1 = 0;
for (let i = 0; i < student.scores.length; i++) {
  nilai1 += student.scores[i];
}
let nilai2 = nilai1 / student.scores.length;
console.log(nilai2);

// 12. Mempresentasikan sebuah rekening dengan properti saldo menggunakan method .this

console.log("Soal Nomor 12");
let rekeningBank = {
  saldo: 1000000, // Properti saldo awal
  // Method untuk menabung
  menabung(jumlah) {
    this.saldo += jumlah;
    console.log("Berhasil menabung: Rp" + jumlah);
  },
  // Method untuk menarik uang
  menarik(jumlah) {
    if (jumlah <= this.saldo) {
      this.saldo -= jumlah;
      console.log(`Berhasil menarik: Rp${jumlah}.`);
    } else {
      console.log("Saldo tidak mencukupi!");
    }
  },
  // Method untuk melihat saldo
  melihatSaldo() {
    console.log("Saldo Anda saat ini adalah: Rp" + this.saldo);
    return this.saldo;
  },
};

// Penggunaan
rekeningBank.melihatSaldo(); // Saldo: 100000
rekeningBank.menabung(50000); // Saldo menjadi 150000
rekeningBank.menarik(300000); // Saldo menjadi 120000
rekeningBank.melihatSaldo(); // Saldo: 120000

// 13. Mmebuat fungsi untuk menerima array object dan mengembalikan nam siswa dengan nilai tertinggi

console.log("Soal Nomor 13");
function cariSiswaTerbaik(daftarSiswa) {
  // Kita anggap siswa pertama sebagai yang terbaik untuk permulaan
  let siswaTerbaik = daftarSiswa[0];
  // Kita mulai loop dari indeks 1 karena indeks 0 sudah dijadikan acuan
  for (let i = 1; i < daftarSiswa.length; i++) {
    // Jika nilai siswa saat ini lebih tinggi dari siswaTerbaik yang tersimpan
    if (daftarSiswa[i].score > siswaTerbaik.score) {
      // Update siswaTerbaik dengan objek siswa yang baru
      siswaTerbaik = daftarSiswa[i];
    }
  }
  // Kembalikan hanya namanya saja
  return siswaTerbaik.name;
}
// Data input
let dataSiswa = [
  { name: "Andi", score: 75 },
  { name: "Budi", score: 90 },
  { name: "Citra", score: 82 },
];

console.log("Nama siswa dengan nilai tertinggi:", cariSiswaTerbaik(dataSiswa));

// 14. Mengubah object menjadi array

console.log("Soal Nomor 14");
const product = {
  id: 1,
  name: "Laptop",
  price: 12000000,
  stock: 5,
};
let arrayPasangan = [];
// Perulangan untuk mengambil setiap key dalam object
for (let key in product) {
  // Kita buat array kecil [key, value] untuk setiap pasangan
  let pasangan = [key, product[key]];
  // Masukkan ke dalam array utama
  arrayPasangan[arrayPasangan.length] = pasangan;
}

console.log(arrayPasangan);

// 15. Bonus

console.log("Bonus");
function pangkat(basis, eksponen) {
    // 1. Kondisi Berhenti (Base Case)
    // Segala sesuatu pangkat 0 hasilnya 1
    if (eksponen === 0) {
        return 1;
    }
    // 2. Langkah Rekursif (Recursive Step)
    // basis * pangkat(basis, eksponen - 1)
    return basis * pangkat(basis, eksponen - 1);
}

console.log(pangkat(2, 5));

// 16. Mengelompokkan data berdasarkan jurusan

console.log("Soal Nomor 16");
function kelompokkanJurusan(mahasiswa) {
  let kelompok = {};
  for (let i = 0; i < mahasiswa.length; i++) {
    let mhs = mahasiswa[i];
    let jurusan = mhs.major;
    // Jika jurusan ini belum ada di object 'kelompok', buat array kosong
    if (!kelompok[jurusan]) {
      kelompok[jurusan] = [];
    }
    // Masukkan nama mahasiswa ke dalam array jurusan tersebut
    // Menggunakan length sebagai index manual
    kelompok[jurusan][kelompok[jurusan].length] = mhs.name;
  }
  return kelompok;
}

// Data input
let dataMahasiswa = [
  { name: "Ali", major: "TI" },
  { name: "Budi", major: "SI" },
  { name: "Citra", major: "TI" },
  { name: "Dina", major: "MI" },
  { name: "Eko", major: "TI" },
];

console.log(kelompokkanJurusan(dataMahasiswa));

// 17. Membuat object bersarang menggunakan fungsi dan menghitung totalnya

console.log("Soal Nomor 17");
function hitungTotal(obj) {
  let total2 = 0;
  for (let key in obj) {
    let nilai3 = obj[key];
    // Cek apakah nilainya adalah object dan bukan null
    if (typeof nilai3 === "object" && nilai3 !== null) {
      // REKURSI: Panggil fungsi ini lagi untuk objek di dalam
      total2 += hitungTotal(nilai3);
    }
    // Jika nilainya adalah angka, tambahkan ke total
    else if (typeof nilai3 === "number") {
      total2 += nilai3;
    }
  }
  return total2;
}
// Contoh data:
let data3 = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30,
    },
  },
  f: 5,
};
console.log(hitungTotal(data3));

// 18. Menghitung saldo akhir

console.log("Soal Nomor 18");
let transaksi = [ 
    { type: "income", amount: 500000 }, 
    { type: "expense", amount: 200000 }, 
    { type: "income", amount: 300000 }, 
    { type: "expense", amount: 100000 } 
];

let saldoAkhir = 0;
for (let i = 0; i < transaksi.length; i++) {
    let item = transaksi[i];
    if (item.type === "income") {
        saldoAkhir += item.amount; // Tambah saldo
    } else if (item.type === "expense") {
        saldoAkhir -= item.amount; // Kurangi saldo
    }
}
console.log("Saldo Akhir: Rp" + saldoAkhir);

// 19. Membuat object data inventaris barang

console.log("Soal Nomor 19");
let inventaris = {
    barang: [],
    tambah(id, nama, harga) {
        this.barang[this.barang.length] = { id, nama, harga };
    },
    hapus(id) {
        this.barang = this.barang.filter(b => b.id !== id);
    },
    cari(nama) {
        return this.barang.find(b => b.nama === nama) || "Tidak ditemukan";
    },
    tampilkan() {
        console.table(this.barang); // Cara cepat menampilkan semua data
    }
};
// Penggunaan
inventaris.tambah(1, "Laptop", 12000000);
inventaris.tambah(2, "Mouse", 120000);
inventaris.tambah(3, "Keyboard", 250000);
console.log(inventaris.cari("Laptop"));
inventaris.tampilkan();

// 20 . Bonus

console.log("Bonus");
let sistemSiswa = {
    data: [],
    tambah(id, nama, nilai) {
        this.data.push({ id, nama, nilai });
    },
    hapus(id) {
        this.data = this.data.filter(s => s.id !== id);
    },
    perbarui(id, nilaiBaru) {
        let siswa = this.data.find(s => s.id === id);
        if (siswa) siswa.nilai = nilaiBaru;
    },
    cari(nama) {
        return this.data.find(s => s.nama === nama) || "Siswa tidak ditemukan";
    },
    tampilkan() {
        console.table(this.data);
    },
    hitungRataRata() {
        let total = this.data.reduce((sum, s) => sum + s.nilai, 0);
        return this.data.length ? total / this.data.length : 0;
    },
    terbaik() {
        return this.data.reduce((prev, curr) => (curr.nilai > prev.nilai ? curr : prev), this.data[0]);
    },
    terendah() {
        return this.data.reduce((prev, curr) => (curr.nilai < prev.nilai ? curr : prev), this.data[0]);
    }
};
// Penggunaan:
sistemSiswa.tambah(1, "Andi", 85);
sistemSiswa.tambah(2, "Budi", 92);
sistemSiswa.tambah(3, "Citra", 78)
sistemSiswa.tampilkan();
console.log("Rata-rata:", sistemSiswa.hitungRataRata());
console.log("Siswa terbaik:", sistemSiswa.terbaik());
