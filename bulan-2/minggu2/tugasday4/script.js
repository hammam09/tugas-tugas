// 1. Bilangan Positif dan Negatif

let numUser = (prompt("Masukkan Angka : "));
    if (numUser > 0) {
        alert("angka ini positif")
    }
    else if (numUser < 0) {
        alert("angka ini negatif")
    }
    else {
        alert("angka ini nol") 
    }

// 2. Genap dan Ganjil

let genapGanjil = (prompt("Masukkan Angka : "));
    if (genapGanjil % 2 === 0) {
        alert("angka ini genap")
    }
    else {
        alert("angka ini ganjil")
    }

// 3. Lulus atau Tidak Lulus

let kelulusan = (prompt("Masukkan Nilai : "));
    if (kelulusan >= 75) {
        alert("Anda lulus")
    }
    else {
        alert("Anda tidak lulus")
    }

// 4. Hak memiliki SIM

let sim = (prompt("Masukkan Umur anda: "))
    if (sim >=17) {
        alert("Anda boleh memiliki SIM")
    }
    else {
        alert("Anda belum boleh memiliki SIM")
    }

// 5. Bilangan Terbesar

let bil1 = (prompt("Masukkan Bilangan : "));
let bil2 = (prompt("Masukkan Bilangan : "));
    if (bil1 > bil2 && bil1) {
        alert("Bilangan Terbesar adalah : " + bil1)
    }
    else {
        alert("Bilangan Terbesar adalah : " + bil3)
    }
