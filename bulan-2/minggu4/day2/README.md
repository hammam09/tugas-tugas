# JavaScript Advanced Topics - Day 2

## Deskripsi

File ini berisi 5 soal JavaScript yang mendemonstrasikan konsep-konsep lanjutan seperti:

- Array methods (filter, map, reduce)
- Encapsulation & Closure
- Spread operator & Rest parameters
- Symbol.iterator & Iterable
- Function Hoisting

---

## Soal-Soal

### 1. Event Log Processor

**Konsep:** Array methods (filter, map, reduce), Date handling

Memproses log event dengan format `ACTION|USER|DATE`:

- Membersihkan data (hapus null/undefined/invalid)
- Menghitung login count per user
- Mencari unique users
- Menemukan oldest & newest log

**Output:**

```
{
  totalValidLogs: 4,
  uniqueUsers: ['andi', 'budi', 'nopal'],
  loginCount: { andi: 1, budi: 1, nopal: 1 },
  oldestLog: Date,
  newestLog: Date
}
```

---

### 2. Secret Wallet System

**Konsep:** Encapsulation, Closure, Data Privacy

Sistem wallet dengan balance yang tersembunyi (private):

- `deposit(amount)` - Menambah saldo
- `withdraw(amount)` - Mengurangi saldo (cek saldo cukup)
- `balance()` - Cek saldo saat ini
- `history()` - Lihat riwayat transaksi

**Keamanan:** Balance tidak bisa diakses/dimodifikasi langsung dari luar.

---

### 3. Employee Payroll Generator

**Konsep:** Rest parameters, Spread operator, Array sorting, Reduce

Membuat laporan gaji karyawan:

- Menghitung total gaji (basic + allowance)
- Total pengeluaran perusahaan
- Karyawan dengan gaji tertinggi & terendah

**Input:** Variadic parameters `...employees`

**Output:**

```
{
  payrollList: [...],
  totalCompanyExpense: number,
  highestPaid: { name, totalSalary },
  lowestPaid: { name, totalSalary }
}
```

---

### 4. Smart Collection Inspector

**Konsep:** Symbol.iterator, Iterable checking, Type inspection

Menginspeksi berbagai tipe data:

- Cek apakah data iterable atau non-iterable
- Menghitung jumlah item
- Mengidentifikasi tipe: String, Array, Set, Map, Object, Number

**Output:**

```
{
  type: "Iterable" | "Non-iterable",
  itemCount: number,
  firstItem: any,
  lastItem: any,
  keys?: [...],
  message?: string
}
```

---

### 5. Employee Access Tracker

**Konsep:** Encapsulation, Closure, Function Hoisting, Data Privacy

Melacak akses karyawan masuk:

- `enter(name)` - Catat karyawan masuk
- `report()` - Laporan statistik akses
- `lastVisit(name)` - Waktu kunjungan terakhir

**Fitur:**

- Menghitung frekuensi entry per karyawan
- Menemukan visitor paling sering
- Menyimpan history timestamp

---

## Cara Menjalankan

```bash
node script.js
```

Akan menampilkan output dari kelima soal dengan daftar "=== Soal Nomor X ===" di setiap bagian.

---

## Konsep Kunci yang Dipelajari

| Konsep                          | Digunakan di Soal |
| ------------------------------- | ----------------- |
| `filter()`, `map()`, `reduce()` | 1, 3              |
| Closure & Encapsulation         | 2, 5              |
| Spread operator `...`           | 3, 4              |
| Rest parameters `...args`       | 3                 |
| `Symbol.iterator`               | 4                 |
| Function Hoisting               | 5                 |
| `Object.keys()`, `Array.from()` | 4                 |
| Date manipulation               | 1                 |

---

## Catatan Penting

✅ Data Private: Menggunakan closure untuk menyembunyikan data sensitif (balance, accessData)

✅ Data Immutability: Mengembalikan copy data (`[...array]`, `{...object}`) untuk mencegah modifikasi eksternal

✅ Input Validation: Cek tipe data dan format sebelum processing

✅ Error Handling: Cek kondisi edge case (null, undefined, invalid format)
