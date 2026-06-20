// 1. Menghitung angka genap pada indeks ganjil dari bilangan 1-20

const angka = [2, 12, 10, 19, 18, 4, 6, 17, 8, 20, 16, 15, 1, 14, 11, 5, 3, 9, 7, 13]
for (let i = 0; i <= angka.length; i++){
    if(angka[i] % 2 !== 0){
        console.log(angka[i])
    }
}