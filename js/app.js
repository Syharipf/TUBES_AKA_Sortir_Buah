/* =========================
   STATE
========================= */
let pesanan = [];

/* =========================
   AMBIL ELEMENT DOM
========================= */
const buahSelect = document.getElementById("buah");
const beratInput = document.getElementById("berat");
const tambahBtn = document.getElementById("tambahBtn");
const hitungBtn = document.getElementById("hitungBtn");
const resetBtn = document.getElementById("resetBtn");

const algoritmaSelect = document.getElementById("algoritma");
const hasilBox = document.getElementById("hasil");
const daftarPesananEl = document.getElementById("daftarPesanan");

/* =========================
   MODEL
========================= */

// Tambah pesanan
function tambahPesanan(buah, berat) {
  if (!buah || berat <= 0) return;
  pesanan.push({ buah, berat });
}

// Hapus pesanan
function hapusPesanan(index) {
  pesanan.splice(index, 1);
  renderPesanan();
}

// Clone array (aman untuk sorting)
function clonePesanan(arr) {
  return arr.map(item => ({ ...item }));
}

// Hitung total harga
function hitungTotalHarga(arr) {
  return arr.reduce(
    (total, item) => total + hargaBuah[item.buah] * item.berat,
    0
  );
}

// Simpan ke localStorage (UNTUK DISPLAY PAGE)
function simpanKeStorage(data, metode) {
  localStorage.setItem("pesanan", JSON.stringify(data));
  localStorage.setItem("algoritma", metode);
}

/* =========================
   VIEW
========================= */

// Render daftar pesanan
function renderPesanan() {
  daftarPesananEl.innerHTML = "";

  if (pesanan.length === 0) {
    daftarPesananEl.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;color:#777;">
          Belum ada pesanan
        </td>
      </tr>
    `;
    return;
  }

  pesanan.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${capitalize(item.buah)}</td>
      <td>${item.berat.toFixed(2)}</td>
      <td>
        <button data-index="${index}">Hapus</button>
      </td>
    `;
    daftarPesananEl.appendChild(tr);
  });

  daftarPesananEl.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      hapusPesanan(parseInt(e.target.dataset.index));
    });
  });
}

/* =========================
   CONTROLLER
========================= */

// Hitung + Sort + Simpan
function hitungDanSort() {
  if (pesanan.length === 0) {
    hasilBox.textContent = "Tambahkan minimal satu pesanan";
    return;
  }

  const metode = algoritmaSelect.value;
  const data = clonePesanan(pesanan);

  const start = performance.now();
  const sorted =
    metode === "rekursif"
      ? mergeSortRekursif(data)
      : mergeSortIteratif(data);
  const end = performance.now();

  const totalHarga = hitungTotalHarga(sorted);

  hasilBox.innerHTML = `
    Total Harga: Rp ${totalHarga.toLocaleString("id-ID")} <br>
    Algoritma: Merge Sort (${metode}) <br>
    Waktu Eksekusi: ${(end - start).toFixed(4)} ms
  `;

  // SIMPAN UNTUK DISPLAY.HTML
  simpanKeStorage(sorted, metode);
}

/* =========================
   EVENT LISTENER
========================= */

// Tambah
tambahBtn.addEventListener("click", () => {
  tambahPesanan(
    buahSelect.value,
    parseFloat(beratInput.value)
  );

  buahSelect.value = "";
  beratInput.value = "";

  renderPesanan();
});

// Hitung
hitungBtn.addEventListener("click", hitungDanSort);

// Reset
resetBtn.addEventListener("click", () => {
  pesanan = [];
  hasilBox.textContent = "Silakan tambahkan pesanan";
  renderPesanan();
  localStorage.clear();
});

/* =========================
   INIT
========================= */
renderPesanan();
