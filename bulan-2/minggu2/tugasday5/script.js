console.log("Soal nomor 1");
for (number = 1; number <= 10; number++){
    console.log("Hitungan ke : " + number);
}

console.log("Soal nomor 2");
for (number = 10; number >= 1; number--){
    console.log("Hitungan ke : " + number);
}

console.log("Soal nomor 3");
for (number = 1; number <= 20; number++){
    if(number % 2 !== 0){
    continue
}
    console.log(number);
}

console.log("Soal nomor 4");
for (number = 1; number <= 20; number++){
    if(number % 2 === 0){
    continue
}
    console.log(number);
}

console.log("Soal nomor 5");
for (let number = 1; number <= 10; number++){
    console.log(`5 * ${number} = ${5 * number}`);
}

console.log("Soal nomor 6");
for (let sum = 1; sum <= 50; sum++){
    console.log(sum + sum);
}