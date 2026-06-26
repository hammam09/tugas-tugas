const API = "https://equran.id/api/v2/surat";
let dataSurat = [];

// DATA LENGKAP AKURAT: Pemetaan Awal Juz & Halaman untuk Seluruh 114 Surat
const mapping = {
  1: { j: "1", p: "1" },
  2: { j: "1-3", p: "2" },
  3: { j: "3-4", p: "50" },
  4: { j: "4-6", p: "77" },
  5: { j: "6-7", p: "106" },
  6: { j: "7-8", p: "128" },
  7: { j: "8-9", p: "151" },
  8: { j: "9-10", p: "177" },
  9: { j: "10-11", p: "187" },
  10: { j: "11", p: "208" },
  11: { j: "11-12", p: "221" },
  12: { j: "12-13", p: "235" },
  13: { j: "13", p: "249" },
  14: { j: "13", p: "255" },
  15: { j: "14", p: "262" },
  16: { j: "14", p: "267" },
  17: { j: "15", p: "282" },
  18: { j: "15-16", p: "293" },
  19: { j: "16", p: "305" },
  20: { j: "16", p: "312" },
  21: { j: "17", p: "322" },
  22: { j: "17", p: "332" },
  23: { j: "18", p: "342" },
  24: { j: "18", p: "350" },
  25: { j: "18-19", p: "359" },
  26: { j: "19", p: "367" },
  27: { j: "19-20", p: "377" },
  28: { j: "20", p: "385" },
  29: { j: "20-21", p: "396" },
  30: { j: "21", p: "404" },
  31: { j: "21", p: "411" },
  32: { j: "21", p: "415" },
  33: { j: "21-22", p: "418" },
  34: { j: "22", p: "428" },
  35: { j: "22", p: "434" },
  36: { j: "22-23", p: "440" },
  37: { j: "23", p: "446" },
  38: { j: "23", p: "453" },
  39: { j: "23-24", p: "458" },
  40: { j: "24", p: "467" },
  41: { j: "24-25", p: "477" },
  42: { j: "25", p: "483" },
  43: { j: "25", p: "489" },
  44: { j: "25", p: "496" },
  45: { j: "25", p: "499" },
  46: { j: "26", p: "502" },
  47: { j: "26", p: "507" },
  48: { j: "26", p: "511" },
  49: { j: "26", p: "515" },
  50: { j: "26", p: "518" },
  51: { j: "26-27", p: "520" },
  52: { j: "27", p: "523" },
  53: { j: "27", p: "526" },
  54: { j: "27", p: "528" },
  55: { j: "27", p: "531" },
  56: { j: "27", p: "534" },
  57: { j: "27", p: "537" },
  58: { j: "28", p: "542" },
  59: { j: "28", p: "545" },
  60: { j: "28", p: "549" },
  61: { j: "28", p: "551" },
  62: { j: "28", p: "553" },
  63: { j: "28", p: "554" },
  64: { j: "28", p: "556" },
  65: { j: "28", p: "558" },
  66: { j: "28", p: "560" },
  67: { j: "29", p: "562" },
  68: { j: "29", p: "564" },
  69: { j: "29", p: "566" },
  70: { j: "29", p: "568" },
  71: { j: "29", p: "570" },
  72: { j: "29", p: "572" },
  73: { j: "29", p: "574" },
  74: { j: "29", p: "575" },
  75: { j: "29", p: "577" },
  76: { j: "29", p: "578" },
  77: { j: "29", p: "580" },
  78: { j: "30", p: "582" },
  79: { j: "30", p: "583" },
  80: { j: "30", p: "585" },
  81: { j: "30", p: "586" },
  82: { j: "30", p: "587" },
  83: { j: "30", p: "587" },
  84: { j: "30", p: "589" },
  85: { j: "30", p: "589" },
  86: { j: "30", p: "591" },
  87: { j: "30", p: "591" },
  88: { j: "30", p: "592" },
  89: { j: "30", p: "593" },
  90: { j: "30", p: "594" },
  91: { j: "30", p: "595" },
  92: { j: "30", p: "595" },
  93: { j: "30", p: "596" },
  94: { j: "30", p: "596" },
  95: { j: "30", p: "597" },
  96: { j: "30", p: "597" },
  97: { j: "30", p: "598" },
  98: { j: "30", p: "598" },
  99: { j: "30", p: "599" },
  100: { j: "30", p: "599" },
  101: { j: "30", p: "600" },
  102: { j: "30", p: "600" },
  103: { j: "30", p: "601" },
  104: { j: "30", p: "601" },
  105: { j: "30", p: "601" },
  106: { j: "30", p: "602" },
  107: { j: "30", p: "602" },
  108: { j: "30", p: "602" },
  109: { j: "30", p: "603" },
  110: { j: "30", p: "603" },
  111: { j: "30", p: "603" },
  112: { j: "30", p: "604" },
  113: { j: "30", p: "604" },
  114: { j: "30", p: "604" },
};

window.onload = async () => {
  try {
    const res = await fetch(API);
    const json = await res.json();
    dataSurat = json.data;
    document.getElementById("list").innerHTML = dataSurat
      .map((s) => `<option value="${s.nomor}">Surat ${s.namaLatin}</option>`)
      .join("");
    tampilRiwayat();
  } catch {
    alert("Gagal memuat data API.");
  }
};

function cari() {
  const error = document.getElementById("error");
  let val = document.getElementById("input").value.trim().toLowerCase();
  error.classList.add("hidden");

  if (!val) return;

  // NORMALISASI: Hapus kata depan "surat " jika pengguna mengetiknya
  if (val.startsWith("surat ")) {
    val = val.replace("surat ", "").trim();
  }

  // Cari data berdasarkan nomor surat ATAU nama latin yang sudah dinormalisasi
  let target = dataSurat.find((s) => {
    const namaSuratApi = s.namaLatin.toLowerCase().replace(/['-]/g, ""); // bersihkan tanda petik/strip dari data API
    const inputUser = val.replace(/['-]/g, ""); // bersihkan tanda petik/strip dari input user

    return s.nomor == val || namaSuratApi.includes(inputUser);
  });

  if (!target) {
    error.textContent =
      "Surat tidak ditemukan. Masukkan nomor 1-114 atau nama surat dengan benar.";
    error.classList.remove("hidden");
    return;
  }

  render(target);
}
function render(s) {
  document.getElementById("result").classList.remove("hidden");
  const infoMap = mapping[s.nomor];

  document.getElementById("tbody").innerHTML = `
                <tr>
                    <td class="p-3 text-left font-bold text-emerald-700">${s.namaLatin} <span class="text-xs text-gray-400 font-normal">(${s.nama})</span></td>
                    <td class="p-3">${s.jumlahAyat}</td>
                    <td class="p-3 text-xs"><span class="bg-gray-100 px-2 py-0.5 rounded">Juz ${infoMap.j}</span></td>
                    <td class="p-3 font-bold text-gray-600">Hal. ${infoMap.p}</td>
                </tr>`;

  simpanRiwayat(s.nomor, s.namaLatin);
}

function simpanRiwayat(nomor, nama) {
  let h = JSON.parse(localStorage.getItem("q_hist")) || [];
  h = h.filter((x) => x.nomor !== nomor);
  h.unshift({ nomor, nama });
  localStorage.setItem("q_hist", JSON.stringify(h.slice(0, 4)));
  tampilRiwayat();
}

function hapusSatuRiwayat(nomor) {
  let h = JSON.parse(localStorage.getItem("q_hist")) || [];
  h = h.filter((x) => x.nomor !== nomor);
  localStorage.setItem("q_hist", JSON.stringify(h));
  tampilRiwayat();
}

function hapusSemuaRiwayat() {
  localStorage.removeItem("q_hist");
  tampilRiwayat();
}

function tampilRiwayat() {
  const h = JSON.parse(localStorage.getItem("q_hist")) || [];
  const container = document.getElementById("history");
  const clearAllBtn = document.getElementById("clear-all");

  if (h.length) {
    clearAllBtn.classList.remove("hidden");
    container.innerHTML = h
      .map(
        (x) => `
                    <span class="inline-flex items-center bg-gray-200 rounded text-gray-700 overflow-hidden text-[11px]">
                        <button onclick="document.getElementById('input').value='${x.nomor}'; cari();" 
                                class="px-2 py-0.5 hover:bg-emerald-100 hover:text-emerald-700 transition font-medium cursor-pointer">
                            ${x.nama}
                        </button>
                        <button onclick="hapusSatuRiwayat(${x.nomor})" 
                                class="px-1.5 py-0.5 text-gray-400 hover:bg-red-500 hover:text-white transition font-bold cursor-pointer border-l border-gray-300">
                            &times;
                        </button>
                    </span>
                `,
      )
      .join("");
  } else {
    clearAllBtn.classList.add("hidden");
    container.innerHTML = '<span class="italic text-gray-400">Kosong</span>';
  }
}
