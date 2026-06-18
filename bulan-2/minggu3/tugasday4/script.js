// 1. Antrian Kantin

console.log("Nomor 1");
const antrian = ["Andi", "Budi", "Citra", "Dina"];
antrian.push("Eka");
antrian.unshift("Fajar");
antrian.shift();
antrian.pop();

console.log(antrian);
console.log(antrian.length);

// 2. Inventaris barang

console.log("Nomor 2");
const barang = ["Mouse", "Keyboard", "Monitor", "Printer"];
barang.splice(2, 1, "Laptop", "Scanner");

console.log(barang);

// 3. Mencari Posisi Siswa

console.log("Nomor 3");
const siswa = ["Aisyah", "Bagus", "Dewi", "Fikri", "Galih"];
console.log(siswa.indexOf("Dewi"));
console.log(siswa.indexOf("Rahma"));
console.log(siswa.includes("Galih"));
console.log(siswa.includes("Zidan"));

// 4. Potong data

console.log("Nomor 4");
const angka = [5, 10, 15, 20, 25, 30, 35, 40];
console.log(angka.slice(2, 6));

// 5. Data Pegawai Bermasalah

console.log("Nomor 5");
const pegawai = ["Anton", "Beni", "Caca", "Dedi", "Eka", "Farah"];
pegawai.splice(1, 1);
pegawai.splice(2, 1);
pegawai.splice(1, 0, "Dedi");
pegawai.splice(4, 1, "Gilang");
console.log(pegawai);

// 6. Tebak isi array

console.log("Nomor 6");
console.log(['Z', 'B', 'D']); // Akhir isi array
console.log(3); // Total panjang array

// 7. Sistem Login

console.log("Nomor 7");
const syaratMasuk = prompt("Masukan Divisi Anda");
const pengguna = ["admin", "operator", "kasir", "manager"];

if (pengguna.includes(syaratMasuk)){
    alert("User Ditemukan");
    alert("Index ke " + pengguna.indexOf(syaratMasuk));
} else{
   alert("User Tidak Ditemukan");
}

// 8. Operasi rahasia

console.log("Nomor 8")
const arr = [10, 20, 30, 40, 50, 60]; 
arr.unshift(5);
arr.splice(3, 1, 35)
arr.pop();

console.log(arr);

// 9. Manipulasi Bertingkat

const namaKota = [ "Jakarta", "Bandung", "Surabaya", "Medan", "Makassar" ]; 
namaKota.splice(1, 1);
namaKota.splice(2, 0, "Yogyakarta");
namaKota.unshift("Bali")
namaKota.pop();

console.log(namaKota);
console.log(namaKota.length);
console.log(namaKota.indexOf("Yogyakarta"));

// 10. Tantangan akhir

console.log("Nomor 10")
const data = [ "merah", "biru", "hijau", "kuning", "ungu", "hitam" ];
data.unshift("putih");
data.splice(2, 1);
data.splice(3, 0, "oranye");
data.pop();

console.log(data);

// BONUS

console.log("Bonus")
const nilaiData = [ "A", "B", "C", "D", "E", "F", "G" ]; 
// ["G", "A", "X", "C", "D", "Y", "F"]
nilaiData.unshift("G");
nilaiData.pop();
nilaiData.splice(2, 1);
nilaiData.splice(2, 0, "X");
nilaiData.splice(5, 1);
nilaiData.splice(5, 0, "Y");

console.log(nilaiData);