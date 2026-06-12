// Soal Nomor 1
console.log("Soal nomor 1");
for (number = 1; number <= 10; number++){
    console.log("Hitungan ke : " + number);
}

// Soal Nomor 2
console.log("Soal nomor 2");
for (number = 10; number >= 1; number--){
    console.log("Hitungan ke : " + number);
}

// Soal Noomor 3
console.log("Soal nomor 3");
for (number = 1; number <= 20; number++){
    if(number % 2 !== 0){
    continue
}
    console.log(number);
}

// Soal Nomor 4
console.log("Soal nomor 4");
for (number = 1; number <= 20; number++){
    if(number % 2 === 0){
    continue
}
    console.log(number);
}

// Soal Nomor 5
console.log("Soal nomor 5");
for (let number = 1; number <= 10; number++){
    console.log(`5 * ${number} = ${5 * number}`);
}

// Soal Nomor 6
console.log("Soal nomor 6");
let hasil = 0;
for (let sum = 1; sum <= 50; sum++){
    hasil += sum;
}
console.log(hasil);