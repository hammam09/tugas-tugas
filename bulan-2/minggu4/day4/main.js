// 1. Import fungsi spesifik dari file mathOperations.js
import { tambah, kurang, kali, bagi } from './js/matchOperator.js';

// 2. Hubungkan fungsi dengan elemen tombol di HTML menggunakan Event Listener
document.getElementById("btn-hitung").addEventListener("click", prosesKalkulator);
document.getElementById("btn-reset").addEventListener("click", resetKalkulator);

function prosesKalkulator() {
    let input1 = document.getElementById("angka1").value;
    let input2 = document.getElementById("angka2").value;
    let pilihanMenu = document.getElementById("operasi").value;
    let komponenHasil = document.getElementById("output-hasil");

    if (input1 === "" || input2 === "") {
        komponenHasil.innerHTML = "<strong>Peringatan:</strong> Mohon isi kedua angka terlebih dahulu!";
        komponenHasil.style.borderLeftColor = "#ffc107";
        return;
    }

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    
    let hasil;
    let simbol;

    // 3. Menjalankan fungsi yang telah di-import sebelumnya
    switch (pilihanMenu) {
        case "1":
            hasil = tambah(num1, num2);
            simbol = "+";
            break;
        case "2":
            hasil = kurang(num1, num2);
            simbol = "-";
            break;
        case "3":
            hasil = kali(num1, num2);
            simbol = "*";
            break;
        case "4":
            hasil = bagi(num1, num2);
            simbol = "/";
            break;
    }

    if (typeof hasil === "string") {
        komponenHasil.innerHTML = `<strong>${hasil}</strong>`;
        komponenHasil.style.borderLeftColor = "#dc3545";
    } else {
        komponenHasil.innerHTML = `Hasil: <strong>${num1} ${simbol} ${num2} = ${hasil}</strong>`;
        komponenHasil.style.color = "#333";
        komponenHasil.style.borderLeftColor = "#28a745";
    }
}

function resetKalkulator() {
    document.getElementById("angka1").value = "";        // Kosongkan angka 1
    document.getElementById("angka2").value = "";        // Kosongkan angka 2
    document.getElementById("operasi").value = "1";       // Kembalikan menu ke pilihan pertama (Tambah)
    
    let komponenHasil = document.getElementById("output-hasil");
    komponenHasil.innerHTML = "Silahkan Masukan Angka Kembali"; // Kembalikan teks output
    komponenHasil.style.borderLeftColor = "#ff0000ff";     // Kembalikan warna border asli (Biru)
}