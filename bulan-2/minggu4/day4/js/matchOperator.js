export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}

export function kali(a, b) {
    return a * b;
}

export function bagi(a, b) {
    if (b === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan!";
    }
    return a / b;
}